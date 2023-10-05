import { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
    </div>
  );
}

function FirstComponent() {
  return (
    <div className='FirstComponent'>FirstComponent</div>
  )
}

function SecondComponent() {
  return (
    <div className='SecondComponent'>SecondComponent</div>
  )
}

class ThirdComponent extends Component{
  render() {
    return (
      <div className='ThirdComponent'>ThirdComponent</div>
    );
  }
}

class FourthComponent extends Component{
  render() {
    return (
       <div className='FourthComponent'>FourthComponent</div>
    );
  }
}

export default App;
