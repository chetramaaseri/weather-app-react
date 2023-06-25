import "./Navbar.css"
import Logo from "../../images/logo.png"
function Navbar(){
    return (
        <div className="navbar">
            <div className="navbarBrand">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <h1 className="heading">Weather App</h1>
                <span className="currentTime">26 June 2023 6:00 PM</span>
            </div>
            <div className="swapForcasts">
                <span className="swapForcast">Today</span>
                <span className="swapForcast">Tommorow</span>
                <span className="swapForcast">Monthly Forcast</span>
            </div>
        </div>
    )
}
export default Navbar