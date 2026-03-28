/* I M P O R T
* * * * * * */

// Context
import { useAboutContext } from '../context/About';
import { useStyleContext } from '../context/Style';

// Library
import routeArray from '../library/routeArray';

// Module
import { Suspense, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';

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

    // R E T U R N

    return <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            {useMemo(() => routeArray.map((entry) => (
                <Route
                    key={entry.route}
                    path={entry.route}
                    element={
                        <motion.main>
                            <Suspense fallback={null}>
                                <entry.child about={entry.about} />
                            </Suspense>
                        </motion.main>
                    }>
                </Route>
            )), [routeArray])}
        </Routes>
    </AnimatePresence>;

}