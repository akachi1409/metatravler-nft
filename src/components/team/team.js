import React from "react";

import "./team.css";
import TeamMember from "./teamMember";

import team1 from "../../assets/images/team/metamarko.54ccbb7a.png";
import team2 from "../../assets/images/team/metatrippy.fc28a148.png"
import team3 from "../../assets/images/team/metakat.8cade433.png"
import team4 from "../../assets/images/team/metazuzu.a152f609.png";
import team5 from "../../assets/images/team/metajb.777780e2.png";
import team6 from "../../assets/images/team/metarick.66842d47.jpeg";
import team7 from "../../assets/images/team/metamike.b3e4de53.png";
import team8 from "../../assets/images/team/metanickyg.4bae9683.png";
import team9 from "../../assets/images/team/andy.1dc6c19b.png";
import team10 from "../../assets/images/team/ant.550a54f5.png";
import team11 from "../../assets/images/team/jetmade.bbda6e36.png"
class Team extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            members:[
                {
                    img:team1,
                    title:"MetaMarko",
                    des:"MetaMarko is one of the visionaries behind MetaTravelers and has been working in immersive art and live entertainment for the past decade. As an experience creator, he has designed lighting shows for NBA, MLB, and NFL halftime shows, along with music festivals including Lollapalooza, Bonnaroo, Ultra Music Festival, and EDC. Over that time he did lighting design with musical artists such as Tiesto and Avicii, and most recently created the laser show design for Childish Gambino’s “This is America Tour''. In 2020 he teamed up with Trippyogi to create Next Dimension Studios and explore immersive art installations that bridge physical and digital experiences in the Metaverse. This fascination with NFT's and the future of open worlds sparked the creation of a collection to empower a community of creators and collectors while pushing the limits of next-gen avatars and XR technology.",
                    twitter:"https://twitter.com/marko_louis",
                    opensea:"https://opensea.io/Meta-Marko"
                },
                {
                    img:team2,
                    title:"MetaTrippy | trippyogi",
                    des:"Trippyogi is a digital dream builder creating new worlds through art and technology. Whether it be through architecting spaces in the metaverse, cross-reality experiences, or moving meditations, every creation comes from a place of peace and love.",
                    twitter:"https://twitter.com/trippyogi",
                    opensea:"https://opensea.io/trippyogi"
                },
                {
                    img:team3,
                    title:"MetaKat",
                    des:"MetaKat has almost a decade of experience working for a real estate marketing and sales brokerage. She has worked with some of the top builders in North America, helping them succeed in their development ventures. MetaKat has been a part of the Next Dimension Studios team since its creation! This emerging new world has engulfed my life in an exciting new way, and I can’t wait for the adventures to come. When I’m not working on the world of MetaTravelers, you can find me outside soaking up the sun and hiking with my dog! MetaKat focuses on social media marketing and team building for MetaTravelers, and is super amped to be building the future with such a highly motivated and innovative community!",
                    twitter:"https://twitter.com/ChattyKathy8989",
                },
                {
                    img:team4,
                    title:"MetaZuzu",
                    des:"Zuzu (aka princexzuzu - she/they) is a scrum master by day, project manager/coordinator/concept artist by night. What drives Zuzu the most in expanding the MetaTravelers universe is the vision of traversing the infinite metaverse worlds from the perspective of the Nibiru and other forthcoming guilds themselves! She recently started collecting NFT's with digital real estate in SuperWorld, and plans to install AR artworks in the physical world to spread messages of love and share really, really weird art.",
                    twitter:"https://twitter.com/princexzuzu",

                },
                {
                    img:team5,
                    title:"MetaJB",
                    des:"Joydeep is a self taught 3d artist extensively experienced in character art. From scribbling lead to molding digital clay, he does it all to make the characters come to life. Being relatively new in the nft space, he is excited to finally be able to pursue his new passion - creating a universe inside the metaverse!"
                },
                {
                    img:team6,
                    title:"MetaRick",
                    des:"Rick is a lifelong artist, starting with doodles of Ninja Turtles as a child to co-founding a design firm, working as a professional graphic designer and illustrator. A newcomer to the NFT community, Rick is thrilled at the opportunity to learn more while connecting with like-minded art lovers. When not working you can catch Rick drinking coffee, listening to 90s hip-hop, and (still) drawing Ninja Turtles.",
                    twitter:"https://twitter.com/RickDrawsThings",
                    opensea:"https://instagram.com/RickDrawsThings"
                },
                {
                    img:team7,
                    title:"MetaMike",
                    des:"Mike is a developer with strong experience in planning and building early-stage startups. He is skilled in all aspects of developing software, from UI design to creating APIs to cloud architecture. His hobbies include spending all day refreshing OpenSea to view floor prices and accidentally selling NFTs before price pumps.",
                    twitter:"https://twitter.com/0xMeowdy",
                    opensea:"https://opensea.io/meowdy"
                },
                {
                    img:team8,
                    title:"MetaNickyG",
                    des:"Nicky has a background in Marketing and community management through his partial ownership in a digital marketing firm and by building out discords for personal hobbies such as streaming and hosting Sports leagues in the Madden community. Nicky is from Canada and has high aspirations of one day owning 10 dogs. If you have any community questions he is your go to guy. If you want to know more send him a message as he is super happy to help anyone in need!",
                    twitter:"https://twitter.com/NickyGee44",
                    opensea:"https://opensea.io/NickyG44"
                },
                {
                    img:team9,
                    title:"Andy",
                    des:"Andy has worked for over thirty years as a writer and artist creating characters and story worlds across many platforms: comics, books, video games, TV and film. He is best known for his work writing Marvel's Guardians of the Galaxy comic series, the source material for the smash hit movies. Recently, Andy spent eight years as the Executive Creative Director for Magic Leap helping to define the company's creative ethos and spearheading partnerships with some of the world’s leading creative practitioners from The Royal Shakespeare Company and Imaginarium Studios to Sigur Ros and Weta Workshop. In 2020 Andy teamed up with Ant to form Ideas&Inks a studio that helps companies develop their storyworlds using the tools and language of comics. MetaTravelers as a great opportunity to explore new forms of storytelling alongside a great team and an awesome community.",
                    twitter:"https://twitter.com/AndyLanning"
                },
                {
                    img:team10,
                    title:"Ant",
                    des:"Ant has enjoyed a long career as storyteller, artist, creative director, and a head of studios in the UK and US. He spent many years working on who's who of characters and IP for Marvel, DC, and multiple other comic-book publishers. Much of this work remains in print today and has featured in exhibitions of comic book art. He was the founder of a celebrated content creation house serving entertainment, advertising and licensing clients, working with them to develop their IP, turning ideas into commercially viable products. Ant also developed his own creative IP which he licenses internationally. As Head of Studio at Magic Leap, Ant was responsible for the 1st party content strategy and led a world class creative team who brought to life award winning content, helping to define a new entertainment medium in mixed reality. Having worked together since the beginning of their careers, Ant and Andy decided to set up Ideas&Inks to change the world one story at a time. MetaTravelers is a fantastic opportunity to be part of something truly groundbreaking."
                },
                {
                    img:team11,
                    title:"JetMade",
                    des:"JetMade is an Island kid born and bred in the city of LA. He has over 8 years of experience in the film/entertainment industry. Currently, JetMade is the head of film at Kaskade music and owner of JetMade Film Co. He is a lover of all things tech/sci-fi and plants. JetMade’s dream is to one day move his family to a farm on the beach in the Philippines."
                },
            ]
        }
    }
    render(){
        return(
            <div id = "team">
                <div className="g-relative team-layout ">
                    <div className="team-title sm:text-5xl orbitron">
                        <span>Team</span>
                    </div>
                    <div className="g-flex-justify-center">
                        <div>
                            <ul className="team-member-layout">
                                {
                                    this.state.members.map((item, index) => {
                                        return(
                                            <li>
                                                <TeamMember 
                                                    img={item.img}
                                                    title={item.title}
                                                    des={item.des}
                                                    twitter={item.twitter}
                                                    opensea={item.opensea}
                                                />
                                            </li>
                                        )
                                    })
                                }
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Team;