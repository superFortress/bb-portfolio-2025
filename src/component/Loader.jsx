/* I M P O R T
* * * * * * */

// Asset
import image from '../asset/image';

// Module
import { useEffect } from 'react';

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

export default function Loader() {

    // F U N C T I O N

    const loadImages = (pathArray) => {
        pathArray.forEach((path) => {
            const image = new Image();
            image.src = path;
        });
    };

    // E F F E C T

    // Load portfolio thumbnails
    useEffect(() => {
        const pathArray = Object.values(image.portfolio);
        loadImages(pathArray);
    }, []);
    
}