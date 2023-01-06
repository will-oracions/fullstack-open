import React from 'react';
import Button from './components/Button';

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <p>The app is used by pressing the buttons.</p>
  }

  return <div>Button press history: {props.allClicks.join(' ')}</div>
}

const App2 = () => {
  const [clicks, setClicks] = React.useState({ left: 0, right: 0});
  const [allClicks, setAll] = React.useState([]);
  const [hello, setHello] = React.useState('');

  const handleRightClicks = () => {
    setAll(allClicks.concat('R'));
    setClicks({...clicks, right: clicks.right+1});
  }
  const handleLeftClicks = () => {
    setAll(allClicks.concat('L'));
    setClicks({...clicks, left: clicks.left+1});
  }

  const sayHello = (name) =>  () => setHello(`Hi ${name} !`);

  return (
    <div>
      <div>
        <p>message: {hello}</p>
        <Button text='hello John' handleClick={sayHello('John')} />
        <Button text='hello Marc' handleClick={sayHello('Marc')} />
        <Button text='hello Joseph' handleClick={sayHello('Joseph')} />
      </div>

      {clicks.left}
      <Button text='left' handleClick={handleLeftClicks} />

      {clicks.right}
      <Button text='right' handleClick={handleRightClicks} />

      <History allClicks={allClicks} />
    </div>
  );
}

export default App2;