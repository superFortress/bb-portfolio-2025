/* I M P O R T
* * * * * * */

// Component
import DesktopGrid from './DesktopGrid';
import MobileGrid from './MobileGrid';

// Element
import Modal from '../../element/Modal';

// Function
import capitalize from '../../function/string/capitalize';
import randomUUID from '../../function/random/randomUUID';
import shuffleArray from '../../function/random/shuffleArray';
import useClient from '../../function/hook/useClient';

// Library
import labelStore from '../../library/labelStore';
import projectStore from '../../library/projectStore';

// Module
import { useEffect, useRef, useState } from 'react';

/* S T A T I C
* * * * * * */

// Order menu by device
const l = labelStore;
const labelArray = [l.animation, l.graphic, l.storyboard];

// Order projects by importance
const projectArray = ['rinkel', 'agrico', 'escience', 'noord', 'jip', 'eread', 'vocol', 'guardian', 'nova', 'talkthick', 'pool', 'opa', 'pink', 'cloud', 'creamy', 'monster', 'traffic', 'hoofd', 'rabo', 'year']
    .flatMap((key) => !projectStore[key] ? [] : { ...projectStore[key], key });

/* E X P O R T
* * * * * * */

export default function Portfolio() {

    // A S S I G N

    // Reference
    const scrollRef = useRef(null);

    // State
    const [itemArray, setItemArray] = useState([]);
    const [menuArray, setMenuArray] = useState([]);
    const [menuIndex, setMenuIndex] = useState(0);

    // Variable
    const client = useClient();

    // E F F E C T

    // Arrange menu
    useEffect(() => {
        setMenuArray(labelArray);
        setMenuIndex(0);
    }, []);

    // Arrange grid
    useEffect(() => {
        const label = menuArray[menuIndex];
        const array = projectArray
            .filter((project) => project.label.includes(label))
            .map((project) => {
                const item = { ...project, id: randomUUID() };
                item.thumb = { ...project.thumb };
                item.thumb.background = (() => {
                    const length = item.thumb.background.length || 1;
                    const primer = item.thumb.background[0] || 'gray1';
                    const colors = shuffleArray([...item.thumb.background]);
                    if (length === 1) return `var(--color-${primer})`;
                    else return `${colors.map((color, index) => {
                        const base = 100 / length * index;
                        const factor = 100 / length;
                        const size = (50 + 50 / (length - 1)) * 1.2;
                        const x = Math.round(base + Math.random() * factor);
                        const y = Math.round(base + Math.random() * factor);
                        return `radial-gradient(
                            circle at ${x}% ${y}%,
                            var(--color-${color}),
                            transparent ${size}%
                        )`;
                    })}, var(--color-${primer})`;
                })();
                item.thumb.color = `var(--color-${item.thumb.color})`;
                return item;
            });
        setItemArray(array);
    }, [menuArray, menuIndex]);

    // R E T U R N

    return <Modal
        className="portfolio"
        hash="portfolio"
        ref={scrollRef}
        style={{ overflowY: 'scroll' }}
    >

        {/* Menu */}

        <ul className="portfolio__menu">
            {menuArray.map((item, index) => (
                <li key={index}>
                    <button
                        aria-current={index === menuIndex || undefined}
                        className={client.onDesktop ? undefined : 'button--big'}
                        onClick={() => setMenuIndex(index)}
                        style={{
                            '--button-background': 'var(--color-gray1)',
                            '--button-background-active': item.color
                        }}
                    >
                        <item.icon />
                        <span>{capitalize(item.name)}</span>
                    </button>
                </li>
            ))}
        </ul>

        {/* Grid */}

        {client.onDesktop && <DesktopGrid itemArray={itemArray} />}
        {client.onMobile && <MobileGrid itemArray={itemArray} scrollRef={scrollRef} />}

    </Modal>;

}