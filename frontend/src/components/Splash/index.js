import React from 'react'
import Search from "../Search"
import Hotels from "../Hotels"
import Typography from "@material-ui/core/Typography"
import "./Splash.css"


function Splash(){
    // const hotelsData = Object.values(useSelector(state => state?.hotelsReducer))

    return (
        <>
            <div className="App">

                <header className="App-header">
                    <i className="fas fa-bed" style={{
                        fontSize:"24px", marginTop: "20px", marginBottom:"-40px", borderRadius: "50%", padding:"20px", background:"slategray", color:"white", fill: "rgb(255, 255, 255)"
                        }}></i>
                    <h1 style={{
                        fontWeight: "bold700",
                        marginBottom: "2px",
                        fontSize: "64px",
                        fontStyle: "normal",
                        color: "rgb(28, 187, 155)"
                    }}>travelp</h1>
                    <Typography variant="h4">a collection of hotel reviews</Typography>
                    <Search/>
                    <Hotels className="hotel-container"/>
                </header>
            </div>
      </>
    )
}
export default Splash;
