import React from 'react';
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';

export const TimelineItem = ({data, oddity}) => {
    const {title, date, description} = data;
    const [myClassName, setClassName] = useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // sets different className for styling items in two columns  
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
            <a href='#' className="more-info" onClick={handleOpen}><span>Read more</span></a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className = "item-modal"
            >
                <p>{description}</p>
            </Modal>
        </article>
    )
}