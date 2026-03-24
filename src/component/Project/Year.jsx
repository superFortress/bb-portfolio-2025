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

// Function
import useClient from '../../function/hook/useClient';

// Module
import styled from 'styled-components';

/* S T Y L E D
* * * * * * */

const StyledArticle = styled.article`

    /* header */

    #project-header {
        --credits-color: #fff;
        --text-color: #fff;

        background: #000;
    }

    /* background */

    #project-background {
        background-image: url("/asset/image/utility/tile-noise-light.jpg");
        background-repeat: repeat;
        background-size: 320px;
    }

    /* concept */

    #project-concept {
        --rule-color: #fff;
        --text-color: #fff;
        
        background: radial-gradient(
            circle,
            #333,
            #111);
    }

    /* design */

    #project-design {
        background-image: url("/asset/image/utility/tile-noise-light.jpg");
        background-repeat: repeat;
        background-size: 320px;
    }

    /* music */

    #project-music {
        --rule-color: #fff;
        --text-color: #fff;

        background: #000;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // State
    const client = useClient();

    // Variable
    const image = imageRoot.project.year;
    const video = videoRoot.project.year;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <h1>Year in Review</h1>
                <figure>
                    <Video src={video.final} poster={image.video10} />
                </figure>
                <p>We are taken through the dramatic ups and downs of an annual financial report during a dull PowerPoint presentation. This is a proof of concept animation that I made over the span of a week.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Year in Review</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.vocol />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }, {
                    title: 'Additional credits',
                    child: <>
                        <b>Music</b> Suddenly Time Told
                    </>
                }]} />
            </div>
        </header>

        <section id="project-background">
            <div className="project__column">
                <figure>
                    <Image src={image.element01} />
                </figure>
                <hr />
                <h3>Background</h3>
                <p>After several months of back-to-back assignments, I suddenly found myself with a week off. At the same time, a popular animation festival announced a call for entries. As I was eager to compete, I quickly began brainstorming a small project of my own. <i>But where to start?</i></p>
            </div>
        </section>

        <section id="project-concept">
            <div className="project__column">
                <figure>
                    <Image src={image.video01} />
                </figure>
                <hr />
                <h3>Concept</h3>
                <p>With only seven days left, coming up with a thrilling story wasn't even on my list. Instead, I went for a <i>design first</i> approach. What would it look like if I only drew lines and shapes, reused the same design over and over again, and left out colors altogether? Exactly. It would look like an Excel sheet.</p>
                <Gallery array={[
                    { src: image.design04, onMobile: false },
                    { src: image.design05 },
                    { src: image.design08 }
                ]} />
            </div>
        </section>

        <section id="project-design">
            <div className="project__column">
                <figure>
                    <Image src={image.design03} />
                </figure>
                <hr />
                <h3>Design</h3>
                <p>I made many rough sketches on day one and finished the final designs the next. My inspiration came primarily from my family's very first computer: a Macintosh Performa 5200. Something about its clean and very clickable interface strongly appeals to me, and I was glad to incorporate part of it in the animation.</p>
                <Gallery array={[
                    { src: image.video02, device: 'desktop' },
                    { src: image.video11 }
                ]} />
            </div>
        </section>

        <section id="project-music">
            <div className="project__column">
                <h2>I'll just wait for the beat to kick in.</h2>
                <figure>
                    <Image src={image.video13} />
                </figure>
                <h3>Music</h3>
                <p>It's often goes overlooked how much time is required for proper sound design. As I had none, I scrapped that process entirely and instead looked for supporting music to dictate the rhythm of the animation and tie the project together.</p>
                <p>I quickly discovered this wonderful track <i>Nocture</i> by <b>Suddenly Time Told</b> which tone and length fit perfectly what I had in mind. Special thanks goes out to him for making this project possible.</p>
            </div>
        </section>

        <footer id="project-result">
            <div className="project__column">
                <figure>
                    <Image src={image.design01} />
                </figure>
                <hr />
                <h3>Result</h3>
                <p>While my animation got rejected by the festival about as swiftly as I had made it, I had a lot of fun working on this project and am pleased to include it in my portfolio.</p>
            </div>
        </footer>

    </StyledArticle>;

}