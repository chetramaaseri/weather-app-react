import { useEffect, useState } from "react"
import "./MainContent.css"
function MainContent(){
    const [cityName,setCityName] = useState("Ludhiana")
    const [weatherData,setWeatherData] = useState({
        cod :'404'
    })
    const [forcastData, setForcastData] = useState({cod:'404'})
    const [unit,setUnit] = useState("metric")

    useEffect(()=>{
        const getWeatherData = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3bb3c1aeb0f9bdea0f05392820c2a7e2&units=${unit}`
            try{
                const response = await fetch(url)
                const data = await response.json()
                setWeatherData(data)  
                return true
            }catch(e){
                setWeatherData({cod:'404'})  
                return false
            }
        }
        
        getWeatherData()
    },[cityName,unit])

    useEffect(()=>{
        const getForcastData = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=3bb3c1aeb0f9bdea0f05392820c2a7e2&units=${unit}` 
            try{
                const response = await fetch(url)
                const data = await response.json()
                setForcastData(data)  
                return true
            }catch(e){
                setForcastData({cod:404})
                return false
            }
        }
        if(weatherData.coord){
            getForcastData()
        }
    },[weatherData,unit])

    useEffect(() => {
        document.title = 'Weather App';
    });
    return (
        <div className="mainContent">
            <div className="switchUnit">
                <span className="switchC">℃</span>
                <input onChange={(e)=>{(e.target.checked) ? setUnit("imperial"): setUnit("metric")}} className="tempSwitch" type="checkbox" id="tempSwitch" />
                <label className="tempSwitchLabel" htmlFor="tempSwitch"></label>
                <span className="switchF">℉</span>
            </div>
            <div className="searchBar">
                <input onInput={(e)=>{setCityName(e.target.value)}} type="search" name="" id="" placeholder="Enter City Name Here" value={cityName} />
            </div>
            <div className="weatherCardContainer">
                <div className="weatherCard">
                    <p className="cityName">{cityName}</p>
                    {(weatherData.cod !== 200)? <div className="noWeatherData"><h1>No Data Found</h1></div> : (
                        <div className="weatherDataDisplay">
                            <h1 className="cityTemp"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO2WT2sUMRjGI7XoxU+guMlBUa89efJmv4I3YSc99jN4UETxDxVNZI+CCLbowZ0U9OJF0SLsIP7ptDtfQbFvnOnBspFs7doddm03TeIE5oGX3Q0zm/cXnrw8CNWqVWvf+ri+fiJJs6VOmsF2dZ91vmSnUCjNd9LutyTN1O7qr62tHUdVV5JmS+XmBxCr2VNUdXXSDMYBJKvdH6jqSsY1/6ds7jW/rI5EIn9y+bU6GiQAjfObVBQqEvkNa39abnjh8fOhsrVP80Vxnop8SwPoT/07HAClDkUif7vd/KBW9HoQFpprF5dKzfdLrwcBQOP8zSgAvR6EhaI4lyMBRA5BAFBRrIwCiOLiXRgWav+cpXHeK9mn11zevBgEwA5EJIr32jb65K00r0W4VLvr2OyjoUJVF7EI4CQqTApQLvS/o4IvAGdRwYuFXEYFHwBOo4IPCzmNCj4AnEYFHxZyGhW8ALiMCr7GqLOoMFaLaooweXUvAMzlNf0sqpQW1RRmsr1X8wMIBuLCFXX4oNvO24oamMvr+23+b8GtgwJQG1EDPygahMHWxAAMeuT+xmnTfZu2ooY+yclPf+c+wF2jTZXFqIEZfDAFIFx+Nel/zmbUIFx+NwZgsGkCQG1GDcwkmFtIbpgARDajBubw2RiAwScTAGozauiLaH4HzEYptRk1Tj6EcyZjFHP41WjBGRMA61GDMLjnbYS60ExLTWMGryawzkv9DqqSZlpqmnBY0Nb4l230yVeu+fKdwBzu6AmDuZT90t8Z3G4wODv0cK1atZAv/Qbg12F5S7ae7QAAAABJRU5ErkJggg==" alt="" />{weatherData.main.temp} {(unit === "metric") ? "℃" : "℉"}</h1>
                            <span className="currentDate">25 june 2023</span>
                            <div className="additionalInformation">
                                <div className="information">
                                    <span>Humidity</span>
                                    <span>{weatherData.main.humidity}</span>
                                </div>
                                <div className="information">
                                    <span>Min Temp</span>
                                    <span>{weatherData.main.temp_min}</span>
                                </div>
                                <div className="information">
                                    <span>Max Temp</span>
                                    <span>{weatherData.main.temp_max}</span>
                                </div>
                                <div className="information">
                                    <span>Feels Like</span>
                                    <span>{weatherData.main.feels_like}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="hourlyForcast">
                {(forcastData.cod !== '200') ? (
                    <>
                        <div className="hourlyCard">
                            <span className="background" ></span>
                            <div className="noHourlyData"><img src="https://img.icons8.com/clouds/100/loading-sign.png" alt="" />
                            <span>Loading..</span>
                            </div>
                        </div>
                        <div className="hourlyCard">
                            <span className="background" ></span>
                            <div className="noHourlyData"><img src="https://img.icons8.com/clouds/100/loading-sign.png" alt="" />
                            <span>Loading..</span>
                            </div>
                        </div>
                        <div className="hourlyCard">
                            <span className="background" ></span>
                            <div className="noHourlyData"><img src="https://img.icons8.com/clouds/100/loading-sign.png" alt="" />
                            <span>Loading..</span>
                            </div>
                        </div>
                        <div className="hourlyCard">
                            <span className="background" ></span>
                            <div className="noHourlyData"><img src="https://img.icons8.com/clouds/100/loading-sign.png" alt="" />
                            <span>Loading..</span>
                            </div>
                        </div>
                        <div className="hourlyCard">
                            <span className="background" ></span>
                            <div className="noHourlyData"><img src="https://img.icons8.com/clouds/100/loading-sign.png" alt="" />
                            <span>Loading..</span>
                            </div>
                        </div>
                        <div className="hourlyCard">
                            <span className="background" ></span>
                            <div className="noHourlyData"><img src="https://img.icons8.com/clouds/100/loading-sign.png" alt="" />
                            <span>Loading..</span>
                            </div>
                        </div>
                    </>
                ):forcastData.list.map((cast,index)=>{
                    const currentDateTime = new Date();
                    const dateTime = new Date(cast.dt_txt);
                    if(currentDateTime>dateTime){return null}
                    const formattedTime = dateTime.toLocaleString('en-US', {hour: 'numeric',minute: 'numeric',hour12: true});
                    const formattedDate = dateTime.toLocaleString('en-US', {day: 'numeric',month: 'long'});
                    return (
                        <div key={"cast"+index} className="hourlyCard">
                            <span className="background" ></span>
                            <div className="hourlyCardDisplay">
                                <span className="time">{formattedTime}</span>
                                <span className="date">{formattedDate}</span>
                                <img src={"https://openweathermap.org/img/wn/"+cast.weather[0].icon+".png"} alt="" />
                                <span className="weather">{cast.weather[0].main}</span>
                                <span className="weatherDesc">{cast.weather[0].description}</span>
                                <span className="temp">{cast.main.temp}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default MainContent