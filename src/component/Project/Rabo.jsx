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
        background: #6edce7;
    }

    /* concept */

    #project-concept {
        background: #dcdbce;
    }

    /* design */

    #project-design {
        background: #dcdbce;
        padding-top: 0;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // Variable
    const image = imageRoot.project.rabo;
    const video = videoRoot.project.rabo;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <h1>Jaarverslag 2017</h1>
                <figure>
                    <Video src={video.final} poster={image.video06} />
                </figure>
                <p>As we near the end of another successful year for Rabobank, we reflect on their achievements and set our eyes on the goals and expectations for the future.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Maatschap&shy;pelijk Jaar&shy;verslag 2017</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.rabobank />
                }, {
                    title: 'Produced by',
                    child: <vector.logo.in60seconds />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }, {
                    title: <>This production was made during my work relationship at in60seconds.</>
                }]} />
            </div>
        </header>

        <section id="project-briefing">
            <div className="project__column">
                <figure>
                    <Image src={image.video04} />
                </figure>
                <hr />
                <h3>Briefing</h3>
                <p>In this short animation, we cover many hopes and dreams — some already realized and others not far behind. As 2016 drew to a close, <b>Rabobank</b> wanted to reach out and express their gratitude to both staff and customers and to share last year's accomplishments and their aspirations for the next.</p>
            </div>
        </section>

        <section id="project-concept">
            <div className="project__column">
                <Gallery array={[
                    { src: image.video05 },
                    { src: image.video07 }
                ]} />
                <hr />
                <h3>Concept</h3>
                <p>Beyond financial goals and personal gains, we wanted to emphasize Rabobank's effect on society. Instead of relying on numerous graphs, which wouldn't have made for an engaging video, we chose to bring the narrative closer to the people. We asked ourselves: "How have they experienced these positive changes?"</p>
                <figure>
                    <Image src={image.video03} />
                </figure>
            </div>
        </section>

        <section id="project-design">
            <div className="project__column">
                <Gallery array={[
                    { src: image.story03 },
                    { src: image.story08 },
                    { src: image.story01 },
                    { src: image.story07 },
                    { src: image.story09 },
                    { src: image.story10 }
                ]} />
                <hr />
                <h3>Design</h3>
                <p>We recently had a brand new brand design approved. This included a bright new color palette and new character designs. As with any major update, we were still facing some teething problems. Fortunately, this project provided us with an ideal opportunity to put the new design to the test and refine our approach in the process.</p>
            </div>
        </section>

        <footer id="project-result">
            <div className="project__column">
                <figure>
                    <Image src={image.video10} />
                </figure>
                <hr />
                <h3>Result</h3>
                <p>We took some risks by straying off Rabobank's regular corporate approach and focusing instead on the human element of the brand, but this payed off well. The new design worked wonderfully in favor of both their message and image. It allowed us to explore the brand through a new lens and set the stage for much more to come.</p>
            </div>
        </footer>

    </StyledArticle>;

}