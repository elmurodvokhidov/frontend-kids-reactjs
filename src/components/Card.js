import GlobalBtn from "./GlobalBtn"

function Card({narx}) {
  return (
    <div className="card">
        <img src="./img/Rectangle 4.png" alt="card" />
        <div className="cardMain">
            <h3>Парикмахерское кресло «Норм» гидравлическое</h3>
            <h1>{narx} ₽</h1>
            <GlobalBtn text={"Купить"} borderColor={"#F13C6E"} textColor={"white"} backgroundColor={"#F13C6E"} />
        </div>
    </div>
  )
}

export default Card