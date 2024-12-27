import wukong from "../FrontEnd/src/assets/wukong.png";
import bulder from "../FrontEnd/src/assets/buldur.jpg";
import cyberpunk from "../FrontEnd/src/assets/cyberpunk.jpg";
import fc25 from "../FrontEnd/src/assets/fc25.jpg";
import nba from "../FrontEnd/src/assets/nba.jpg";
import scum from "../FrontEnd/src/assets/scum.jpg";
import gos from "../FrontEnd/src/assets/gos.jpg";
import rdr2 from "../FrontEnd/src/assets/rdr2.png";
import gow from "../FrontEnd/src/assets/gow.jpg";
import Teaser from "../FrontEnd/src/assets/Video/teaser1.mp4"
const mockData = [
    {
        id: 1,
        title: "Black Myth Wukong",
        description: "A visually stunning action RPG inspired by the classic Chinese novel, Journey to the West.",
        imageUrl: wukong,
        price: "69.00$",
        teaser: false
    },
    {
        id: 2,
        title: "Baldur's Gate 3",
        description: "A role-playing video game set in the Dungeons & Dragons universe with rich storytelling and strategy.",
        imageUrl: bulder,
        price: "59.99$",
        teaser: false
    },
    {
        id: 3,
        title: "Cyberpunk 2077",
        description: "An open-world action RPG set in a dystopian future with a focus on cybernetic enhancements and narrative choices.",
        imageUrl: cyberpunk,
        price: "79.99$",
        teaser: false
    },
    {
        id: 4,
        title: "Fc 25",
        description: "The latest in the Football game series, featuring realistic playing football and a new career mode.",
        imageUrl: fc25,
        price: "69.99$",
        teaser: false
    },
    {
        id: 5,
        title: "NBA 2K25",
        description: "The latest entry in the NBA 2K series, offering an immersive basketball experience with updated rosters and game mechanics.",
        imageUrl: nba,
        price: "49.99$",
        teaser: false
    },
    {
        id: 6,
        title: "SCUM",
        description: "An open-world survival game with a focus on character development, crafting, and combat in a brutal environment.",
        imageUrl: scum,
        price: "29.99$",
        teaser: false
    },
    {
        id: 7,
        title: "Ghost of Tsushima",
        description: "An action-adventure game set in feudal Japan, following a samurai's journey to protect his homeland from Mongol invaders.",
        imageUrl: gos,
        price: "59.99$",
        teaser: false
    },
    {
        id: 8,
        title: "Red Dead Redemption 2",
        description: "A western-themed action-adventure game with a gripping narrative, vast open-world exploration, and deep character development.",
        imageUrl: rdr2,
        price: "59.99$",
        teaser: true
        
    },
    {
        id: 9,
        title: "God of War Ragnarok",
        description: "The continuation of Kratos' journey in the world of Norse mythology, with intense combat and a powerful story.",
        imageUrl: gow,
        price: "69.99$",
        teaser: false
    }
];


export default mockData;
