import './App.css';

function App() {
  return (
    <div className="App">
      My Todo Application 
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
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

export default App;
