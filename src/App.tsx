import React from 'react';

import { Header } from '../src/components/Header/Header';
import { MainContent } from '../src/components/mainContent/mainContent';

import './App.scss';

function App() {
    return (
        <div className="App">
            <Header/>
            <MainContent/>
        </div>
    );
}

export default App;
