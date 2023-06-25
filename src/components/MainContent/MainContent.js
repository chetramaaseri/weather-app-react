import "./MainContent.css"
function MainContent(){
    return (
        <div className="mainContent">
            <div className="searchBar">
                <input type="search" name="" id="" placeholder="Enter City Name Here" />
            </div>
            <div className="weatherCardContainer">
                <div className="weatherCard">
                    <p className="cityName">Ludhiana</p>
                    <h1 className="cityTemp"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO2WT2sUMRjGI7XoxU+guMlBUa89efJmv4I3YSc99jN4UETxDxVNZI+CCLbowZ0U9OJF0SLsIP7ptDtfQbFvnOnBspFs7doddm03TeIE5oGX3Q0zm/cXnrw8CNWqVWvf+ri+fiJJs6VOmsF2dZ91vmSnUCjNd9LutyTN1O7qr62tHUdVV5JmS+XmBxCr2VNUdXXSDMYBJKvdH6jqSsY1/6ds7jW/rI5EIn9y+bU6GiQAjfObVBQqEvkNa39abnjh8fOhsrVP80Vxnop8SwPoT/07HAClDkUif7vd/KBW9HoQFpprF5dKzfdLrwcBQOP8zSgAvR6EhaI4lyMBRA5BAFBRrIwCiOLiXRgWav+cpXHeK9mn11zevBgEwA5EJIr32jb65K00r0W4VLvr2OyjoUJVF7EI4CQqTApQLvS/o4IvAGdRwYuFXEYFHwBOo4IPCzmNCj4AnEYFHxZyGhW8ALiMCr7GqLOoMFaLaooweXUvAMzlNf0sqpQW1RRmsr1X8wMIBuLCFXX4oNvO24oamMvr+23+b8GtgwJQG1EDPygahMHWxAAMeuT+xmnTfZu2ooY+yclPf+c+wF2jTZXFqIEZfDAFIFx+Nel/zmbUIFx+NwZgsGkCQG1GDcwkmFtIbpgARDajBubw2RiAwScTAGozauiLaH4HzEYptRk1Tj6EcyZjFHP41WjBGRMA61GDMLjnbYS60ExLTWMGryawzkv9DqqSZlpqmnBY0Nb4l230yVeu+fKdwBzu6AmDuZT90t8Z3G4wODv0cK1atZAv/Qbg12F5S7ae7QAAAABJRU5ErkJggg==" alt="" srcset="" />27 o C</h1>
                    <span className="currentDate">25 june 2023</span>
                    <div className="additionalInformation">
                        <div className="information">
                            <span>Humiduty</span>
                            <span>99%</span>
                        </div>
                        <div className="information">
                            <span>Humiduty</span>
                            <span>99%</span>
                        </div>
                        <div className="information">
                            <span>Humiduty</span>
                            <span>99%</span>
                        </div>
                        <div className="information">
                            <span>Humiduty</span>
                            <span>99%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hourlyForcast">
                <div className="hourlyCard">
                    <span className="background" ></span>
                    <span className="time">19:00 PM</span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfklEQVR4nO2XT2sTURTFx50L050uu4hg/QIutFC/hH++gVio4Ep0rTs3rmxVcOkmirgpzdyEtkFsRUgkllal74aktE0stKjVtPfFHJnE2LHMNJOYTGZgDlyyyDw4vzn33pkxjEiRIkUKrfDIGMakMYeHRtwIpfkpQ2HKACaNYqggYDffqrBAwMl8kCHgZLTDigD+R4539fkQkBsBSueAyoXmb3YESAwFPIHHx4C3p4GtUfdajDevCwIAmgN7YKadeTuE/dwgBhuHt43VNl7Mt8reTn5vJzitSqvnOwHInhnMioXbnrcGtRMA6/o/Z2tPYihNT+Bddq6aUtWKySKkZINY0sRyY3YJJ3oHYL3bOG0ea9t0AlA53zhXfnUV8x/XQaxdy2Qpm1y7ErgEOHkbxHKkeWpBKKmTkjv9g7D2vM3gTnkc+VISmcIm0oWfyBQ2kC/NYKd8vfF/+cNNz+bJBtG/JBKxhrH6lzGsrL040sjy2kvMfzq6bdxLKq9XEOslxEEKi/G25ntRppKJngA0IGwA24mxvpun5lBTXwDyb575AkBK1vsCkFku+gPAstcXgLT64VMCujcJJFdxiljfI6VzpGTXVPt1fxLQ1hxsEeunM4W9s12ZN7l22WT55pdhcgfR1utG5+atJ+OAzdM/bSXjntsmCHeeDiehpEoKw20BGj0fAMPkmIK+3x5A6fcDN8ouKbBe8tD/wWsf+puA7IYdYNtLC+WCC6AX2ieg9N2BG2XnSrHcCvMa3fT8nZBS+lKwHmSyb7Jc9GTeDkEs3wNgvphclVGjG01/xsmk0g+s6Sf2KRElv4jla4prRCzXZgs43pX5SJEiRYpkeNBv9Ov+hg8P27wAAAAASUVORK5CYII="/>
                    <span className="temp">29</span>
                </div>
                <div className="hourlyCard">
                    <span className="background" ></span>
                    <span className="time">19:00 PM</span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfklEQVR4nO2XT2sTURTFx50L050uu4hg/QIutFC/hH++gVio4Ep0rTs3rmxVcOkmirgpzdyEtkFsRUgkllal74aktE0stKjVtPfFHJnE2LHMNJOYTGZgDlyyyDw4vzn33pkxjEiRIkUKrfDIGMakMYeHRtwIpfkpQ2HKACaNYqggYDffqrBAwMl8kCHgZLTDigD+R4539fkQkBsBSueAyoXmb3YESAwFPIHHx4C3p4GtUfdajDevCwIAmgN7YKadeTuE/dwgBhuHt43VNl7Mt8reTn5vJzitSqvnOwHInhnMioXbnrcGtRMA6/o/Z2tPYihNT+Bddq6aUtWKySKkZINY0sRyY3YJJ3oHYL3bOG0ea9t0AlA53zhXfnUV8x/XQaxdy2Qpm1y7ErgEOHkbxHKkeWpBKKmTkjv9g7D2vM3gTnkc+VISmcIm0oWfyBQ2kC/NYKd8vfF/+cNNz+bJBtG/JBKxhrH6lzGsrL040sjy2kvMfzq6bdxLKq9XEOslxEEKi/G25ntRppKJngA0IGwA24mxvpun5lBTXwDyb575AkBK1vsCkFku+gPAstcXgLT64VMCujcJJFdxiljfI6VzpGTXVPt1fxLQ1hxsEeunM4W9s12ZN7l22WT55pdhcgfR1utG5+atJ+OAzdM/bSXjntsmCHeeDiehpEoKw20BGj0fAMPkmIK+3x5A6fcDN8ouKbBe8tD/wWsf+puA7IYdYNtLC+WCC6AX2ieg9N2BG2XnSrHcCvMa3fT8nZBS+lKwHmSyb7Jc9GTeDkEs3wNgvphclVGjG01/xsmk0g+s6Sf2KRElv4jla4prRCzXZgs43pX5SJEiRYpkeNBv9Ov+hg8P27wAAAAASUVORK5CYII="/>
                    <span className="temp">29</span>
                </div>
                <div className="hourlyCard">
                    <span className="background" ></span>
                    <span className="time">19:00 PM</span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfklEQVR4nO2XT2sTURTFx50L050uu4hg/QIutFC/hH++gVio4Ep0rTs3rmxVcOkmirgpzdyEtkFsRUgkllal74aktE0stKjVtPfFHJnE2LHMNJOYTGZgDlyyyDw4vzn33pkxjEiRIkUKrfDIGMakMYeHRtwIpfkpQ2HKACaNYqggYDffqrBAwMl8kCHgZLTDigD+R4539fkQkBsBSueAyoXmb3YESAwFPIHHx4C3p4GtUfdajDevCwIAmgN7YKadeTuE/dwgBhuHt43VNl7Mt8reTn5vJzitSqvnOwHInhnMioXbnrcGtRMA6/o/Z2tPYihNT+Bddq6aUtWKySKkZINY0sRyY3YJJ3oHYL3bOG0ea9t0AlA53zhXfnUV8x/XQaxdy2Qpm1y7ErgEOHkbxHKkeWpBKKmTkjv9g7D2vM3gTnkc+VISmcIm0oWfyBQ2kC/NYKd8vfF/+cNNz+bJBtG/JBKxhrH6lzGsrL040sjy2kvMfzq6bdxLKq9XEOslxEEKi/G25ntRppKJngA0IGwA24mxvpun5lBTXwDyb575AkBK1vsCkFku+gPAstcXgLT64VMCujcJJFdxiljfI6VzpGTXVPt1fxLQ1hxsEeunM4W9s12ZN7l22WT55pdhcgfR1utG5+atJ+OAzdM/bSXjntsmCHeeDiehpEoKw20BGj0fAMPkmIK+3x5A6fcDN8ouKbBe8tD/wWsf+puA7IYdYNtLC+WCC6AX2ieg9N2BG2XnSrHcCvMa3fT8nZBS+lKwHmSyb7Jc9GTeDkEs3wNgvphclVGjG01/xsmk0g+s6Sf2KRElv4jla4prRCzXZgs43pX5SJEiRYpkeNBv9Ov+hg8P27wAAAAASUVORK5CYII="/>
                    <span className="temp">29</span>
                </div>
                <div className="hourlyCard">
                    <span className="background" ></span>
                    <span className="time">19:00 PM</span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfklEQVR4nO2XT2sTURTFx50L050uu4hg/QIutFC/hH++gVio4Ep0rTs3rmxVcOkmirgpzdyEtkFsRUgkllal74aktE0stKjVtPfFHJnE2LHMNJOYTGZgDlyyyDw4vzn33pkxjEiRIkUKrfDIGMakMYeHRtwIpfkpQ2HKACaNYqggYDffqrBAwMl8kCHgZLTDigD+R4539fkQkBsBSueAyoXmb3YESAwFPIHHx4C3p4GtUfdajDevCwIAmgN7YKadeTuE/dwgBhuHt43VNl7Mt8reTn5vJzitSqvnOwHInhnMioXbnrcGtRMA6/o/Z2tPYihNT+Bddq6aUtWKySKkZINY0sRyY3YJJ3oHYL3bOG0ea9t0AlA53zhXfnUV8x/XQaxdy2Qpm1y7ErgEOHkbxHKkeWpBKKmTkjv9g7D2vM3gTnkc+VISmcIm0oWfyBQ2kC/NYKd8vfF/+cNNz+bJBtG/JBKxhrH6lzGsrL040sjy2kvMfzq6bdxLKq9XEOslxEEKi/G25ntRppKJngA0IGwA24mxvpun5lBTXwDyb575AkBK1vsCkFku+gPAstcXgLT64VMCujcJJFdxiljfI6VzpGTXVPt1fxLQ1hxsEeunM4W9s12ZN7l22WT55pdhcgfR1utG5+atJ+OAzdM/bSXjntsmCHeeDiehpEoKw20BGj0fAMPkmIK+3x5A6fcDN8ouKbBe8tD/wWsf+puA7IYdYNtLC+WCC6AX2ieg9N2BG2XnSrHcCvMa3fT8nZBS+lKwHmSyb7Jc9GTeDkEs3wNgvphclVGjG01/xsmk0g+s6Sf2KRElv4jla4prRCzXZgs43pX5SJEiRYpkeNBv9Ov+hg8P27wAAAAASUVORK5CYII="/>
                    <span className="temp">29</span>
                </div>
                <div className="hourlyCard">
                    <span className="background" ></span>
                    <span className="time">19:00 PM</span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfklEQVR4nO2XT2sTURTFx50L050uu4hg/QIutFC/hH++gVio4Ep0rTs3rmxVcOkmirgpzdyEtkFsRUgkllal74aktE0stKjVtPfFHJnE2LHMNJOYTGZgDlyyyDw4vzn33pkxjEiRIkUKrfDIGMakMYeHRtwIpfkpQ2HKACaNYqggYDffqrBAwMl8kCHgZLTDigD+R4539fkQkBsBSueAyoXmb3YESAwFPIHHx4C3p4GtUfdajDevCwIAmgN7YKadeTuE/dwgBhuHt43VNl7Mt8reTn5vJzitSqvnOwHInhnMioXbnrcGtRMA6/o/Z2tPYihNT+Bddq6aUtWKySKkZINY0sRyY3YJJ3oHYL3bOG0ea9t0AlA53zhXfnUV8x/XQaxdy2Qpm1y7ErgEOHkbxHKkeWpBKKmTkjv9g7D2vM3gTnkc+VISmcIm0oWfyBQ2kC/NYKd8vfF/+cNNz+bJBtG/JBKxhrH6lzGsrL040sjy2kvMfzq6bdxLKq9XEOslxEEKi/G25ntRppKJngA0IGwA24mxvpun5lBTXwDyb575AkBK1vsCkFku+gPAstcXgLT64VMCujcJJFdxiljfI6VzpGTXVPt1fxLQ1hxsEeunM4W9s12ZN7l22WT55pdhcgfR1utG5+atJ+OAzdM/bSXjntsmCHeeDiehpEoKw20BGj0fAMPkmIK+3x5A6fcDN8ouKbBe8tD/wWsf+puA7IYdYNtLC+WCC6AX2ieg9N2BG2XnSrHcCvMa3fT8nZBS+lKwHmSyb7Jc9GTeDkEs3wNgvphclVGjG01/xsmk0g+s6Sf2KRElv4jla4prRCzXZgs43pX5SJEiRYpkeNBv9Ov+hg8P27wAAAAASUVORK5CYII="/>
                    <span className="temp">29</span>
                </div>
                <div className="hourlyCard">
                    <span className="background" ></span>
                    <span className="time">19:00 PM</span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfklEQVR4nO2XT2sTURTFx50L050uu4hg/QIutFC/hH++gVio4Ep0rTs3rmxVcOkmirgpzdyEtkFsRUgkllal74aktE0stKjVtPfFHJnE2LHMNJOYTGZgDlyyyDw4vzn33pkxjEiRIkUKrfDIGMakMYeHRtwIpfkpQ2HKACaNYqggYDffqrBAwMl8kCHgZLTDigD+R4539fkQkBsBSueAyoXmb3YESAwFPIHHx4C3p4GtUfdajDevCwIAmgN7YKadeTuE/dwgBhuHt43VNl7Mt8reTn5vJzitSqvnOwHInhnMioXbnrcGtRMA6/o/Z2tPYihNT+Bddq6aUtWKySKkZINY0sRyY3YJJ3oHYL3bOG0ea9t0AlA53zhXfnUV8x/XQaxdy2Qpm1y7ErgEOHkbxHKkeWpBKKmTkjv9g7D2vM3gTnkc+VISmcIm0oWfyBQ2kC/NYKd8vfF/+cNNz+bJBtG/JBKxhrH6lzGsrL040sjy2kvMfzq6bdxLKq9XEOslxEEKi/G25ntRppKJngA0IGwA24mxvpun5lBTXwDyb575AkBK1vsCkFku+gPAstcXgLT64VMCujcJJFdxiljfI6VzpGTXVPt1fxLQ1hxsEeunM4W9s12ZN7l22WT55pdhcgfR1utG5+atJ+OAzdM/bSXjntsmCHeeDiehpEoKw20BGj0fAMPkmIK+3x5A6fcDN8ouKbBe8tD/wWsf+puA7IYdYNtLC+WCC6AX2ieg9N2BG2XnSrHcCvMa3fT8nZBS+lKwHmSyb7Jc9GTeDkEs3wNgvphclVGjG01/xsmk0g+s6Sf2KRElv4jla4prRCzXZgs43pX5SJEiRYpkeNBv9Ov+hg8P27wAAAAASUVORK5CYII="/>
                    <span className="temp">29</span>
                </div>
            </div>
        </div>
    )
}
export default MainContent