/* I M P O R T
* * * * * * */

// Asset
import image from '../../../asset/image';
import vector from '../../../asset/vector';

// Component
import Matter from './Matter';

// Function
import getOffset from '../../../function/scale/getOffset';
import useClient from '../../../function/hook/useClient';
import useLayoutObserver from '../../../function/hook/useLayoutObserver';

// Module
import { useEffect, useRef, useState } from 'react';

/* A S S I G N
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
    { key: 'P', group: 0x2, angle: 0, x: -300, y: -93.5, width: 80, height: 101 },
    { key: 'U', group: 0x2, angle: 0, x: -218, y: -78, width: 73, height: 72 },
    { key: 'T', group: 0x2, angle: 0, x: -158.5, y: -88, width: 39, height: 91 },
    { key: 'Y', group: 0x2, angle: 18, x: -72, y: -104, width: 72, height: 104 },
    { key: 'O', group: 0x2, angle: 18, x: -4, y: -99.5, width: 66, height: 73 },
    { key: 'U', group: 0x2, angle: 18, x: 65, y: -77, width: 73, height: 72 },
    { key: 'R', group: 0x2, angle: 18, x: 131.5, y: -56, width: 55, height: 72 },
    { key: 'S', group: 0x4, angle: -14, x: -293, y: 53.5, width: 57, height: 72 },
    { key: 'T', group: 0x4, angle: -14, x: -245, y: 32.5, width: 39, height: 91 },
    { key: 'O', group: 0x4, angle: -14, x: -190, y: 28, width: 66, height: 73 },
    { key: 'R', group: 0x4, angle: -14, x: -127, y: 12.5, width: 55, height: 72 },
    { key: 'Y', group: 0x4, angle: -14, x: -57, y: 12, width: 72, height: 104 },
    { key: 'I', group: 0x4, angle: 0, x: 5, y: 16.25, width: 32, height: 97 },
    { key: 'N', group: 0x4, angle: 0, x: 62.5, y: 29, width: 73, height: 72 },
    { key: 'M', group: 0x8, angle: 0, x: -14.5, y: 129, width: 115, height: 72 },
    { key: 'O', group: 0x8, angle: 0, x: 80, y: 129, width: 66, height: 73 },
    { key: 'T', group: 0x8, angle: 0, x: 134.5, y: 120, width: 39, height: 91 },
    { key: 'I', group: 0x8, angle: 0, x: 177, y: 115.5, width: 32, height: 97 },
    { key: 'O', group: 0x8, angle: 0, x: 230, y: 129, width: 66, height: 73 },
    { key: 'N', group: 0x8, angle: 0, x: 304, y: 128.5, width: 73, height: 72 }
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
    const [bannerScale, setBannerScale] = useState(0);
    const [cameraFrame, setCameraFrame] = useState({ width: 0, height: 0 });
    const [cameraPoint, setCameraPoint] = useState({ x: 0, y: 0 });
    const [canvasFrame] = useState({ width: 3840, height: 2160 });
    const [canvasPoint, setCanvasPoint] = useState({ x: 0, y: 0 });

    // E F F E C T

    // Observe banner
    useLayoutObserver(bannerRef, (_, banner) => {

        // Banner width is based off 68:33 aspect ratio
        const bannerHeight = banner.width * (330 / 680);
        setBannerFrame({ width: banner.width, height: bannerHeight });

        // Banner scale is relative to 680px width
        const bannerScale = banner.width / 680;
        setBannerScale(bannerScale);

        // Canvas gets center from banner
        const parent = getOffset(parentRef);
        const bannerX = parent.width / 2;
        const bannerY = banner.y - (banner.height / 2) + (bannerHeight / 2);
        setCanvasPoint({ x: bannerX, y: bannerY });

    }, 50);

    // Observe camera and canvas
    useEffect(() => {

        // Camera position is relative to canvas and parent
        const camera = { ...cameraFrame };
        const canvas = { ...canvasFrame, ...canvasPoint };
        const cameraX = (canvas.width / 2) - (camera.width / 2);
        const cameraY = (canvas.height / 2) - (camera.height / 2)
            + (camera.height / 2) - canvas.y;
        setCameraPoint({ x: cameraX, y: cameraY });

    }, [cameraFrame, canvasPoint]);

    // Observe viewport
    const client = useClient(() => {

        // Camera gets width and height from parent
        const parent = getOffset(parentRef);
        const cameraWidth = parent.width;
        const cameraHeight = parent.height;
        setCameraFrame({ width: cameraWidth, height: cameraHeight });

    }, 50);

    // R E T U R N

    return <div className="home-feature" ref={parentRef}>

        {/* Banner */}

        <div className="home-feature__banner" ref={bannerRef}>
            <div className="home-feature__banner-head">
                <img src={image.home.title} />
            </div>
            <div className="home-feature__banner-info">
                {client.onDesktop && <p>Hi, my name is Boriz. I'm a <span>creative producer</span> who lives and works near Amsterdam. Nice to meet you!</p>}
                {client.onMobile && <p>I'm Boriz, a <span>creative producer</span> from Amsterdam. Nice to meet you!</p>}
            </div>
            <ul className="home-feature__banner-menu">
                <li>
                    <a
                        className="button--big"
                        href="#showreel"
                    >
                        <vector.icon.star />
                        <span>Showreel</span>
                    </a>
                </li>
                <li>
                    <a
                        className="button--big"
                        href="#home-service"
                    >
                        <vector.icon.shapes />
                        <span>Services</span>
                    </a>
                </li>
            </ul>
        </div>

        {/* Matter */}

        <Matter
            // Element
            colorArray={colorArray}
            titleArray={titleArray}
            // Geometry
            bannerFrame={bannerFrame}
            bannerScale={bannerScale}
            cameraFrame={cameraFrame}
            cameraPoint={cameraPoint}
            canvasFrame={canvasFrame}
            canvasPoint={canvasPoint}
        />

    </div>;

}