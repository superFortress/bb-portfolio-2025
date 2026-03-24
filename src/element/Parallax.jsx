/* I M P O R T
* * * * * * */

// Function
import pathToString from '../function/string/pathToString';
import useListener from '../function/hook/useListener';

// Module
import { createRef, useMemo, useRef } from 'react';

/* E X P O R T
* * * * * * */

export default function Parallax(props) {

    // A S S I G N

    // Reference
    const parentRef = useRef(null);

    // D E F I N E

    // Apply attributes to each image
    const imageArray = useMemo(() => {
        if (!props.array?.length) return [];
        return props.array
            .filter((entry) => entry.src)
            .map((entry) => ({
                alt: pathToString(entry.src, 2, true),
                ref: createRef(),
                src: entry.src,
                scale: entry.scale || 1,
                x: entry.x || 0,
                xOffset: entry.xOffset || 0,
                y: entry.y || 0,
                yOffset: entry.yOffset || 0
            }));
    }, [props.array]);

    // E F F E C T

    // Calculate image coordinates
    useListener(window, 'scroll', () => {
        // Get figure coordinates
        const parentNode = parentRef.current;
        const parentHeight = parentNode.offsetHeight;
        const figureY = parentNode.getBoundingClientRect().y;
        // Get window coordinates
        const windowHeight = window.innerHeight;
        // Get offset
        const center = figureY - (windowHeight - parentHeight) / 2;
        const offset = center / ((windowHeight + parentHeight) / 2);
        // Apply offset
        imageArray?.forEach((entry) => {
            const imageNode = entry.ref?.current;
            if (!imageNode) return;
            const x = entry.xOffset + entry.x * offset + 50;
            const y = entry.yOffset + entry.y * offset + 50;
            imageNode.style.top = y + '%';
            imageNode.style.left = x + '%';
        });
    });

    // R E T U R N

    return <figure className="parallax" ref={parentRef} style={{
        aspectRatio: props.aspectRatio || undefined,
        background: props.color || undefined,
        width: '100%',
        height: props.height || undefined,

        position: 'relative'
    }}>
        {imageArray?.map((entry, index) => (
            <div key={index} style={{
                width: '100%',
                height: '100%',

                position: 'absolute',
                zIndex: index,

                overflow: 'hidden'
            }}>
                <img
                    alt={entry.alt}
                    ref={entry.ref}
                    src={entry.src}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `
                            translate(-50%, -50%)
                            scale(${entry.scale})
                        `
                    }}
                />
            </div>
        ))}
    </figure>;

}