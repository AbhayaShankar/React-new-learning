import "./App.css";
import Main from "./Main";
import Jokes from "./Jokes";
import "../src/index";

function App() {
  return (
    <div>
      <div className="contact-card-main">
        <Main
          img="/Images/kit1.jfif"
          name="Mr. Wiskerson"
          phn=" 034-8544636"
          email="shankarabhaya9@gmail.com"
        />
        <Main
          img="/Images/kit2.jpg"
          name="Mrs. Fluffykins"
          phn=" 078-9745516"
          email="karuna9@gmail.com"
        />
        <Main
          img="/Images/kit3.jpg"
          name="Felix Jones"
          phn=" 012-8466116"
          email="pcpuri@gmail.com"
        />
        <Main
          img="/Images/kit4.jpg"
          name="Pumpkin Pie"
          phn=" 091-25  66116"
          email="fransis@gmail.com"
        />
      </div>
      <div className="jokes-content-box">
        <Jokes
          punchline="It's hard to explain puns to kleptomaniacs because 
        they always take things literally."
          isPun={true}
        />
        <Jokes
          setup="I got my daughter a fridge for her birthday."
          punchline="I can't wait to see her face light up when she opens it."
          isPun={true}
        />

        <Jokes
          setup="How did the hacker escape the police?"
          punchline=" He just ransomware!"
          isPun={false}
        />

        <Jokes
          setup="Why don't pirates travel on mountain roads?"
          punchline="Scurvy."
          isPun={true}
        />

        <Jokes
          setup=" Why do bees stay in the hive in the winter?"
          punchline="Swarm."
          isPun={false}
        />

        <Jokes
          setup="What's the best thing about Switzerland?"
          punchline=" I don't know, but the flag is a big plus!"
          isPun={false}
        />
      </div>
    </div>
  );
}

export default App;
