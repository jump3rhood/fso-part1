import Part from './Part';
const Content = (props) => {

    const renderedParts = props.parts.map((part, i) => {
        return <Part key={i} part={part} />
    })
    return <>{renderedParts}</>;
}

export default Content;