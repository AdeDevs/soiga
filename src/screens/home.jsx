import Back from "../assets/back.png"
import Stars from "../assets/stars.png"
import Tick from "../assets/tick.png"
import Menu from "../assets/menu.png"
import Ui from "../assets/ui.png"
import Software from "../assets/code.png"
import Market from "../assets/promotion.png"
import Angle from "../assets/angle.png"

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

                <div className="solutions-box">
                    <h1>Services and Solutions</h1>
                    <p>We help the most exciting brands unlock growth through our well crafted digital and innovative services.</p>
                    <section className="services-box">
                        <div id="ui">
                            <aside> <img src={Ui} alt="icon" /> </aside>
                            <h2>UI/UX Design</h2>
                            <p>We offered tailored website design solution that perfectly suit your business or personal needs, ensuring your vision comes to life</p>
                            <aside id="angle"> <img src={Angle} alt="angle" /> </aside>
                        </div>
                        <div id="software">
                            <aside> <img src={Software} alt="icon" /> </aside>
                            <h2>Software Development</h2>
                            <p>We craft custom software that's as unique as your vision, delivering efficient, reliable and scalable software that drives your business forward.</p>
                            <aside id="angle"> <img src={Angle} alt="angle" /> </aside>
                        </div>
                        <div id="market">
                            <aside> <img src={Market} alt="icon" /> </aside>
                            <h2>Marketing & Advertising</h2>
                            <p>We specialize in crafting strategic marketing campaigns that captivate your audience, boost brand visibility, and drive results.</p>
                            <aside id="angle"> <img src={Angle} alt="angle" /> </aside>
                        </div>
                    </section>
                </div>

                <div className="foot-box">
                    <div>
                        <h1>7+</h1>
                        <p>Years in Business</p>
                    </div>
                    <div>
                        <h1>1573</h1>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <h1>141</h1>
                        <p>Happy Clients</p>
                    </div>
                    <div>
                        <h1>3</h1>
                        <p>Industry Awards</p>
                    </div>
                </div>
            </header>

            {/* <main>
                <did className="projects-box">
                    <h1>Our Completed Projects</h1>
                    <p>Check out some of the cool works we've done in the past. Every brand is unique with different products, target audience and business goals.</p>
                    <section>
                        <div className="info-box">
                            <section id="image-box1"></section>
                            <section></section>
                        </div>
                        <div className="info-box">
                            <section id="image-box2"></section>
                            <section></section>
                        </div>
                        <div className="info-box">
                            <section id="image-box3"></section>
                            <section></section>
                        </div>
                    </section>
                    <button>See All Other Projects Here <img src={Back} alt="icon" /></button>
                </did>
            </main> */}
        </div>
    )
}

export default HomeScreen;