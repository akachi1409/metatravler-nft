import React from "react";

import "./faq.css";
class Faq extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            faqs:[
                {
                    i:1,
                    q:"Can I wear my avatar in the Metaverse?",
                    a:"Absolutely, we have designed this collection with the Metaverse in mind. All NFT collectors will be given a game-ready 3D file of their character which can then be minted as a wearable in Metaverse worlds such as Decentraland, Somnium Space and others.",
                    state:false
                },
                {
                    i:2,
                    q:"Will there be more guilds made in the future?",
                    a:"Yes, we are building out a universe of guilds from different worlds of the Metaverse. Each MetaTraveler guild will be its own collection with unique traits and designs",
                    state:false
                },
                {
                    i:3,
                    q:"How do I purchase a MetaTraveler?",
                    a:"Step 1. You will need Ethereum (ETH) to purchase a MetaTraveler."+
                    "Step 2. Download the MetaMask wallet extension for Google Chrome."+
                    "Step 3. Send (ETH) to your MetaMask ETH Wallet Public Address with an ERC-20 transfer."+
                    "Step 4. Connect your MetaMask Wallet to our website (metatravelers.io) by clicking 'connect wallet'."+
                    "Step 5. Click Mint on our website and you will be directed to approve the transaction on your MetaMask wallet.",
                    state:false
                }
            ]
        }
    }
     showFaq = (index) => {
        const {faqs} = this.state
        faqs.forEach(element=>{
            if (element.i === index) 
                element.state = !element.state
        })
        this.setState({faqs:faqs})
    }
    render(){
        return(
            <div id="faq" className="g-relative faq-parallax">
                <div className="g-relative">
                    <div>
                        <div className="fag-title orbitron">
                            <span>FAQ</span>
                        </div>
                        <div className="faq-content-container">
                            <div className="css-100qw9n">
                                <div className="faq-content-layout g-relative max-w-3xl card-mixin mint-mixin"
                                data-augmented-ui=" t-clip-x tr-clip  b-clip-x bl-clip  r-clip-y l-clip-y  both">
                                    <div className="faq-content ">
                                        
                                            {
                                                this.state.faqs.map((item, key)=>(
                                                    <div className="pt-6 " style={{paddingTop: "1.5em", paddingBottom:"1em", borderBottom:"1px solid"}} key = {key}>
                                                        <dt className="text-lg">
                                                        <button className="faq-button"
                                                        id="headlessui-disclosure-button-11" type="button" onClick={()=>this.showFaq(item.i)}>
                                                            <span className="faq-question">
                                                                {item.q}
                                                            </span>
                                                            <span className="faq-question-tag-box">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="faq-question-tag " aria-hidden="true"><path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                            </span>
                                                        </button>
                                                    </dt>
                                                    {
                                                        item.state &&
                                                        <dd className="faq-answer-box" id = "headlessui-disclosure-panel-12">
                                                            <p className="faq-answer">{item.a}</p>
                                                        </dd>
                                                    }
                                                    
                                                </div>
                                                ))
                                            }
                                      </div>      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="css-faq-1">

                </div>
                <div className="css-faq-2">

                </div> */}
            </div>
        )
    }
}

export default Faq;