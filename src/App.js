import CardsGroup from "./components/CardsGroup";
import GlobalBtn from "./components/GlobalBtn";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <img src="./img/logo.png" alt="logo" />
          <h1>BEAUTY</h1>
        </div>

        <GlobalBtn text={"Обратный звонок"} borderColor={"#F13C6E"} />
      </div>

      {/* section 1 */}
      <section className="section1">
        <div className="box">
          <h1>Супер кресло</h1>
          <p>Текст акции всегда отражает суть, а не просто болтовню, поэтому внимательнее</p>
          <GlobalBtn text={"Подробнее"} borderColor={"white"} textColor={"white"} />
        </div>
      </section>

      {/* section2 */}
      <section className="section2">
        <CardsGroup title={"Специальные предложения"} />
        <CardsGroup title={"Вы недавно смотрели"} />
      </section>
    </div>
  );
}

export default App;