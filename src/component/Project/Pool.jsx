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
        background: #19a5fd;
    }

    #project-header h1 {
        color: #f8e13c;
    }

    /* concept */

    #project-concept{
        background: #f2f5f1;
    }

    /* story */

    #project-story {
        background: var(--color-grey3);
    }

    #project-story h2 {
        color: #109ce5;
    }

`;

/* E X P O R T
* * * * * * */

export default function Project({ about }) {

    // A S S I G N

    // Variable
    const image = imageRoot.project.pool;
    const video = videoRoot.project.pool;

    // R E T U R N

    return <StyledArticle className="project">

        <header id="project-header">
            <div className="project__column">
                <h1>Gebiedspool</h1>
                <figure>
                    <Video src={video.final} poster={image.video08} />
                </figure>
                <p>To improve collaboration within our local government, we produced a short video to explain the role of the <i>gebiedspool</i>: a diverse team of dedicated civil servants that strings together all other departments.</p>
                <Credits array={[{
                    title: 'Production title',
                    child: <>Gebiedspool</>
                }, {
                    title: 'Commissioned by',
                    child: <vector.logo.amsterdam />
                }, {
                    title: 'Produced by',
                    child: <vector.logo.mFilms />
                }, {
                    title: 'My contribution',
                    child: <b>{about.role}</b>,
                }, {
                    title: 'Additional credits',
                    child: <>
                        <b>Project lead</b> Francoise Mittertreiner
                    </>
                }]} />
            </div>
        </header>

        <section id="project-briefing">
            <div className="project__column">
                <figure>
                    <Image src={image.video12} />
                </figure>
                <hr />
                <h3>Briefing</h3>
                <p>Every government, large or small, faces the challenge of properly representing the people in their district. Part of the solution is employing a diverse and representative group of people who can speak confidently for their community. But it is <i>just</i> as important to have these professionals talk with each other, and find effective solutions together. This teamwork is the specialty of the <b>gebiedspool</b>.</p>
            </div>
        </section>

        <section id="project-story">
            <div className="project__column">
                <Gallery array={[
                    { src: image.story01 },
                    { src: image.story06 },
                    { src: image.story04 },
                    { src: image.story08 },
                    { src: image.story11 },
                    { src: image.story09 },
                ]} />
                <h2>Ellie's got it</h2>
                <hr />
                <h3>Story</h3>
                <p>To better explain the role of the, we turned her into a relatable character named <b>Ellie</b>. Ellie is a hardworking employee who still finds herself swamped with work. In order to help her, we introduce ways to improve cooperation in the office, and create space for colleagues to work and learn together. This distributes tasks more evenly and makes everyone feel appreciated.</p>
            </div>
        </section>

        <figure>
            <Image cover src={image.video01} />
        </figure>

        <footer id="project-result">
            <div className="project__column">
                <hr />
                <h3>Result</h3>
                <p>We wanted to bring the government and the people closer together. By showing Ellie working with others both inside and outside her department, and having them all row together through Amsterdam's famous canals, we really highlighted their role within the community. Most importantly, Ellie helps us see the personable and sincere side of government.</p>
            </div>
        </footer>

    </StyledArticle>;

}