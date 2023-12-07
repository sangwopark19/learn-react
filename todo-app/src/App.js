import "./App.css";
import TodoApp from "./components/todo/TodoApp";

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

// function PlayingWithProps(properties) {
//   console.log(properties)
//   console.log(properties.property1)
//   console.log(properties.property2)
//   return (
//     <div>Props</div>
//   )
// }
// function PlayingWithProps({property1, property2}) {
//   console.log(property1)
//   console.log(property2)
//   return (
//     <div>Props</div>
//   )
// }

// 리액트 16.8 이상부턴 함수컴포넌트도 hooks를 이용해 State를 가질 수 있으니 클래스 컴포넌트를 쓸 이유가 없다.
// class FourthComponent extends Component {
//   render() {
//     return (
//       <div className='FourthComponent'>FourthComponent</div>
//     );
//   }
// }

export default App;
