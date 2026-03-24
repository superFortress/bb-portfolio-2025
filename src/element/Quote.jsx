/* E X P O R T
* * * * * * */

export default function Quote(props) {

    // A S S I G N

    // Variable
    const author = props.author || '';
    const caption = props.caption || '';
    const color = props.color || 'inherit';

    // R E T U R N

    return <figure className="quote" style={{ color }}>
        <blockquote>
            &ldquo;&#8201;{caption}&#8201;&rdquo;
        </blockquote>
        {author && <figcaption>
            &mdash; {author}
        </figcaption>}
    </figure>;

}