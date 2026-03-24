/* I M P O R T
* * * * * * */

// Asset
import imageRoot from '../../asset/image';
import vector from '../../asset/vector';

// Element
import Carousel from '../../element/Carousel';
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

    #project-header {
        background: #91cfeb;
    }

    /* briefing */

    #project-briefing01 h2 {
        color: #0678d7;
    }

    #project-briefing02 {
        padding-top: 0;
    }

    #project-briefing02 .gallery {
        width: var(--app-width-large);

        margin: 0 auto;
    }

    /* poster */

    #project-poster {
        background: #173667;
    }

    #project-poster .image {
        width: 80%;
        max-width: 800px;
    }

    /* design */

    #project-design {
        background: #fff;
    }

    /* result */

    #project-result h2 {
        color: #0678d7;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // State
    const client = useClient();

    // Variable
    const image = imageRoot.project.escience;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <h1>eScience Center</h1>
                <figure>
                    <Image src={image.design02b} />
                </figure>
                <p>The Netherlands eScience Center supports scientists in their research. To better communicate their capabilities I was asked to provide them with a series of illustrations visualizing these processes.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>eScience Center Branding</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.escienceCenter />
                }, {
                    title: 'Produced by',
                    child: <vector.logo.raadhuis />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }]} />
            </div>
        </header>

        <section id="project-briefing01">
            <div className="project__column">
                <Carousel boxShadow array={[
                    { src: image.sketchDesign01 },
                    { src: image.sketchDesign02 },
                    { src: image.sketchDesign03 },
                    { src: image.sketchDesign04 }
                ]} />
                <h2>The right set of tools</h2>
                <hr />
                <h3>Briefing</h3>
                <p>Scientific research becomes more complicated with each day. Data comes in from a dozen different sources and needs to be adequately and expertly processed to reach reliable models and conclusions. To this end, the modern scientist is aided by a variety of digital tools. Unlike the typical desk job, simply opening another table in Excel often isn't sufficient.</p>
                <p>The <b>Netherlands eScience Center</b> develops and repurposes software to specifically fit individual studies. This takes away the need to constantly reinvent the wheel and allows scientists to delve into their work unhindered. However, to properly operate these tools, understanding at least part of their architecture is still important.</p>
            </div>
        </section>

        <aside id="project-briefing02">
            <Gallery columns={client.onDesktop ? 5 : 3} array={[
                { src: image.sketchIcon01a },
                { src: image.sketchIcon01b },
                { src: image.sketchIcon01c },
                { src: image.sketchIcon01d },
                { src: image.sketchIcon02a },
                { src: image.sketchIcon02b },
                { src: image.sketchIcon03a },
                { src: image.sketchIcon03b },
                { src: image.sketchIcon03c },
                { src: image.sketchIcon04a },
                { src: image.sketchIcon04b },
                { src: image.sketchIcon04d },
                { src: image.sketchIcon05a },
                { src: image.sketchIcon06a },
                { src: image.sketchIcon06b }
            ]} />
        </aside>

        <aside id="project-poster">
            <figure>
                <Image src={image.design01a} />
            </figure>
        </aside>

        <section id="project-design">
            <div className="project__column">
                <h2>Connecting the dots</h2>
                <hr />
                <h3>Design</h3>
                <p>I was called in to help communicate the functionality and benefits of the software. While illustrations by themselves cannot convey the entire story, they go a long way in painting the initial picture. We wanted to show how data is parsed, combined, split, reorganized, compared, dismissed, or otherwise altered to better understand its application. Though, catching all that in a single image is easier said than done.</p>
                <Gallery color="var(--color-gray1)" array={[
                    { src: image.icon01b },
                    { src: image.icon01a },
                    { src: image.icon03c },
                    { src: image.icon02a },
                    { src: image.icon04b },
                    { src: image.icon05a }
                ]} />
                <p>We went through a wide set of sketches, revised many of them, and completely scrapped and redid several others. In the process we racked up a large sum of visual analogues and metaphors to best communicate these complicated concepts. Luckily, the client was quick to review and reply to the drawings I sent over and we soon settled on the illustrations that best displayed their software's strengths.</p>
            </div>
        </section>

        <footer id="project-result">
            <div className="project__column">
                <figure>
                    <Image src={image.design03} />
                </figure>
                <h2>The hand that pushes the button</h2>
                <hr />
                <h3>Result</h3>
                <p>With so much talk of data, it was also important to keep an eye on the human factor. The Netherlands eScience center works with many experts who get personally involved with any project that crosses their desk. We wanted to show that behind all the tools and algorithms, there was a team of dedicated professionals who will personally reach out and support your research.</p>
                <p>To wrap up our set of icons, we included a handful of larger illustrations that showed professionals coming together to strategize on how to best approach their research. I think that both the icons and illustrations complement each other well, and show that The Netherlands eScience Center not only understands the research but the needs of those doing the research as well.</p>
            </div>
        </footer>

    </StyledArticle>;

}