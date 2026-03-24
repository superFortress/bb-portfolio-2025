/* I M P O R T
* * * * * * */

// Module
import { createContext, useContext, useEffect, useState } from 'react';

/* E X P O R T
* * * * * * */

// Create context

const StyleContext = createContext(null);

// Export context

export function useStyleContext() {
    const value = useContext(StyleContext);
    if (!value) throw new Error('Add <StyleProvider> to your app.');
    return value;
}

// Export provider

export function StyleProvider(props) {

    // A S S E T S

    // Variable
    const storageStyle = localStorage.getItem('style-css');
    const defaultStyle = storageStyle || ``;

    // State
    const [style, set] = useState(defaultStyle);
    const setStyle = (style = defaultStyle) => set(style);

    // E F F E C T

    // Append style from local storage
    useEffect(() => {
        let elem = document.getElementById('style-css');
        if (!elem) {
            elem = document.createElement('style');
            elem.id = 'style-css';
            document.head.appendChild(elem);
        }
        elem.textContent = `:root{${style}}`;
        localStorage.setItem('style-css', style);
    }, [style]);

    // R E T U R N

    return <StyleContext.Provider value={{ style, setStyle }}>
        {props.children}
    </StyleContext.Provider>;

}