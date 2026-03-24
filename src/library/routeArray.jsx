/* I M P O R T
* * * * * * */

// Function
import arrayToString from '../function/string/arrayToString';

// Library
import projectStore from './projectStore';

// Module
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

/* E X P O R T
* * * * * * */

export default [{

    about: { title: 'Home' },
    child: lazy(() => import('../component/Home')),
    route: '/',
    style: ``

}, {

    about: {},
    child: () => <Navigate to="/" replace />,
    route: '*',
    style: ``

},

...Object.entries(projectStore).map(([key, project]) => ({
    about: {
        ...project.about,
        role: arrayToString(project.about.role.map((role) => role.name), true)
    },
    child: project.child,
    route: `/work/${key}`,
    style: project.style
}))

];