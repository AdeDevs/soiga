import Back from "../assets/back.png"
import Stars from "../assets/stars.png"
import Tick from "../assets/tick.png"
import Menu from "../assets/menu.png"

function HomeScreen() {
    return (
        <div className="home-box">
            <header>
                <nav>
                    <h1 id="logo">S.</h1>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Projects</li>
                        <li>Services</li>
                    </ul>
                    <button>Contact Us</button>
                    <img id="menu" src={Menu} alt="menu" />
                </nav>

                <div className="split-box">
                    <section className="text-box">
                        <h1>Experience a New World of Digital Innovation</h1>
                        <p>We are multi-disciplinary agency, specialized in delivery spectrum of IT skills ranging from UI/UX design to software development to digital marketing and advertising, empowering businesses to thrive in the digital era</p>
                        <button>Schedule a Free Meeting</button>
                    </section>

                    <section className="image-box">
                        <img id="back" src={Back} alt="icon" />
                        <img id="stars" src={Stars} alt="icon" />
                        
                        <aside className="img-parent1">
                        <div id="img-box1"></div>
                        </aside>
                        
                        <aside className="img-parent2">
                        <div id="img-box2">
                        <img id="tick" src={Tick} alt="icon" />
                        </div>
                        </aside>
                    </section>
                </div>
            </header>
        </div>
    )
}

export default HomeScreen;