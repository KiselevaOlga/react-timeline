import React from 'react';
import { useState, useEffect} from 'react';
import {TimelineItem} from './TimelineItem';
import './Timeline.css';
import getData from '../helpers/getData';

// oddity varible helps to keep logic, so our items on the same place on right or left
let oddity = true;


export const Timeline = () => {
    // initialize state to iterate over items in return 
    const [items, setItems] = useState([]);      
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
            oddity = !oddity;
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
                }, 1000*i);                      
            }
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    },[])   

    if (loading) {
        return <div>Loading</div>;
    }

    if (error) {
        return <div>{ error }</div>; // put image 'sorry something went wrong'
    }

    return (
        <section className="main-container">
            {items && items.map((item) => {  
                // if we iterate over the list in react we need to pass unique key to each component
                return (<TimelineItem data={item} oddity={oddity} key={item.title}/>)
            })}
        </section>
    )
}
