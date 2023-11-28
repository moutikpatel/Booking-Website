import Header from "../components/HeaderComponent";
import "./HomePage.css";

function Home() {
  return (
    <div className="App">
      <Header />

      <div className="contentMain">
        <p className="heading">Anyone Can Code</p>
        <p className="para">
          Learn the program in the most popular languages, in a format and that
          time that suits your schedule and lifestyle.
        </p>
        <button className="mainButton">Try for Free</button>
      </div>
    </div>
  );
}

export default Home;
