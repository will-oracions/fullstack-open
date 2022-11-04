import Part from './Part';

const Content = (props) => {
  return (
    props.parts.map((part) => <Part title={part.title} exercises={part.exercises} />)
  );
}

export default Content;