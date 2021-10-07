import React from 'react';
import { useState, useEffect, useRef} from 'react';
import {TimelineItem} from './TimelineItem';
import './Timeline.css';
import getData from '../helpers/getData';


export const Timeline = () => {
    // initialize state to iterate over items in return 
    const [items, setItems] = useState([]);
    // oddity varible helps to keep logic for classnames, so our items stay on the same place on right or left
    const oddity = useRef(true);      
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    
    const addElement = (item) => {
        setItems(prevItemsList => {
            //since we cannot mutate our state directly, I created copy of array of items
            let newItemsList = prevItemsList;   
            if(newItemsList.length > 4 ){ 
                // to show on the page only 5 elements at a time
                newItemsList.pop();
            }
            // each time oddity changes to pass different classNames in TimelineItem
            // oddity = !oddity;
            oddity.current = !oddity.current;
            // update state by appending new item to the head of the list
            return [item, ...newItemsList]     
        });
    }

    useEffect(()=>{
        getData()
        .then(listResponse => {
            for(let i = 0; i < listResponse.length; i++){
                setTimeout(() => {
                    addElement(listResponse[i])
                // each new element will be shown after 20 seconds after previous element    
                }, 2000*i);                      
            }
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    },[])   

    if (loading) {
        return (
        <div className="load-container">
            <h2>Loading</h2>
        </div>);
    }

    if (error) {
        return(
        <div className="error-container">
            <h2>Oops, something went wrong</h2>
            <p>{ error }</p>
        </div>) ; 
    }

    return (
        <section className="main-container">
            {items && items.map((item) => {  
                // if we iterate over the list in react we need to pass unique key to each component
                return (<TimelineItem data={item} oddity={oddity.current} key={item.title}/>)
            })}
        </section>
    )
}
