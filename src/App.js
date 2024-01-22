import { useState } from "react";
import User from "./components/user";
import "./index.css";

function App() {
  // Barcha foydaalanuvchilarning ma'lumotlari
  const [users] = useState([
    {
      ismi: "sardor",
      yoshi: 24,
      kasbi: "haydovchi",
      rang: "red",
      haqida: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque quasi perspiciatis adipisci, labore quo sed. Deleniti assumenda totam cumque.",
      rasmi: "https://sriit.ac.in/tool/plugins/images/users/1.jpg"
    },
    {
      ismi: "islom",
      yoshi: 16,
      kasbi: "dasturchi",
      rang: "yellow",
      haqida: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque quasi perspiciatis adipisci, labore quo sed. Deleniti assumenda totam cumque.",
      rasmi: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1403"
    },
    {
      ismi: "bobur",
      yoshi: 15,
      kasbi: "shifokor",
      rang: "green",
      haqida: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque quasi perspiciatis adipisci, labore quo sed. Deleniti assumenda totam cumque.",
      rasmi: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
  ]);

  return (
    <div className="App">
      <h1 style={{ marginBottom: "30px" }}>Dasturdagi barcha foydalanuvchilar</h1>
      <div className="wrapper">
        {
          users.map((user, index) => (
            <User user={user} key={index} />
          ))
        }
      </div>
    </div>
  );
}

export default App;