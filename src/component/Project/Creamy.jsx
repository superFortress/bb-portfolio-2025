/* I M P O R T
* * * * * * */

// Asset
import imageRoot from '../../asset/image';
import vector from '../../asset/vector';
import videoRoot from '../../asset/video';

// Element
import Carousel from '../../element/Carousel';
import Credits from '../../element/Credits';
import Gallery from '../../element/Gallery';
import Image from '../../element/Image';
import Video from '../../element/Video';

// Module
import styled from 'styled-components';

/* S T Y L E D
* * * * * * */

const StyledArticle = styled.article`

    /* header */

    #project-header {
        background: linear-gradient(135deg, #d7e5ea, #c5d4d6);
    }

    /* concept */

    #project-concept {
        background: linear-gradient(135deg, #d7e5ea, #c5d4d6);
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // Variable
    const image = imageRoot.project.creamy;
    const video = videoRoot.project.creamy;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <h1>Creamy Creation</h1>
                <figure>
                    <Video src={video.final} poster={image.video04} />
                </figure>
                <p>The Dutch dairy company <b>FrieslandCampina</b> introduces a new product in their line up: the cream liqueur. With this introductory video we show distilleries how the cream is made.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Creamy Creation</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.frieslandCampina />
                }, {
                    title: 'Produced by',
                    child: <vector.logo.imaginePeople />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }, {
                    title: 'Additional credits',
                    child: <>
                        <b>Project lead</b> Tanja Engelen
                    </>
                }]} />
            </div>
        </header>

        <figure>
            <Image src={image.concept04} />
        </figure>

        <section id="project-briefing">
            <div className="project__column">
                <h2>Classic drink, new bottle</h2>
                <figure>
                    <Image src={image.element02} />
                </figure>
                <hr />
                <h3>Briefing</h3>
                <p>Thanks to <b>Creamy Creation</b> the Netherlands finally has a cream liqueur to call its own. Since milk is one of its major exports, you may wonder what took so long. Luckily, our client picked up on the opportunity. By the time we were called in, they had nearly finalized their technique and were approaching distilleries and resellers to bring their product to market.</p>
                <p>While the drink is well-known and dates back at least half a century, its production process isn't as widely known even among distillers. It's a delicate mixture that requires a lot of care to be prepared and bottled. In the video, we delve into both the appeal of cream liqueur and the craftsmanship that makes it all possible.</p>
            </div>
        </section>

        <section id="project-concept">
            <div className="project__column">
                <Gallery array={[
                    { src: image.story01 },
                    { src: image.story03, device: 'desktop' },
                    { src: image.story04 },
                    { src: image.story07 },
                    { src: image.story14, device: 'desktop' },
                    { src: image.story16 }
                ]} />
                <hr />
                <h3>Concept</h3>
                <p>Since our intended audience are already skilled distillers we couldn't simply offer them a glossy video with no depth. We needed to communicate specifics, and that required us to become familiar with the science as well. As it turns out, the process can be explained in just three minutes of concise instructions.</p>
                <Gallery array={[
                    { src: image.story05 },
                    { src: image.story08 },
                    { src: image.story10, device: 'desktop' }
                ]} />
            </div>
        </section>

        <section id="project-design">
            <div className="project__column">
                <Carousel array={[
                    { src: image.video14 },
                    { src: image.video05 },
                    { src: image.video17 },
                    { src: image.video04 },
                    { src: image.video01 },
                ]} />
                <hr />
                <h3>Design</h3>
                <p>To support our technical breakdown, we designed the animation to be easy on the eyes. We drafted a mixture of the vivid brand colors and creamy qualities of the liqueur. Even though the animation delves deep into technical abstractions, we used tasteful off-whites and glazed surfaces to keep the liqueur on the viewer's mind.</p>
            </div>
        </section>

        <figure>
            <Image src={image.concept03} />
        </figure>

        <footer id="project-result">
            <div className="project__column">
                <h2>Best served in good company</h2>
                <hr />
                <h3>Result</h3>
                <p>Since the release of the video, Creamy Creation went through some changes and has broken ties with FrieslandCampina to continue on their own. As mentioned before: the production process is not to be underestimated, so rest assured they are back in the lab fine tuning the recipe. Let's hope they are close to perfecting their craft and, before long, the cream liqueur will make its debut on Dutch markets.</p>
            </div>
        </footer>

    </StyledArticle>;

}