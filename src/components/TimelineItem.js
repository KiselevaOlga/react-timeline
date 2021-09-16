import React from 'react';
// import { useState, useEffect } from 'react';

export const TimelineItem = ({data}) => {

    return (
        <div>
            <p>{data.title}</p>
            <p>{data.date}</p>
            <p>{data.description}</p>
        </div>
    )
}