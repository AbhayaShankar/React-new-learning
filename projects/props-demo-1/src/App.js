import "./App.css";
import Main from "./Main";
import "../src/index";

function App() {
  return (
    <div className="contact-card-main">
      <Main
        img="../src/Images/kit1.jfif"
        name="Mr. Wiskerson"
        phn=" 034-8544636"
        email="shankarabhaya9@gmail.com"
      />
      <Main
        img="../src/Images/kit2.jpg"
        name="Mrs. Fluffykins"
        phn=" 078-9745516"
        email="karuna9@gmail.com"
      />
      <Main
        img="../src/Images/kit3.jpg"
        name="Felix Jones"
        phn=" 012-8466116"
        email="pcpuri@gmail.com"
      />
      <Main
        img="../src/Images/kit4.jpg"
        name="Pumpkin Pie"
        phn=" 091-25  66116"
        email="fransis@gmail.com"
      />
    </div>
  );
}

export default App;
