/* I M P O R T
* * * * * * */

// Component
import App from './component/App';

// Context
import { AboutProvider } from './context/About';
import { StyleProvider } from './context/Style';

// Module
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

/* E X P O R T
* * * * * * */

createRoot(document.getElementById('root')).render(
    //<StrictMode>
        <BrowserRouter>
            <AboutProvider>
                <StyleProvider>
                    <App />
                </StyleProvider>
            </AboutProvider>
        </BrowserRouter>
    //</StrictMode>
);