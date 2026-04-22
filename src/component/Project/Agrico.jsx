/* I M P O R T
* * * * * * */

// Asset
import imageRoot from '../../asset/image';
import vector from '../../asset/vector';

// Element
import Credits from '../../element/Credits';
import Gallery from '../../element/Gallery';
import Image from '../../element/Image';
import Quote from '../../element/Quote';

// Module
import styled from 'styled-components';

/* S T Y L E D
* * * * * * */

const StyledArticle = styled.article`

    /* header */

    #project-header {
        background: #c63032;
        padding-top: 0;
    }

    #project-header h1 {
        color: #fff;
    }

    /* briefing */

    #project-briefing {
        background: #fff;
    }

    /* concept */

    #project-concept {
        background: #fff;

        padding-top: 0;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // Variable
    const image = imageRoot.project.agrico;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <figure>
                    <Image src={image.element01} />
                </figure>
                <h1>Agrico</h1>
                <p>We aided Agrico's creative team in exploring their brand and identity, aiming to better represent their product, champion the many people involved in its production, and highlight those across the world who directly benefit from it.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Agrico Branding</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.agrico />
                }, {
                    title: 'Produced by',
                    child: <vector.logo.dasLab />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }, {
                    title: 'Additional credits',
                    child: <>
                        <b>Project lead</b> Rogier Dieks
                    </>
                }]} />
            </div>
        </header>

        <figure>
            <Image src={image.concept03} />
        </figure>

        <aside>
            <div className="project__column">
                <Quote
                    caption=<>Reason and riper years tempered his warmth. And from the study of wisdom, he retained what is most difficult to compass &mdash; <i>moderation</i>.</>
                    author={<><b>Tacitus</b>, <i>On the Life and Character of Julius Agricola.</i></>}
                />
            </div>
        </aside>

        <figure>
            <Image src={image.concept01} />
        </figure>

        <section id="project-briefing">
            <div className="project__column">
                <h2>Pulling up the roots</h2>
                <hr />
                <Gallery array={[
                    { src: image.photo01 },
                    { src: image.photo04 },
                ]} />
                <h3>Introduction</h3>
                <p><b>Agrico</b> are leaders in the field of potato breeding. They have long expanded beyond the Netherlands, where they were founded and still do the majority of their research, and now take their product across the world. Most notably in Africa, where they help local farmers achieve strong and sustainable yields. Within just half a century they have become a globally recognized brand.</p>
                <Gallery array={[
                    { src: image.photo03 },
                    { src: image.photo02 },
                ]} />
                <p>To complement their fiftieth anniversary, Agrico approached <b>Rogier Dieks</b> of <b>Das Lab</b> for a revision of their brand identity for both web and print. I joined his team as lead designer, and together we met with Agrico's creative team to learn the ins and outs of the potato business.</p>
            </div>
        </section>

        <section id="project-concept">
            <div className="project__column">
                <Gallery array={[
                    { src: image.story01a },
                    { src: image.story01b },
                    { src: image.story01d, device: 'desktop' },
                    { src: image.story03c },
                    { src: image.story03d },
                    { src: image.story01f, device: 'desktop' }
                ]} />
                <h2>From petri to product</h2>
                <hr />
                <h3>Concept</h3>
                <p>Agrico have to be proficient in multiple areas of expertise to stay ahead. Their responsibilities range from the laboratories, where they develop multiple potato varieties, to their direct involvement with farmers who plant and harvest their product by the millions. We received an in-depth overview of their inner workings and how they introduce innovation to those working the fields.</p>
                <Gallery array={[
                    { src: image.story02c, device: 'desktop' },
                    { src: image.story02d },
                    { src: image.story02e }
                ]} />
                <p>We all felt that it was <i>vital</i> to echo this in their branding. Agrico aren't just a team of scientists, and neither are they farmers or vendors. Instead, they occupy a vital position at the center of the potato industry. They are there when a new species is first put in the ground, and they will be there years later to supervise its distribution across the world.</p>
                <Gallery array={[
                    { src: image.story04a, device: 'desktop' },
                    { src: image.story04b },
                    { src: image.story04c }
                ]} />
                <p>This requires people working in both sterile laboratory environments as well as those who get up at dawn to stick their hands in the dirt. All in cooperation with the many thousands who inform, advise, and rely on them. It was up to us to communicate the intricacies of the business without losing sight of the potato at its very core.</p>
            </div>
        </section>

        <section id="project-production">
            <div className="project__column">
                <Gallery array={[
                    { src: image.color02, device: 'desktop' },
                    { src: image.color03 },
                    { src: image.color06 },
                    { src: image.color11 },
                    { src: image.color05 },
                    { src: image.color19, device: 'desktop' },
                    { src: image.color04 },
                    { src: image.color17 },
                    { src: image.color10 },
                    { src: image.color08, device: 'desktop' },
                    { src: image.color07, device: 'desktop' },
                    { src: image.color09 }
                ]} />
                <h2>Differing perspectives</h2>
                <hr />
                <h3>Production</h3>
                <p>Initially, we explored a variety of stylized and even abstract imagery. This was inspired by both the scale and complexity at which Agrico operates. In their laboratories, potatoes get broken down to their core components for careful study. Those same potatoes will later be grown by the thousands to maturity, and eventually be shipped across the world. All combined, an endeavor that ranges from the literal microscopic to a global scale.</p>
            </div>
        </section>

        <figure>
            <Image src={image.video03} />
        </figure>

        <footer id="project-result">
            <div className="project__column">
                <p>We felt however that the potato, at the core of the brand, had to feel as tangible as the one on your plate. We moved away from experimental shapes and onto a combination of clear illustrations and photography to represent the industry at its many stages. Here, we can see several images of a proposed leader where we follow the potato's growth from flower to harvest and its distribution across the globe.</p>
                <Gallery columns={2} array={[
                    { src: image.video04 },
                    { src: image.video06 },
                    { src: image.video05 },
                    { src: image.video07 }
                ]} />
                <hr />
                <h3>Result</h3>
                <p>Working with Agrico was a treat; their creative team was both focused and open to new perspectives. They provided us with ample material to get a better insight in the technical aspect of their field. Meanwhile, we walked with them through a wide variety of ideas before settling on our final designs. We look forward to seeing the brand grow ever taller in the next fifty years.</p>
            </div>
        </footer>

    </StyledArticle>;

}