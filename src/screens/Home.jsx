import "../styles/home.css";
import back from "../assets/back.png";
import girl from "../assets/girl.webp";
import stars from "../assets/stars.png";
import team from "../assets/team.jpeg";
import tick from "../assets/tick.png";

function HomeScreen() {
  return (
    <div className="home-container">
      <div className="home">
        <section>
          <div>
          <h1>Experience a New World of Digital Innovation</h1>
          <p>
            We are multi-disciplinary agency, specialized in delivery spectrum
            of IT skills ranging from UI/UX design to software development to
            digital marketing and advertising, empowering businesses to thrive
            in the digital era.
          </p>
          <button>Schedule a Free Meeting</button>
          </div>
        </section>
        <section>
          <div className="card1">
            {/* <img src={girl} alt="girl" /> */}
            <div className="image1"></div>
          </div>
          <div className="card2">
            {/* <img src={team} alt="team" /> */}
            <div className="image2">
                <img className="back" src={back} alt="" />
                <img className="tick" src={tick} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomeScreen;
