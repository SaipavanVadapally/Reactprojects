// src/App.jsx
import React from 'react';
import Accordion from './components/Accordion/Accordion.jsx';

const accordionData = [
    { title: 'Who is Indian Prime Minister', content: 'Narendra Modi' },
    { title: 'Telangana CheifMinister Name', content: 'Revanth reddy' },
    // Add more sections as needed
];

function App() {
    return (
        <div className="App">
            <Accordion data={accordionData} />
        </div>
    );
}

export default App;
