import "./LandingPage.css"

const FooterPage = () => {
    return <>
        <section id="about">
            <h2 class="section-title">About</h2>
            <hr />
            <div class="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>

            <div class="team-container">
                <div class="team-card">
                    <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John Doe" />
                    <div class="team-name">John Doe</div>
                    <div class="team-title">CEO & Founder</div>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <button class="contact-btn">Contact</button>
                </div>
                <div class="team-card">
                    <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane Doe" />
                    <div class="team-name">Jane Doe</div>
                    <div class="team-title">Architect</div>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <button class="contact-btn">Contact</button>
                </div>
                <div class="team-card">
                    <img src="https://www.w3schools.com/w3images/team3.jpg" alt="Mike Ross" />
                    <div class="team-name">Mike Ross</div>
                    <div class="team-title">Architect</div>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <button class="contact-btn">Contact</button>
                </div>
                <div class="team-card">
                    <img src="https://www.w3schools.com/w3images/team4.jpg" alt="Dan Star" />
                    <div class="team-name">Dan Star</div>
                    <div class="team-title">Architect</div>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <button class="contact-btn">Contact</button>
                </div>
            </div>
        </section>

        <section id="contact" class="contact-section">
            <h2>Contact</h2>
            <p>Lets get in touch and talk about your next project.</p>

            <form action="" method="get">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea name="comment" placeholder="Comment" required></textarea>
            </form>

            <button class="send-btn">SEND MESSAGE</button>

            <div class="map">
                <img src="https://www.w3schools.com/w3images/map.jpg" alt="Map" />
            </div>
        </section>


        <footer>
            Powered by <a href="#">w3.css</a>
        </footer>
    </>
}

export default FooterPage