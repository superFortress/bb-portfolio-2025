/* I M P O R T
* * * * * * */

// Asset
import vector from '../asset/vector';

// Function
import useClient from '../function/hook/useClient';

// Module
import { useState } from 'react';

/* E X P O R T
* * * * * * */

export default function Credits(props) {

    // A S S I G N

    // State
    const [expand, setExpand] = useState(false);

    // Variable
    const color = props.color || undefined;

    // E F F E C T

    // Expand credits by default on desktop
    const client = useClient((client) => {
        if (client.onDesktop) setExpand(true);
    });

    // R E T U R N

    return <div className="credits" style={{
        '--credits-color': color
    }}>

        {/* Toggle */}
        
        {client.onMobile && <button
            onClick={() => setExpand((expand) => !expand)}
        >
            <span>Show credits</span>
            {expand ? <vector.ui.tinyArrowUp /> : <vector.ui.tinyArrowDown />}
        </button>}

        {/* Column */}

        {expand && <dl className="credits__list">
            {props.array.map((entry, index) => (
                <div key={index} className="credits__list-item">
                    <dt>{entry.title}</dt>
                    <dd>{entry.child}</dd>
                </div>
            ))}
        </dl>}

    </div>;

}