/* I M P O R T
* * * * * * */

// Module
import { Bodies, World } from 'matter-js';
import { useEffect, useRef } from 'react';

/* E X P O R T
* * * * * * */

export default function Container({

    // Geometry
    bannerFrame = {},
    cameraFrame = {},
    cameraPoint = {},
    canvasPoint = {},
    client = {},
    // Matter
    engine = null

}) {

    // A S S I G N

    // Reference
    const bodyArrayRef = useRef([]);

    // F U N C T I O N

    const createBodies = () => {

        // Configuration
        const bodyWidth = 20;

        // Properties
        const banner = { ...bannerFrame };
        const camera = { ...cameraFrame, ...cameraPoint };
        const canvas = { ...canvasPoint };

        const divider = (() => {
            // Properties
            const width = banner.width;
            const height = 10;
            const x = canvas.x
                + camera.x;     // add camera offset
            const y = canvas.y
                + banner.height / 2
                + (client.onDesktop ? 40 : 20)
                + camera.y;     // add camera offset
            // Create
            return Bodies.rectangle(
                x, y, width, height, {
                // Settings
                isStatic: true,
                collisionFilter: {
                    category: 0x1,
                    mask: 0x2 | 0x4 | 0x8 | 0x10
                },
                render: {
                    visible: false
                }
            });
        })();

        // Create floor
        const floor = (() => {
            // Properties
            const width = camera.width * 2;
            const height = bodyWidth;
            const x = camera.width / 2
                + camera.x;     // add camera offset
            const y = camera.height
                + height / 2
                + camera.y;     // add camera offset
            // Create
            return Bodies.rectangle(
                x, y, width, height, {
                // Settings
                isStatic: true,
                collisionFilter: {
                    category: 0x1,
                    mask: 0x2 | 0x4 | 0x8 | 0x10
                },
                render: {
                    visible: false
                }
            });
        })();

        // Create walls
        const [wallLeft, wallRight] = [1, 0].map((left) => {
            // Properties
            const width = bodyWidth;
            const height = camera.height;
            const x = (client.onDesktop
                ? camera.width * (left ? -0.1 : 1.1)
                : camera.width * (left ? -0.25 : 1.25)
            ) + camera.x;       // add camera offset
            const y = camera.height / 2
                + camera.y;     // add camera offset
            // Create
            return Bodies.rectangle(
                x, y, width, height, {
                // Settings
                isStatic: true,
                collisionFilter: {
                    category: 0x1,
                    mask: 0x2 | 0x4 | 0x8 | 0x10
                },
                render: {
                    visible: false
                }
            });
        });

        // Employ bodies
        const bodies = [divider, floor, wallLeft, wallRight];
        World.remove(engine.world, bodyArrayRef.current);
        World.add(engine.world, bodies);
        bodyArrayRef.current = bodies;

    };

    // E F F E C T

    // Create new container
    useEffect(() => {
        createBodies();
    }, [bannerFrame, cameraFrame, cameraPoint, canvasPoint, client]);

}