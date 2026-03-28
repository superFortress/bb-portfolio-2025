/* I M P O R T
* * * * * * */

// Asset
import vector from '../asset/vector';

// Module
import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

// Assign
ReactModal.setAppElement('#root');

/* E X P O R T
* * * * * * */

export default function Modal(props) {

    // A S S I G N

    // State
    const [show, setShow] = useState(false);

    // Variable
    const location = useLocation();
    const navigate = useNavigate();

    // F U N C T I O N

    const close = () => navigate(location.pathname, { replace: true });

    // E F F E C T

    // Detect when modal opens
    useEffect(() => {
        setTimeout(() => setShow(true), 50);
    }, []);

    // Detect when modal closes
    useEffect(() => {
        if (!location.hash) setShow(false);
    }, [location.hash]);

    // Disable scrolling on body
    useEffect(() => {
        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = overflow;
        };
    }, []);

    // R E T U R N

    return <ReactModal
        // Mounting
        isOpen={true}
        onClick={close}
        onRequestClose={close}
        // Styling
        className="modal-content"
        overlayClassName="modal-overlay"
        style={{
            overlay: {
                opacity: show ? 1 : 0,
                transition: show
                    ? 'all 0.4s ease-out'
                    : 'all 0.2s ease-out'
            }
        }}
    >
        <button
            aria-label="Close modal"
            className="modal-content__button"
            onClick={close}
        >
            <vector.ui.close />
        </button>
        <motion.div {...props}>
            {props.children}
        </motion.div>
    </ReactModal>;

}