import React, { useState } from 'react';

import { Header } from '../src/components/Header/Header';
import { MainContent } from '../src/components/mainContent/mainContent';

import './App.scss';

function App() {

    const [img, setImg] = useState<string>('');

    return (
        <div className="App">
            <Header setImg={setImg} />
            <MainContent />
        </div>
    );
}

export default App;
