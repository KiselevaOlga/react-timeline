import React from 'react';
import { useState, useEffect} from 'react';
import {TimelineItem} from './TimelineItem';
import getData from '../helpers/getData';

export const Timeline = () => {
    const [items, setItems] = useState([]);

    const myFunc =(item)=>{
        setItems(olditems=> {
            let newList = olditems
            if(newList.length > 2){
                newList.shift()
            }
            return [...newList, item]
        });
    }

    useEffect(()=>{
        getData()
        .then(listResponse => {
            for(let i = 0; i < listResponse.length; i++){
                setTimeout(() => {
                    myFunc(listResponse[i])
                }, 2000*i);
            }
        })
    },[])   

    return (
        <div>
            <p>I am Timeline</p>
            {items && items.map((item, index) => {
                return (<TimelineItem data={item} key={index}/>)
            })}
        </div>
    )
}