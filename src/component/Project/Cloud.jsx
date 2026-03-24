/* I M P O R T
* * * * * * */

// Asset
import imageRoot from '../../asset/image';
import vector from '../../asset/vector';
import videoRoot from '../../asset/video';

// Element
import Credits from '../../element/Credits';
import Gallery from '../../element/Gallery';
import Image from '../../element/Image';
import Video from '../../element/Video';

// Function
import useClient from '../../function/hook/useClient';

// Module
import styled from 'styled-components';

/* S T Y L E D
* * * * * * */

const StyledArticle = styled.article`

    /* header */

    #project-header {
        background: linear-gradient(135deg, #f587c6, #ffb0c9);
    }

    /* concept */

    #project-concept {
        padding-top: 0;
    }

    #project-concept h2 {
        color: #803e8e;
    }

    /* design */

    #project-design {
        background: linear-gradient(#c172b6 30%, #ff9c9d 70%);
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // State
    const client = useClient();

    // Variable
    const image = imageRoot.project.cloud;
    const video = videoRoot.project.cloud;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <h1>CloudTeams</h1>
                <figure>
                    <Video src={video.final} poster={image.video04} />
                </figure>
                <p>CloudTeams is an online platform that connects app developers to their potential customers. In this video, we put a face to both the product and its varied customer base.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>CloudTeams</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.booreiland />
                }, {
                    title: 'Produced by',
                    child: <vector.logo.in60seconds />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }, {
                    title: 'This production was made during my work relationship at in60seconds.'
                }]} />
            </div>
        </header>

        <section id="project-introduction">
            <div className="project__column">
                <figure>
                    <Image src={image.concept04} />
                </figure>
                <hr />
                <h3>Introduction</h3>
                <p>With <b>CloudTeams</b> you can bring your app to customers even before you bring it to market. Users get a chance to try out new apps and review their performance, while developers gain valuable insights that help them improve their products. Together, they will create software that <i>just works</i>.</p>
            </div>
        </section>

        <section id="project-concept">
            <div className="project__column">
                <Gallery columns={client.onDesktop ? 2 : 1} array={[
                    { src: image.video01 },
                    { src: image.video03 }
                ]} />
                <h2>User, meet developer</h2>
                <hr />
                <h3>Concept</h3>
                <p>Our big challenge was to approach two inherently different audiences. Developers had to trust that their unfinished apps would be in good hands, and customers needed to feel that the beta testing experience was worth their time. To get both of them invested we decided to portray them side by side, as our two main characters, and address their concerns simultaneously.</p>
                <figure>
                    <Image src={image.concept06} />
                </figure>
            </div>
        </section>

        <section id="project-design">
            <div className="project__column">
                <figure>
                    <Image src={image.concept05} />
                </figure>
                <hr />
                <h3>Design</h3>
                <p><b>Booreiland</b> provided a few initial designs to get us started. From there on, we quickly settled on our main characters. We gave the developer some firm glasses and a big beard, no surprises there. And we turned the user into his polar opposite. That way they would be easily identifiable and could properly complement each other throughout the animation.</p>
                <figure>
                    <Image src={image.concept03} />
                </figure>
                <p>But more important than looks was how to properly tell their story. Since our characters don't speak I invested a lot of time in their expressions. At first, when everything goes wrong, you can see their frustrations with one another. But once we introduce CloudTeams they are slowly warming up to each other and by the end they're absolutely <i>ecstatic</i>. Conflict resolved!</p>
                <p>To bring our lovely couple to life required quite a bit of work. After hooking up various pulleys, switches, and handles I could make them laugh, cry, and bounce at the push of a button &mdash; so to speak. And we abused this to its fullest.</p>
                <Gallery array={[
                    { src: image.loopKate02 },
                    { src: image.loopKate01, device: 'desktop' },
                    { src: image.loopKate03 }
                ]} />
            </div>
        </section>

        <footer id="project-result">
            <div className="project__column">
                <h2>A perfect marriage</h2>
                <figure>
                    <Image src={image.video13} />
                </figure>
                <hr />
                <h3>Result</h3>
                <p>After putting both characters through an emotional rollercoaster they came out sparkling. The animation turned out short and sweet. While we never get to know either developer or user by name, we can clearly see their relationship blossom through the use of CloudTeams 💖</p>
            </div>
        </footer>

    </StyledArticle>;

}