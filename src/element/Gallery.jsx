/* I M P O R T
* * * * * * */

// Function
import useClient from '../function/hook/useClient';
import pathToString from '../function/string/pathToString';

// Module
import { useEffect, useState } from 'react';

/* E X P O R T
* * * * * * */

export default function Gallery(props) {

    // A S S I G N

    // State
    const client = useClient();
    const [array, setArray] = useState([]);
    const [columnCount, setColumnCount] = useState(3);

    // Variable
    const color = props.color || undefined;

    // D E F I N E

    const clampedArray = [...array];
    const clamp = array.length % columnCount;
    clampedArray.splice(-clamp, clamp);

    // E F F E C T

    // Populate array
    useEffect(() => {
        if (!props.array?.length) return setArray([]);
        const array = props.array.flatMap((entry) => {
            if (!entry.src) return [];
            if (client.onDesktop && entry.device === 'mobile') return [];
            if (client.onMobile && entry.device === 'desktop') return [];
            const alt = entry.alt || pathToString(entry.src, 2, true);
            const src = entry.src;
            const caption = entry.caption || null;
            return { alt, src, caption };
            ;
        });
        setArray(array);
    }, [props.array, client]);

    // Set column count
    useEffect(() => {
        if (!array.length) return setColumnCount(3);
        // Set column count depending on props
        if (props.columns)
            return setColumnCount(props.columns);
        // Set column count depending on array items
        if (client.body.width > 1440)
            if (array.length % 5 === 0) return setColumnCount(5);
        if (client.body.width > 1200)
            if (array.length % 4 === 0) return setColumnCount(4);
        if (client.body.width > 960)
            return (array.length % 3 === 0)
                ? setColumnCount(3) : setColumnCount(2);
        if (client.body.width < 384)
            return (array.length % 2 === 0)
                ? setColumnCount(2) : setColumnCount(1);
        if (client.body.width < 768)
            return (array.length % 3 === 0)
                ? setColumnCount(3) : setColumnCount(2);
        // Set column count depending on device width
        if (client.onDesktop)
            return setColumnCount(Math.ceil(client.app.width / 360));
        if (client.onMobile)
            return setColumnCount(Math.ceil(client.app.width / 256));
    }, [array, client]);

    // R E T U R N

    return <ul className="gallery" style={{
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`
    }}>
        {clampedArray.map((entry, index) => {
            return <li key={index} >
                <figure>
                    <img
                        alt={entry.alt}
                        src={entry.src}
                        style={{ background: color }}
                    />
                    {entry.caption && <figcaption>
                        {entry.caption}
                    </figcaption>}
                </figure>
            </li>
        })}
    </ul>;

}