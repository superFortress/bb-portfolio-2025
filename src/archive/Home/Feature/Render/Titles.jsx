/* I M P O R T
* * * * * * */

// Module
import { createRef, useMemo } from 'react';

/* E X P O R T
* * * * * * */

export default function Titles({

    // Element
    titleBodyMapRef = null,
    titleElemMap = new Map(),
    // Geometry
    zIndex = 0,
    // Matter
    useUpdate = () => { }

}) {

    // A S S I G N

    // Reference
    const refMap = useMemo(() => {
        const map = new Map();
        for (const key of titleElemMap.keys())
            map.set(key, createRef());
        return map;
    }, [titleElemMap]);

    // U P D A T E

    // Update letter positioning
    useUpdate(() => {
        titleBodyMapRef.current.forEach((title) => {
            if (!refMap.get(title.key)?.current) return;
            const elem = refMap.get(title.key).current;
            elem.style.backgroundColor = title.color;
            elem.style.top = `${title.position.y}px`;
            elem.style.left = `${title.position.x}px`;
        });
    });

    // R E T U R N

    return <div style={{
        width: '100%',
        height: '100%',
        
        position: 'absolute',
        zIndex: zIndex
    }}>
        {[...refMap.entries()].map(([key, ref]) => {
            if (!titleElemMap.get(key)) return <></>;
            const title = titleElemMap.get(key);
            return <div key={key} ref={ref} style={{
                backgroundColor: 'var(--color-gray5)',
                maskImage: `url(${title.image})`,
                maskRepeat: 'no-repeat',
                maskSize: '100%',
                width: `${title.width}px`,
                height: `${title.height}px`,

                position: 'absolute',
                top: `${title.y}px`,
                left: `${title.x}px`,
                transform: ''
                    + 'translate(-50%, -50%)'
                    + `rotate(${title.angle}deg)`
            }} />;
        })}
    </div>;

}