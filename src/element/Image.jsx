/* I M P O R T
* * * * * * */

// Function
import pathToString from '../function/string/pathToString';

/* E X P O R T
* * * * * * */

export default function Image(props) {

    // R E T U R N

    return !props.src ? <></> : <img
        alt={props.alt || pathToString(props.src, 2, true)}
        className="image"
        src={props.src}
        style={{
            ...(props.style || {}),
            background: props.color || 'transparent'
        }}
    />;

}