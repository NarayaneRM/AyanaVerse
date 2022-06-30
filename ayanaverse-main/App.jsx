import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import DESKTOP from "./components/DESKTOP";
import MOBILE from "./components/MOBILE";
import NOTEBOOK from "./components/NOTEBOOK";
import TABLET from "./components/TABLET";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop)">
          <DESKTOP {...dESKTOPData} />
        </Route>
        <Route path="/mobile">
          <MOBILE {...mOBILEData} />
        </Route>
        <Route path="/notebook">
          <NOTEBOOK {...nOTEBOOKData} />
        </Route>
        <Route path="/tablet">
          <TABLET {...tABLETData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group121Data = {
    arrow1: "/img/arrow-1-1@2x.png",
};

const month21Data = {
    children: "MARCH",
};

const group21221Data = {
    event_Number: "EVENTS #01",
    event_Title: "ETH RIO",
    month2Props: month21Data,
};

const month22Data = {
    children: "APRIL",
};

const group21222Data = {
    event_Number: "EVENTS #02",
    event_Title: "ETH AMSTERDAN ---CANCELED",
    className: "group-1-1",
    month2Props: month22Data,
};

const month23Data = {
    children: "MAY",
};

const group21223Data = {
    event_Number: "EVENTS #03",
    event_Title: "NAVI TECH JOURNEY",
    className: "group-1-2",
    month2Props: month23Data,
};

const month24Data = {
    children: "JUNE",
};

const group21224Data = {
    event_Number: "EVENTS #04",
    event_Title: <React.Fragment>BRAZIL MINISTRY OF HEALTH HACKATON<br />DATHATONS</React.Fragment>,
    className: "group-15",
    month2Props: month24Data,
};

const month25Data = {
    children: "JULY",
};

const group21225Data = {
    event_Number: "EVENTS #05",
    event_Title: " ETHCC 5 CONFERENCE",
    className: "group-1-3",
    month2Props: month25Data,
};

const month26Data = {
    children: "AUGUST",
};

const group21226Data = {
    event_Number: "EVENTS #06",
    event_Title: "DEFI SECURITY SUMMIT",
    className: "group-1-4",
    month2Props: month26Data,
};

const month27Data = {
    children: "SEPTEMBER",
};

const group21227Data = {
    event_Number: "EVENTS #07",
    event_Title: <React.Fragment>METAWEEK DUBAI<br />BLOCKCHAIN EXPO 2022 EUROPE</React.Fragment>,
    className: "group",
    month2Props: month27Data,
};

const month28Data = {
    children: "OCTOBER",
};

const group21228Data = {
    event_Number: "EVENTS #08",
    event_Title: <React.Fragment>BLOCKCHAIN ECONOMY DUBAI SUMMIT<br />BLOCKCHAIN EXPO 2022 NORTH AMERICA</React.Fragment>,
    className: "group-1-5",
    month2Props: month28Data,
};

const month29Data = {
    children: "NOVEMBER",
};

const group21229Data = {
    event_Number: "EVENTS #09",
    event_Title: <React.Fragment>WEB SUMMIT 2022<br />ETH SAN FRANCISCO</React.Fragment>,
    className: "group-1",
    month2Props: month29Data,
};

const dESKTOPData = {
    dao_Blockchain_Projects1: <React.Fragment>WELCOME TO MY BLOCKCHAIN UNIVERSE!<br />HERE IS MY OWN PLACE TO MAKE SURE THAT I’M REALLY DEVELOPING CODES, STUDYING AND LEARNING ABOUT BLOCKCHAIN.</React.Fragment>,
    spanText1: <React.Fragment>THE PLAN IS NOT TO BE PRETTY. <br />AYANAVERSE IS A HANDS-ON PLACE, THEN IT’S SIMPLE, BUT<br />BELIEVE ME, IT CAN BE A WONDERFUL PLACE FOR WHO WANTS TO DEVELOP A NEW HARDSKILL</React.Fragment>,
    spanText2: " within a fairly short time.",
    ayana_Droid: "/img/ayana-droid-1@1x.png",
    redes_Socias1: "/img/redes-socias-1-1@2x.png",
    redes_Socias2: "/img/redes-socias-2-1@2x.png",
    redes_Socias3: "/img/redes-socias-3-1@2x.png",
    dao_Blockchain_Projects2: "NEXT NFT RELEASES",
    eth1: "/img/eth-8@2x.png",
    surname1: "PRICE",
    collection1: "X-FEMME",
    number1: "X-FEMME #08",
    value1: "0.005",
    number2: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number3: "TEMPORARILY SUSPENDED**",
    eth2: "/img/eth-8@2x.png",
    surname2: "PRICE",
    collection2: "X-FEMME",
    number4: "X-FEMME #09",
    value2: "0.005",
    number5: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number6: "TEMPORARILY SUSPENDED**",
    eth3: "/img/eth-8@2x.png",
    surname3: "PRICE",
    collection3: "X-FEMME",
    number7: "X-FEMME #10",
    value3: "0.005",
    number8: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number9: "TEMPORARILY SUSPENDED**",
    eth4: "/img/eth-8@2x.png",
    surname4: "PRICE",
    collection4: "X-FEMME",
    number10: "X-FEMME #11",
    value4: "0.005",
    number11: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number12: "TEMPORARILY SUSPENDED**",
    eth5: "/img/eth-8@2x.png",
    surname5: "PRICE",
    collection5: "X-FEMME",
    number13: "X-FEMME #12",
    value5: "0.005",
    number14: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number15: "TEMPORARILY SUSPENDED**",
    eth6: "/img/eth-8@2x.png",
    surname6: "PRICE",
    collection6: "X-FEMME",
    number16: "X-FEMME #13",
    value6: "0.005",
    number17: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number18: "TEMPORARILY SUSPENDED**",
    eth7: "/img/eth-8@2x.png",
    surname7: "PRICE",
    collection7: "X-FEMME",
    number19: "X-FEMME #14",
    value7: "0.005",
    number20: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number21: "TEMPORARILY SUSPENDED**",
    eth8: "/img/eth-8@2x.png",
    surname8: "PRICE",
    collection8: "X-FEMME",
    number22: "X-FEMME #15",
    value8: "0.005",
    number23: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number24: "TEMPORARILY SUSPENDED**",
    dao_Blockchain_Projects3: "CALENDAR EVENTS",
    dao_Blockchain_Projects4: "LAST DEVELOPING CONTROL REPORTS",
    report_Topics1: <React.Fragment>PROJECT #01<br />00/00/00<br /><br />REPORT</React.Fragment>,
    report_Description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    report_Topics2: <React.Fragment>PROJECT #04<br />00/00/00<br /><br />REPORT</React.Fragment>,
    report_Description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    report_Topics3: <React.Fragment>PROJECT #07<br />00/00/00<br /><br />REPORT</React.Fragment>,
    report_Description3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    report_Topics4: <React.Fragment>PROJECT #02<br />00/00/00<br /><br />REPORT</React.Fragment>,
    report_Description4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    report_Topics5: <React.Fragment>PROJECT #05<br />00/00/00<br /><br />REPORT</React.Fragment>,
    report_Description5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    report_Topics6: <React.Fragment>PROJECT #08<br />00/00/00<br /><br />REPORT</React.Fragment>,
    report_Description6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    report_Topics7: <React.Fragment>PROJECT #03<br />00/00/00<br /><br />REPORT</React.Fragment>,
    report_Description7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    report_Topics8: <React.Fragment>PROJECT #06<br />00/00/00<br /><br />REPORT</React.Fragment>,
    report_Description8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    report_Topics9: <React.Fragment>PROJECT #09<br />00/00/00<br /><br />REPORT</React.Fragment>,
    report_Description9: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    dao_Blockchain_Projects5: "SOME",
    dao_Blockchain_Projects6: "DAILY FOLLOW-UP COURSES",
    course_Topics1: "COURSE: Solidity, Blockchain, and Smart Contract Course – Beginner to Expert Python Tutorial – 16-Hour Course",
    course_Description1: "DESCRIPTION: “This course will give you a full introduction into all of the core concepts in blockchain, smart contracts, solidity, NFTs/ERC721s, ERC20s, Coding Decentralized Finance (DeFi), python and solidity, Chainlink, Ethereum, upgradable smart contracts, and full stack blockchain development. “",
    percent1: "~57%",
    percent2: "percent done",
    course_Topics2: "COURSE: Ethereum Blockchain Developer Bootcamp With Solidity (2022)– 12-Hour Course",
    course_Description2: "DESCRIPTION: “Welcome to the Ethereum Blockchain Developer Bootcamp With Solidity course. The course includes over 12 hours of video tutorials, updated companion text guides, practical step-by-step projects, and a responsive discussion board. The combination of all that content is how this course will help you master Ethereum development. The course’s instructor is a co-creator of the industry-standard Ethereum certificatio and you will be learning with all of the latest blockchain development tools. By the end of this course, you will have a portfolio of blockchain projects.”",
    percent3: "~31%",
    percent4: "percent done",
    course_Topics3: "COURSE:  Blockchain, Solidity, and Full Stack Web3 Development with JavaScript – 32-Hour Course",
    course_Description3: "DESCRIPTION: “This course will give you a full introduction into all of the core concepts related to blockchain, smart contracts, Solidity, ERC20s, full-stack Web3 dapps, decentralized finance (DeFi), JavaScript, TypeScript, Chainlink, Ethereum, upgradable smart contracts, DAOs, the graph, moralis, aave, IPFS, and more. Follow along with the videos and you'll be a blockchain wizard in no time!”",
    percent5: "~12%",
    percent6: "percent done",
    dao_Blockchain_Projects7: "MY BLOCKCHAIN PROJECTS",
    dao_Blockchain_Projects8: "DAO BLOCKCHAIN",
    number25: "PROJECT #01",
    title1: "BLOCKCHAIN VACCINE VERIFICATION",
    status1: "IN PROGRESS",
    number26: "PROJECT #02",
    title2: "BLOCKCHAIN FOR SUPPLY CHAIN MANAGEMENT",
    status2: "IN PROGRESS",
    number27: "PROJECT #03",
    title3: "BLOCKCHAIN VOTING APP",
    status3: "IN PROGRESS",
    number28: "PROJECT #04",
    title4: "BLOCKCHAIN SOCIAL MEDIA APP",
    status4: "IN PROGRESS",
    defi_Blockchain_Projects: "DEFI BLOCKCHAIN",
    number29: "PROJECT #01",
    title5: "CRYPTOCURRENCY FINANCE PRICE TRACKER",
    status5: "IN PROGRESS",
    number30: "PROJECT #02",
    title6: "BUILD YOUR OWN ETHERSCAN",
    status6: "IN PROGRESS",
    number31: "PROJECT #03",
    title7: "CRYPTOCURRENCY APP",
    status7: "IN PROGRESS",
    number32: "PROJECT #04",
    title8: "DEFI DASHBOARD ON AVALANCHE",
    status8: "ON LIST",
    nft_Blockchain_Projects: "NFT BLOCKCHAIN",
    number33: "PROJECT #01",
    title9: "NFT SMART CONTRACT ON ETHEREUM",
    status9: "IN PROGRESS",
    number34: "PROJECT #02",
    title10: "CREATE GENERATIVE NFTS: ARTWORKS CODE",
    status10: "IN PROGRESS",
    number35: "PROJECT #03",
    title11: "FULL WEB3 MINT WEBSITE",
    status11: "IN PROGRESS",
    number36: "PROJECT #04",
    title12: "",
    fullStackNftMarketplaceOnEthereum: "FULL STACK NFT MARKETPLACE ON ETHEREUM",
    status12: "IN PROGRESS",
    ayana_Verse1: "/img/ayana-verse-1-1@2x.png",
    group12Props: group121Data,
    group21221Props: group21221Data,
    group21222Props: group21222Data,
    group21223Props: group21223Data,
    group21224Props: group21224Data,
    group21225Props: group21225Data,
    group21226Props: group21226Data,
    group21227Props: group21227Data,
    group21228Props: group21228Data,
    group21229Props: group21229Data,
};

const group122Data = {
    arrow1: "/img/ayana-verse-1@2x.png",
    className: "group-12-1",
};

const month210Data = {
    children: "JUNE",
};

const group211Data = {
    month2Props: month210Data,
};

const month211Data = {
    children: "JUNE",
};

const group212Data = {
    className: "group-3",
    month2Props: month211Data,
};

const month212Data = {
    children: "JUNE",
};

const group213Data = {
    className: "group-3",
    month2Props: month212Data,
};

const month213Data = {
    children: "JUNE",
};

const group214Data = {
    className: "group-15-1",
    month2Props: month213Data,
};

const month214Data = {
    children: "JUNE",
};

const group215Data = {
    className: "group-3",
    month2Props: month214Data,
};

const month215Data = {
    children: "JUNE",
};

const group216Data = {
    className: "group-3",
    month2Props: month215Data,
};

const month216Data = {
    children: "JUNE",
};

const group217Data = {
    className: "group-3",
    month2Props: month216Data,
};

const month217Data = {
    children: "JUNE",
};

const group218Data = {
    className: "group-3",
    month2Props: month217Data,
};

const month218Data = {
    children: "JUNE",
};

const group219Data = {
    className: "group-3",
    month2Props: month218Data,
};

const projectsBottom2Data = {
    children: "PROJECTS",
};

const coursesBottom2Data = {
    children: "COURSES",
};

const nftViewBottom2Data = {
    children: "NFT VIEW",
};

const calendarBottom2Data = {
    children: "CALENDAR",
};

const reportsBottom2Data = {
    children: "REPORTS",
};

const mOBILEData = {
    dao_Blockchain_Projects1: <React.Fragment>WELCOME TO MY BLOCKCHAIN UNIVERSE!<br />HERE IS MY OWN PLACE TO MAKE SURE THAT I’M REALLY DEVELOPING CODES, STUDYING AND LEARNING ABOUT BLOCKCHAIN.</React.Fragment>,
    dao_Blockchain_Projects2: "MY BLOCKCHAIN PROJECTS",
    dao_Blockchain_Projects3: "DAO BLOCKCHAIN",
    number1: "PROJECT #01",
    title1: <React.Fragment>BLOCKCHAIN VACCINE VERIFICATION<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status1: "IN PROGRESS",
    number2: "PROJECT #02",
    title2: <React.Fragment>BLOCKCHAIN FOR SUPPLY CHAIN MANAGEMENT<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status2: "IN PROGRESS",
    number3: "PROJECT #03",
    title3: <React.Fragment>BLOCKCHAIN VOTING APP<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status3: "IN PROGRESS",
    number4: "PROJECT #04",
    title4: <React.Fragment>BLOCKCHAIN SOCIAL MEDIA APP <br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status4: "IN PROGRESS",
    defi_Blockchain_Projects: "DEFI BLOCKCHAIN",
    number5: "PROJECT #01",
    title5: <React.Fragment>CRYPTOCURRENCY FINANCE PRICE TRACKER<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status5: "IN PROGRESS",
    number6: "PROJECT #02",
    title6: <React.Fragment>BUILD YOUR OWN ETHERSCAN<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status6: "IN PROGRESS",
    number7: "PROJECT #03",
    title7: <React.Fragment>CRYPTOCURRENCY APP<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status7: "IN PROGRESS",
    number8: "PROJECT #04",
    title8: <React.Fragment>DEFI DASHBOARD ON AVALANCHE<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status8: "IN PROGRESS",
    nft_Blockchain_Projects: "NFT BLOCKCHAIN",
    number9: "PROJECT #01",
    title9: <React.Fragment>NFT SMART CONTRACT ON ETHEREUM<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status9: "IN PROGRESS",
    number10: "PROJECT #02",
    title10: <React.Fragment>CREATE GENERATIVE NFTS: ARTWORKS CODE<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status10: "IN PROGRESS",
    number11: "PROJECT #03",
    title11: <React.Fragment>FULL WEB3 MINT WEBSITE<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status11: "IN PROGRESS",
    number12: "PROJECT #04",
    title12: "",
    fullStackNftMarke: <React.Fragment>FULL STACK NFT MARKETPLACE ON ETHEREUM<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status12: "IN PROGRESS",
    dao_Blockchain_Projects4: "SOME",
    dao_Blockchain_Projects5: "DAILY FOLLOW-UP COURSES",
    course_Topics: <React.Fragment>COURSE:<br />LINK:<br />DESCRIPTION:</React.Fragment>,
    course_Description21: <React.Fragment>DESCRIPTION DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:</React.Fragment>,
    percent1: "~30%",
    course_Topics21: <React.Fragment>COURSE:<br />LINK:<br />DESCRIPTION:</React.Fragment>,
    course_Description22: <React.Fragment>DESCRIPTION DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:</React.Fragment>,
    percent2: "~30%",
    course_Topics22: <React.Fragment>COURSE:<br />LINK:<br />DESCRIPTION:</React.Fragment>,
    course_Description23: <React.Fragment>DESCRIPTION DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:</React.Fragment>,
    percent3: "~30%",
    dao_Blockchain_Projects6: "NEXT NFT RELEASES",
    eth1: "/img/ayana-verse-1@2x.png",
    surname1: "PRICE",
    collection1: "X-FEMME",
    number13: "X-FEMME #08",
    value1: "0.005",
    number14: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number15: "TEMPORARILY SUSPENDED**",
    eth2: "/img/ayana-verse-1@2x.png",
    surname2: "PRICE",
    collection2: "X-FEMME",
    number16: "X-FEMME #09",
    value2: "0.005",
    number17: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number18: "TEMPORARILY SUSPENDED**",
    eth3: "/img/ayana-verse-1@2x.png",
    surname3: "PRICE",
    collection3: "X-FEMME",
    number19: "X-FEMME #10",
    value3: "0.005",
    number20: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number21: "TEMPORARILY SUSPENDED**",
    eth4: "/img/ayana-verse-1@2x.png",
    surname4: "PRICE",
    collection4: "X-FEMME",
    number22: "X-FEMME #11",
    value4: "0.005",
    number23: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number24: "TEMPORARILY SUSPENDED**",
    eth5: "/img/ayana-verse-1@2x.png",
    surname5: "PRICE",
    collection5: "X-FEMME",
    number25: "X-FEMME #12",
    value5: "0.005",
    number26: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number27: "TEMPORARILY SUSPENDED**",
    eth6: "/img/ayana-verse-1@2x.png",
    surname6: "PRICE",
    collection6: "X-FEMME",
    number28: "X-FEMME #13",
    value6: "0.005",
    number29: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number30: "TEMPORARILY SUSPENDED**",
    eth7: "/img/ayana-verse-1@2x.png",
    surname7: "PRICE",
    collection7: "X-FEMME",
    number31: "X-FEMME #14",
    value7: "0.005",
    number32: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number33: "TEMPORARILY SUSPENDED**",
    eth8: "/img/ayana-verse-1@2x.png",
    surname8: "PRICE",
    collection8: "X-FEMME",
    number34: "X-FEMME #15",
    value8: "0.005",
    number35: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number36: "TEMPORARILY SUSPENDED**",
    dao_Blockchain_Projects7: "CALENDAR EVENTS",
    dao_Blockchain_Projects8: "LAST DEVELOPING CONTROL REPORTS",
    report_Topics1: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description1: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics2: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description2: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics3: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description3: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics4: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description4: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics5: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description5: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics6: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description6: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics7: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description7: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics8: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description8: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics9: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description9: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    redes_Socias1: "/img/ayana-verse-1@2x.png",
    redes_Socias2: "/img/ayana-verse-1@2x.png",
    redes_Socias3: "/img/ayana-verse-1@2x.png",
    ayana_Droid: "/img/ayana-droid@1x.png",
    spanText1: <React.Fragment>THE PLAN IS NOT TO BE PRETTY. <br />AYANAVERSE IS A HANDS-ON PLACE, THEN IT’S SIMPLE, BUT<br />BELIEVE ME, IT CAN BE A WONDERFUL PLACE FOR WHO WANTS TO DEVELOP A NEW HARDSKILL</React.Fragment>,
    spanText2: " within a fairly short time.",
    ayana_Verse1: "/img/ayana-verse-1@2x.png",
    group12Props: group122Data,
    group211Props: group211Data,
    group212Props: group212Data,
    group213Props: group213Data,
    group214Props: group214Data,
    group215Props: group215Data,
    group216Props: group216Data,
    group217Props: group217Data,
    group218Props: group218Data,
    group219Props: group219Data,
    projectsBottom2Props: projectsBottom2Data,
    coursesBottom2Props: coursesBottom2Data,
    nftViewBottom2Props: nftViewBottom2Data,
    calendarBottom2Props: calendarBottom2Data,
    reportsBottom2Props: reportsBottom2Data,
};

const group123Data = {
    arrow1: "/img/ayana-verse-1@2x.png",
    className: "group-12-2",
};

const month219Data = {
    children: "JUNE",
};

const group2110Data = {
    month2Props: month219Data,
};

const month220Data = {
    children: "JUNE",
};

const group2111Data = {
    className: "group-4",
    month2Props: month220Data,
};

const month221Data = {
    children: "JUNE",
};

const group2112Data = {
    className: "group-4",
    month2Props: month221Data,
};

const month222Data = {
    children: "JUNE",
};

const group2113Data = {
    className: "group-15-2",
    month2Props: month222Data,
};

const month223Data = {
    children: "JUNE",
};

const group2114Data = {
    className: "group-4",
    month2Props: month223Data,
};

const month224Data = {
    children: "JUNE",
};

const group2115Data = {
    className: "group-4",
    month2Props: month224Data,
};

const month225Data = {
    children: "JUNE",
};

const group2116Data = {
    className: "group-4",
    month2Props: month225Data,
};

const month226Data = {
    children: "JUNE",
};

const group2117Data = {
    className: "group-4",
    month2Props: month226Data,
};

const month227Data = {
    children: "JUNE",
};

const group2118Data = {
    className: "group-4",
    month2Props: month227Data,
};

const projectsBottom3Data = {
    className: "projects_bottom-1",
};

const coursesBottom3Data = {
    className: "courses_bottom-1",
};

const nftViewBottom3Data = {
    className: "nft_view_bottom-1",
};

const calendarBottom3Data = {
    className: "calendar_bottom-1",
};

const reportsBottom3Data = {
    className: "reports_bottom-1",
};

const nOTEBOOKData = {
    dao_Blockchain_Projects1: <React.Fragment>WELCOME TO MY BLOCKCHAIN UNIVERSE!<br />HERE IS MY OWN PLACE TO MAKE SURE THAT I’M REALLY DEVELOPING CODES, STUDYING AND LEARNING ABOUT BLOCKCHAIN.</React.Fragment>,
    dao_Blockchain_Projects2: "LAST DEVELOPING CONTROL REPORTS",
    report_Topics1: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description1: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics2: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description2: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics3: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description3: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics4: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description4: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics5: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description5: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics6: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description6: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics7: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description7: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics8: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description8: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics9: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description9: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    redes_Socias1: "/img/ayana-verse-1@2x.png",
    redes_Socias2: "/img/ayana-verse-1@2x.png",
    redes_Socias3: "/img/ayana-verse-1@2x.png",
    dao_Blockchain_Projects3: "MY BLOCKCHAIN PROJECTS",
    dao_Blockchain_Projects4: "DAO BLOCKCHAIN",
    number1: "PROJECT #01",
    title1: <React.Fragment>BLOCKCHAIN VACCINE VERIFICATION<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status1: "IN PROGRESS",
    number2: "PROJECT #02",
    title2: <React.Fragment>BLOCKCHAIN FOR SUPPLY CHAIN MANAGEMENT<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status2: "IN PROGRESS",
    number3: "PROJECT #03",
    title3: <React.Fragment>BLOCKCHAIN VOTING APP<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status3: "IN PROGRESS",
    number4: "PROJECT #04",
    title4: <React.Fragment>BLOCKCHAIN SOCIAL MEDIA APP <br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status4: "IN PROGRESS",
    defi_Blockchain_Projects: "DEFI BLOCKCHAIN",
    number5: "PROJECT #01",
    title5: <React.Fragment>CRYPTOCURRENCY FINANCE PRICE TRACKER<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status5: "IN PROGRESS",
    number6: "PROJECT #02",
    title6: <React.Fragment>BUILD YOUR OWN ETHERSCAN<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status6: "IN PROGRESS",
    number7: "PROJECT #03",
    title7: <React.Fragment>CRYPTOCURRENCY APP<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status7: "IN PROGRESS",
    number8: "PROJECT #04",
    title8: <React.Fragment>DEFI DASHBOARD ON AVALANCHE<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status8: "IN PROGRESS",
    nft_Blockchain_Projects: "NFT BLOCKCHAIN",
    number9: "PROJECT #01",
    title9: <React.Fragment>NFT SMART CONTRACT ON ETHEREUM<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status9: "IN PROGRESS",
    number10: "PROJECT #02",
    title10: <React.Fragment>CREATE GENERATIVE NFTS: ARTWORKS CODE<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status10: "IN PROGRESS",
    number11: "PROJECT #03",
    title11: <React.Fragment>FULL WEB3 MINT WEBSITE<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status11: "IN PROGRESS",
    number12: "PROJECT #04",
    title12: "",
    fullStackNftMarke: <React.Fragment>FULL STACK NFT MARKETPLACE ON ETHEREUM<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status12: "IN PROGRESS",
    dao_Blockchain_Projects5: "NEXT NFT RELEASES",
    eth1: "/img/ayana-verse-1@2x.png",
    surname1: "PRICE",
    collection1: "X-FEMME",
    number13: "X-FEMME #08",
    value1: "0.005",
    number14: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number15: "TEMPORARILY SUSPENDED**",
    eth2: "/img/ayana-verse-1@2x.png",
    surname2: "PRICE",
    collection2: "X-FEMME",
    number16: "X-FEMME #09",
    value2: "0.005",
    number17: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number18: "TEMPORARILY SUSPENDED**",
    eth3: "/img/ayana-verse-1@2x.png",
    surname3: "PRICE",
    collection3: "X-FEMME",
    number19: "X-FEMME #10",
    value3: "0.005",
    number20: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number21: "TEMPORARILY SUSPENDED**",
    eth4: "/img/ayana-verse-1@2x.png",
    surname4: "PRICE",
    collection4: "X-FEMME",
    number22: "X-FEMME #11",
    value4: "0.005",
    number23: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number24: "TEMPORARILY SUSPENDED**",
    eth5: "/img/ayana-verse-1@2x.png",
    surname5: "PRICE",
    collection5: "X-FEMME",
    number25: "X-FEMME #12",
    value5: "0.005",
    number26: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number27: "TEMPORARILY SUSPENDED**",
    eth6: "/img/ayana-verse-1@2x.png",
    surname6: "PRICE",
    collection6: "X-FEMME",
    number28: "X-FEMME #13",
    value6: "0.005",
    number29: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number30: "TEMPORARILY SUSPENDED**",
    eth7: "/img/ayana-verse-1@2x.png",
    surname7: "PRICE",
    collection7: "X-FEMME",
    number31: "X-FEMME #14",
    value7: "0.005",
    number32: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number33: "TEMPORARILY SUSPENDED**",
    eth8: "/img/ayana-verse-1@2x.png",
    surname8: "PRICE",
    collection8: "X-FEMME",
    number34: "X-FEMME #15",
    value8: "0.005",
    number35: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number36: "TEMPORARILY SUSPENDED**",
    dao_Blockchain_Projects6: "CALENDAR EVENTS",
    spanText1: <React.Fragment>THE PLAN IS NOT TO BE PRETTY. <br />AYANAVERSE IS A HANDS-ON PLACE, THEN IT’S SIMPLE, BUT<br />BELIEVE ME, IT CAN BE A WONDERFUL PLACE FOR WHO WANTS TO DEVELOP A NEW HARDSKILL</React.Fragment>,
    spanText2: " within a fairly short time.",
    ayana_Droid: "/img/ayana-droid@1x.png",
    dao_Blockchain_Projects7: "SOME",
    dao_Blockchain_Projects8: "DAILY FOLLOW-UP COURSES",
    course_Topics1: <React.Fragment>COURSE:<br />LINK:<br />DESCRIPTION:</React.Fragment>,
    course_Description1: <React.Fragment>DESCRIPTION DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:</React.Fragment>,
    percent1: "~30%",
    course_Topics2: <React.Fragment>COURSE:<br />LINK:<br />DESCRIPTION:</React.Fragment>,
    course_Description2: <React.Fragment>DESCRIPTION DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:</React.Fragment>,
    percent2: "~30%",
    course_Topics3: <React.Fragment>COURSE:<br />LINK:<br />DESCRIPTION:</React.Fragment>,
    course_Description3: <React.Fragment>DESCRIPTION DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:</React.Fragment>,
    percent3: "~30%",
    ayana_Verse1: "/img/ayana-verse-1@2x.png",
    group12Props: group123Data,
    group211Props: group2110Data,
    group212Props: group2111Data,
    group213Props: group2112Data,
    group214Props: group2113Data,
    group215Props: group2114Data,
    group216Props: group2115Data,
    group217Props: group2116Data,
    group218Props: group2117Data,
    group219Props: group2118Data,
    projectsBottomProps: projectsBottom3Data,
    coursesBottomProps: coursesBottom3Data,
    nftViewBottomProps: nftViewBottom3Data,
    calendarBottomProps: calendarBottom3Data,
    reportsBottomProps: reportsBottom3Data,
};

const group124Data = {
    arrow1: "/img/ayana-verse-1@2x.png",
    className: "group-12-3",
};

const month228Data = {
    children: "JUNE",
};

const group2119Data = {
    month2Props: month228Data,
};

const month229Data = {
    children: "JUNE",
};

const group2120Data = {
    className: "group-5",
    month2Props: month229Data,
};

const month230Data = {
    children: "JUNE",
};

const group2121Data = {
    className: "group-5",
    month2Props: month230Data,
};

const month231Data = {
    children: "JUNE",
};

const group2123Data = {
    className: "group-15-3",
    month2Props: month231Data,
};

const month232Data = {
    children: "JUNE",
};

const group2124Data = {
    className: "group-5",
    month2Props: month232Data,
};

const month233Data = {
    children: "JUNE",
};

const group2125Data = {
    className: "group-5",
    month2Props: month233Data,
};

const month234Data = {
    children: "JUNE",
};

const group2126Data = {
    className: "group-5",
    month2Props: month234Data,
};

const month235Data = {
    children: "JUNE",
};

const group2127Data = {
    className: "group-5",
    month2Props: month235Data,
};

const month236Data = {
    children: "JUNE",
};

const group2128Data = {
    className: "group-5",
    month2Props: month236Data,
};

const projectsBottom4Data = {
    className: "projects_bottom-2",
};

const coursesBottom4Data = {
    className: "courses_bottom-2",
};

const nftViewBottom4Data = {
    className: "nft_view_bottom-2",
};

const calendarBottom4Data = {
    className: "calendar_bottom-2",
};

const reportsBottom4Data = {
    className: "reports_bottom-2",
};

const tABLETData = {
    dao_Blockchain_Projects1: <React.Fragment>WELCOME TO MY BLOCKCHAIN UNIVERSE!<br />HERE IS MY OWN PLACE TO MAKE SURE THAT I’M REALLY DEVELOPING CODES, STUDYING AND LEARNING ABOUT BLOCKCHAIN.</React.Fragment>,
    dao_Blockchain_Projects2: "MY BLOCKCHAIN PROJECTS",
    dao_Blockchain_Projects3: "DAO BLOCKCHAIN",
    number1: "PROJECT #01",
    title1: <React.Fragment>BLOCKCHAIN VACCINE VERIFICATION<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status1: "IN PROGRESS",
    number2: "PROJECT #02",
    title2: <React.Fragment>BLOCKCHAIN FOR SUPPLY CHAIN MANAGEMENT<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status2: "IN PROGRESS",
    number3: "PROJECT #03",
    title3: <React.Fragment>BLOCKCHAIN VOTING APP<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status3: "IN PROGRESS",
    number4: "PROJECT #04",
    title4: <React.Fragment>BLOCKCHAIN SOCIAL MEDIA APP <br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status4: "IN PROGRESS",
    defi_Blockchain_Projects: "DEFI BLOCKCHAIN",
    number5: "PROJECT #01",
    title5: <React.Fragment>CRYPTOCURRENCY FINANCE PRICE TRACKER<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status5: "IN PROGRESS",
    number6: "PROJECT #02",
    title6: <React.Fragment>BUILD YOUR OWN ETHERSCAN<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status6: "IN PROGRESS",
    number7: "PROJECT #03",
    title7: <React.Fragment>CRYPTOCURRENCY APP<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status7: "IN PROGRESS",
    number8: "PROJECT #04",
    title8: <React.Fragment>DEFI DASHBOARD ON AVALANCHE<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status8: "IN PROGRESS",
    nft_Blockchain_Projects: "NFT BLOCKCHAIN",
    number9: "PROJECT #01",
    title9: <React.Fragment>NFT SMART CONTRACT ON ETHEREUM<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status9: "IN PROGRESS",
    number10: "PROJECT #02",
    title10: <React.Fragment>CREATE GENERATIVE NFTS: ARTWORKS CODE<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status10: "IN PROGRESS",
    number11: "PROJECT #03",
    title11: <React.Fragment>FULL WEB3 MINT WEBSITE<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status11: "IN PROGRESS",
    number12: "PROJECT #04",
    title12: "",
    fullStackNftMarke: <React.Fragment>FULL STACK NFT MARKETPLACE ON ETHEREUM<br />3 HOURS OF DEVELOPMENT</React.Fragment>,
    status12: "IN PROGRESS",
    dao_Blockchain_Projects4: "DAILY FOLLOW-UP COURSES",
    dao_Blockchain_Projects5: "SOME",
    course_Topics21: <React.Fragment>COURSE:<br />LINK:<br />DESCRIPTION:</React.Fragment>,
    course_Description21: <React.Fragment>DESCRIPTION DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:</React.Fragment>,
    percent1: "~30%",
    course_Topics22: <React.Fragment>COURSE:<br />LINK:<br />DESCRIPTION:</React.Fragment>,
    course_Description22: <React.Fragment>DESCRIPTION DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:</React.Fragment>,
    percent2: "~30%",
    course_Topics23: <React.Fragment>COURSE:<br />LINK:<br />DESCRIPTION:</React.Fragment>,
    course_Description23: <React.Fragment>DESCRIPTION DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:DESCRIPTION:<br />DESCRIPTION:DESCRIPTION:DESCRIPTION:</React.Fragment>,
    percent3: "~30%",
    dao_Blockchain_Projects6: "NEXT NFT RELEASES",
    eth1: "/img/ayana-verse-1@2x.png",
    surname1: "PRICE",
    collection1: "X-FEMME",
    number13: "X-FEMME #08",
    value1: "0.005",
    number14: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number15: "TEMPORARILY SUSPENDED**",
    eth2: "/img/ayana-verse-1@2x.png",
    surname2: "PRICE",
    collection2: "X-FEMME",
    number16: "X-FEMME #09",
    value2: "0.005",
    number17: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number18: "TEMPORARILY SUSPENDED**",
    eth3: "/img/ayana-verse-1@2x.png",
    surname3: "PRICE",
    collection3: "X-FEMME",
    number19: "X-FEMME #10",
    value3: "0.005",
    number20: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number21: "TEMPORARILY SUSPENDED**",
    eth4: "/img/ayana-verse-1@2x.png",
    surname4: "PRICE",
    collection4: "X-FEMME",
    number22: "X-FEMME #11",
    value4: "0.005",
    number23: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number24: "TEMPORARILY SUSPENDED**",
    eth5: "/img/ayana-verse-1@2x.png",
    surname5: "PRICE",
    collection5: "X-FEMME",
    number25: "X-FEMME #12",
    value5: "0.005",
    number26: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number27: "TEMPORARILY SUSPENDED**",
    eth6: "/img/ayana-verse-1@2x.png",
    surname6: "PRICE",
    collection6: "X-FEMME",
    number28: "X-FEMME #13",
    value6: "0.005",
    number29: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number30: "TEMPORARILY SUSPENDED**",
    eth7: "/img/ayana-verse-1@2x.png",
    surname7: "PRICE",
    collection7: "X-FEMME",
    number31: "X-FEMME #14",
    value7: "0.005",
    number32: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number33: "TEMPORARILY SUSPENDED**",
    eth8: "/img/ayana-verse-1@2x.png",
    surname8: "PRICE",
    collection8: "X-FEMME",
    number34: "X-FEMME #15",
    value8: "0.005",
    number35: "**AYANA IS TEMPORARILY SHARED FOR ETHCC APPLICATION",
    number36: "TEMPORARILY SUSPENDED**",
    redes_Socias1: "/img/ayana-verse-1@2x.png",
    redes_Socias2: "/img/ayana-verse-1@2x.png",
    redes_Socias3: "/img/ayana-verse-1@2x.png",
    dao_Blockchain_Projects7: "LAST DEVELOPING CONTROL REPORTS",
    report_Topics1: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description1: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics2: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description2: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics3: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description3: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics4: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description4: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics5: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description5: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics6: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description6: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics7: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description7: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics8: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description8: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    report_Topics9: <React.Fragment>PROJECT #01<br />29/06/22<br /><br />REPORT</React.Fragment>,
    report_Description9: <React.Fragment>COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X <br />COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X   COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X COLLECTION X</React.Fragment>,
    dao_Blockchain_Projects8: "CALENDAR EVENTS",
    spanText1: <React.Fragment>THE PLAN IS NOT TO BE PRETTY. <br />AYANAVERSE IS A HANDS-ON PLACE, THEN IT’S SIMPLE, BUT<br />BELIEVE ME, IT CAN BE A WONDERFUL PLACE FOR WHO WANTS TO DEVELOP A NEW HARDSKILL</React.Fragment>,
    spanText2: " within a fairly short time.",
    ayana_Droid: "/img/ayana-droid@1x.png",
    ayana_Verse1: "/img/ayana-verse-1@2x.png",
    group12Props: group124Data,
    group211Props: group2119Data,
    group212Props: group2120Data,
    group213Props: group2121Data,
    group214Props: group2123Data,
    group215Props: group2124Data,
    group216Props: group2125Data,
    group217Props: group2126Data,
    group218Props: group2127Data,
    group219Props: group2128Data,
    projectsBottomProps: projectsBottom4Data,
    coursesBottomProps: coursesBottom4Data,
    nftViewBottomProps: nftViewBottom4Data,
    calendarBottomProps: calendarBottom4Data,
    reportsBottomProps: reportsBottom4Data,
};

