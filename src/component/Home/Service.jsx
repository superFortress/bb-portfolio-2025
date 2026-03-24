/* I M P O R T
* * * * * * */

// Asset
import vector from '../../asset/vector';

// Function
import useClient from '../../function/hook/useClient';

/* E X P O R T
* * * * * * */

export default function Service() {

    // A S S I G N

    // State
    const client = useClient();

    // Variable
    const emailArray = ['contact', 'borizbaatsen.com'];
    const phoneArray = ['+31', '6', '4392', '4786'];

    // R E T U R N

    return <article className="home-service" id="home-service">
        <header className="home-service__item">
            <h1>Services</h1>
            <p>Creating animations, illustrations, or campaigns requires a solid strategy. To guarantee both quality and consistency I&rsquo;ve developed my very own.</p>
            <vector.icon.shapes style={{
                transform: 'translate(-50%, -50%) rotate(15deg)',
                top: '20%',
                left: '75%'
            }} />
        </header>
        <div className="home-service__main">
            <section className="home-service__item">
                <h2>1. Write the first draft</h2>
                <p>Let&rsquo;s talk about you! To craft an authentic story we need to hear from the people behind the brand. Together, we write a draft.</p>
                <vector.icon.draft style={{
                    transform: 'translate(-50%, -50%) rotate(9deg)',
                    top: client.onDesktop ? '55%' : '85%',
                    left: client.onDesktop ? 'max(calc(0% - 10vw), -25%)' : '15%'
                }} />
            </section>
            <section className="home-service__item">
                <h2>2. Build the storyline</h2>
                <p>We combine our ideas and create a clear message from beginning to end. This is where we decide the look and feel.</p>
                <vector.icon.board style={{
                    transform: 'translate(-50%, -50%) rotate(7deg)',
                    top: client.onDesktop ? '55%' : '85%',
                    left: client.onDesktop ? 'min(calc(100% + 10vw), 125%)' : '85%'
                }} />
            </section>
            <section className="home-service__item">
                <h2>3. Put everything in place</h2>
                <p>Here I&rsquo;ll take over and bring the design and story elements to life. You will be kept in the loop, every step of the way.</p>
                <vector.icon.design style={{
                    transform: 'translate(-50%, -50%) rotate(0deg)',
                    top: client.onDesktop ? '55%' : '85%',
                    left: client.onDesktop ? 'max(calc(0% - 10vw), -25%)' : '15%'
                }} />
            </section>
            <section className="home-service__item">
                <h2>4. Optimize and automate</h2>
                <p>Large projects, like online campaigns, require quick edits and fast turnarounds. With a bit of computer magic we make that happen.</p>
                <vector.icon.code style={{
                    transform: 'translate(-50%, -50%) rotate(17deg)',
                    top: client.onDesktop ? '55%' : '85%',
                    left: client.onDesktop ? 'min(calc(100% + 10vw), 125%)' : '85%'
                }} />
            </section>
            <section className="home-service__item">
                <h2>5. Let&rsquo;s publish</h2>
                <p>Whether it&rsquo;s online, on TV, or in print &mdash; I make sure the colors are bright, the image is sharp, and that every “i” gets dotted.</p>
                <vector.icon.media style={{
                    transform: 'translate(-50%, -50%) rotate(-15deg)',
                    top: client.onDesktop ? '55%' : '85%',
                    left: client.onDesktop ? 'max(calc(0% - 10vw), -25%)' : '15%'
                }} />
            </section>
        </div>
        <footer className="home-service__item">
            <h1>Get in contact</h1>
            <p>It all starts with a conversation. Let&rsquo;s hear your ideas and set course together. You can reach me through mail or by phone. I look forward to hear from you!</p>
            <vector.icon.heart style={{
                transform: 'translate(-50%, -50%) rotate(15deg)',
                top: '20%',
                left: '75%'
            }} />
            <ul>
                <li>
                    <a
                        className="button--big"
                        href={`mailto:${emailArray.join('@')}`}
                    >
                        <vector.icon.email />
                        <span>Mail me</span>
                    </a>
                </li>
                <li>
                    <a
                        className="button--big"
                        href={`tel:${phoneArray.join('')}`}
                    >
                        <vector.icon.phone />
                        <span>Call me</span>
                    </a>
                </li>
            </ul>
        </footer>
    </article>;

}