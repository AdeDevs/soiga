import Back from "../assets/back.png"
import Stars from "../assets/stars.png"
import Tick from "../assets/tick.png"
import Menu from "../assets/menu.png"
import Ui from "../assets/ui.png"
import Software from "../assets/code.png"
import Market from "../assets/promotion.png"
import Angle from "../assets/angle.png"
import Forward from "../assets/forward.png"
import Chanel from "../assets/chanel.png"
import Anila from "../assets/anila.png"
import Force from "../assets/force.png"
import Ninos from "../assets/ninos.png"
import Umbro from "../assets/umbro.png"
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"
import Linkedin from "../assets/linkedin.png"
import Twitter from "../assets/twitter.png"

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

            <main>
                <div className="projects-box">
                    <h1>Our Completed Projects</h1>
                    <p>Check out some of the cool works we've done in the past. Every brand is unique with different products, target audience and business goals.</p>
                    <section>
                        <div className="info-box">
                            <section>
                                <p id="tag1">UI/UX Design</p>
                                <h2>Trakka, Digitalizing Healthcare Monitoring</h2>
                                <p>Trakka is an healthcare app, ensuring every tap and swipe enhances your well-being. Experience the future of wellness with Trakka.</p>
                                <button>See Full Project <img src={Forward} alt="icon" /></button>
                            </section>
                            <section id="image-box1"></section>
                        </div>
                        <div className="info-box">
                            <section id="image-box2"></section>
                            <section>
                                <p id="tag2">Software Development</p>
                                <h2>Beetaqs, Redifining Finance In Web3</h2>
                                <p>Trakka is a crypto app, ensuring every tap and swipe enhances your finance. Experience the future of financial freedom.</p>
                                <button>See Full Project <img src={Forward} alt="icon" /></button>
                            </section>
                            <section id="mob-image-box1"></section>
                        </div>
                        <div className="info-box">
                            <section>
                                <p id="tag3">Marketing & Advertising</p>
                                <h2>Mastering The Art Of Digital Engagement</h2>
                                <p>In a rapidly evolving digital landscape, this resource equips you with the knowledge and strategies to excel in the world of marketing.</p>
                                <button>See Full Project <img src={Forward} alt="icon" /></button>
                            </section>
                            <section id="image-box3"></section>
                        </div>
                    </section>
                    <button id="last">See All Other Projects Here <img src={Forward} alt="icon" /></button>
                    <div className="foot-box">
                        <p>LEADING BRANDS TRUST US</p>
                        <div>
                        <img src={Chanel} alt="Chanel" />
                        <img src={Force} alt="Force" />
                        <img src={Umbro} alt="Umbro" />
                        <img src={Anila} alt="Anila" />
                        <img src={Ninos} alt="Ninos" />
                        </div>
                    </div>
                </div>

                <div className="review-box">
                    <h1>What Our Clients Say About Us</h1>
                    <div>
                        <section className="client-info">
                            <h2>Bob Cowell</h2>
                            <p id="role">CEO, ChopNow</p>
                            <p><span>	&#x201C;</span></p>
                            <p className="review-text">
                                I couldn't be happier with the software development expertise provided by Soiga. Their team took our vision and turned it into a robust, user-friendly application. The quality of their work and their dedication to meeing deadlines exceeded our expectations. Our project's success is a testament to their skill and professionalism. We look forward to partenering with them again in the future.
                            </p>
                        </section>
                        <section className="client-image"></section>
                    </div>
                    <footer className="nav-foot">
                        <p> &#x3C; </p> <h1 id="small"> <span id="big">01</span> / 08 </h1> <p> &#x3E; </p>
                    </footer>
                </div>

                <div className="contact-box">
                    <h1>Ready To Start Your Project?</h1>
                    <p>We're eager to hear about your project. Let's start a conversation today and embark on a journey to build something amazing together. Reach out to us below, and let's make your vision a digital reality.</p>
                    <form action="">
                        <input type="text" placeholder="Name" required/>
                        <input type="email" placeholder="Email" required/>
                        <input type="text" placeholder="Subject" required/>
                        <textarea name="message" placeholder="Your Message" required/>
                    </form>
                    <button>Send Message<img src={Forward} alt="back" /></button>
                </div>
            </main>

            <footer className="main-footer">
                <div className="about-box">
                    <section>
                        <h4><span id="logo">S</span> Soiga.</h4>
                        <p className="address">75a Melbourne, Churchgate St, Guilford, CT 06434, info@soiga.com</p>
                    </section>
                    <section className="more-box">
                        <div>
                            <h1>Our Solutions</h1>
                            <ul>
                                <li>Web Development</li>
                                <li>Web Design</li>
                                <li>Marketing</li>
                                <li>Advertising</li>
                            </ul>
                        </div>
                        <div>
                            <h1>Company</h1>
                            <ul>
                                <li>About Us</li>
                                <li>Case Study</li>
                                <li>Our Team</li>
                                <li>Pricing Plan</li>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h1>Subscribe to our newsletter</h1>
                        <p>Subscribe to get all exclusive updates from us.</p>
                        <form action="">
                            <input type="email" name="mail" placeholder="Enter your email" required/>
                            <button>Subscribe</button>
                        </form>
                    </section>
                    <ul id="mobile-socials">
                        <li><img src={Instagram} alt="instagram" /></li>
                        <li><img src={Linkedin} alt="Linkedin" /></li>
                        <li><img src={Twitter} alt="Twitter" /></li>
                        <li><img src={Facebook} alt="Facebook" /></li>
                    </ul>
                </div>
                <hr />
                <div className="footer-bottom">
                    <section>&copy; 2024 Soiga, All Rights Reserved</section>
                    <ul id="desktop-socials">
                        <li><img src={Instagram} alt="instagram" /></li>
                        <li><img src={Linkedin} alt="Linkedin" /></li>
                        <li><img src={Twitter} alt="Twitter" /></li>
                        <li><img src={Facebook} alt="Facebook" /></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default HomeScreen;