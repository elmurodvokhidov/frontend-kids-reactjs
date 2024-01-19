import Card from "./Card";

function CardsGroup({title}) {
    return (
        <div className="cardsGroup">
            <h1>{title}</h1>
            <div className="wrapper">
                <Card narx={"9 900"} />
                <Card narx={"7 200"} />
                <Card narx={"2 000"} />
                <Card narx={"5 300"} />
            </div>
        </div>
    )
}

export default CardsGroup