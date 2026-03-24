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

    #nova-header {
        background: #deded8;
    }

    #nova-header :is(b, h1),
    #nova-header .credits__list-item svg,
    #nova-header .credits__list-item:first-child dd {
        color: #1a5ed6;
    }

    /* concept */

    #nova-concept {
        padding-top: 0;
    }

    /* story */
    
    #nova-story {
        background: #a8a7a0;
    }

    /* design */

    #nova-design {
        background: #deded8;
    }

    #nova-design {
        padding-bottom: 0;
    }


`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // Variable
    const image = imageRoot.project.nova;
    const video = videoRoot.project.nova;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="nova-header">
            <div className="project__column">
                <h1>Onderwijs&shy;logistiek</h1>
                <figure>
                    <Video src={video.final} poster={image.video04} />
                </figure>
                <p>Onderwijslogistiek is a scheduling tool that helps both students and teachers maintain their daily routines. To ease the transition into this new software, we made this introductory video.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Onderwijs&shy;logistiek</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.novaCollege />
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
                        <b>Music & sound</b> Elephant Ears
                    </>
                }]} />
            </div>
        </header>

        <section id="nova-briefing">
            <div className="project__column">
                <hr />
                <h3>Briefing</h3>
                <p><b>Nova College</b> has multiple locations throughout the Netherlands where it offers studies in skilled labor, logistics, and many other fields. To regulate many hundreds of students and staff members on a daily basis, they were using an intricate scheduling system that could plan ahead and neatly schedule and book everyone individually.</p>
                <figure>
                    <Image src={image.video01} />
                </figure>
                <p>However, the system started showing its age, and the board decided it was time for an update: <b>Onderwijs&shy;logistiek</b>. This update had since been developed, tested, and was ready for implementation. But because everyone had become so accustomed to the old system, it was going to need some convincing. That's why we were tasked with communicating its many upsides so that staff would be more willing to make the switch.</p>
            </div>
        </section>

        <section id="nova-concept">
            <div className="project__column">
                <figure>
                    <Image src={image.video07} />
                </figure>
                <hr />
                <h3>Concept</h3>
                <p>We wanted to inform teachers about the benefits of the new software. Recognizing that instructional videos can often be tedious, we took a different approach and addressed their concerns directly: <i>It seems no matter how hard you work, the paperwork keeps piling up. What if we took that off your hands so you can return your full attention to the classroom?</i></p>
            </div>
        </section>

        <section id="nova-story">
            <div className="project__column">
                <Gallery array={[
                    { src: image.story01 },
                    { src: image.story04 },
                    { src: image.story11 },
                    { src: image.story10, device: 'mobile' },
                    { src: image.story10, device: 'desktop' },
                    { src: image.story07 },
                    { src: image.story08 },
                    { src: image.story03, device: 'desktop' },
                    { src: image.story12 },
                    { src: image.story14 }
                ]} />
                <hr />
                <h3>Story</h3>
                <p>In all honesty, as creatives we didn't understand all the complexities of the new system either. So, we moved away from technicalities and put our focus on the bigger picture. We introduce a teacher and take her on a journey.</p>
                <p>The messy desk became a reflection of the teacher's divided attention and the dusty blackboard of her complex schedule. Throughout the animation we can see her literally wipe the slate clean and start the day afresh.</p>
            </div>
        </section>

        <section id="nova-design">
            <div className="project__column">
                <Gallery array={[
                    { src: image.color05 },
                    { src: image.color04 },
                    { src: image.color10 },
                    { src: image.color07, device: 'mobile' }
                ]} />
                <hr />
                <h3>Design</h3>
                <p>Since the topic itself is about overcoming daily stresses, we didn't want to bear the viewer down with a somber image. I therefore chose a bright and vivid color palette. With energetic animation we carry the teacher from a difficult start towards a clear solution. And we show that with her cooperation we can make big improvements that will uplift both her and the classroom.</p>
                <figure>
                    <Image src={image.element03} />
                </figure>
            </div>
        </section>

        <footer id="nova-result">
            <div className="project__column">
                <figure>
                    <Image src={image.video10} />
                </figure>
                <hr />
                <h3>Result</h3>
                <p>While nearing the end of production we were joined by <b>Elephant Ears</b> who specialize in music and sound effects. Their audio added weight and forward momentum to the animation that really underlined the message. Overall, I believe we did a good job communicating the benefits of the new system while still being considerate of the teacher's position and their responsibilities.</p>
            </div>
        </footer>

    </StyledArticle>;

}