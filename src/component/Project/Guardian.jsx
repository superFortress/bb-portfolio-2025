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

// Function
import useClient from '../../function/hook/useClient';

// Module
import styled from 'styled-components';

/* S T Y L E D
* * * * * * */

const StyledArticle = styled.article`

    /* header */

    #project-header {
        background: radial-gradient(
            circle closest-corner at 50% 40vh, 
            #0080ff 40%, 
            #0553e0);
    }

    #project-header :is(b, h1),
    #project-header .credits__list-item svg,
    #project-header .credits__list-item:first-child dd {
        color: #ffcf32;
    }

    /* story */

    #project-story {
        background: #bebeb8;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // State
    const client = useClient();

    // Variable
    const image = imageRoot.project.guardian;
    const video = videoRoot.project.guardian;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <h1>Phone Guardian</h1>
                <figure>
                    <Video src={video.final} poster={image.thiefDesktop04} />
                </figure>
                <p>Phone Guardian provides a no-nonsense VPN service for those who care about their data and privacy. In this advertisement we show you how to scare off all those nasty hackers once and for all.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Phone Guardian Mobile Ads</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.dataAi />
                }, {
                    title: 'Produced by',
                    child: <vector.logo.tupilakStudio />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }, {
                    title: 'Additional credits',
                    child: <>
                        <b>Project lead</b> Laurens Verwijs
                    </>
                }]} />
            </div>
        </header>

        <section id="project-briefing">
            <div className="project__column">
                <h2>The virtual dog at your digital doorstep</h2>
                <hr />
                <h3>Briefing</h3>
                <p>Everybody has had the experience of losing their phone: "I held it just a moment ago. Did I put it in my pocket? Did I leave it at the restaurant?" Not many people consider that their files may be at danger even when their phone is safely tucked away. And even fewer know what to do to prevent that from ever happening.</p>
                <Gallery array={[
                    { src: image.thiefStory01 },
                    { src: image.thiefStory02 },
                    { src: image.thiefStory03 },
                    { src: image.thiefStory04 },
                    { src: image.thiefStory05 },
                    { src: image.thiefStory06 }
                ]} />
                <p>With <b>Phone Guardian</b>, those worries belong to the past. The app provides a simple solution even to those of us who are less tech savvy. With just a couple clicks you can secure your device and lock out all unwanted attention. Though you may still want to avoid any unsolicited emails and unfamiliar networks &mdash; just to be safe.</p>
            </div>
        </section>

        <figure>
            <Image src={image.thiefDesktop05} />
        </figure>

        <section id="project-design">
            <div className="project__column">
                <h2>Your new best friend</h2>
                <hr />
                <h3>Design</h3>
                <p>Coincidentally, Phone Guardian is also the name of the app's mascot. A big dog with big responsibilities. When we joined the project his design had already been finalized. It was up to us to animate him and give him the distinctive traits as both a friend and a protector. We wanted him to quickly gain the trust of potential users and scare off any and all hopeful hackers.</p>
                <Gallery columns={3} array={[
                    { src: image.design01 },
                    { src: image.design02 },
                    { src: image.design03 }
                ]} />
            </div>
        </section>

        <figure>
            <Image src={image.thiefDesktop03} />
        </figure>

        <section id="project-story">
            <div className="project__column">
                <h2>Coders around every corner</h2>
                <hr />
                <h3>Story</h3>
                <p>With producer <b>Laurens Verwijs</b> we crafted two separate videos. Both of them revolve around the same, basic concept: a hacker tries to infiltrate a phone but instead finds themselves face to face with the formidable Phone Guardian. Although simple, the storyline effectively communicates the app's purpose and ease of use.</p>
                {client.onDesktop && <Gallery columns={3} array={[
                    { src: image.hackerStory01 },
                    { src: image.hackerStory04 },
                    { src: image.hackerStory02 },
                    { src: image.hackerMobile01 },
                    { src: image.hackerMobile02 },
                    { src: image.hackerMobile04 }
                ]} />}
                {client.onMobile && <Gallery columns={2} array={[
                    { src: image.hackerStory01 },
                    { src: image.hackerMobile01 },
                    { src: image.hackerStory04 },
                    { src: image.hackerMobile02 },
                    { src: image.hackerStory02 },
                    { src: image.hackerMobile04 }
                ]} />}
            </div>
        </section>

        <footer id="project-result">
            <div className="project__column">
                <figure>
                    <Image src={image.thiefDesktop07} />
                </figure>
                <hr />
                <h3>Result</h3>
                <p>Since the app market is one of the most competitive spaces today, it is important to stand out. We were in luck that there is relative little competition when it comes to VPNs. Still, we tried to make our videos <b>pop</b>. We hope that our design choices and animation did as much, and judging by the millions of downloads on Google Play we think we did a good job.</p>
            </div>
        </footer>

    </StyledArticle>;

}