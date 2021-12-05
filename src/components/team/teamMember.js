import React from "react";

import "./teamMember.css";

import Twitter from "../utility/svg/twitter";
import Ship from "../utility/svg/Ship";
class TeamMember extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="teamMember-layout ">
                <div>
                    <div className="g-flex-justify-center">
                        <img src={this.props.img} className="teamMember-image"></img>
                    </div>
                    <div className="g-flex-justify-center">
                        {
                            this.props.twitter&&(
                                <a className="g-mr-3" href={this.props.twitter} target="_blank" rel="noreferrer">
                                    <Twitter/>
                                </a>
                            )
                        }
                        {
                            this.props.opensea&&(
                                <a href={this.props.opensea} target="_blank" rel="noreferrer">
                                    <Ship/>
                                </a>
                            )
                        }
                        
                    </div>
                </div>
                <div className="teamMember-text">
                    <div>
                        <div className="teamMember-title">
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className="g-text-base">
                            <p className="g-text-gray-400">
                                {this.props.des}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamMember;