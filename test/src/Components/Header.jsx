import "./css.css"

const Header = () => {
    return <>
        <div className="header">
            <div className="text">🔎
                Search Recipes in Vismai food - Enter cuisine, ingredient, diet, etc

            </div>
            <div className="text">Recipe Index</div>
        </div>
        <div className="header2">
            <div className="subheader1">
                <img src="https://vismaifood.com/themes/pivisions/assets/images/logo.png" className="img1" alt="" />
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">Subscribe</a>
            </div>
            <div className="subheader2">
                <p> Site also available in:
                    Telugu
                </p>
            </div>
        </div>

    </>
}
export default Header