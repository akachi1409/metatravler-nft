import React from "react";

import roadmap from "../../assets/images/roadmap/roadmap.png"
import "./roadmap.css";
class Roadmap extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div id="roadmap">
                <div className="g-relative roadmap-mobile">
                    <a href={roadmap} target="_blank" rel="noreferrer">
                        <img src = {roadmap} alt = "roadmap" className="g-relative"></img>
                        <div className="roadmap-mobile-text">Click to open the roadmap in a new tab</div>
                    </a>
                </div>
                <img src = {roadmap} alt = "roadmap" className="roadmap-desk"/>
            </div>
        )
    }
}

export default Roadmap;