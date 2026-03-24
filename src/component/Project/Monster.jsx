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
        --credits-color: #fff;
        --text-color: #fff;
    }

    #project-header::after,
    #project-header::before {
        content: '';

        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;
    }

    #project-header::after {
        background: url('/asset/image/project/monster/tile-eyes.png');
        background-position: 50% 50vw;
        background-repeat: repeat;
        background-size: 480px;
        mix-blend-mode: multiply;
        opacity: 0.1;
        width: 100%;
        height: 100%;

        z-index: -1;
    }

    #project-header::before {
        background: #2f294e;

        z-index: -2;
    }

    #project-header :is(b, h1),
    #project-header .credits__list-item :is(dd, svg) {
        color: #d462ab;
    }

    /* background */

    #project-background h2 {
        color: #d462ab;
    }

    /* design */

    #project-design {
        background-color: #bbdabe;
        padding-bottom: 0;
    }

    /* story */

    #project-story {
        background-color: #bbdabe;
    }

    #project-story h2 {
        color: #d462ab;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // Variable
    const image = imageRoot.project.monster;
    const video = videoRoot.project.monster;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <h1>Monsterpop</h1>
                <figure>
                    <Video src={video.final} poster={image.video05} />
                </figure>
                <p>The Imagine Fantastic Film Festival is an annual, Dutch event where audiences are treated to the newest horror, fantasy, and science-fiction films from across the world. In 2013 we entered into a competition for that year's official leader.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Imagine Film Festival 2013 Leader</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.imagine />
                }, {
                    title: 'Produced by',
                    child: <vector.logo.feedTheHorse />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }, {
                    title: 'Additional credits',
                    child: <>
                        <b>Animation</b> Danne Bakker, Niels Dekker & Natali Voorthuis<br />
                        <b>Concept design</b> Danne Bakker & Niels Dekker<br />
                        <b>Music</b> Danne Bakker & Natali Voorthuis<br />
                    </>
                }]} />
            </div>
        </header>

        <figure>
            <Image src={image.banner01} />
        </figure>

        <section id="project-background">
            <div className="project__column">
                <h2>The six equestrians</h2>
                <hr />
                <h3>Background</h3>
                <p>By 2013 I had been out of college for several years and recently became self-employed. To get more recognition in the field, several former classmates and I decided to band together under the name <b>Feed the Horse</b>. We were looking for a shared project that we could take on together so we could get some footing in the animation scene. As big movie buffs, we quickly noticed that the <b>Imagine Fantastic Film Festival</b> had an outstanding competition.</p>
                <figure>
                    <Image src={image.horse01} />
                </figure>
                <p>The IFFF plays niche movies to a select audience that enjoys being spooked, thrilled, and surprised. It has always been community focused and so they hosted a competition that gave stage to local filmmakers and creatives. For this year's festival they were looking for a short leader that would be shown before every main viewing. This would be a <i>great</i> opportunity to show off our combined skills.</p>
            </div>
        </section>

        <section id="project-design">
            <div className="project__column">
                <figure>
                    <Image src={image.concept02} />
                </figure>
                <hr />
                <h3>Design</h3>
                <p>A huge part of the festival is the community and it feels good to be among many like-minded people. This was amplified each viewing where people would loudly cheer and boo, and we wanted to capture this atmosphere in our video. When both <b>Niels</b> and <b>Danne</b> started sketching out a wild selection of monsters and ghouls we knew we were on the right track.</p>
                <figure>
                    <Image src={image.concept01} />
                </figure>
            </div>
        </section>

        <section id="project-story">
            <div className="project__column">
                <h2>Basically, we wanted to draw lots and lots of monsters</h2>
                <hr />
                <h3>Story</h3>
                <p>Since the deadline was fast approaching and we needed to get to production, we cut our concept phase short and settled on a simple plot. The audience would get to see the film festival through a black mirror, where the visitors would be transformed into magnificent creatures. We would follow a young couple, a handsome vampire and his lovely gorgon girlfriend, as they got themselves some snacks and settled into their seats for the next show.</p>
                <Gallery array={[
                    { src: image.story01 },
                    { src: image.story02 },
                    { src: image.story03 },
                    { src: image.story06 },
                    { src: image.story08 },
                    { src: image.story10 },
                ]} />
            </div>
        </section>

        <footer id="project-result">
            <div className="project__column">
                <Carousel array={[
                    { src: image.video06 },
                    { src: image.video01 },
                    { src: image.video03 },
                    { src: image.video04 },
                    { src: image.video08 },
                ]} />
                <hr />
                <h3>Result</h3>
                <p>We rushed through production and only barely made the delivery date. Over the weekend <b>Danne</b> and <b>Natali</b>, who at that time had only little experience with digital music making, composed a quirky and catchy tune that fit perfectly. We threw it all together the next day and sent in our film.</p>
                <p>While we were waiting for the jury to reach their verdict we looked through the other entries. Among them were several very impressive, professionally made productions, and it had us wondering if we were even in the right league to compete. Imagine our surprise when we were invited the next week to receive the nomination ourselves.</p>
                <figure>
                    <Image src={image.photo01} />
                    <figcaption>Niels (left), Natali (right), and me showing off our hefty Time Capsule Award.</figcaption>
                </figure>
                <p>We had a great time working on this production and I am very proud of all the creativity and hard work our team delivered in such a short time. Sadly, Feed the Horse didn't survive the year. But my former teammates went on to form a new collective named Brontomus. You can check out their wonderful portfolio here: <a href="https://cargocollective.com/brontomus" target="_blank">brontomus.com</a></p>
            </div>
        </footer>

    </StyledArticle>;

}