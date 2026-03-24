/* I M P O R T
* * * * * * */

// Asset
import image from '../asset/image';
import video from '../asset/video';

// Element
import Modal from '../element/Modal';
import Video from '../element/Video';

/* E X P O R T
* * * * * * */

export default function Showreel() {

    // R E T U R N

    return <Modal className="showreel" hash="showreel">
        <div className="showreel__video">
            <Video
                poster={image.showreel.reelMotionPoster}
                src={video.showreel.reelMotion}
            />
        </div>
    </Modal>;

}