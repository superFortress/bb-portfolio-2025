/* I M P O R T
* * * * * * */

// Function
import mosaicGrid from '../../function/generate/mosaicGrid';
import useClient from '../../function/hook/useClient';

// Module
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/* M O T I O N
* * * * * * */

const start = () => ({
    opacity: 0,
    y: 35
});

const enter = (index) => ({
    opacity: 1,
    y: 0,
    transition: {
        delay: 0.1 + index * 0.025,
        type: 'spring',
        stiffness: 450,
        damping: 27
    }
});

const leave = (index) => ({
    opacity: 0,
    y: -15,
    transition: {
        delay: index * 0.025,
        duration: 0.15,
        ease: 'easeIn',
    }
});

/* S T Y L E D
* * * * * * */

const StyledButton = styled.button`

    /* __grid-item-about */

    .portfolio__grid-item-about {
        color: ${(props) => props.color};

        opacity: 0;

        gap: 3px;

        transition:
            gap 0s 0.9s,
            opacity 0.5s 0.15s ease-in;
    }

    &:hover .portfolio__grid-item-about {
        opacity: 1;

        gap: 12px;

        transition:
            opacity 0.25s,
            gap 0.35s cubic-bezier(0, 0.5, 0.5, 1);
    }

    .portfolio__grid-item-about-split {
        background: ${(props) => props.color};
    }

    /* __grid-item-image */

    .portfolio__grid-item-image {
        opacity: 1;

        transition: opacity 0.8s 0.4s ease-in-out;
    }

    &:hover .portfolio__grid-item-image {
        opacity: 0;

        transition: opacity 0.05s;
    }

`;

/* E X P O R T
* * * * * * */

export default function DesktopGrid(props) {

    // A S S I G N

    // State
    const navigate = useNavigate();
    const [itemArray, setItemArray] = useState(props.itemArray);
    const [columnCount, setColumnCount] = useState(0);
    const [rowCount, setRowCount] = useState(0);

    // E F F E C T

    // Calculate columns and rows
    useClient((client) => {
        const { width, height } = client.viewport;
        const rowCount = 2 + Math.floor((height - 480) / 240);
        const columnCount = 2 + Math.floor((width - 720) / 360);
        setRowCount(rowCount);
        setColumnCount(columnCount);
    });

    // Add items to Array
    useEffect(() => {
        if (props.itemArray.length === 0) return;
        if (columnCount * rowCount === 0) return;
        // Get randomized cell Array
        const [columns, rows] = [columnCount, rowCount];
        const items = props.itemArray.length;
        const cellArray = mosaicGrid({ columns, rows, items });
        // Add items to cell Array
        const itemArray = cellArray.map((cell, index) => {
            const item = props.itemArray[index];
            return { ...cell, ...item };
        });
        setItemArray(itemArray);
    }, [columnCount, rowCount, props.itemArray]);

    // R E T U R N

    return <ul className="portfolio__grid" style={{
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        gridTemplateRows: `repeat(${rowCount}, 1fr)`
    }}>
        <AnimatePresence>
            {itemArray.map((item, index) => {

                // Get image scaling
                const area = item.width * item.height;
                const size = (() => {
                    // Don't scale large buttons
                    if (area > 2) return 'cover';
                    // Scale small buttons
                    const size = 1 + (item.thumb.scale - 1) * (area > 1 ? 0.5 : 1);
                    if (item.width < item.height) return `auto ${size * 100}%`;
                    else return `${size * 100}% auto`;
                })();

                return <motion.li
                    key={item.id}
                    initial={start()}
                    animate={enter(index)}
                    exit={leave(index)}
                    style={{
                        gridColumn: `${item.column} / span ${item.width}`,
                        gridRow: `${item.row} / span ${item.height}`
                    }}
                >
                    <StyledButton
                        color={item.thumb.color}
                        onClick={() => navigate(`/work/${item.key}`)}
                        style={{
                            background: item.thumb.background
                        }}
                    >
                        <div className="portfolio__grid-item-about">
                            <div className="portfolio__grid-item-about-title">
                                {item.about.title}
                            </div>
                            <div className="portfolio__grid-item-about-split" />
                            <item.about.logo />
                        </div>
                        <div className="portfolio__grid-item-image" style={{
                            backgroundImage: `url(${item.thumb.image})`,
                            backgroundPositionX: `${item.thumb.offset[0] * 100}%`,
                            backgroundPositionY: `${item.thumb.offset[1] * 100}%`,
                            backgroundSize: size
                        }} />
                    </StyledButton>
                </motion.li>;

            })}
        </AnimatePresence>
    </ul >;

}