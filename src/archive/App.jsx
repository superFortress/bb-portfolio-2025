/* I M P O R T
* * * * * * */

// Component
import Footer from './Footer';
import Header from './Header';
import Router from './Router';

// Context
import { useAboutContext } from '../context/About';

// Element
import Logo from '../element/Logo';

// Modal
import Contact from '../modal/Contact';
import Portfolio from '../modal/Portfolio';
import Showreel from '../modal/Showreel';

// Style
// ... App
import '../style/app/Button.css';
import '../style/app/Font.css';
import '../style/app/Footer.css';
import '../style/app/Header.css';
import '../style/app/Root.css';
import '../style/app/Type.css';
// ... Component
import '../style/component/HomeFeature.css';
import '../style/component/HomeService.css';
import '../style/component/Project.css';
// ... Element
import '../style/element/Carousel.css';
import '../style/element/Credits.css';
import '../style/element/Gallery.css';
import '../style/element/Modal.css';
import '../style/element/Quote.css';
import '../style/element/Video.css';
// ... Modal
import '../style/modal/Contact.css';
import '../style/modal/Portfolio.css';
import '../style/modal/PortfolioGrid.css';
import '../style/modal/PortfolioMenu.css';
import '../style/modal/Showreel.css';
// ... Variable
import '../style/variable/Color.css';
import '../style/variable/Order.css';
import '../style/variable/Scale.css';

/* E X P O R T
* * * * * * */

export default function App() {

    // A S S I G N

    // Variable
    const route = useAboutContext().about.title;
    const title = `Boriz • ${route || 'Animator'}`;

    // R E T U R N

    return <div id="app">

        {/* Title */}

        <title>{title}</title>
        <Logo />

        {/* Body */}
        
        <Header />
        <Router />
        <Footer />

        {/* Modal */}

        <Contact />
        <Portfolio />
        <Showreel />

    </div>;

}