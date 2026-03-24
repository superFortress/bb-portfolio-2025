/* I M P O R T
* * * * * * */

// Element
import Video from './Video';

// Function
import debounce from '../function/time/debounce';
import pathToArray from '../function/filesystem/pathToArray';
import useClient from '../function/hook/useClient';

// Module
import { useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';

/* E X P O R T
* * * * * * */

export default function Carousel(props) {

    // A S S I G N

    // Reference
    const listRef = useRef(null);

    // State
    const [hasLoaded, setHasLoaded] = useState(false);
    const [itemHoverIndex, setItemHoverIndex] = useState(0);
    const [itemIndex, setItemIndex] = useState(0);

    // Variable
    const array = props.array.filter((entry) => entry.src);
    const color = props.color || undefined;

    // E F F E C T

    const client = useClient((client) => {
        setHasLoaded(client.body.width > 0);
    });

    // D E F I N E

    // Calculate item offset
    const itemWidth = listRef?.current?.offsetWidth || 0;
    const itemInset = client.device === 'desktop' ? 60 : -30;
    const itemOffset = window.innerWidth / 2 + itemWidth / 2 - itemInset;

    // Calculate list offset
    const itemHover = Math.sign(itemIndex - itemHoverIndex) * 30;
    const listOffset = itemIndex * -itemOffset + itemHover;

    // F U N C T I O N

    const onClick = (index) => {
        onMouseEnter(-1);
        setItemHoverIndex(index);
        setItemIndex(index);
    };

    const onDrag = (_, info) => {
        const x = info.offset.x;
        if (x > -50 && x < 50) return;
        if (x < -50) onClick(Math.min(itemIndex + 1, array.length - 1));
        if (x > 50) onClick(Math.max(itemIndex - 1, 0));
    };

    const onMouseEnter = useMemo(() => debounce((index) => {
        if (client.device !== 'desktop') return;
        if (index < 0) return;
        setItemHoverIndex(index);
    }, 400, false, true), [client.device]);

    const onMouseLeave = () => {
        if (client.device !== 'desktop') return;
        setItemHoverIndex(itemIndex);
    };

    // R E T U R N

    return <div className="carousel" style={{
        '--carousel-control-color': color,
        '--carousel-control-color-active': color
    }}>

        {/* Gallery */}

        <motion.ul
            className="carousel__gallery"
            ref={listRef}
            style={{ aspectRatio: props.aspectRatio || 16 / 9 }}
            // Drag
            drag={client.onMobile ? 'x' : undefined}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            dragTransition={{ bounceStiffness: 400 }}
            onDragEnd={onDrag}
            // Motion
            initial={{ left: 0 }}
            animate={{ left: listOffset }}
        >
            {array.map((entry, index) => {
                const isActive = index === itemIndex;
                const isHovered = index === itemHoverIndex;
                const extension = entry.src.split('.').pop().toLowerCase();
                const isVideo = ['mov', 'mp4', 'webm'].includes(extension);
                const isImage = ['gif', 'jpeg', 'jpg', 'png'].includes(extension);
                const label = entry.alt || pathToArray(entry.src, 2).join(' ');
                return <li
                    key={index}
                    onClick={() => onClick(index)}
                    onMouseEnter={() => !isActive && onMouseEnter(index)}
                    onMouseLeave={() => !isActive && onMouseLeave()}
                    style={{
                        aspectRatio: props.aspectRatio || 16 / 9,
                        opacity: index && !hasLoaded ? 0 :
                            isActive || isHovered ? 1 : 0.2,
                        left: index * itemOffset,
                        cursor: !isActive ? 'pointer' : 'auto',
                        transition: 'opacity 0.25s ease-out'
                    }}
                >
                    <figure>
                        {isImage && <img alt={label} src={entry.src} />}
                        {isVideo && <Video isActive={isActive} {...entry} />}
                    </figure>
                </li>
            })}
        </motion.ul>

        {/* Control */}

        {array.length > 1 && <ul className="carousel__control">
            {array.map((_, index) => {
                const isActive = index === itemIndex;
                return <li
                    key={index}
                    aria-current={isActive || undefined}
                >
                    <button
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => onClick(index)}
                    />
                </li>;
            })}
        </ul>}

    </div>;

}