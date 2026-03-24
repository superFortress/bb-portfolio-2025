/* I M P O R T
* * * * * * */

// Asset
import imageRoot from '../../asset/image';
import vector from '../../asset/vector';

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
        background: #57a63a;
    }

    /* briefing */

    #project-briefing {
        padding-top: 0;
    }

    /* round01 */

    #project-round01 {
        background: #cdceb3;
    }

    /* round02 */

    #project-round02 {
        background: #57a63a;
    }

    /* round03 */

    #project-round03 {
        background: #cdceb3;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // State
    const client = useClient();

    // Variable
    const image = imageRoot.project.pink;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <figure>
                    <Image src={image.element01} />
                </figure>
                <p>Over six months of careful considerations and countless designs, we drafted a new logo for PINK!, the youth movement associated with the Dutch Party for the Animals, in a design that captures both its ideals and spirit.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>PINK! Logo</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.pink />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }, {
                    title: 'Additional credits',
                    child: <>
                        <b>Project lead</b> Renée Baris
                    </>
                }]} />
            </div>
        </header>

        <section id="project-background">
            <div className="project__column">
                <figure>
                    <Image src={image.photo02} />
                </figure>
                <hr />
                <h3>Background</h3>
                <p>While my personal beliefs are varied and my involvement with politics has been limited, I have always been sympathetic towards our <b>Party for the Animals (PvdD)</b> for defending a cause that often goes overlooked by most other parties. They protest against factory farming and in favor of animal life as a whole, and beyond that address a broad scope of environmental topics that help improve the health of all plant and animal life, humans included.</p>
                <p>Shortly after the Dutch general elections of 2017 I came across a local meet and greet where they celebrated a sizable victory. I paid them a visit and got to talk with some of their younger members which introduced me to <b>PINK!</b>, the youth movement closely aligned with the PvdD. They told me about their efforts in and around Amsterdam. When I brought up my background in graphic design the subject of their logo came up, and not a week later we started talks on a potential rebranding.</p>
            </div>
        </section>

        <section id="project-briefing">
            <div className="project__column">
                <figure>
                    <Image src={image.element02} />
                </figure>
                <hr />
                <h3>Briefing</h3>
                <p>Their original logo had been around since PINK!'s conception in 2006. It was big and bold and very fitting for a young movement. But now, more than a decade and many new members later, they felt they had grown from juvenile to adolescent and wanted to ditch the grassroots image.</p>
                <Gallery columns={client.onDesktop ? 3 : 1} array={[
                    { src: image.concept01 },
                    { src: image.concept02 },
                    { src: image.concept03 }
                ]} />
                <p>Even then, we originally thought of making a simple upgrade to the original design and leaving it at that. But over the years the name "pink", which refers to an adolescent cow, had itself become a problem for the movement. Since they already found themselves in politically progressive spheres they were often confused for an LGB cause. So, we decided to move slightly away from the name and look for a representative symbol instead.</p>
            </div>
        </section>

        <section id="project-round01">
            <div className="project__column">
                <figure>
                    <Image src={image.design05} />
                </figure>
                <hr />
                <h3>Round one</h3>
                <p>If we were going to replace the name with an image we needed something to properly represent PINK!'s message and values, not just as they were in that moment but also looking forward to what they may become in the future. We landed on several recurring themes: care for animals, our environment, and the Earth as a whole. From this we took three icons: <i>an eye, a leaf, and a droplet.</i></p>
                <Gallery columns={client.onDesktop ? 3 : 1} array={[
                    { src: image.concept04a },
                    { src: image.concept04b },
                    { src: image.concept04c }
                ]} />
            </div>
        </section>

        <section id="project-round02">
            <div className="project__column">
                <figure>
                    <Image src={image.logoPvdd} />
                    <figcaption>Official logo of Partij voor de Dieren designed by thonik, 2015.</figcaption>
                </figure>
                <hr />
                <h3>Round two</h3>
                <p>While opinions on our first concept were generally positive, some were concerned that we were moving too far away from the Party for the Animals. As with any youth movement, they had to carefully balance their rebellious elements with their ideological core. This pushed us to look for a design that echoed the parent party's logo, which featured the outline of a butterfly. To complement this, we introduced a dragonfly.</p>
                <p>Below you can see a small selection of sketches that were part of the design process. Each round went through a similar process. In this case, however, it never manifested in a definite design.</p>
                <Gallery columns={client.onDesktop ? 4 : 3} array={[
                    { src: image.logoDragonfly04 },
                    { src: image.logoDragonfly05 },
                    { src: image.logoDragonfly07 },
                    { src: image.logoDragonfly08 },
                    { src: image.logoDragonfly09 },
                    { src: image.logoDragonfly19 },
                    { src: image.logoDragonfly11 },
                    { src: image.logoDragonfly14 },
                    { src: image.logoDragonfly15 },
                    { src: image.logoDragonfly17 },
                    { src: image.logoDragonfly20 },
                    { src: image.logoDragonfly23 }
                ]} />
            </div>
        </section>

        <section id="project-round03">
            <div className="project__column">
                <Gallery columns={1} array={[
                    { src: image.concept06 },
                    { src: image.concept07 }
                ]} />
                <hr />
                <h3>Round three</h3>
                <p>The previous round revealed that both in beliefs and image, PINK! wanted to be considered more independent from the Party. So we went back to the drawing board, gathered references, and conjured up several more designs. While each of these were still a work in progress, they gave us a scope of the directions we could head into. However, none of these sufficiently covered either the right character or message and we ended up dropping all of them in quick succession.</p>
            </div>
        </section>

        <footer id="project-result">
            <div className="project__column">
                <figure>
                    <Image src={image.design04} />
                </figure>
                <hr />
                <h3>Final round</h3>
                <p>After a thorough review of what we wanted to communicate, and which words and images best captured PINK!'s mission, we went back and refined our initial design. It carried the core values and allowed for expansion and recontextualization depending on use. An added perk was the ease by which anyone with a brush or marker could recreate it, given that much of PINK! is still grassroots and often out on streets and campuses.</p>
                <figure>
                    <Image src={image.photo01} />
                </figure>
                <p>We first revealed PINK!'s new logo at a small event early 2018, and later during the official annual conference in the spring of that year. It made me happy that those who I worked with closely could see their values reflected in the logo, and would later use it to champion PINK!'s efforts throughout the Netherlands. After getting briefly involved with the movement myself, I will always carry a soft spot for PINK! and their continuous effort to better our planet.</p>
            </div>
        </footer>

    </StyledArticle>;

}