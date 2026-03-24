/* I M P O R T
* * * * * * */

// Context
import { useAboutContext } from '../context/About';

/* E X P O R T
* * * * * * */

export default function Footer() {

    // A S S E T S

    // State
    const { about } = useAboutContext();

    // R E T U R N

    return <footer className="app-footer">
        <span>
            {about.tagline}&nbsp;
            All rights reserved &copy; {about.author}, {about.year}.
        </span>
        <span>
            {about.version}
        </span>
    </footer>;

}