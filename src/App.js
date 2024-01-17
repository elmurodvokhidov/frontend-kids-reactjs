import { useState, Fragment } from "react";
import rasm1 from "./img/1. Черный кот с рыбкой.jpg";
import rasm2 from "./img/10. Цветы.jpg";
import rasm3 from "./img/12. Вода.jpg";

function App() {
  const [users] = useState([
    {
      rasmi: rasm1,
      ismi: "sarvar",
      yoshi: "39",
      kasbi: "haydovchi"
    },
    {
      rasmi: rasm2,
      ismi: "bobur",
      yoshi: "10",
      kasbi: "novvoy"
    },
    {
      rasmi: rasm3,
      ismi: "islom",
      yoshi: "505",
      kasbi: "dorboz"
    },
  ]);

  return (
    <div className="App">
      {
        users.map((user, index) => (
          <Fragment key={index}>
            <img width={"200px"} src={user.rasmi} alt="rasm" />
            <h1>{user.ismi}</h1>
            <h4>{user.kasbi}</h4>
            <h4>{user.yoshi}</h4>
          </Fragment>
        ))
      }
    </div>
  );
}

export default App;