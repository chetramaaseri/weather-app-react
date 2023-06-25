import "./Navbar.css"
import Logo from "../../images/logo.png"
import { useEffect, useState } from "react";
function Navbar(){
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second:'numeric',
        hour12: true
    };
    // const [currentDateTime,setCurrentDateTime] = useState(new Date())
    const currentDateTime = new Date();
    
    const [todayDate,setTodayDate] = useState(currentDateTime.toLocaleString('en-US', options));
    
    useEffect(()=>{
        const interval = setInterval(() => {
            const currentDateTime = new Date();
            setTodayDate(currentDateTime.toLocaleString('en-US', options))
        }, 1000)
        return () => clearInterval(interval);
    })

    const changeTab = (e)=>{
        const activeTab = document.querySelector('.active');
        activeTab.classList.remove('active');
        e.target.classList.add('active')
    }
    return (
        <div className="navbar">
            <div className="navbarBrand">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <h1 className="heading">Weather App</h1>
                <span className="currentTime">{todayDate}</span>
            </div>
            <div className="swapForcasts">
                <span onClick={(e)=>{changeTab(e)}} className="swapForcast active">Today</span>
            </div>
        </div>
    )
}
export default Navbar