// src/components/Accordion/Accordion.jsx
import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
    return (
        <div>
            {data.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default Accordion;
