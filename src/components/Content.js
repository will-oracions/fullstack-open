const Content = (props) => {
  return (
    props.parts.map((part) => {
      return <p>{part.title} {part.exercises}</p>
    })
  );
}

export default Content;