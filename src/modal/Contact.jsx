/* I M P O R T
* * * * * * */

// Asset
import vector from '../asset/vector';

// Element
import Modal from '../element/Modal';

// Function
import useClient from '../function/hook/useClient';

/* E X P O R T
* * * * * * */

export default function Contact() {

    // A S S I G N

    // State
    const client = useClient();

    // Variable
    const emailArray = ['contact', 'borizbaatsen.com'];
    const phoneArray = ['+31', '6', '4392', '4786'];

    // R E T U R N

    return <Modal className="contact" hash="contact">
        <div className="contact-banner">
            <h1>Love to talk</h1>
            <hr />
            {client.onDesktop && <p>It all starts with a conversation. Let's hear your ideas and set course together. You can reach me through mail or by phone. Look forward to hearing from you!</p>}
            {client.onMobile && <p>It all starts with a conversation. Let's hear your ideas and set course together. Look forward to hearing from you!</p>}
            <ul>
                <li>
                    <a
                        className="button--big"
                        href={`mailto:${emailArray.join('@')}`}
                    >
                        <vector.icon.email />
                        <span>{emailArray.join('@')}</span>
                    </a>
                </li>
                <li>
                    <a
                        className="button--big"
                        href={`tel:${phoneArray.join('')}`}
                    >
                        <vector.icon.phone />
                        <span>{phoneArray.join('')}</span>
                    </a>
                </li>
            </ul>
        </div>
    </Modal>;

}