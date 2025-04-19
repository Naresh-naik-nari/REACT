import "./LandingPage.css"

const BodyPage = () => {
    return <>
        <section className="hero">
            <img src="../public/architect.jpg" alt="Architecture building"/>
                <div class="hero-text">
                    <div class="br-logo">BR</div>
                    <div class="br-subtitle"><h1>Architects</h1></div>
                </div>
        </section>
        <section id="projects">
        <h2 class="section-title">Projects</h2>
        <hr/>
        <div class="projects-container">
            <div class="project-card">
                <img src="../public/house5.jpg" alt="Summer House"/>
                <div class="project-label">Summer House</div>
            </div>
            <div class="project-card">
                <img src="../public/house2.jpg" alt="Brick House"/>
                <div class="project-label">Brick House</div>
            </div>
            <div class="project-card">
                <img src="../public/house3.jpg" alt="Renovated House"/>
                <div class="project-label">Renovated</div>
            </div>
            <div class="project-card">
                <img src="../public/house4.jpg" alt="Barn House"/>
                <div class="project-label">Barn House</div>
            </div>
            <div class="project-card">
                <img src="../public/house2.jpg" alt="Summer House"/>
                <div class="project-label">Summer House</div>
            </div>
            <div class="project-card">
                <img src="../public/house5.jpg" alt="Brick House"/>
                <div class="project-label">Brick House</div>
            </div>
            <div class="project-card">
                <img src="../public/house4.jpg" alt="Renovated House"/>
                <div class="project-label">Renovated</div>
            </div>
            <div class="project-card">
                <img src="../public/house3.jpg" alt="Barn House"/>
                <div class="project-label">Barn House</div>
            </div>
        </div>
    </section>
    </>
}
export default BodyPage