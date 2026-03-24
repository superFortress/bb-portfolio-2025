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
        background: #60a792;
    }

    /* concept */

    /* design */

    #project-design {
        background: #86cfa4;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // Variable
    const image = imageRoot.project.hoofd;
    const video = videoRoot.project.hoofd;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <h1>Hoofdkamer</h1>
                <figure>
                    <Video src={video.final} poster={image.video06} />
                </figure>
                <p>We often forget that schools are not just a learning environment for the students; the members of staff often follow their own career trajectories as well. This video has a special message for those at the very top.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>VO-raad: Hoofdkamer</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.voRaad />
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

        <section id="project-briefing">
            <div className="project__column">
                <h2>On top of the mountain</h2>
                <hr />
                <h3>Briefing</h3>
                <p>Hard-working, charismatic, and often very short on time. The <i>high school principal</i> is an experienced professional who, nonetheless, finds themselves surrounded by teenagers every day of the week. They fulfill many roles that require them to empathize with people of all ages, backgrounds, and convictions.</p>
                <p>Yet, all this responsibility surely comes at a price. When the weight of an entire school rests on your shoulders, who is there to support you? Does it get lonely at the top? The <b>VO-raad</b>, an organization that supports secondary schools throughout the country, offers a helping hand.</p>
                <Carousel array={[
                    { src: image.video11 },
                    { src: image.video10 },
                    { src: image.video12 }
                ]} />
                <p>With their new program <b>Hoofdkamer</b> they create opportunities for principals to meet with each other, share experiences, and find support.  Because who are more qualified and more understanding than your peers? This way, principals find out that they don't have to carry their responsibilities alone and that they too are allowed compassion and encouragement.</p>
            </div>
        </section>

        <figure>
            <Image src={image.concept02} />
        </figure>

        <section id="project-concept">
            <div className="project__column">
                <Gallery array={[
                    { src: image.story01 },
                    { src: image.story02 },
                    { src: image.story03, device: 'desktop' },
                    { src: image.story04 },
                    { src: image.story05, device: 'desktop' },
                    { src: image.story06, device: 'desktop' },
                    { src: image.story07 },
                    { src: image.story08 },
                    { src: image.story09 }
                ]} />
                <hr />
                <h3>Concept</h3>
                <p>Since the project itself offered support, we felt that our animation should echo that. So, instead of bluntly advertising Hoofdkamer and commanding principals to participate, we start the animation by sketching a picture of various principals offering support to students and staff alike. And then we pose the question: where do you go when you need support? This leads to the natural conclusion that principals, too, deserve a listening ear.</p>
            </div>
        </section>

        <section id="project-design">
            <div className="project__column">
                <h2>A personal portrait</h2>
                <figure>
                    <Image src={image.video04} />
                </figure>
                <hr />
                <h3>Design</h3>
                <p>To represent principals of all shapes and sizes we designed a diverse cast of characters. Men and women, short and tall, young and old. Not only did we want them to feel represented, we also wanted them to know that this was an opportunity to meet a wide variety of people in their field who all share a common desire to excel at their job while uplifting those around them.</p>
            </div>
        </section>

        <figure>
            <Image src={image.video03} />
        </figure>

        <footer id="project-result">
            <div className="project__column">
                <Carousel boxShadow array={[
                    { src: image.video01 },
                    { src: image.video02 },
                    { src: image.video08 }
                ]} />
                <hr />
                <h3>Result</h3>
                <p>With bold and colorful characters, the animation turned out very charming. I think we managed to capture the condition of the principal well. We show that their experience and effort do not go unnoticed, and that, even though they are at the top, there is always room for growth. We hope that in years to come Hoofdkamer will lend many of them a hand and a shoulder whenever they're in need.</p>
            </div>
        </footer>

    </StyledArticle>;

}