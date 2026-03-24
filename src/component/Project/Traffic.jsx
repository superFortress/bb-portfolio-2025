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
        background: #fff;
    }

    #project-header :is(b, h1),
    #project-header .credits__list-item svg,
    #project-header .credits__list-item:first-child dd {
        color: #c63137;
    }

    /* briefing */

    #project-briefing {
        background: #fff;
    }

    /* presentation */

    #project-presentation {
        background: #bec3b8;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // Variable
    const image = imageRoot.project.traffic;
    const video = videoRoot.project.traffic;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <h1>Traffic</h1>
                <figure>
                    <Video src={video.final} poster={image.video05} />
                </figure>
                <p>We experience life on the streets of Tehran through the eyes of eight-year-old Mahsa. She makes a living selling charms amidst the traffic that overflows Iran's capital.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Traffic in Tehran</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.tavaana />
                }, {
                    title: 'Produced by',
                    child: <vector.logo.talkthick />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }, {
                    title: 'Additional credits',
                    child: <>
                        <b>Project lead</b> Mostafa Heravi<br />
                        <b>Music</b> Kai Engel
                    </>
                }]} />
            </div>
        </header>

        <figure>
            <Image cover src={image.video11} />
        </figure>

        <section id="project-briefing">
            <div className="project__column">
                <h2>Stories with heart</h2>
                <hr />
                <h3>Briefing</h3>
                <p>Under the guidance of filmmaker <b>Mostafa Heravi</b> I created several short, narrative animations for the Iranian organization <b>Tavaana</b>. These reflect on social issues such as the social disconnect between people and their neglect of nature. Each video contains a moralistic tale that shows how these negative traits affect society, and how they could be resolved. This way, each story ends with a positive message.</p>
            </div>
        </section>

        <section id="project-story">
            <div className="project__column">
                <Gallery array={[
                    { src: image.video16 },
                    { src: image.video17 }
                ]} />
                <hr />
                <h3>Story</h3>
                <p>Tehran is a city of millions where the divide between rich and poor is painfully present. Under its impressive skyline, which is only outdone by the surrounding mountains, many thousands of people add to the never ending traffic. It is here where the class differences are most evident, as peddlers will approach cars with goods and services. Some sell food, others trinkets, and many simply beg for a small handout.</p>
                <figure>
                    <Image src={image.video18} />
                </figure>
            </div>
        </section>

        <section id="project-presentation">
            <div className="project__column">
                <Gallery array={[
                    { src: image.story01 },
                    { src: image.story03 },
                    { src: image.story06 },
                    { src: image.story07 },
                    { src: image.story05 },
                    { src: image.story10 },
                    { src: image.story11 },
                    { src: image.story12 },
                    { src: image.story13 },
                    { src: image.story15 },
                    { src: image.story18 },
                    { src: image.story19 }
                ]} />
                <hr />
                <h3>Audience</h3>
                <p>The original video was accompanied by a poem in Farsi. With the help of Mostafa, I could connect the beats and themes of the poem to the animation. Meanwhile, we made sure that the video would also be understood by a larger audience which, much like myself, may not speak a word of Farsi.</p>
            </div>
        </section>

        <footer id="project-result">
            <div className="project__column">
                <figure>
                    <Image src={image.concept01} />
                </figure>
                <hr />
                <h3>Result</h3>
                <p>It was a thrill working in a foreign language. It lead us to creating universal imagery that could be understood without the need for words at all. The short film was received well and has been watched by thousands of Iranian people who hopefully have taken its message to heart.</p>
            </div>
        </footer>

    </StyledArticle>;

}