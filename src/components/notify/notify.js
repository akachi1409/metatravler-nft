import React from "react";

import "./notify.css"
import title from "../../assets/images/community/download.png"
class Notify extends React.Component{
    render(){
        return(
            <div className="fixed bottom-0 right-0 z-40 hidden mb-4 mr-6 text-gray-300 md:block hover:text-white">
                <div className="css-1fx9x8r">
                    <a href="http://discord.gg/QT5q6Nfbqb" target="_blank">
                        <div className="flex flex-col w-40 h-32 text-center shadow-xl discord-box-mixin ">
                            <div className="pt-2 pb-2 text-lg font-semibold tracking-wide orbitron-no-glow ">
                            Join our Discord
                            </div>
                            <div className="flex justify-center">
                                <img className="w-10" src={title} alt="Meta Discord"></img>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
export default Notify;