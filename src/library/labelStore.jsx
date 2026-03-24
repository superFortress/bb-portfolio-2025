/* I M P O R T
* * * * * * */

// Asset
import vector from '../asset/vector';

/* E X P O R T
* * * * * * */

export default {

    // Meta

    all: {
        name: 'all',
        color: 'var(--color-lemon)',
        icon: vector.icon.star,
        order: 0
    },

    // Production

    production: {
        name: 'production',
        color: 'var(--color-fairy)',
        icon: vector.icon.lead,
        order: 1
    },

    // Direction

    direction: {
        name: 'direction',
        color: 'var(--color-fairy)',
        icon: vector.icon.lead,
        order: 2
    },

    // Concept

    concept: {
        name: 'concept design',
        color: 'var(--color-fairy)',
        icon: vector.icon.shapes,
        order: 3
    },

    storyboard: {
        name: 'storyboarding',
        color: 'var(--color-fairy)',
        icon: vector.icon.board,
        order: 3
    },

    writing: {
        name: 'copywriting',
        color: 'var(--color-fairy)',
        icon: vector.icon.file,
        order: 3
    },

    // Development

    animation: {
        name: 'animation',
        color: 'var(--color-lemon)',
        icon: vector.icon.motion,
        order: 4
    },

    graphic: {
        name: 'graphic design',
        color: 'var(--color-azure)',
        icon: vector.icon.design,
        order: 4
    },

    frontend: {
        name: 'web design',
        color: 'var(--color-fairy)',
        icon: vector.icon.code,
        order: 4
    },

    illustration: {
        name: 'illustration',
        color: 'var(--color-fairy)',
        icon: vector.icon.draft,
        order: 4
    },

    voice: {
        name: 'voice acting',
        color: 'var(--color-fairy)',
        icon: vector.icon.voice,
        order: 4
    }

};