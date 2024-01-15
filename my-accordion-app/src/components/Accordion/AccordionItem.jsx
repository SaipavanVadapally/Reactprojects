// src/components/Accordion/AccordionItem.jsx
import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-item">
            <button className="accordion-toggle" onClick={() => setIsOpen(!isOpen)}>
                {title}
            </button>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default AccordionItem;
