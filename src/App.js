import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const course = 'Half Stack application develoment';

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }
  ];
  return (
    <div>
      <Header course={course} />

      <Content parts={parts} />
      
      <Total total={parts.reduce((sum, n) => sum+=n.exercises, 0)} />
    </div>
  );
}

export default App;