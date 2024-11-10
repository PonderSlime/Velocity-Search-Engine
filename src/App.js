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

        script.onload = () => {
            const iframe = document.querySelector('.gsc-results iframe');
            if (iframe) {
                const style = document.createElement('style');
                style.textContent = `
                    .gsc-webResult { color: #4feb34 !important; background-color: #4feb34 !important; border-radius: 100px !important;}
                `;
                iframe.contentDocument.head.appendChild(style);
            }
        }
        
        return () => {
            document.body.removeChild(script)
        };
    }, [searchEngineId])

    return (
        <div className="App App-header">
            <img src={logo} alt="logo" className="Logo"/>
            <div className="gcse-search"></div> {/* Changed class to className */}
        </div>
    );
};

export default App;