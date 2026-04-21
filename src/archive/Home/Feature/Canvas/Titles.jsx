/* I M P O R T
* * * * * * */

// Module
import { Bodies, Composite, Constraint, World } from 'matter-js';
import { useEffect, useRef } from 'react';

/* E X P O R T
* * * * * * */

export default function Titles({

    // Element
    titleBodyMapRef = null,
    titleElemMap = new Map(),
    // Geometry
    client = {},
    // Matter
    engine = null

}) {

    // A S S I G N

    // Reference
    const anchorMapRef = useRef(new Map());
    const figureMapRef = titleBodyMapRef;
    const tetherMapRef = useRef(new Map());

    // F U N C T I O N

    const createBodies = () => titleElemMap.forEach((body, key) => {

        // Create figure
        const prevFigure = figureMapRef.current.get(key);
        const figure = (() => {

            // Properties
            const { x, y, width, height } = body;
            const angle = prevFigure?.angle || body.angle * (Math.PI / 180);
            const color = prevFigure?.color || 'var(--color-gray5)';
            const group = body.group || 0x1;
            const velocity = prevFigure?.velocity || { x: 0, y: 0 };

            // Create figure
            return Bodies.rectangle(
                x, y, width, height, {
                // Geometry
                color: color,
                key: key,
                label: 'title',
                width: width,
                height: height,
                // Physics
                angle: angle,
                inertia: Infinity,
                velocity: velocity,
                // Settings
                isStatic: false,
                collisionFilter: {
                    category: group,
                    mask: 0x1 | 0x10
                },
                render: {
                    visible: false
                },
            });
        })();

        // Create anchors
        const [anchorLeft, anchorRight] = [1, 0].map((left) => {
            // Properties
            const radius = 5;
            const x = body.x + body.width * (left ? -0.3 : 0.3);
            const y = body.y;
            // Create
            return Bodies.circle(
                x, y, radius, {
                // Settings
                isSensor: true,
                isStatic: true,
                render: {
                    visible: false
                }
            });
        });

        // Create tethers
        const [tetherLeft, tetherRight] = [1, 0].map((left) => {
            // Properties
            const width = body.width * 0.05;
            // Create
            return Constraint.create({
                bodyA: left ? anchorLeft : anchorRight,
                bodyB: figure,
                length: width,
                stiffness: client.onDesktop ? 0.02 : 0.05,
                render: {
                    visible: false
                }
            });
        });

        // Remove bodies
        // ... Remove from matter
        const figures = figureMapRef.current.get(key) || [];
        const anchors = anchorMapRef.current.get(key) || [];
        const tethers = tetherMapRef.current.get(key) || [];
        Composite.remove(engine.world, [anchors, figures, tethers].flat());
        // ... Delete from Map
        figureMapRef.current.delete(key);
        anchorMapRef.current.delete(key);
        tetherMapRef.current.delete(key);

        // Employ bodies
        const bodies = [figure, anchorLeft, anchorRight, tetherLeft, tetherRight];
        World.add(engine.world, bodies);
        figureMapRef.current.set(key, figure);
        anchorMapRef.current.set(key, [anchorLeft, anchorRight]);
        tetherMapRef.current.set(key, [tetherLeft, tetherRight]);

    });

    // E F F E C T

    useEffect(() => {
        if (titleElemMap.size === 0) return;
        createBodies();
    }, [titleElemMap]);

}