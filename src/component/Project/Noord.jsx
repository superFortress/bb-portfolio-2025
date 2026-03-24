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

    /* design */

    #noord-design {
        background: #dadac8;
        padding-bottom: 0;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // Variable
    const image = imageRoot.project.noord;
    const video = videoRoot.project.noord;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="noord-header">
            <div className="project__column">
                <h1>NoordKRACHT</h1>
                <figure>
                    <Video src={video.final} poster={image.video01} />
                </figure>
                <p>Noordkwartier is the link between several primary schools in the North of the Netherlands. With the help of NoordKRACHT, that bond will be made even stronger and improve education along the way.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Noord&shy;KRACHT</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.noordkwartier />
                }, {
                    title: 'Produced by',
                    child: <vector.logo.tupilakStudio />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }, {
                    title: 'Additional credits',
                    child: <>
                        <b>Project lead</b> Laurens Verwijs<br />
                        <b>Animation</b> Laurens Verwijs
                    </>
                }]} />
            </div>
        </header>

        <figure>
            <Image src={image.design02} />
        </figure>

        <section id="noord-briefing">
            <div className="project__column">
                <h2>Teachers teaching students teaching teachers</h2>
                <hr />
                <h3>Briefing</h3>
                <p>The Christian school organization <b>Noordkwartier</b> is responsible for eight primary schools in their district. They pursue several principles including diversity, responsibility, and interconnectivity. This approach allows for the schools to share experiences with one another, while each preserves their unique character and goals.</p>
                <figure>
                    <Image src={image.design05} />
                </figure>
                <p>Inherent to this is the belief that <i>everyone is unique</i>. Each school, each teacher, and of course each and every child. This philosophy aims to uplift both staff and student to set their own goals and reach their full potential. To reinforce this, Noordkwartier introduces <b>NoordKRACHT</b>: a program that hands out the tools to make this belief become a reality.</p>
            </div>
        </section>

        <figure>
            <Image src={image.design10} />
        </figure>

        <section id="noord-story">
            <div className="project__column">
                <hr />
                <h3>Story</h3>
                <p><b>Laurens Verwijs</b> from <b>Tupilak Studio</b> had been called in to translate this message to an animation. When I joined he was putting the finishing touches to the script. He asked if I would assist him with drawing up a storyboard and taking on the visual design. Together, we reviewed his script and came up with a visual language for the video.</p>
                <Gallery array={[
                    { src: image.story01, device: 'desktop' },
                    { src: image.story02, device: 'desktop' },
                    { src: image.story03, device: 'desktop' },
                    { src: image.story04 },
                    { src: image.story05 },
                    { src: image.story06 },
                    { src: image.story07 },
                    { src: image.story08 },
                    { src: image.story09 },
                ]} />
                <p>His script put collaboration first and foremost, where the student's participation in the classroom felt just as important as that of the teacher. If we could show them together, solving problems side by side, that would demonstrate the harmonious environment NoordKRACHT was all about.</p>
            </div>
        </section>

        <section id="noord-design">
            <div className="project__column">
                <Carousel array={[
                    { src: image.design09 },
                    { src: image.design07 },
                    { src: image.design05 },
                    { src: image.design08 }
                ]} />
                <hr />
                <h3>Design</h3>
                <p>The theme of teamwork had to be also present in the visuals. We did this by showing many hands, at times literally, planning and building shared projects. I purposefully made some of the designs a little rough around the edges with notes, tape, and pencils scattered across the screen. But through the mess we can see ideas forming and in the end, it all comes neatly together.</p>
                <figure>
                    <Image src={image.element02} />
                </figure>
            </div>
        </section>

        <footer id="noord-result">
            <div className="project__column">
                <h2>In colorful harmony</h2>
                <figure>
                    <Image src={image.design01} />
                </figure>
                <hr />
                <h3>Result</h3>
                <p>Throughout the project we aimed for a light-hearted tone, which we communicated with four lively characters whose participation is constantly encouraged and celebrated. While the message was geared primarily towards parents and staff, we made sure to put everyone in their best light. That way, both teacher and student would feel included and motivated to make NoordKRACHT as success.</p>
            </div>
        </footer>

    </StyledArticle>;

}