/* I M P O R T
* * * * * * */

// Asset
import image from '../asset/image';
import vector from '../asset/vector';

// Library
import l from './labelStore';

// Module
import { lazy } from 'react';

/* E X P O R T
* * * * * * */

export default {

    agrico: {
        about: {
            brief: <>Showcasing how Agrico brings their potatoes from the lab to farms across the world.</>,
            client: 'Agrico',
            logo: vector.logo.agrico,
            role: [l.illustration, l.storyboard],
            title: 'Agrico Branding',
            year: 2020
        },
        child: lazy(() => import('../component/Project/Agrico')),
        label: [l.storyboard],
        style: `
            --app-header-button-text-color: #000;
            --app-header-button-text-color-active: #000;
            --app-footer-text-color: #000;

            --credits-color: #000;

            --logo-color: #000;

            --page-background: #f6efe9;

            --text-color: #000;
        `,
        thumb: {
            background: ['coral'],
            color: 'gray5',
            image: image.portfolio.agrico,
            offset: [0.5, 0.5],
            scale: 1
        }
    },

    cloud: {
        about: {
            brief: <>The story of user and developer bonding over their shared love for apps.</>,
            author: 'in60seconds',
            client: 'Booreiland',
            logo: vector.logo.booreiland,
            role: [l.animation, l.graphic, l.storyboard],
            title: 'CloudTeams',
            year: 2016
        },
        child: lazy(() => import('../component/Project/Cloud')),
        label: [l.animation],
        style: ``,
        thumb: {
            background: ['fairy'],
            color: 'gray5',
            image: image.portfolio.cloud,
            offset: [0.5, 0.6],
            scale: 1
        }
    },

    creamy: {
        about: {
            brief: <>Finally, the Netherlands has their own cream liqueur &mdash; sourced from Dutch cows.</>,
            logo: vector.logo.frieslandCampina,
            role: [l.animation, l.graphic, l.storyboard],
            title: 'Creamy Creations',
            year: 2018
        },
        child: lazy(() => import('../component/Project/Creamy')),
        label: [l.graphic],
        style: ``,
        thumb: {
            background: ['gray1'],
            color: 'gray5',
            image: image.portfolio.creamy,
            offset: [0.5, 0.4],
            scale: 1.25
        }
    },

    eread: {
        about: {
            brief: <>A visual overview of proposed renovations to the Netherland&rsquo;s largest medical institution.</>,
            client: 'Erasmus MC',
            logo: vector.logo.erasmusMc,
            role: [l.graphic, l.writing],
            title: 'EREAD',
            year: 2019
        },
        child: lazy(() => import('../component/Project/Eread')),
        label: [l.graphic],
        style: ``,
        thumb: {
            background: ['royal'],
            color: 'white',
            image: image.portfolio.eread,
            offset: [0.5, 0.5],
            scale: 1.3
        }
    },

    escience: {
        about: {
            brief: <>Complex processes and technologies expressed in simple graphics.</>,
            client: 'eScience Center',
            logo: vector.logo.escienceCenter,
            role: [l.graphic],
            title: 'eScience Center',
            year: 2020
        },
        child: lazy(() => import('../component/Project/Escience')),
        label: [l.graphic],
        style: ``,
        thumb: {
            background: ['lemon'],
            color: 'gray5',
            image: image.portfolio.escience,
            offset: [0.5, 0.5],
            scale: 1
        }
    },

    guardian: {
        about: {
            brief: <>A practical VPN explained explained to practical people.</>,
            client: 'App Annie',
            logo: vector.logo.dataAi,
            role: [l.animation, l.illustration, l.storyboard],
            title: 'Phone Guardian',
            year: 2019
        },
        child: lazy(() => import('../component/Project/Guardian')),
        label: [l.storyboard],
        style: ``,
        thumb: {
            background: ['azure', 'azure'],
            color: 'gray5',
            image: image.portfolio.guardian,
            offset: [0.5, 0.45],
            scale: 1.1
        }
    },

    hoofd: {
        about: {
            author: 'in60seconds',
            brief: <>Heads of secondary schools join heads and learn from one another.</>,
            client: 'VO-raad',
            logo: vector.logo.voRaad,
            role: [l.animation],
            title: 'Hoofdkamer',
            year: 2016
        },
        child: lazy(() => import('../component/Project/Hoofd')),
        label: [l.animation],
        style: `
            --page-background: #e2e5d7;
        `,
        thumb: {
            background: ['basil'],
            color: 'gray5',
            image: image.portfolio.hoofd,
            offset: [0.5, 0.3],
            scale: 1
        }
    },

    jip: {
        about: {
            brief: <>A novel idea: what if you entrusted your administration to a dog?</>,
            client: 'Jip',
            logo: vector.logo.jip,
            role: [l.animation, l.illustration, l.storyboard],
            title: 'Jipchain',
            year: 2018
        },
        child: lazy(() => import('../component/Project/Jip')),
        label: [l.animation],
        style: ``,
        thumb: {
            background: ['coral', 'coral'],
            color: 'gray5',
            image: image.portfolio.jip,
            offset: [0.2, 0.5],
            scale: 1.1
        }
    },

    monster: {
        about: {
            brief: <>The lead animation for Imagine&rsquo;s 2013 film festival.</>,
            logo: vector.logo.imagine,
            role: [l.animation, l.production, l.storyboard],
            title: 'Monsterpop',
            year: 2013
        },
        child: lazy(() => import('../component/Project/Monster')),
        label: [l.storyboard],
        style: `
            --logo-color: #d462ab;

            --page-background: #e8f7ed;

            --link-color: #d462ab;
        `,
        thumb: {
            background: ['grape', 'royal', 'fairy'],
            color: 'white',
            image: image.portfolio.monster,
            offset: [0.5, 0.5],
            scale: 1
        }
    },

    noord: {
        about: {
            brief: <>It takes a community &mdash; teachers, parents, and students all work together.</>,
            client: 'Noordkwartier',
            logo: vector.logo.noordkwartier,
            role: [l.illustration, l.storyboard],
            title: 'NoordKRACHT',
            year: 2019
        },
        child: lazy(() => import('../component/Project/Noord')),
        label: [l.storyboard],
        style: ``,
        thumb: {
            background: ['fairy'],
            color: 'gray5',
            image: image.portfolio.noord,
            offset: [0.5, 0.45],
            scale: 1.25
        }
    },

    nova: {
        about: {
            brief: <>Let teachers manage their students, and let us manage their timetables.</>,
            logo: vector.logo.novaCollege,
            role: [l.animation, l.storyboard],
            title: 'Onderwijs Logistiek',
            year: 2018
        },
        child: lazy(() => import('../component/Project/Nova')),
        label: [l.storyboard],
        style: ``,
        thumb: {
            background: ['gray1'],
            color: 'gray5',
            image: image.portfolio.nova,
            offset: [0.5, 0.5],
            scale: 1
        }
    },

    opa: {
        about: {
            brief: <>A heartfelt portrait of a Polish refugee, soldier, and grandfather.</>,
            client: 'Polygooi',
            logo: vector.logo.polygooi,
            role: [l.illustration],
            title: 'Mijn Poolse Opa',
            year: 2019
        },
        child: lazy(() => import('../component/Project/Opa')),
        label: [l.graphic],
        style: `
            --carousel-control-color: #516f77;
            --carousel-control-color-active: #516f77;

            --page-background: #e2eadc;
            
            --rule-color: #203240;
            --text-color: #203240;
        `,
        thumb: {
            background: ['royal', 'azure', 'grape'],
            color: 'white',
            image: image.portfolio.opa,
            offset: [0.5, 0.05],
            scale: 2
        }
    },

    pink: {
        about: {
            brief: <>Same green ideals. New PINK! logo.</>,
            client: 'PINK!',
            logo: vector.logo.pink,
            role: [l.concept, l.graphic],
            title: 'PINK! Logo',
            year: 2017
        },
        child: lazy(() => import('../component/Project/Pink')),
        label: [l.graphic],
        style: `
            --app-header-button-background: #e5e6c7;
            --app-header-button-background-active: #e5e6c7;
            --app-header-button-text-color: #000;
            --app-header-button-text-color-active: #000;
            --app-footer-text-color: #000;

            --credits-color: #000;

            --page-background: #f7f4e3;

            --logo-color: #000;

            --link-color: #007236;

            --text-color: #000;
        `,
        thumb: {
            background: ['basil'],
            color: 'gray5',
            image: image.portfolio.pink,
            offset: [0.35, 0.5],
            scale: 1
        }
    },

    pool: {
        about: {
            brief: <>The glue that holds the different departments of Amsterdam&rsquo;s municipality together.</>,
            logo: vector.logo.amsterdam,
            role: [l.animation, l.illustration, l.storyboard],
            title: 'Gebiedspool',
            year: 2017
        },
        child: lazy(() => import('../component/Project/Pool')),
        label: [l.animation],
        style: ``,
        thumb: {
            background: ['royal'],
            color: 'white',
            image: image.portfolio.pool,
            offset: [0.5, 0.2],
            scale: 1.15
        }
    },

    rabo: {
        about: {
            author: 'in60seconds',
            brief: <>Looking back at Rabobank&rsquo;s successes and their plans moving forward.</>,
            client: 'Rabobank',
            logo: vector.logo.rabobank,
            role: [l.animation, l.graphic, l.storyboard],
            title: 'Jaarverslag 2017',
            year: 2017
        },
        child: lazy(() => import('../component/Project/Rabo')),
        label: [l.animation],
        style: ``,
        thumb: {
            background: ['azure'],
            color: 'gray5',
            image: image.portfolio.rabo,
            offset: [0.5, 0.5],
            scale: 1
        }
    },

    rinkel: {
        about: {
            brief: <>A young squirrel teaches how to invest in both yourself and your environment.</>,
            client: 'ASN Bank',
            logo: vector.logo.asnBank,
            role: [l.animation, l.concept, l.production, l.storyboard],
            title: 'Rinkel',
            year: 2019
        },
        child: lazy(() => import('../component/Project/Rinkel')),
        label: [l.animation, l.storyboard],
        style: ``,
        thumb: {
            background: ['lemon'],
            color: 'gray5',
            image: image.portfolio.rinkel,
            offset: [0.6, 0.5],
            scale: 1.5
        }
    },

    talkthick: {
        about: {
            brief: <>When your opinion is worth listening to, you should state it bold and proud.</>,
            client: 'TalkThick',
            logo: vector.logo.talkthick,
            role: [l.concept, l.frontend, l.graphic],
            title: 'TalkThick',
            year: 2020
        },
        child: lazy(() => import('../component/Project/Talkthick')),
        label: [l.graphic],
        style: ``,
        thumb: {
            background: ['coral'],
            color: 'gray5',
            image: image.portfolio.talkthick,
            offset: [0.5, 0.5],
            scale: 1
        }
    },

    traffic: {
        about: {
            brief: <>A young girl seeks happiness on the streets of Tehran.</>,
            client: 'Tavaana',
            logo: vector.logo.tavaana,
            role: [l.animation, l.illustration, l.storyboard],
            title: 'Traffic',
            year: 2014
        },
        child: lazy(() => import('../component/Project/Traffic')),
        label: [l.storyboard],
        style: `
            --app-header-button-background: #f0f2e7;
            --app-header-button-background-active: #f0f2e7;

            --page-background: #e4e8dc;
        `,
        thumb: {
            background: ['gray1'],
            color: 'gray5',
            image: image.portfolio.traffic,
            offset: [0.25, 0.5],
            scale: 1
        }
    },

    vocol: {
        about: {
            brief: <>With so much of our speech filtered, set free your words with filters of your own.</>,
            client: 'BigBigBit',
            logo: vector.logo.vocol,
            role: [l.concept, l.frontend, l.graphic],
            title: 'Vocol',
            year: 2022
        },
        child: lazy(() => import('../component/Project/Vocol')),
        label: [l.graphic],
        style: ``,
        thumb: {
            background: ['azure', 'azure', 'fairy'],
            color: 'gray5',
            image: image.portfolio.vocol,
            offset: [0.5, 0.5],
            scale: 1.5
        }
    },

    year: {
        about: {
            brief: <>We witness the drama that only an Excel sheet can accurately express.</>,
            logo: vector.logo.gemInc,
            role: [l.animation, l.graphic],
            title: 'Year in Review',
            year: 2018
        },
        child: lazy(() => import('../component/Project/Year')),
        label: [l.animation],
        style: `
            --app-header-button-background: #fff;
            --app-header-button-background-active: #fff;
            --app-header-button-text-color: #000;
            --app-header-button-text-color-active: #000;

            --logo-color: #fff;
            
            --rule-color: #000;

            --text-color: #000;
        `,
        thumb: {
            background: ['grape', 'royal', 'fairy', 'azure'],
            color: 'white',
            image: image.portfolio.year,
            offset: [0.5, 0.5],
            scale: 1
        }
    }

};