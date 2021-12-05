import React from "react";

import "./visionItem.css";
class VisionItem extends React.Component{
    render(){
        return(
            <div className="mt-2">
                <div id="headlessui-tabs-panel-7" role="tabpanel" aria-labelledby="headlessui-tabs-tab-3" tabIndex="0">
                    <ul>
                        <div className="vision-text-layout">
                            <div className="css-19zpipa">
                                <div className="">
                                    <div className="vision-text card-mixin desc-mixin " data-augmented-ui="tr-clip bl-clip br-clip-y both">
                                        {this.props.text}
                                    </div>
                                </div>
                            </div>
                            <div className="css-1u1htf5">
                                <div className="g-flex-justify-center">
                                    <img className="vision-img" src={this.props.img} alt="Metatraveler"/></div>
                                </div>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}
export default VisionItem