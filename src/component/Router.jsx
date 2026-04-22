/* I M P O R T
* * * * * * */

// Context
import { useAboutContext } from '../context/About';
import { useStyleContext } from '../context/Style';

// Library
import routeArray from '../library/routeArray';

// Module
import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';

/* B U F F E R
* * * * * * */

const Contact = lazy(() => import('../modal/Contact'));
const Portfolio = lazy(() => import('../modal/Portfolio'));
const Showreel = lazy(() => import('../modal/Showreel'));

/* S T A T I C
* * * * * * */

const routeStore = routeArray.reduce((object, entry) => {
    const key = entry.route;
    object[key] = { about: entry.about, style: entry.style };
    return object;
}, {});

/* E X P O R T
* * * * * * */

export default function Router() {

    // A S S I G N

    // Context
    const { setAbout } = useAboutContext();
    const { setStyle } = useStyleContext();

    // State
    const [hash, setHash] = useState(false);

    // Variable
    const location = useLocation();

    // E F F E C T

    // Update context
    useEffect(() => {
        const route = location.pathname;
        const entry = routeStore[route] || routeStore['/'];
        setAbout(entry.about);
        setStyle(entry.style);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    // Update URL hash
    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash) setHash(hash);
        else setTimeout(() => setHash(hash), 300);
    }, [location.hash]);

    // R E T U R N

    return <>

        {/* Modals */}

        <Suspense fallback={null}>
            {hash === 'contact' && <Contact />}
            {hash === 'portfolio' && <Portfolio />}
            {hash === 'showreel' && <Showreel />}
        </Suspense>

        {/* Routes */}

        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {useMemo(() => routeArray.map((entry) => (
                    <Route
                        key={entry.route}
                        path={entry.route}
                        element={
                            <motion.main
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        delay: 0.75,
                                        duration: 0.6,
                                        ease: 'easeOut'
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        delay: 0.25,
                                        duration: 0.4,
                                        ease: [0.5, 0.1, 0.8, 0.8]
                                    }
                                }}
                            >
                                <Suspense fallback={null}>
                                    <entry.child about={entry.about} />
                                </Suspense>
                            </motion.main>
                        }>
                    </Route>
                )), [routeArray])}
            </Routes>
        </AnimatePresence>

    </>;

}