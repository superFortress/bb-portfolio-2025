/* I M P O R T
* * * * * * */

// Asset
import vector from '../../asset/vector';

// Function
import pathToString from '../../function/string/pathToString';
import useListener from '../../function/hook/useListener';

// Module
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

/* E X P O R T
* * * * * * */

export default function Mobile(props) {

    // A S S I G N

    // Reference
    const videoRef = useRef(null);

    // State
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [videoStopped, setVideoStopped] = useState(true);

    // Condition
    const isActive = props.isActive ?? true;
    const showOverlay = videoPlaying ? false : true;

    // Variable
    const color = props.color || undefined;
    const image = props.poster || '/asset/image/utility/missing-image.png';
    const label = props.alt || pathToString(props.src, 2, true);
    const video = props.src || null;

    // F U N C T I O N

    // Stop and reset video
    const stopVideo = () => {
        setVideoPlaying(false);
        setVideoStopped(true);
        const video = videoRef.current;
        if (!video) return;
        video.pause();
        video.currentTime = 0;
    };

    const toggleVideo = () => {
        const video = videoRef.current;
        if (video.paused) {
            setVideoPlaying(true);
            setVideoStopped(false);
            video.play();
        } else {
            setVideoPlaying(false);
            video.pause();
        }
    };

    // E F F E C T

    // Stop and reset video when inactive
    useEffect(() => {
        if (!isActive) setTimeout(stopVideo, 150);
    }, [isActive]);

    // Respond to changes in video
    useListener(videoRef, 'ended', stopVideo);

    // R E T U R N

    return <motion.div
        className="video"
        style={{ '--video-control-front-color': color }}
    >

        {/* Content */}

        <div className="video__content">
            <motion.img
                alt={label}
                src={image}
                initial={{
                    opacity: 1
                }}
                animate={{
                    opacity: videoStopped ? 1 : 0
                }}
            />
            <motion.video
                preload="auto"
                ref={videoRef}
                src={video}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: videoStopped ? 0 : 1
                }}
                // Disable iOS and Android interference
                controls={false}
                onTouchStart={(event) => event.preventDefault()}
                playsInline
            />
        </div>

        {/* Overlay */}

        <div
            className="video__overlay"
            onClick={() => isActive && toggleVideo()}
        >
            <motion.button
                className="video__overlay-button"
                initial={{
                    opacity: 1
                }}
                animate={{
                    opacity: showOverlay ? 1 : 0
                }}
            >
                <vector.media.play />
            </motion.button>
            <motion.div
                className="video__overlay-dimmer"
                initial={{
                    opacity: 0.25
                }}
                animate={{
                    opacity: showOverlay ? 0.25 : 0
                }}
                transition={{
                    type: 'spring',
                    damping: videoPlaying ? 10 : 35
                }}
            />
        </div>

    </motion.div>;

}