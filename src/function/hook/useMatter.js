/* I M P O R T
 * * * * * * */

// Module
import { Engine, Render } from 'matter-js';
import { useEffect, useRef } from 'react';

/* E X P O R T
 * * * * * * */

// Use matter
// ==> Start matter environment in canvas
// ==> Return matter engine
// ==> Return subscriber that updates each frame
export default function useMatter(

    canvasRef = null,
    { width, height } = {},
    dependencies = []

) {

    // A S S I G N

    // Configuration
    const framerate = 1000 / 60;
    const pixelRatio = 1;

    // Create engine
    const engineRef = useRef(Engine.create());
    const renderRef = useRef(null);
    const updateRef = useRef(null);

    // Store subscribers
    const subscribersRef = useRef(new Set());

    // F U N C T I O N

    // Update loop
    const update = () => {
        const engine = engineRef.current;
        const render = renderRef.current;
        Engine.update(engine, framerate);
        Render.world(render);
        // Loop through subscribers
        subscribersRef.current.forEach((callback) => callback(engine));
        updateRef.current = requestAnimationFrame(update);
    };

    // Subscribe to update cycle
    const useUpdate = (callback) => useEffect(() => {
        subscribersRef.current.add(callback);
        return () => subscribersRef.current.delete(callback);
    }, [callback]);

    // E F F E C T

    // Create matter
    useEffect(() => {

        // Create render
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const engine = engineRef.current;
        const render = Render.create({
            canvas,
            engine,
            options: {
                ...(width && { width }),
                ...(height && { height }),
                background: 'transparent',
                pixelRatio: pixelRatio,
                wireframes: false
            }
        });

        // Manage render
        renderRef.current = render;
        update();

        return () => {
            cancelAnimationFrame(updateRef.current);
            Render.stop(render);
            Engine.clear(engine);
            render.canvas = null;
            render.context = null;
            render.textures = {};
        };

    }, [...dependencies]);

    // Resize canvas
    useEffect(() => {
        if (!width || !height) return;
        if (!renderRef.current) return;
        const render = renderRef.current;
        render.canvas.width = width * pixelRatio;
        render.canvas.height = height * pixelRatio;
        render.canvas.style.width = `${width}px`;
        render.canvas.style.height = `${height}px`;
        render.options.width = width * pixelRatio;
        render.options.height = height * pixelRatio;
    }, [width, height]);

    // R E T U R N

    return {
        engine: engineRef.current,
        useUpdate: useUpdate
    };

};