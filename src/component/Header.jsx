/* I M P O R T
* * * * * * */

// Asset
import vector from '../asset/vector';

/* E X P O R T
* * * * * * */

export default function Header() {

    // R E T U R N

    return <header className="app-header">
        <nav>
            <ul>
                <li>
                    <a
                        className="app-header__button button--big"
                        href="#portfolio"
                    >
                        <vector.icon.frame />
                        <span>Portfolio</span>
                    </a>
                </li>
                <li>
                    <a
                        className="app-header__button button--big"
                        href="#contact"
                    >
                        <vector.icon.email />
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>;

}