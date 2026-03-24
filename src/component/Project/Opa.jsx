/* I M P O R T
* * * * * * */

// Asset
import imageRoot from '../../asset/image';
import vector from '../../asset/vector';

// Element
import Carousel from '../../element/Carousel';
import Credits from '../../element/Credits';
import Gallery from '../../element/Gallery';
import Image from '../../element/Image';

// Module
import styled from 'styled-components';

/* S T Y L E D
* * * * * * */

const StyledArticle = styled.article`

    /* header */

    #opa-header {
        background: #7d9097;
    }

    #opa-header :is(b, h1),
    #opa-header .credits__list-item svg,
    #opa-header .credits__list-item:first-child dd {
        color: #efeee5;
    }

    /* concept */

    #opa-concept {
        background: #abb0ce;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // Variable
    const image = imageRoot.project.opa;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="opa-header">
            <div className="project__column">
                <h1>Mijn Poolse Opa</h1>
                <figure>
                    <Image boxShadow outline src={image.design06} />
                </figure>
                <p>The documentary <i>In the Footsteps of My Polish Grandfather</i> pays homage to the Polish heroism that helped liberate the Netherlands during the Second World War. My illustrations were used for educational material on its official website.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Website "Mijn Poolse Opa"</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.polygooi />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }, {
                    title: 'Additional credits',
                    child: <>
                        <b>Project lead</b> Koen van Groesen
                    </>
                }]} />
            </div>
        </header>

        <section id="opa-background">
            <div className="project__column">
                <h2>The fight for home and liberty</h2>
                <hr />
                <h3>Background</h3>
                <p>Independent journalist <b>Koen van Groesen</b> approached me with a personal project. He had documented the story of his late grandfather <b>Michal Salewicz</b> who served in the Second World War. Michal was just a teenager living with his family in rural Poland when the German forces invaded. This drove him across Northern Europe until he arrived in Scotland. There he enlisted with the 1st Armoured Division which ended up liberating the Dutch city of Breda where, after the war, he settled and started a new life.</p>
                <figure>
                    <Image src={image.photo01} />
                </figure>
                <p>While working on the documentary, Koen uncovered more than just his grandfather's legacy. Michal wasn't the only young, Polish man who made it to Scotland. In fact, he served alongside many others who had traveled a similar route; escaping the German occupation and joining the war effort to fight for their country's freedom. While they never made it back to Poland, they still hold an important place in European history and especially in the liberation of the Netherlands.</p>
            </div>
        </section>

        <figure>
            <Image cover src={image.design01} />
        </figure>

        <section id="opa-concept">
            <div className="project__column">
                <h2>Tracing Michal's every step</h2>
                <Gallery array={[{
                    src: image.story01,
                    caption: 'On the morning of his escape, Michal sees the German planes fly over his home town.'
                }, {
                    src: image.story02,
                    caption: 'The Polish 1st Armoured Division on a training exercise in the Scottish hills.'
                }, {
                    src: image.story03,
                    caption: 'Polish soldiers dancing with Dutch women after the liberation of Breda.'
                }, {
                    src: image.story08,
                    caption: 'A soldier patrolling the Moerdijkbrug, across which the rest of the country was still occupied.'
                }, {
                    src: image.story05,
                    caption: 'Michal carrying his Dutch bride home while the streets are still littered with spent bullet casings.'
                }, {
                    src: image.story07,
                    caption: 'A group of students visit a war memorial and one of the still intact tanks that once liberated Breda.'
                }]} />
                <hr />
                <h3>Concept</h3>
                <p>To further explore this history, Koen developed an educational program for primary schools. It divided the documentary in seven equal parts and added questions so students would have the opportunity to engage with both the history and the difficult decisions Michal had to make along his path. My task was to provide each part with an illustration, highlighting crucial moments in Michal's journey and touching upon the content mentioned in the exercise.</p>
                <Gallery array={[
                    { src: image.color01 },
                    { src: image.color02 },
                    { src: image.color03 },
                    { src: image.color04 },
                    { src: image.color05 },
                    { src: image.color07 }
                ]} />
            </div>
        </section>

        <footer id="opa-result">
            <div className="project__column">
                <h2>An unforgettable history</h2>
                <Carousel array={[
                    { src: image.design04 },
                    { src: image.design03 },
                    { src: image.design05 },
                    { src: image.design07 },
                    { src: image.design02 }
                ]} />
                <hr />
                <h3>Result</h3>
                <p>The documentary serves both a personal story where Koen reconnects with his family's past, as well as a testament to the many Europeans who joined hands in the fight against the evils of Nazi Germany. This particular part of history goes often overlooked but is integral to the freedom the Netherlands enjoys today. I can highly recommend you watch the documentary. Its official website can be found here:  <a target="_blank" href="https://mijnpoolseopa.com">In de huid van mijn Poolse Opa</a></p>
            </div>
        </footer>

    </StyledArticle>;

}