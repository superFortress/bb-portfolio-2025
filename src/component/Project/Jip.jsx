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

// Module
import styled from 'styled-components';

/* S T Y L E D
* * * * * * */

const StyledArticle = styled.article`

    /* header */

    #project-header {
        background: #dadbd6;
    }

    /* poster */

    #project-poster {
        background: linear-gradient(
            #dadbd6 32%,
            transparent 32%);
        min-height: 0;
    }

    #project-poster .image {
        max-width: 1280px;
    }

    /* concept */

    #project-concept {
        background: #dadbd6;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // Variable
    const image = imageRoot.project.jip;
    const video = videoRoot.project.jip;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <h1>Jipchain</h1>
                <figure>
                    <Video src={video.final} poster={image.video04} />
                </figure>
                <p>Jip is a young start-up that collects, processes, and archives your administration. But how do they make this all possible? Watch the animation and find out.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Jipchain</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.jip />
                }, {
                    title: 'Produced by',
                    child: <vector.logo.fj />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }, {
                    title: 'Additional credits',
                    child: <>
                        <b>Project lead</b> Jasper Fraikin
                    </>
                }]} />
            </div>
        </header>

        <figure id="project-poster">
            <Image src={image.element02} />
        </figure>

        <section id="project-briefing">
            <div className="project__column">
                <hr />
                <h3>Briefing</h3>
                <p>We live in a time of automation, so why then do you still spend hours every week moving around numbers in an Excel sheet? And simply inserting a few "handy" formulas here and there is hardly going to optimize your workflow. If you <i>truly</i> want to get a handle on your administration we will have to make some drastic changes.</p>
                <Gallery columns={2} array={[
                    { src: image.video01 },
                    { src: image.photo01 }
                ]} />
                <p>That's why <b>Jip</b> developed the <b>Jipchain</b>. A handy administrative service that will gladly take this burden off your weary hands. While much of their processes are automated, they also have trained professionals on standby to safeguard a smooth and confidential handling of your files. Your administration will be in good hands, away from prying eyes, and out of your hair.</p>
                <figure>
                    <Image src={image.video02} />
                </figure>
            </div>
        </section>

        <section id="project-concept">
            <div className="project__column">
                <Gallery array={[
                    { src: image.story01 },
                    { src: image.story02 },
                    { src: image.story03 },
                    { src: image.story04, device: 'mobile' }
                ]} />
                <hr />
                <h3>Concept</h3>
                <p>So far, we have overlooked one major actor: <b>Pip</b>, the office dog. He is a brown border collie and, as I've been told, a total sweetheart. While in reality most of the office work was done by software and staff, for the sake of the animation we pretended that Pip was in charge. And that he was doing an outstanding job.</p>
                <Gallery array={[
                    { src: image.story05, device: 'desktop' },
                    { src: image.story07 },
                    { src: image.story06 },
                    { src: image.story08 },
                    { src: image.story10, device: 'desktop' },
                    { src: image.story11 }
                ]} />
                <p>While our producer <b>FJ</b> wrote a short script outlining the Jipchain's functionality and application, I started drawing out every scene with Pip at the very center. Soon, the dog was running the show and guided potential customers step by step through the Jipchain. Which was a relief because without him, we would have nothing but piles of paper to show for.</p>
            </div>
        </section>

        <figure>
            <Image src={image.video01} />
        </figure>

        <footer id="project-result">
            <div className="project__column">
                <h2>Who's a good boy?</h2>
                <figure>
                    <Image src={image.video03} />
                </figure>
                <hr />
                <h3>Result</h3>
                <p>While the subject of paperwork doesn't quite speak to most people's imagination, Jip's positive attitude and Pip's natural charm easily carried the animation. Besides that, I believe that helping people avoid the headaches of Excel is a noble goal and it propelled me to draw up and animate this short little ad. We were all very pleased with the results.</p>
            </div>
        </footer>

    </StyledArticle>;

}