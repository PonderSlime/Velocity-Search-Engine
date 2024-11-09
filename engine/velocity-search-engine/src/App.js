import React, { useEffect } from "react";
import './App.css';
import logo from './assets/Logo-highres.png'

function App() {
    const searchEngineId = 'a0f6e0ed814524b01'
    useEffect(() => {
        const script = document.createElement('script')
        script.src = `https://cse.google.com/cse.js?cx=${searchEngineId}`
        script.async = true;

        document.body.appendChild(script)
        document.title = "Velocity Search Engine"
        
        return () => {
            document.body.removeChild(script)
        };
    }, [searchEngineId])

    return (
        <div className="App App-header">
            <img src={logo} alt="logo" className="Logo"/>
            <div class="gcse-search"></div>
        </div>
    );
};

export default App;