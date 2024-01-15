import Cards from "./Cards"

function App() {
  // Inline stil berish
  // const simpleStyle = {width: "200px", backgroundColor: "red", color: "blue"}

  return (
    <div className="App">
      {/* Inline stil berish */}
      {/* <h1 style={simpleStyle}>Hello world!</h1> */}
      {/* Inline stil berish */}
      {/* <h1 style={{width: "200px", backgroundColor: "red", color: "blue"}}>Hello world!</h1> */}
      <h1>Hello world!</h1>
      <Cards matn={"Card Title 1"} img={"./img/1. Черный кот с рыбкой.jpg"} />
      <Cards matn={"Card Title 2"} img={"./img/10. Цветы.jpg"} />
      <Cards matn={"Card Title 3"} img={"./img/12. Вода.jpg"} />
    </div>
  );
}

export default App;