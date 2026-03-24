/* I M P O R T
* * * * * * */

// Asset
import image from '../../../asset/image';
import vector from '../../../asset/vector';

// Component
// ... Canvas
import CanvasCollision from './Canvas/Collision';
import CanvasContainer from './Canvas/Container';
import CanvasShapes from './Canvas/Shapes';
import CanvasTitles from './Canvas/Titles';
// ... Render
import RenderShapes from './Render/Shapes';
import RenderTitles from './Render/Titles';

// Function
import useClient from '../../../function/hook/useClient';
import useMatter from '../../../function/hook/useMatter';

// Module
import { useEffect, useRef, useState } from 'react';

/* E X P O R T
* * * * * * */

export default function Matter({

    // Element
    colorArray = [],
    titleArray = [],
    // Geometry
    bannerFrame = {},
    bannerScale = 0,
    cameraFrame = {},
    cameraPoint = {},
    canvasFrame = {},
    canvasPoint = {}

}) {

    // A S S I G N

    // Reference
    const canvasRef = useRef(null);
    const shapeBodyMapRef = useRef(new Map());
    const titleBodyMapRef = useRef(new Map());

    // State
    const client = useClient(null, 50);
    const { engine, useUpdate } = useMatter(canvasRef, canvasFrame);
    const [titleElemMap, setTitleElemMap] = useState(new Map());

    // E F F E C T

    // Update title geometry
    useEffect(() => {
        if (!bannerScale) return;
        const canvas = { ...canvasFrame };
        const center = { x: canvas.width / 2, y: canvas.height / 2 };
        const map = new Map();
        titleArray.forEach((title, index) => {
            const key = `${title.key}${index}`;
            map.set(key, {
                angle: title.angle,
                group: title.group,
                image: image.home[`titleLetter${title.key}`],
                x: center.x + title.x * bannerScale,
                y: center.y + title.y * bannerScale,
                width: title.width * bannerScale,
                height: title.height * bannerScale
            });
        });
        setTitleElemMap(map);
    }, [bannerScale, canvasFrame, titleArray]);

    // R E T U R N

    return <div style={{
        width: `${canvasFrame.width}px`,
        height: `${canvasFrame.height}px`,

        position: 'absolute',
        left: '50%',
        transform: ''
            + 'translate(-50%, -50%)'
            + `translateY(${canvasPoint.y}px)`,
        zIndex: 1,

        pointerEvents: 'none',
        userSelect: 'none'
    }}>

        {/* Canvas */}

        <canvas ref={canvasRef} style={{
            width: '100%',
            height: '100%',

            position: 'absolute'
        }} />

        <CanvasCollision
            // Element
            colorArray={colorArray}
            // Matter
            engine={engine}
        />

        <CanvasContainer
            // Geometry
            bannerFrame={bannerFrame}
            cameraFrame={cameraFrame}
            cameraPoint={cameraPoint}
            canvasPoint={canvasPoint}
            client={client}
            // Matter
            engine={engine}
        />

        <CanvasShapes
            // Element
            colorArray={colorArray}
            imageArray={Object.values(vector.shape)}
            shapeBodyMapRef={shapeBodyMapRef}
            // Geometry
            cameraFrame={cameraFrame}
            cameraPoint={cameraPoint}
            client={client}
            // Matter
            engine={engine}
        />

        <CanvasTitles
            // Element
            titleBodyMapRef={titleBodyMapRef}
            titleElemMap={titleElemMap}
            // Geometry
            client={client}
            // Matter
            engine={engine}
        />

        {/* Render */}

        <RenderShapes
            // Element
            shapeBodyMapRef={shapeBodyMapRef}
            // Geometry
            zIndex={2}
            // Matter
            useUpdate={useUpdate}
        />

        <RenderTitles
            // Element
            titleBodyMapRef={titleBodyMapRef}
            titleElemMap={titleElemMap}
            // Geometry
            zIndex={1}
            // Matter
            useUpdate={useUpdate}
        />

    </div>;

}