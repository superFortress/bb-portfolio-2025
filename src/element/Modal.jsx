/* I M P O R T
* * * * * * */

// Asset
import vector from '../asset/vector';

// Module
import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useLocation, useNavigate } from 'react-router-dom';

// Assign
ReactModal.setAppElement('#root');

/* E X P O R T
* * * * * * */

export default function Modal(props) {

    // A S S I G N

    // State
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    // Variable
    const { hash = 'default', ...config } = props;
    const location = useLocation();
    const navigate = useNavigate();

    // E F F E C T

    // Disable scrolling on body
    useEffect(() => {
        document.body.style.maxHeight = open ? '100vh' : '';
        document.body.style.overflow = open ? 'hidden' : '';
    }, [open]);

    // Mount on route change
    useEffect(() => {
        if (location.hash === `#${hash}`) {
            setOpen(true);
            setTimeout(() => setShow(true), 10);
        } else {
            setTimeout(() => setOpen(false), 300);
            setShow(false);
        }
    }, [location]);

    // F U N C T I O N

    const onClick = () => navigate(location.pathname, { replace: true });

    // R E T U R N

    return <ReactModal
        // Mounting
        isOpen={open}
        onClick={onClick}
        onRequestClose={onClick}
        // Styling
        className="modal-content"
        overlayClassName="modal-overlay"
        style={{
            overlay: {
                opacity: show ? 1 : 0,
                transition: show
                    ? 'all 0.5s ease-out'
                    : 'all 0.2s ease-out'
            }
        }}
    >
        {<button
            aria-label="Close modal"
            className="modal-content__button"
            onClick={onClick}
        >
            <vector.ui.close />
        </button>}
        <div {...config}>
            {props.children}
        </div>
    </ReactModal>;

}