/* I M P O R T
* * * * * * */

// Function
import useListener from '../../function/hook/useListener';

// Module
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/* M O T I O N
* * * * * * */

const start = () => ({
    opacity: 0,
    y: 60
});

const enter = (index) => ({
    opacity: 1,
    y: 0,
    transition: {
        delay: 0.15 + index * 0.12,
        type: 'spring',
        stiffness: 600,
        damping: 40
    }
});

const leave = () => ({
    opacity: 0,
    y: 0,
    transition: {
        duration: 0.1,
        ease: 'easeIn'
    }
});

/* S T Y L E D
* * * * * * */

const StyledButton = styled.button`

    .portfolio__grid-item-about {
        color: ${(props) => props.color};

        opacity: 0;

        gap: 3px;

        transition:
            gap 0 0.2s,
            opacity 0.15s;
    }

    &[aria-current] .portfolio__grid-item-about {
        opacity: 1;

        gap: 10px;

        transition:
            opacity 0.3s,
            gap 0.35s cubic-bezier(0, 0.5, 0.5, 1);
    }

    .portfolio__grid-item-about-split {
        background: ${(props) => props.color};
    }

    /* __grid-item-image */

    .portfolio__grid-item-image {
        opacity: 1;

        transition: opacity 0.5s 0.05s ease-out;
    }

    &[aria-current] .portfolio__grid-item-image {
        opacity: 0;

        transition: opacity 0.05s;
    }

`;

/* E X P O R T
* * * * * * */

export default function MobileGrid(props) {

    // A S S E T S

    // State
    const navigate = useNavigate();
    const [itemIndex, setItemIndex] = useState(-1);

    // E F F E C T

    // Highlight item relative to scroll
    useListener(props.scrollRef, 'scroll', (event) => {
        const ref = event.target;
        const buffer = 1;
        const height = ref.scrollHeight - ref.offsetHeight - buffer;
        const scroll = (ref.scrollTop - buffer) / height;
        setItemIndex(Math.floor(scroll * (props.itemArray.length - 1)));
    });

    // R E T U R N

    return <ul className="portfolio__grid">
        <AnimatePresence>
            {props.itemArray.map((item, index) => {
                const x = item.thumb.offset[0] * 100;
                const y = item.thumb.offset[1] * 100;
                const size = item.thumb.scale * 100;
                return <motion.li
                    key={item.id}
                    initial={start()}
                    animate={enter(index)}
                    exit={leave()}
                >
                    <StyledButton
                        aria-current={index === itemIndex || undefined}
                        color={item.thumb.color}
                        onClick={() => navigate(`/work/${item.key}`)}
                        style={{ background: item.thumb.background }}
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
                            backgroundPosition: `${x}% ${y}%`,
                            backgroundSize: `${size}% auto`
                        }} />
                    </StyledButton>
                </motion.li>;

            })}
        </AnimatePresence>
    </ul>;

}