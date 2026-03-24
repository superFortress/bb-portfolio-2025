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
import Parallax from '../../element/Parallax';

// Function
import clamp from '../../function/math/clamp';
import useClient from '../../function/hook/useClient';

// Module
import styled from 'styled-components';

/* S T Y L E D
* * * * * * */

const StyledArticle = styled.article`

    /* header */

    #project-header {
        background: #f1efd3;
    }

    #project-header :is(b, h1),
    #project-header .credits__list-item svg,
    #project-header .credits__list-item:first-child dd {
        color: #df4d3e;
    }

    #project-header-vera {
        position: relative;
    }

    #project-header-vera::after {
        content: '👑';

        position: absolute;
        top: -8px;
        right: -7px;
        transform: rotate(17deg) scale(0.85);
    }

    /* briefing */

    #project-briefing h2 {
        color: #3f9f80;
    }

    /* design */

    #project-design {
        background: #f1efd3;
    }

    #project-design h2 {
        color: #3f9f80;
    }

    /* storyboard */

    #project-storyboard01 h2 {
        color: #3f9f80;
    }

    #project-storyboard02 {
        padding: 0;
    }

    #project-storyboard02 .project__column {
        width: var(--app-width-large);
    }

    /* production */

    #project-production {
        background: #fcc847;
    }
    
    #project-production ul {
        display: flex;
        flex-wrap: nowrap;
        gap: 20px;
    }

    /* result */

    #project-result h2 {
        color: #df4d3e;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // State
    const client = useClient();

    // Variable
    const image = imageRoot.project.rinkel;
    const video = videoRoot.project.rinkel;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <h1>De Geniale Rinkel</h1>
                <Carousel array={[
                    { src: video.ep01, poster: image.ep01.video05, caption: 'cock' },
                    { src: video.ep02, poster: image.ep02.video04 },
                    { src: video.ep03, poster: image.ep03.video02 },
                    { src: video.ep04, poster: image.ep04.video12 },
                    { src: video.ep05, poster: image.ep05.video11 },
                    { src: video.ep06, poster: image.ep06.video06 }
                ]} />
                <p><b>Hallo allemaal!</b> To help ASN Bank reach a younger audience we created this five part series about the young and clever <b>Rinkel</b>. Through his adventures we teach kids how to take better care of both the environment and their pocket money.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Rinkel: De Duurzame Uitvinder</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.asnBank />
                }, {
                    title: 'Produced by',
                    child: <vector.logo.selmore />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }, {
                    title: 'Additional credits',
                    child: <>
                        <b>Script</b> Lotte Ooms<br />
                        <b>Background art</b> Vera de <span id="project-header-vera">Koning</span><br />
                        <b>Voice acting</b> Lae Schäfer, Rosalie Lub, Erica Baatsen
                    </>
                }]} />
            </div>
        </header>

        <Parallax
            height={client.onDesktop
                ? clamp(client.viewport.width * 0.5, 480, 720) + 'px'
                : clamp(client.viewport.width * 0.55, 120, 320) + 'px'
            }
            array={[{
                src: image.ep01.video01,
                scale: 1.25, y: 5
            }]}
        />

        <section id="project-briefing">
            <div className="project__column">
                <h2>Lofty promises</h2>
                <hr />
                <h3>Kick-off</h3>
                <p>One afternoon, I received an unexpected phone call from the offices of <b>ASN Bank</b>. They were wondering if I could help them create an animated series. Could I? Generally, my work is such that I can do most by myself. But a series would require a script, storyboards, directing, editing, sound design, voice acting — we were going to need an entire crew!</p>
                <p>As I was thinking this over, ASN Bank was still patiently waiting on the other end of the line for my response. I told them that <b>I would love to</b>, and so we went to work.</p>
                <Gallery array={[
                    { src: image.client02 },
                    { src: image.client05 },
                    { src: image.client08 },
                    { src: image.client10 },
                    { src: image.client12 },
                    { src: image.client09 },
                    { src: image.client04 },
                    { src: image.client06 },
                ]} />
                <hr />
                <h3>Briefing</h3>
                <p>Besides banking, ASN Bank has a strong focus on environmental goals. They were developing a multitude of projects to better communicate this vision to younger audiences, ranging from blogs, to workshops, and of course the animated series.</p>
                <p>In the series we would follow the adventures of the creative Rinkel who lives with his family in the big forest. He makes friends, records his adventures, and comes up with ingenious inventions that help him safe both money and a little of the environment. And of course, we were hoping that his efforts would inspire his followers to do the same.</p>
            </div>
        </section>

        <Parallax
            height={client.onDesktop
                ? clamp(client.viewport.width * 0.5, 480, 720) + 'px'
                : clamp(client.viewport.width * 0.55, 120, 320) + 'px'
            }
            array={[{
                src: image.parallaxTreeDay01,
                scale: 1.2, y: 8, yOffset: -5
            }, {
                src: image.parallaxTreeDay02,
                y: 10, yOffset: 4
            }, {
                src: image.parallaxTreeDay03,
                y: 15, yOffset: 6
            }, {
                src: image.parallaxTreeDay04,
                scale: 1.5, y: 35
            }, {
                src: image.parallaxTreeDay05,
                scale: 2, y: 50
            }]}
        />

        <section id="project-design">
            <div className="project__column">
                <h2>How we drew up an entire forest</h2>
                <hr />
                <h3>Design</h3>
                <p>My first introduction to Rinkel came from <b>Lotte Ooms'</b> scripts. By the time I joined, she had already written three out of the five storylines. Each containing new locations, characters, and inventions. What grabbed me <i>the most</i> was her fun and witty dialogue, both between Rinkel and his friends, as well as the many monologues to his audience about all the ideas that kept him occupied.</p>
                <Gallery array={[
                    { src: image.sketch02 },
                    { src: image.sketch03 }
                ]} />
                <p>Inspired by Lotte's scripts, I quickly sketched what I imagined Rinkel should look like: energetic, a little brash, but overwhelmingly charming with bright red fur and a big smile.</p>
                <Gallery array={[
                    { src: image.ep04.color01 },
                    { src: image.ep04.color04 },
                    { src: image.ep04.color05 },
                    { src: image.ep04.color06 },
                    { src: image.ep04.color07 },
                    { src: image.ep04.color11 }
                ]} />
                <p>While I felt confident about my character design, I knew that we would eventually need a lot more artwork. Most of all, there were going to be backgrounds for the many locations Rinkel would visit throughout his adventures. Since I had my hands full with organizing the rest of the production I reached out to friends and colleagues to see if they could help me out.</p>
                <Carousel array={[
                    { src: image.sketch05 },
                    { src: image.sketch04 },
                    { src: image.designTree03 },
                    { src: image.ep05.video06 },
                    { src: image.ep03.video01 },
                ]} />
                <p>It didn't take long before <b>Vera de Koning</b> joined our team. Her artwork has always been full of life and vivid colors and even in her earliest sketches she did not disappoint. Together, we figured out the look and feel of the animation and how to best align our work with ASN Bank's existing aesthetic. This included a palette of many natural and earthy tones, which after some trial and error gave us a lush color scheme we could both work with.</p>
            </div>
        </section>

        <Parallax
            height={client.onDesktop
                ? clamp(client.viewport.width * 0.5, 480, 720) + 'px'
                : clamp(client.viewport.width * 0.55, 120, 320) + 'px'
            }
            array={[{
                src: image.parallaxTreeNight01,
                scale: 1
            }, {
                src: image.parallaxTreeNight02,
                scale: 1, y: 5
            }, {
                src: image.parallaxTreeNight03,
                scale: 1, y: 10
            }, {
                src: image.parallaxTreeNight04,
                scale: 1.1, y: 15
            }, {
                src: image.parallaxTreeNight05,
                scale: 1.5, y: 35
            }, {
                src: image.parallaxTreeNight06,
                scale: 2, y: 50
            }]}
        />

        <section id="project-storyboard01">
            <div className="project__column">
                <h2>Let's get a little technical</h2>
                <hr />
                <h3>Storyboard</h3>
                <p>Each episode requires a detailed storyboard. The storyboard includes every single shot complete with dialogue. This provides an invaluable reference for both voice actors and animators, as well as for ASN Bank to better understand what the episode will eventually look like.</p>
                <p>Here is an excerpt of an early storyboard for the very first episode we animated.</p>
            </div>
        </section>

        <section id="project-storyboard02">
            <div className="project__column">
                <Gallery columns={client.onDesktop ? 5 : 2} array={[{
                    src: image.ep04.story01,
                    caption: <><b>01.</b> Branches move in a light summer breeze.</>
                }, {
                    src: image.ep04.story02,
                    device: 'desktop',
                    caption: <><b>02.</b> A frog floats lazily in the middle of a creek.</>
                }, {
                    src: image.ep04.story03,
                    device: 'desktop',
                    caption: <><b>03.</b> Three small birds dive into the water.</>
                }, {
                    src: image.ep04.story04a,
                    caption: <><b>04a.</b> A rabbit cools his feet at the creek's bank.</>
                }, {
                    src: image.ep04.story05a,
                    caption: <><b>05a.</b> Rinkel sits bored under a parasol.</>
                }, {
                    src: image.ep04.story06,
                    device: 'desktop',
                    caption: <><b>06.</b> Rinkel: <i>"Mom, do we still have popsicles?"</i></>
                }, {
                    src: image.ep04.story07,
                    device: 'desktop',
                    caption: <><b>07.</b> The piggy bank rings and makes a little jump.</>
                }, {
                    src: image.ep04.story10a,
                    device: 'desktop',
                    caption: <><b>10a.</b> Rinkel: <i>"Pocket money!"</i></>
                }, {
                    src: image.ep04.story11,
                    caption: <><b>11.</b> Raccoon: <i>"What can I do for you?"</i></>
                }, {
                    src: image.ep04.story12b,
                    device: 'desktop',
                    caption: <> <b>12b.</b> Rinkel runs his finger across the item list.</>
                }, {
                    src: image.ep04.story13,
                    caption: <> <b>13.</b> Rinkel: <i>"One bottle of syrup, please."</i></>
                }, {
                    src: image.ep04.story14a,
                    device: 'desktop',
                    caption: <><b>14a.</b> Raccoon: <i>"That will be two euros."</i></>
                }, {
                    src: image.ep04.story15,
                    caption: <><b>15.</b> Rinkel: <i>"You are probably wondering: why did we buy syrup?"</i></>
                }, {
                    src: image.ep04.story16a,
                    caption: <><b>16a.</b> Rinkel: <i>"Well, that's because..."</i></>
                }, {
                    src: image.ep04.story17b,
                    caption: <><b>17b.</b> Rinkel: <i>"We are making popsicles ourselves!"</i></>
                }, {
                    src: image.ep04.story22,
                    device: 'desktop',
                    caption: <><b>22.</b> Rinkel: <i>"Time for the fridge."</i></>
                }, {
                    src: image.ep04.story25,
                    caption: <><b>25.</b> Rinkel: <i>"Popsicles for the whole forest!"</i></>
                }, {
                    src: image.ep04.story28,
                    caption: <><b>28.</b> The forest creatures making approving sounds.</>
                }, {
                    src: image.ep04.story30,
                    device: 'desktop',
                    caption: <><b>30.</b> Even those by the creek get some popsicles.</>
                }, {
                    src: image.ep04.story31,
                    device: 'desktop',
                    caption: <><b>31.</b> Rinkel winks at the camera.</>
                }]} />
            </div>
        </section>

        <section id="project-storyboard03">
            <div className="project__column">
                <hr />
                <h3>Casting</h3>
                <p>When I started work on translating Lotte's scripts into storyboards, I wondered who would be suitable voice actors to bring the many characters to life. I considered half a dozen professional I had worked with in the past but, sadly, none of them came even close to what I imagined a ten-year-old squirrel should sound like.</p>
                <p>Then several nights later, I finally found him sitting right next to me. Not only did my friend <b>Lae Schäfer</b> have the right voice, he also had the boyish attitude to go along with it. The only problem was that he had little experience with acting. Nevertheless, I felt it was worth a shot. We scheduled a recording session which went marvelous and not a week later he joined our team as lead voice actor.</p>
            </div>
        </section>

        <Parallax
            height={client.onDesktop
                ? clamp(client.viewport.width * 0.5, 480, 720) + 'px'
                : clamp(client.viewport.width * 0.55, 120, 320) + 'px'
            }
            array={[{
                src: image.parallaxTreeEvening01
            }, {
                src: image.parallaxTreeEvening02,
                y: 5
            }, {
                src: image.parallaxTreeEvening03,
                y: 10, yOffset: -2
            }, {
                src: image.parallaxTreeEvening04,
                y: 15, yOffset: 1
            }, {
                src: image.parallaxTreeEvening05,
                scale: 1.5, y: 35
            }, {
                src: image.parallaxTreeEvening06,
                scale: 2, y: 50
            }]}
        />

        <section id="project-production">
            <div className="project__column">
                <h3>Production</h3>
                <p>Now that we had assembled our team and finalized the scripts, we could officially start production. We recorded all dialogue with Lae and our additional voice talent, including a guest appearance by my mom, and laid this atop the storyboard to create an animatic. This step allowed us to preview each episode, which would help us tremendously once we started work on the final art and animation.</p>
                <figure>
                    <ul>
                        <li>
                            <Image src={image.designRinkel01} />
                        </li>
                        {client.onDesktop && <li>
                            <Image src={image.designRinkel06} />
                        </li>}
                        <li>
                            <Image src={image.designRinkel05} />
                        </li>
                        <li>
                            <Image src={image.designRinkel09} />
                        </li>
                    </ul>
                </figure>
                <p>In the meantime, Vera had been turning my rough sketches into wonderful artwork. I animated the characters on top of her drawings with the assistance of the earlier recorded voice-overs, shot after shot, scene after scene. And so we went through the five episodes in rapid succession with a total of about three weeks of production for each.</p>
            </div>
        </section>

        <footer id="project-result">
            <div className="project__column">
                <h2>Thanks to my wonderful team</h2>
                <Carousel array={[
                    { src: image.ep04.concept03 },
                    { src: image.ep05.video12 },
                    { src: image.ep03.video10 },
                    { src: image.ep04.video11 },
                    { src: image.ep01.video10 }
                ]} />
                <hr />
                <h3>Result</h3>
                <p>From start to finish the project took us a little under half a year. This included the much needed preparation to make sure we put forward both ASN Bank's vision and identity. For this, we were aided by ASN Bank's creative agency Selmore who gave us helpful pointers along the way.</p>
                <p>Looking back I am both very happy and proud of how our series turned out. Working on Rinkel brough together a great, talented team and allowed us all to learn and grow. I am grateful for the opportunity that was given to me by ASN Bank and Selmore and hope that Rinkel will inspire many children to be smart and resourceful.</p>
                <figure>
                    <Image src={image.element01} />
                </figure>
            </div>
        </footer>

    </StyledArticle>;

}