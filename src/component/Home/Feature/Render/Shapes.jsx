/* I M P O R T
* * * * * * */

// Module
import { useRef, useState } from 'react';

/* E X P O R T
* * * * * * */

export default function Shapes({

    // Element
    shapeBodyMapRef = null,
    // Geometry
    zIndex = 0,
    // Matter
    useUpdate = () => { }

}) {

    // A S S I G N

    // Reference
    const shapeElemMapRef = useRef(new Map());
    const renderRef = useRef(null);

    // State
    const [keyArray, setKeyArray] = useState([]);

    // U P D A T E

    // Update keys
    useUpdate(() => {
        const bodyKeys = [...shapeBodyMapRef.current.keys()];
        const elemKeys = [...shapeElemMapRef.current.keys()];
        // Check if bodies were added or removed
        const addedKeys = bodyKeys.filter((key) => !elemKeys.includes(key));
        const removedKeys = elemKeys.filter((key) => !bodyKeys.includes(key));
        // ... If not, ignore current update
        if (!addedKeys.length && !removedKeys.length) return;
        // ... If yes, update keys
        setKeyArray(bodyKeys);
    });

    // Update elements in map
    useUpdate(() => keyArray.forEach((key) => {
        const body = shapeBodyMapRef.current.get(key);
        const elem = shapeElemMapRef.current.get(key);
        if (!body || !elem) return;
        const { angle, color, position, width, height } = body;
        const alpha = (position.x || position.y) ? body.alpha : 0;
        const x = (position?.x || 0);
        const y = (position?.y || 0);
        // Style design
        elem.style.color = color;
        elem.style.opacity = alpha;
        elem.style.width = `${width}px`;
        elem.style.height = `${height}px`;
        // Style position
        elem.style.top = `${body.height * -0.5}px`;
        elem.style.left = `${body.width * -0.5}px`;
        elem.style.transform = `
            translate(${x}px, ${y}px)
            rotate(${angle}turn)
            ${body.transform || ''}
        `;
    }));

    // R E T U R N

    return <div ref={renderRef} style={{
        width: '100%',
        height: '100%',

        position: 'absolute',
        zIndex: zIndex
    }}>
        {keyArray.map((key) => {
            const body = shapeBodyMapRef.current.get(key);
            if (!body) return <></>;
            return <div
                key={key}
                ref={(elem) => {
                    if (elem) shapeElemMapRef.current.set(key, elem);
                    else shapeElemMapRef.current.delete(key);
                }}
                style={{
                    opacity: 0,

                    position: 'absolute',
                    top: '-9999px',
                    left: '-9999px',
                }}
            >
                {body.image && <body.image />}
            </div>;
        })}
    </div>;

}