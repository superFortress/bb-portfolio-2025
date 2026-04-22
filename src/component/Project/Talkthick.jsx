/* I M P O R T
* * * * * * */

// Asset
import imageRoot from '../../asset/image';

// Element
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
        background: #F9C200;
    }

    #project-header figure {
        margin: 0 auto;
    }

    @media (min-width: 768px) {

        #project-header figure {
            width: 85vw;

            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }
        
    }

    /* poster */

    #project-poster {
        height: 55vw;
    }

    /* gallery */

    #project-gallery {
        width: var(--app-width-large);

        margin: 0 auto;
    }

    /* concept */

    #project-concept {
        background: #fff;
    }

    /* design */

    #project-design01 {
        background: #F9C200;
    }

    #project-design02 {
        background: #52bbff;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // State
    const client = useClient();

    // Variable
    const image = imageRoot.project.talkthick;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <figure>
                    <Image src={client.onDesktop
                        ? image.headerDesktop01
                        : image.headerMobile01
                    } />
                </figure>
                <p>TalkThick is a venture into online publishing. It presents a legacy presentation of a front page with masthead, headline, and leads. All of this is balanced on top of crisp PHP with only a handful lines of optional JavaScript, optimizing the website for as wide an audience as possible while remaining fully responsive.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>TalkThick</>
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }]} />
            </div>
        </header>

        <figure id="project-poster">
            <Image cover src={image.design01} />
        </figure>

        <aside id="project-gallery">
            <Gallery columns={client.onDesktop ? 4 : 3} array={[
                { src: image.home02 },
                { src: image.page03 },
                { src: image.page04 },
                { src: image.home05 },
                { src: image.page05, device: 'mobile' },
                { src: image.page06 },
                { src: image.home07 },
                { src: image.home09 },
                { src: image.page09 },
            ]} />
        </aside>

        <section id="project-concept">
            <div className="project__column">
                <h2>What the world needs now is another opinion piece</h2>
                <hr />
                <h3>Concept</h3>
                <p>Social media has allowed me to connect with many people from across the world with diverse experiences and expertises. Most are educated, well-versed, and motivated to speak. It's always been a delight to hear them open up, and I felt it was a shame that their voices were not reaching a larger audience.</p>
                <p>The idea behind TalkThick is to allow publishing on a wide range of topics, from a wide range of voices. Articles are sorted under politics, society, science, economy, and culture &ndash; each representing different forms of human interaction and organization. While still very broad, they serve as a guide for the interests of both authors and their audience.</p>
            </div>
        </section>

        <section id="project-design01">
            <div className="project__column">
                <figure>
                    <Image src={image.icons01} />
                </figure>
                <hr />
                <h3>Design</h3>
                <p>I wanted to honor the traditional newspaper layout which maps well onto the digital format. We already see this being echoed by most online publishers to great success. As I expected a smaller volume of articles, I simplified the design and allowed for article previews which would rope in audiences from the very front page.</p>
                <p>My design philosophy stemmed from minimalism in service of clarity and readability. Rather than lining each page with related articles, let alone advertising space, I treated the space similar to a platform like Medium which truly lets you hone in on each article, freeing you from distractions. These are opinion pieces and not news blurbs, after all.</p>
            </div>
        </section>

        <figure id="project-design02">
            <Image src={client.onDesktop
                ? image.sketch01
                : image.sketch02
            } />
        </figure>

        <footer id="project-result">
            <div className="project__column">
                <h2>Lost in publication</h2>
                <figure>
                    <Image boxShadow src={image.page11} />
                </figure>
                <hr />
                <h3>Result</h3>
                <p>Between our small crew being capable of publishing at most a couple dozen pieces a month, having to maintain an active social media presence, and me struggling to build a safe and stable backend &ndash; the project was ultimately abandoned. Still, constructing the website from the ground up was a fun experience and I am quite happy with the look and feel.</p>
            </div>
        </footer>

    </StyledArticle>;

}