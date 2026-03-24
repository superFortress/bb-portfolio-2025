/* I M P O R T
* * * * * * */

// Module
import { createContext, useContext, useState } from 'react';

/* E X P O R T
* * * * * * */

// Create context

const AboutContext = createContext(null);

// Export context

export function useAboutContext() {
    const value = useContext(AboutContext);
    if (!value) throw new Error('Add <AboutProvider> to your app.');
    return value;
}

// 03. Export provider

export const AboutProvider = (props) => {

    // A S S E T S

    // Variable
    const defaultAbout = {
        author: 'Boriz Baatsen',
        tagline: 'Website proudly designed and built by me.',
        title: 'Home',
        version: 'v1.0',
        year: new Date().getFullYear()
    };

    // State
    const [about, set] = useState(defaultAbout);
    const setAbout = (state = {}) => set({ ...defaultAbout, ...state });

    // R E T U R N

    return <AboutContext.Provider value={{ about, setAbout }}>
        {props.children}
    </AboutContext.Provider>;

};