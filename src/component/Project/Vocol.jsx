/* I M P O R T
* * * * * * */

// Asset
import imageRoot from '../../asset/image';
import vector from '../../asset/vector';

// Element
import Credits from '../../element/Credits';
import Gallery from '../../element/Gallery';
import Image from '../../element/Image';

// Function
import useClient from '../../function/hook/useClient';

// Module
import styled from 'styled-components';

/* S T Y L E D
* * * * * * */

const StyledArticle = styled.article`

    /* header */

    #project-header::after,
    #project-header::before {
        content: '';

        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;
    }

    #project-header::after {
        background: url(/asset/image/utility/tile-noise-light.jpg);
        background-repeat: repeat;
        background-size: 120px 120px;
        mix-blend-mode: multiply;
    }

    #project-header::before {
        background: linear-gradient(
            135deg,
            #00c4ff,
            #0470e9);
    }

    #project-header > * {
        position: relative;
        z-index: 1;
    }

    #project-header :is(b, dd),
    #project-header-logo svg {
        color: #ff89b5;
    }

    @media (min-width: 768px) {
        #project-header::after {
            background-position: center;
        }

        #project-header-logo {
            width: 270px;
        }
    }

    @media (max-width: 767px) {
        #project-header figure {
            width: 100vw;

            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }

        #project-header-logo {
            width: 180px;
        }
    }

    /* concept */

    #project-concept {
        background: #cccded;
    }

    /* poster */

    #project-poster {
        background: linear-gradient(
            135deg,
            #e8ddf2,
            #ffeaea,
            #d1e8fe);
    }



`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // State
    const client = useClient();

    // Variable
    const image = imageRoot.project.vocol;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <div id="project-header-logo">
                    <vector.logo.vocol />
                </div>
                <figure>
                    <Image src={client.onDesktop
                        ? image.headerDesktop01
                        : image.headerMobile01
                    } />
                </figure>
                <p>With <b>Vocol.app</b> you can create “captchas” on the fly. These are small text blocks that are skewed, shaken up, and otherwise deformed in order to make them illegible to spying bots and other automated agents. However, as artificial comprehension has dramatically advanced since then, captchas have been largely retired as a security measure.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Vocol</>
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }]} />
            </div>
        </header>

        <section id="project-concept">
            <div className="project__column">
                <h2>Change the medium, not the message</h2>
                <figure>
                    <Image src={image.designDesktop03} />
                </figure>
                <hr />
                <h3>Concept</h3>
                <p>The 2020s saw a major rise in online censorship. Beyond bans on offensive language, many social media platforms penalized the discussion of political topics, controversial figures, and mature themes such as harm and death. Not only did this stifle general conversation, but even the press had to alter their reporting in order to reliably reach their audiences.</p>
                <p>Vocol would allow you to circumvent these filters and open up the conversation once again. While it is true that freedom of speech is often (ab)used to cause offense, it also allows us to share uncommon knowledge, uncomfortable truths, and groundbreaking ideas. It is why we value a free press: we gladly sacrifice some comfort to get access to the truth.</p>
            </div>
        </section>

        <section id="project-design">
            <div className="project__column">
                <Gallery columns={3} array={[
                    { src: image.designMobile01 },
                    { src: image.designMobile03 },
                    { src: image.designMobile04 },
                    { src: image.designMobile05 },
                    { src: image.designMobile06 },
                    { src: image.designMobile09 }
                ]} />
                <h2>Compact and colorful</h2>
                <hr />
                <h3>Design</h3>
                <p>The app's audience was always going to be niche. In order to improve adoption, I needed to optimize accessibility. Instagram provided a great inspiration and initial framework. For one, their left-to-right menus feel intuitive as you never have to wonder where to go next. Second, most tools are contained within the viewport &ndash; no scrolling required.</p>
                <p>Following this design philosophy, I split the app in three parts: the initial text input, the styling section, and the export where an image is returned to the user. By using as little text as possible and relying on the user to click the few buttons presented, the interface came out both compact and colorful.</p>
            </div>
        </section>

        <aside id="project-poster">
            <div className="project__column">
                <figure>
                    <Image src={image.designDesktop01} />
                </figure>
            </div>
        </aside>

        <footer id="project-result">
            <div className="project__column">
                <h2>Made redundant</h2>
                <hr />
                <h3>Result</h3>
                <p>Production preceded research, and it quickly became clear that the app came a decade too late. Computers today are able to decipher text about as well as any human and this will only improve in the future. So sadly, the project had to be retired.</p>
                <p>On a brighter note: there are still many lanes of cryptography left to us. And, if nothing else, building Vocol.app taught me a lot about web design and development using ReactJS.</p>
            </div>
        </footer>

    </StyledArticle>;

}