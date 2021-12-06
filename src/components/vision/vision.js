import React, { useEffect, useState }  from "react";

import "./vision.css";
import Nibiru from "../../assets/images/vision/NibiruKnight.png"
import Female1 from "../../assets/images/vision/Female1.png"
import Marauder from "../../assets/images/vision/Marauder.png"
import Female2 from "../../assets/images/vision/Female2.png"
import VisionItem from "./visionItem";
import { BsFileMinusFill, BsFilePlusFill } from 'react-icons/bs';

import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
function Vision(){

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [feedback, setFeedback] = useState("");
    const [claimingNft, setClaimingNft] = useState(false);
    const [mintNum, setMintNum] = useState(0)
    const claimNFTs = (_amount) => {
        _amount = document.getElementById("inputBox").textContent;
        if (_amount <= 0) {
            return;
        }
        setFeedback("Minting your Official BooCrew NFT...");
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(blockchain.account, _amount)
            // ********
            // You can change the line above to
            // .whiteListMint(blockchain.account, _amount) if you want only whitelisted
            // users to be able to mint through your website!
            // And after you're done with whitelisted users buying from your website,
            // You can switch it back to .mint(blockchain.account, _amount).
            // ********
            .send({
                gasLimit: 285000 * _amount,
                to: "0x8815e06FC5b57Bd4d5590977a697582f19d2330e", // the address of your contract
                from: blockchain.account,
                value: blockchain.web3.utils.toWei((0.035 * _amount).toString(), "ether"),
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!");
                setClaimingNft(false);
            })
            .then((receipt) => {
                setFeedback(
                    "Your BooCrew NFT has been successfully minted!"
                );
                setClaimingNft(false);
                dispatch(fetchData(blockchain.account));
            });
    };

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };

    useEffect(() => {
        getData();
    }, [blockchain.account]);

    const plus_num = () =>{
        // const {mintNum} = this.state;
        setMintNum(mintNum +1);
    }
    const minus_num = () =>{
        // const {mintNum} = this.state;
        if ( mintNum ==0)return;
        setMintNum(mintNum -1)
    }

    const [text1, setText1]= useState({
        index: 1,
        text:"We are creating a collection to unite the Metaverse. Our team is made up of like-minded artists, developers and creators who all share the same dream of Decentralized open worlds and cross-reality experiences. We came together to create the highest level custom 3D avatars and to empower a community by paving an avenue for developers &amp; artists to participate in creating the Metaverse with us.",
        img: Nibiru,
        state:true
    })
    const [text2, setText2]= useState({
        index:2,
        text:"Vol. 1 of MetaTravelers will showcase 7777 avatars of the Nibiru guild. The guild will be composed of both male and female 3D avatars who will have shared traits across the collection. We are utilizing Chainlink VRF for on-chain verification of randomness. Nibiru characters are created with a unique DNA sequence and then auto generated onto each MetaTraveler at the time of minting. These NFT's will also act as an access key to unlock future events, discord channels and gamified experiences in the Metaverse.",
        img:Female1,
        state:false
    })
    const [text3, setText3 ] = useState({
        index:3,
        text:"Our goal is to create a community who will explore this new world and the untapped potential of the Metaverse. By creating one of the largest treasuries in the space (20% of all sales) The Nibiru will fund artists, developers and creators of the guild to come together and write the next chapter of the Metaverse. We will continually support creators to build experiences and pursue collaborations for Metaverse games, AR/VR technology and cross-reality experiences as well as other events such as scavenger hunts and modding contests. Co-creating with the community will allow members to be part of the history of the Metaverse opposed to spectators of it.",
        img:Marauder,
        state:false
    })
    const [text4, setText4] = useState({
        index:4,
        text:"The future of this collaboration will give birth to a universe of guilds including the Nova and Theora which we look to launch in early 2022. Each guild will showcase a unique set of MetaTravelers from distant worlds as we build the Metaverse together, one step at a time. These guilds will operate independently from each other at first but will ultimately benefit from one another as the larger MetaTravelers communities grow where guilds will be able to collaborate, compete and create in a vast network across the Metaverse. We have many surprises in store for long term holders including airdrops and additional benefits from staking which will be released in the coming weeks. We will be continuously developing new features and providing further utility for each guild member. We look forward to building the Metaverse with you all!",
        img:Female2,
        state:false
    })

    const [flag, setFlag] = useState(true);

    const setTabActive = (index) => {
        console.log("index:", index);
        let temp1 = text1;
        let temp2 = text2;
        let temp3 = text3;
        let temp4 = text4;
        switch(index){
            case 1:
                temp1.state= true;
                temp2.state= false;
                temp3.state= false;
                temp4.state= false;
                break;
            case 2:
                temp1.state= false;
                temp2.state= true;
                temp3.state= false;
                temp4.state= false;
                break;
            case 3:
                temp1.state= false;
                temp2.state= false;
                temp3.state= true;
                temp4.state= false;
                break;
            case 4:
                temp1.state= false;
                temp2.state= false;
                temp3.state= false;
                temp4.state= true;
                break; 
        }
        setText1(temp1);
        setText2(temp2);
        setText3(temp3);
        setText4(temp4);
        setFlag(!flag);
        console.log(text1, text2);
    }
    return(
        <div id="our-vision" className="desc-parallax ">
            <div className="arrow-down"></div>
            <div className="g-relative g-flex-justify-center vision-layout">
                <div className="vision-container">
                    <div className="vision-header" aria-orientation="horizontal" role="tablist">
                        {
                            text1.state?
                            <button className="vision-header-button  orbitron g-text-white g-border-b-2"
                            id="headlessui-tabs-tab-3" role="tab" type="button" aria-selected="true" tabIndex="0" aria-controls="headlessui-tabs-panel-7"
                            onClick = {()=> setTabActive(1)}>
                                <div className="pb-2">Vision</div>
                            </button>:
                            <button className="vision-header-button orbitron-no-glow g-text-gray-400"
                            id="headlessui-tabs-tab-3" role="tab" type="button" aria-selected="true" tabIndex="0" aria-controls="headlessui-tabs-panel-7"
                            onClick = {()=> setTabActive(1)}>
                                <div className="pb-2">Vision</div>
                            </button>
                        }
                        {
                            text2.state?
                            <button className=" vision-header-button  orbitron g-text-white g-border-b-2"
                            id="headlessui-tabs-tab-4" role="tab" type="button" aria-selected="false" tabIndex="-1" aria-controls=""
                            onClick = {()=> setTabActive(2)}>
                                <div className="pb-2">Launch</div>
                            </button>
                            :
                            <button className=" vision-header-button orbitron-no-glow g-text-gray-400"
                            id="headlessui-tabs-tab-4" role="tab" type="button" aria-selected="false" tabIndex="-1" aria-controls=""
                            onClick = {()=> setTabActive(2)}>
                                <div className="pb-2">Launch</div>
                            </button>
                        }
                        {
                            text3.state?
                            <button className=" vision-header-button  orbitron g-text-white g-border-b-2"
                            id="headlessui-tabs-tab-5" role="tab" type="button" aria-selected="false" tabIndex="-1" aria-controls=""
                            onClick = {()=> setTabActive(3)}>
                                <div className="pb-2">Community</div>
                            </button>
                            :
                            <button className="vision-header-button orbitron-no-glow g-text-gray-400"
                            id="headlessui-tabs-tab-5" role="tab" type="button" aria-selected="false" tabIndex="-1" aria-controls=""
                            onClick = {()=> setTabActive(3)}>
                                <div className="pb-2">Community</div>
                            </button>
                        }
                        {
                            text4.state?
                            <button className=" vision-header-button  orbitron g-text-white g-border-b-2"
                            id="headlessui-tabs-tab-6" role="tab" type="button" aria-selected="false" tabIndex="-1" aria-controls=""
                            onClick = {()=> setTabActive(4)}>
                                <div className="pb-2">Future</div>
                            </button>
                            :
                            <button className="vision-header-button orbitron-no-glow g-text-gray-400"
                            id="headlessui-tabs-tab-6" role="tab" type="button" aria-selected="false" tabIndex="-1" aria-controls=""
                            onClick = {()=> setTabActive(4)}>
                                <div className="pb-2">Future</div>
                            </button>
                        }
                    </div>
                    {
                        text1.state&&
                        <VisionItem
                        text={text1.text}
                        img={text1.img}/>
                    }
                    {
                        text2.state&&
                        <VisionItem
                        text={text2.text}
                        img={text2.img}/>
                    }
                    {
                        text3.state&&
                        <VisionItem
                        text={text3.text}
                        img={text3.img}/>
                    }
                    {
                        text4.state&&
                        <VisionItem
                        text={text4.text}
                        img={text4.img}/>
                    }
                </div>
                <div className="mint-button-container">
                    <div className="mint-button-img g-flex-justify-center">
                        <img className="vision-img" src={Marauder} alt="Metatraveler"/>
                    </div>
                    <div className="mint-button g-flex-justify-center">
                        <p style={{color:"white"}}>
                        Let's mint some tokens here.
                        </p>
                        <div className='number-control'>
                            <BsFileMinusFill color='white' size={40} onClick = {()=> minus_num()}/>
                            <span id = "inputBox">{mintNum}</span>
                            <BsFilePlusFill color='white' size={40} onClick = {() => plus_num()}/>
                        </div>
                        {
                        blockchain.account === "" || blockchain.smartContract === null ? 
                        <div className="mint-flex-column">
                            <button className='ybutton' 
                            onClick={(e) => {
                                console.log("--------")
                                e.preventDefault();
                                dispatch(connect());
                                getData();
                            }}>Connect</button>
                            {blockchain.errorMsg !== "" ? (
                                <div style={{ textAlign: "center", fontSize: 20, color: "white"}}>
                                        {blockchain.errorMsg}
                                    </div>
                                
                            ) : null}
                        </div>
                        :<div className="mint-flex-column">
                            <button className='ybutton'
                            onClick={(e) => {
                                e.preventDefault();
                                claimNFTs(1);
                                getData();
                            }}>{claimingNft ? "BUSY" : "MINT"}</button>
                            </div>
                        }
                    </div>
                </div>
                
                </div>
            </div>   

    )
}
export default Vision