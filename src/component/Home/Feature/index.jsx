/* I M P O R T
* * * * * * */

// Asset
import image from '../../../asset/image';
import vector from '../../../asset/vector';

// Element
import Matter from './Matter';

// Function
import useClient from '../../../function/hook/useClient';
import useLayoutObserver from '../../../function/hook/useLayoutObserver';

// Module
import { useRef, useState } from 'react';

/* S T A T I C
* * * * * * */

const colorArray = [
    'var(--color-gray5)',
    'var(--color-coral)',
    'var(--color-lemon)',
    'var(--color-azure)',
    'var(--color-grape)',
    'var(--color-fairy)'
];

const titleArray = [
    { key: 'P', group: 0x2, angle: 0, x: 5.9, y: 21.6, width: 80, height: 101 },
    { key: 'U', group: 0x2, angle: 0, x: 18, y: 26.4, width: 73, height: 72 },
    { key: 'T', group: 0x2, angle: 0, x: 26.7, y: 23.3, width: 39, height: 91 },
    { key: 'Y', group: 0x2, angle: 18, x: 39.4, y: 18.3, width: 72, height: 104 },
    { key: 'O', group: 0x2, angle: 18, x: 49.4, y: 19.7, width: 66, height: 73 },
    { key: 'U', group: 0x2, angle: 18, x: 59.5, y: 26.7, width: 73, height: 72 },
    { key: 'R', group: 0x2, angle: 18, x: 69.3, y: 33, width: 55, height: 72 },
    { key: 'S', group: 0x4, angle: -14, x: 7, y: 66.1, width: 57, height: 72 },
    { key: 'T', group: 0x4, angle: -14, x: 14, y: 59.8, width: 39, height: 91 },
    { key: 'O', group: 0x4, angle: -14, x: 22.1, y: 58.5, width: 66, height: 73 },
    { key: 'R', group: 0x4, angle: -14, x: 31.3, y: 53.6, width: 55, height: 72 },
    { key: 'Y', group: 0x4, angle: -14, x: 41.6, y: 53.5, width: 72, height: 104 },
    { key: 'I', group: 0x4, angle: 0, x: 50.7, y: 54.8, width: 32, height: 97 },
    { key: 'N', group: 0x4, angle: 0, x: 59.2, y: 58.7, width: 73, height: 72 },
    { key: 'M', group: 0x8, angle: 0, x: 47.9, y: 88.8, width: 115, height: 72 },
    { key: 'O', group: 0x8, angle: 0, x: 61.8, y: 89, width: 66, height: 73 },
    { key: 'T', group: 0x8, angle: 0, x: 69.8, y: 86.3, width: 39, height: 91 },
    { key: 'I', group: 0x8, angle: 0, x: 76, y: 84.9, width: 32, height: 97 },
    { key: 'O', group: 0x8, angle: 0, x: 83.8, y: 89, width: 66, height: 73 },
    { key: 'N', group: 0x8, angle: 0, x: 94.6, y: 88.8, width: 73, height: 72 }
];

/* E X P O R T
* * * * * * */

export default function Feature() {

    // A S S I G N

    // Reference
    const bannerRef = useRef(null);
    const parentRef = useRef(null);

    // State
    const [bannerFrame, setBannerFrame] = useState({ width: 0, height: 0 });
    const [bannerPoint, setBannerPoint] = useState({ x: 0, y: 0 });
    const [canvasFrame, setCanvasFrame] = useState({ width: 0, height: 0 });

    // E F F E C T

    // Observe banner
    useLayoutObserver(bannerRef, (_, banner) => {
        const { width } = banner;
        const height = width * (33 / 68);
        const x = banner.x - banner.width / 2;
        const y = banner.y - banner.height / 2;
        setBannerFrame({ width, height });
        setBannerPoint({ x, y });
    }, 50);

    // Observe canvas
    useLayoutObserver(parentRef, (_, parent) => {
        const { width, height } = parent;
        setCanvasFrame({ width, height });
    }, 50);

    // Observe viewport
    const client = useClient(null, 50);

    // R E T U R N

    return <div className="home-feature" ref={parentRef}>

        {/* Banner */}

        <div className="home-feature__banner" ref={bannerRef}>
            <div className="home-feature__banner-head">
                <img src={image.home.title} />
            </div>
            <div className="rule" />
            <div className="home-feature__banner-info">
                {client.onDesktop && <p>Hi, my name is Boriz. I'm a <span>creative producer</span> who lives and works near Amsterdam. Nice to meet you!</p>}
                {client.onMobile && <p>I'm Boriz, a <span>creative producer</span> from Amsterdam. Nice to meet you!</p>}
            </div>
            <div className="home-feature__banner-menu">
                <ul>
                    <li>
                        <a className="button--big" href="#showreel">
                            <vector.icon.star />
                            <span>Showreel</span>
                        </a>
                    </li>
                    <li>
                        <a className="button--big" href="#home-service">
                            <vector.icon.shapes />
                            <span>Services</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        {/* Matter */}

        <Matter
            // Element
            colorArray={colorArray}
            titleArray={titleArray}
            // Geometry
            bannerFrame={bannerFrame}
            bannerPoint={bannerPoint}
            canvasFrame={canvasFrame}
            client={client}
        />

    </div>;

}