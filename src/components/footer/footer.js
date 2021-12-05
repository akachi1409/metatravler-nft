import React from "react";

import "./footer.css";
import title from "../../assets/images/footer/title.png"
class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer className="bg-gray-900">
                    <div className="footer-layout">
                        <div className="g-flex-justify-center">
                            <div>
                                <a href="https://www.nextdimensionstudios.com/" target="_blank" rel="noreferrer">
                                    <img className="h-16" src = {title} alt="Next Dimension Studios"/>
                                </a>
                                <div className="g-flex-justify-center mt-20 space-x-6">
                                    <a target="_blank" rel="" className="text-gray-300 hover:text-white">
                                        <span className="sr-only">Discord</span>
                                        <i className="fab fa-discord fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
                            </div> */}
                        </div>
                        <div className="footer-text-layout">
                            <p className="footer-text">
                            © 2021 Next Dimension Studios. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;