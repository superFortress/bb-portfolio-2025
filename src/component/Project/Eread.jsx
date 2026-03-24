/* I M P O R T
* * * * * * */

// Asset
import imageRoot from '../../asset/image';
import vector from '../../asset/vector';

// Element
import Credits from '../../element/Credits';
import Image from '../../element/Image';

// Module
import styled from 'styled-components';

/* S T Y L E D
* * * * * * */

const StyledArticle = styled.article`

    /* header */

    #project-header {
        background: #016bdd;
    }

    #project-header h1 {
        color: #fc0;
    }

    #project-header b,
    #project-header .credits__list-item svg,
    #project-header .credits__list-item:first-child dd {
        color: #3ec1ff;
    }

    /* poster */

    #project-poster {
        background: #fff;
        padding-top: var(--project-section-padding-top);
        padding-bottom: var(--project-section-padding-bottom);
    }

    #project-poster .image {
        max-width: 800px;
    }

    /* briefing */

    #project-briefing h2 {
        color: #0027a2;
    }

    /* design */

    #project-design {
        --rule-color: #fff;
        --text-color: #fff;

        background: #172d9e;
        padding-bottom: 0;
    }

    #project-design h2 {
        color: #fec308;
    }

    /* followup */

    #project-followup {
        background: linear-gradient(
            180deg, var(--color-gray2) 50%, var(--color-gray1)
        );
        padding-bottom: 0;
    }

    /* result */

    #project-result h2 {
        color: #0027a2;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // Variable
    const image = imageRoot.project.eread;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <h1>EREAD</h1>
                <figure>
                    <Image src={image.poster02Element04} />
                </figure>
                <p>EREAD is a proposed alteration and extension to Erasmus MC's labs and university. We designed an infographic to highlight how these changes will impact everyday work and life, and what can be expected in the near future.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Erasmus MC EREAD</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.erasmusMc />
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

        <figure id="project-poster">
            <Image
                src={image.poster02Element09}
                style={{ width: '85%' }}
            />
        </figure>

        <section id="project-briefing">
            <div className="project__column">
                <h2>Covering the many floors of Erasmus MC</h2>
                <hr />
                <h3>Briefing</h3>
                <p>The <b>Erasmus University Medical Center</b> contains several large facilities in Rotterdam, the Netherlands. It offers a wide variety of services to both the public as well as professionals who come there to study, educate, and do research. You can't fully appreciate the complexity of the Center until you step inside and confront the multitude of corridors, walkways, and doors leading in every direction.</p>
                <figure>
                    <Image src={image.presentation04} />
                </figure>
                <p>As you could imagine, managing such a complex and diverse organization requires a lot of shared effort. Multiple departments need to juggle both their individual tasks as well as their shared responsibilities. And since their new initiative <b>EREAD</b> was to affect the entire complex, their synergy would be pushed to its limits. For that reason we needed a clear way of communicating its qualities to as broad an audience possible.</p>
            </div>
        </section>

        <section id="project-design">
            <div className="project__column">
                <h2>Good things to come</h2>
                <hr />
                <h3>Design</h3>
                <p>EREAD was meant to benefit people from all over Erasmus MC. However, to achieve that it would also have to alter and upset current processes and standards. We wanted to recognize and communicate that we were all on board to make the transition as smooth as possible, while highlighting the many things the facility stood to gain from the coming changes.</p>
                <figure>
                    <Image src={image.poster01Element01} />
                </figure>
                <p>We decided not to fixate on every detail. After all, we weren't drawing up an Word document. We instead illustrated what the experience of Erasmus MC after EREAD would be like. For example, spaces were to be made more accessible and inviting. The laboratories would see increased room and ample light for better working, and hallways would be provided with sitting areas that allowed staff to unwind and socialize.</p>
                <figure>
                    <Image src={image.poster01Element04} />
                </figure>
                <p>Since many of the plans hadn't been formalized and were still under development we refrained from showing any concrete maps or make any definitive promises. Instead, we moved in the other direction and created an anonymized, homogenous design that could represent any part of Erasmus MC. That way, any viewer could easily imagine the improvements applied to their specific working environment and take part in the conversation.</p>
                <figure>
                    <Image src={image.poster02Element05} />
                </figure>
            </div>
        </section>

        <section id="project-followup">
            <div className="project__column">
                <figure>
                    <Image src={image.poster02} />
                </figure>
                <hr />
                <h3>Follow-up</h3>
                <p>A short year after our infographic had made its debut we were called back in for a new design. This time, we were tasked to shed light on the projected timeline. While EREAD was still a work in progress, we could pinpoint key moments in its development and use those to draft a rough overview of the project's life cycle.</p>
                <figure>
                    <Image src={image.poster02Element08} />
                </figure>
                <p>As with the first design, this also included some hints at changes yet to come. An improvement to existing hardware, the expansion of both educational and research facilities, and a new art section to appeal to the larger medical community. Where the first poster was simply informative, this one was almost celebratory.</p>
            </div>
        </section>

        <footer id="project-result">
            <div className="project__column">
                <h2>EREAD is always on the move</h2>
                <figure>
                    <Image src={image.presentation01} />
                </figure>
                <hr />
                <h3>Result</h3>
                <p>While EREAD is still a work in progress, we are proud to have taken part in its journey. The infographics show a modern, bright, and welcoming Erasmus MC. We can see people of all trades work and communicate effortlessly aided by a fully stocked and capable facility. Currently, the infographics are on display throughout the Center and will be until its completion circa 2030.</p>
            </div>
        </footer>

    </StyledArticle>;

}