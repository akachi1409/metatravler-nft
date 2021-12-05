import React from "react";

import avatar from "../../assets/images/community/AvatarLava.0c221429.png"
import download from "../../assets/images/community/download.png";
import "./community.css";
class Community extends React.Component{
    render(){
        return(
            <div className="g-relative g-overflow-hidden">
                <img src = {avatar} alt = "MetaTravelers Logo" className = "community-image absolute top-0 right-0 z-0 hidden transform 2xl:right-64 lg:block "
                    style={{width: "500px"}}/>
                <div className="bg-indigo-900 ">
                    <div className="community-layout  max-w-7xl ">
                        <div className="community-content">
                            <div className="g-flex-item-center">
                                <img src={download} className="community-discord-download" alt="Meta Discord"/>
                                <h2 className="community-discord-text orbitron-no-glow">Join the community</h2>
                            </div>
                            <p className="community-text">Get involved by joining our discord community and stay up to date with exclusive announcements, giveaways and events!</p>
                            <a href="http://discord.gg/QT5q6Nfbqb" target="_blank" rel="noreferrer">
                                <button className="community-button cta-button">Join our Discord</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Community;