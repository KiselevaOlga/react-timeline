import React from 'react';
import { useState, useEffect } from 'react';
// import oddity from './Timeline';

export const TimelineItem = ({data, oddity}) => {
    const {title, date, description} = data;
    const [myClassName, setClassName] = useState("");

    useEffect(()=>{
        if(oddity){
            setClassName("item-holder-odd")
        } else {
            setClassName("item-holder-even")
        }
    }, []);
    return (
        <article className={`item-holder ${myClassName}`}>
            <header className="item-header">
                <time className="item-time">{date}</time>
                <h4 className="small-header">{title}</h4>
            </header>
            <div className="item-info">
                <p className="item-description">{description}</p>
            </div>
            <a href='#' className="more-info"><span>Read more</span></a>
        </article>
    )
}