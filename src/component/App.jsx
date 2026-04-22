/* I M P O R T
* * * * * * */

// Component
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';
import Router from './Router';

// Context
import { useAboutContext } from '../context/About';

// Element
import Logo from '../element/Logo';

/* E X P O R T
* * * * * * */

export default function App() {

    // A S S I G N

    // Variable
    const route = useAboutContext().about.title;
    const title = `Boriz • ${route || 'Animator'}`;

    // R E T U R N

    return <div id="app">

        {/* Head */}

        <title>{title}</title>
        <Logo />

        {/* Body */}
        
        <Header />
        <Router />
        <Footer />

        {/* Meta */}

        <Loader />

    </div>;

}