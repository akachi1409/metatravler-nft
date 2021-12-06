import React from "react";

import "./header.css";
import mt from "../../assets/images/header/mt_lockup-color-glow.png"
import video from "../../assets/videos/header/video.mov"
import symbol from "../../assets/images/header/symbol.svg"
import logo from "../../assets/images/header/logo.svg"
import ethLogo from "../../assets/images/header/ethLogo.svg";
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mute:"UnMute"
        }
    }
    onMute = () =>{
        const {mute}= this.state; 
        if (mute === "Mute")
            this.setState({mute: "UnMute"})
        else
            this.setState({mute:"Mute"})
    }
    render(){
        return(
            <div className="bg-indigo-900">
                <div className="g-flex-justify-center" style={{transform: "scale(0.858906) translateZ(0px)"}}>
                    <div id = "home" className="g-relative w-screen h-screen arrow">
                        <div className="header-desktop hidden g-overflow-hidden lg:block ">
                            <div className="header-desktop-layout" style={{transform: "translate(-50%, -50%)"}}>
                                <div className="g-flex-justify-center">
                                <button className='ybutton' onClick={()=> this.onMute()} >{this.state.mute}</button>
                                </div>
                                <div style={{opacity: "0.6", width: "100%", height: "100%"}}>
                                    {
                                        this.state.mute === "Mute"&&
                                        <video className="pt-20" style={{width:"100%"}} src ={video} preload="auto" autoplay="true" loop />
                                    }
                                     {
                                        this.state.mute === "UnMute"&&
                                        <video className="pt-20" style={{width:"100%"}} src ={video} preload="auto" autoplay="true" loop muted="true" />
                                    }
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="g-relative bg-indigo-900 ">
                    <div className="header-panel">
                        <img alt="nibiru symbol" src = {symbol} className="header-panel-logo" style={{width: "700px"}}/>
                        <div className="header-panel-img1-layout">
                            <div className="g-flex-justify-center pb-24">
                                <img src = {logo} className="object-contain h-48 " alt=""></img>
                            </div>
                            <h2 className="g-relative header-panel-text1 orbitron-no-glow">
                            MetaTravelers Vol. 1: The Nibiru
                            </h2>
                        </div>
                        <dl className="g-relative header-panel-texts-layout sm:max-w-3xl">
                            <div className="flex-flex-col mt-10">
                                <dt className="header-texts-title">Avatars</dt>
                                <dd className="header-texts-text">
                                    7777
                                </dd>
                                {/* <dd className="order-1 block text-5xl font-extrabold text-white md:hidden orbitron-no-glow">7777</dd> */}
                            </div>
                            <div className="flex-flex-col mt-10">
                                <dt className="header-texts-title">Unique Traits</dt>
                                <dd className="header-texts-text">
                                    150
                                </dd>
                                {/* <dd className="order-1 block text-5xl font-extrabold text-white md:hidden orbitron-no-glow">150</dd> */}
                            </div>
                            <div className="flex-flex-col mt-10 ">
                                <dt className="header-texts-title">Possible Combinations</dt>
                                <dd className="header-texts-text">&gt;1 billion</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="header-box-layout">
                        <div className="header-box-container flex-flex-col">
                            <div className="header-box">
                                <div className="header-box-up custom-button" data-augmented-ui=" br-clip tl-clip  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10" viewBox="0 0 20 20" fill="#fff">
                                        <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <h3 className="header-box-title orbitron-no-glow">Metaverse Access</h3>
                                    <p className="header-box-text">All guild members will have exclusive access to future events and games throughout the Metaverse.</p>
                                </div>
                        </div>
                        <div className="flex-flex-col header-box-container">
                            <div className="header-box">
                                <div className="header-box-up custom-button" data-augmented-ui=" br-clip tl-clip  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10" viewBox="0 0 20 20" fill="#fff">
                                        <path fill-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <h3 className="header-box-title orbitron-no-glow">Own the IP</h3>
                                <p className="header-box-text">All guild members own commercial rights of their character for as long as they retain ownership.</p>
                            </div>
                        </div>
                        <div className="flex-flex-col header-box-container">
                            <div className="header-box">
                                <div className="header-box-up custom-button" data-augmented-ui=" br-clip tl-clip  ">
                                    <img src={ethLogo} alt="Ethereum logo" class="w-10"/>
                                </div>
                                <h3 className="header-box-title orbitron-no-glow">ERC-721</h3>
                                <p className="header-box-text">All MetaTravelers are secured as ERC-721 tokens on the Ethereum blockchain.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;