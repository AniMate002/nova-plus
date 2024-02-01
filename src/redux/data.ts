import { cardI, cardsType } from "./gamesReducer";
import card1 from '../images/cards/card1.jpg'
import card2 from '../images/cards/card2.jpg'
import card3 from '../images/cards/card3.jpg'
import card4 from '../images/cards/card4.jpeg'
import card5 from '../images/cards/card5.jpg'
import card6 from '../images/cards/card6.jpg'
import card7 from '../images/cards/card7.png'
import card8 from '../images/cards/card8.png'
import card9 from '../images/cards/card9.jpg'

import { citiesType, cityI } from "./worldMapReducer";
import MinksImage from '../images/cities/Minsk.jpg'
import WarsawImage from '../images/cities/Warsaw.jpg'
import ParisImage from '../images/cities/Paris.jpg'
import BerlinImage from '../images/cities/Berlin.jpg'
import WashingtonImage from '../images/cities/Washington.jpg'
import LasVegasImage from '../images/cities/LasVegas.jpg'
import { jobI } from "./jobsReducer";
import { allNewsType, newsI } from "./newsReducer";

import news1_1 from '../images/news/news1_1.png'
import news2_1 from '../images/news/news2_1.jpg'
import news3_1 from '../images/news/news3_1.jpg'
import news4_1 from '../images/news/news4_1.jpg'
import news5_1 from '../images/news/news5_1.jpg'
import news6_1 from '../images/news/news6_1.jpg'
import news7_1 from '../images/news/news7_1.jpg'
import news8_1 from '../images/news/news8_1.jpg'
import news9_1 from '../images/news/news9_1.jpg'
import news10_1 from '../images/news/news10_1.png'
import { teamType } from "./teamReducer";

import avatar1 from '../images/avatars/avatar1.jpg'
import avatar2 from '../images/avatars/avatar2.jpg'
import avatar3 from '../images/avatars/avatar3.jpg'
import avatar4 from '../images/avatars/avatar4.jpg'
import { sponsorsType } from "./sponsorsReducer";

import adobe from '../images/sponsors/adobe.png'
import amazon from '../images/sponsors/amazon.png'
import apple from '../images/sponsors/apple.png'
import cisco from '../images/sponsors/cisco.png'
import digitalDinamics from '../images/sponsors/digitalDinamics.png'
import facebook from '../images/sponsors/facebook.png'
import futureTech from '../images/sponsors/futureTech.png'
import globalTech from '../images/sponsors/globalTech.png'
import megaSolutions from '../images/sponsors/megaSolutions.png'
import microsoft from '../images/sponsors/microsoft.png'
import quantumTech from '../images/sponsors/quantumTech.png'
import startSolutions from '../images/sponsors/startSolutions.png'
import techco from '../images/sponsors/techco.png'
import unity from '../images/sponsors/unity.png'
import netflix from '../images/sponsors/netflix.jpg'





const pc = 'fa-solid fa-desktop'
const ps = 'fa-brands fa-playstation'
const xbox = 'fa-brands fa-xbox'
const mobile = 'fa-solid fa-mobile-screen-button'


export const uniqueTags = [
    'Futuristic', 'Cybernetic Threat', 'PC Game', 'Action', 'Shooter',
    'Alchemy', 'Magical Exploration', 'Simulation', 'Fantasy',
    'Grand Strategy', 'Empire Building', 'Warfare', 'Diplomacy',
    'Magical Apocalypse', 'Arcane Spells', 'Fantasy', 'Adventure',
    'Futuristic Racing', 'Neon Aesthetics', 'Racing'
];


const firstGame: cardI = {
    id: 1,
    title: 'Apex Vanguard',
    description: "Gear up for a high-octane, futuristic experience in 'Apex Vanguard,' an adrenaline-fueled PC game that catapults players into a relentless world of advanced technology, ruthless corporations, and intense combat. As an elite Vanguard operative, you are the last line of defense against a looming cybernetic threat. It's time to prove your mettle in the apex of warfare.",
    stars: 4.5,
    image: card1,
    tags: ['Futuristic', 'Cybernetic Threat', 'PC Game', 'Action', 'Shooter'],
    yearReleased: 2023,
    gameEngine: 'Unity',
    platforms: [pc, ps],
    type: 'First-Person Shooter',
}

const secondGame: cardI = {
    id: 2,
    title: 'Starlight Seraph',
    description: "Prepare to soar among the cosmos in 'Starlight Seraph,' a mesmerizing PC game that propels players into an interstellar odyssey filled with cosmic wonders and celestial challenges. As the chosen Seraph, your destiny unfolds across the vastness of space, blending futuristic technology with the enchantment of the stars.",
    stars: 4.7,
    image: card2,
    tags: ['Interstellar Odyssey', 'Cosmic Wonders', 'PC Game', 'Adventure', 'Simulation'],
    yearReleased: 2024,
    gameEngine: 'Unreal Engine',
    platforms: [ps, xbox],
    type: 'Space Simulation',
}

const thirdGame: cardI = {
    id: 3,
    title: 'Celestial Citadel',
    description: "Embark on an otherworldly journey in 'Celestial Citadel,' a breathtaking PC game that transports players to the mystical realm of an ancient celestial city suspended among the stars. As a courageous adventurer, you find yourself drawn to the enigmatic Citadel, a place where the boundaries between magic and technology blur, and the secrets of the universe unfold.",
    stars: 4.2,
    image: card3,
    tags: ['Otherworldly Journey', 'Ancient Celestial City', 'PC Game', 'RPG', 'Exploration'],
    yearReleased: 2022,
    gameEngine: 'Unity',
    platforms: [ps],
    type: 'Role-Playing Game',
}

const fourthGame: cardI = {
    id: 4,
    title: 'Chrono Nexus',
    description: "Embark on a time-bending adventure in 'Chrono Nexus,' a mind-bending PC game that challenges players to navigate through parallel timelines and unravel the mysteries of a temporal anomaly. As a skilled chrononaut, you must manipulate time to solve puzzles, overcome obstacles, and prevent a catastrophic time collapse.",
    stars: 4.6,
    image: card4,
    tags: ['Time-Bending Adventure', 'Temporal Anomaly', 'PC Game', 'Puzzle', 'Sci-Fi'],
    yearReleased: 2025,
    gameEngine: 'Unreal Engine',
    platforms: [pc, ps],
    type: 'Puzzle Adventure',
}

const fifthGame: cardI = {
    id: 5,
    title: 'Aetherial Ascendance',
    description: "Ascend to new heights in 'Aetherial Ascendance,' an ethereal PC game that transports players to floating realms where gravity is just a suggestion. As a winged Aetherian, explore breathtaking landscapes, solve gravity-defying puzzles, and uncover the ancient secrets of the Aetherial Realm.",
    stars: 4.8,
    image: card5,
    tags: ['Floating Realms', 'Aetherian', 'PC Game', 'Exploration', 'Puzzle'],
    yearReleased: 2023,
    gameEngine: 'Unity',
    platforms: [mobile],
    type: 'Exploration Puzzle',
}

const sixthGame: cardI = {
    id: 6,
    title: 'Mystic Alchemy',
    description: "Immerse yourself in the mystical art of alchemy in 'Mystic Alchemy,' a spellbinding PC game that combines potion crafting, magical exploration, and mythical creatures. As a prodigious alchemist, journey through enchanted lands, brew powerful potions, and discover the hidden alchemical secrets that shape the fate of the magical realm.",
    stars: 4.4,
    image: card6,
    tags: ['Alchemy', 'Magical Exploration', 'PC Game', 'Simulation', 'Fantasy'],
    yearReleased: 2024,
    gameEngine: 'Unreal Engine',
    platforms: [pc, xbox, ps],
    type: 'Alchemy Simulation',
}

const seventhGame: cardI = {
    id: 7,
    title: 'Eclipse Empires',
    description: "Lead your faction to dominance in 'Eclipse Empires,' a grand strategy PC game set in a vast and dynamic world. As a strategic mastermind, forge alliances, wage epic wars, and navigate the intricate web of diplomacy to shape the destiny of your empire in the shadow of a celestial eclipse.",
    stars: 4.9,
    image: card7,
    tags: ['Grand Strategy', 'Empire Building', 'PC Game', 'Warfare', 'Diplomacy'],
    yearReleased: 2026,
    gameEngine: 'Unity',
    platforms: [ps],
    type: 'Grand Strategy',
}

const eighthGame: cardI = {
    id: 8,
    title: 'Mythic Mages: Arcane Revival',
    description: "Unleash the power of ancient magic in 'Mythic Mages: Arcane Revival,' a spellbinding PC game where players take on the role of skilled mages in a world recovering from a magical apocalypse. Explore mystical realms, master arcane spells, and restore balance to a world on the brink of mystical chaos.",
    stars: 4.7,
    image: card8,
    tags: ['Magical Apocalypse', 'Arcane Spells', 'PC Game', 'Fantasy', 'Adventure'],
    yearReleased: 2025,
    gameEngine: 'Unreal Engine',
    platforms: [mobile],
    type: 'Fantasy Adventure',
}

const ninthGame: cardI = {
    id: 9,
    title: 'Neon Velocity',
    description: "Race through futuristic cityscapes in 'Neon Velocity,' a high-speed racing PC game that combines adrenaline-pumping action with sleek neon aesthetics. Customize your hyper-velocity vehicle, compete in intense races, and dominate the neon-lit tracks in a quest to become the ultimate champion.",
    stars: 4.6,
    image: card9,
    tags: ['Futuristic Racing', 'Neon Aesthetics', 'PC Game', 'Action', 'Racing'],
    yearReleased: 2024,
    gameEngine: 'Unity',
    platforms: [ps, xbox],
    type: 'Racing Game',
}


export const cardsArray:cardsType = [
    firstGame,
    secondGame,
    thirdGame,
    fourthGame,
    fifthGame,
    sixthGame,
    seventhGame,
    eighthGame,
    ninthGame
]





const Minks:cityI = {
    name: "Minks",
    description: 'Minsk, the capital city of Belarus, is a harmonious blend of rich history, vibrant culture, and modern aspirations. Nestled along the banks of the Svislach River, Minsk is a city that gracefully straddles its past and present.',
    image: MinksImage,
    left: "left-[55%] sm:left-[55%] lg:left-[55%]",
    top: 'top-[30%] sm:top-[32%] lg:top-[34%]'
}

const Warsaw:cityI = {
    name: 'Warsaw',
    description: 'Warsaw, the capital city of Poland, is a dynamic metropolis that weaves together a tapestry of history, resilience, and contemporary vibrancy.',
    image: WarsawImage,
    left: 'left-[52%]',
    top: 'top-[31%] sm:top-[33%] lg:top-[35%]'
}

const Paris: cityI = {
    name: 'Paris',
    description: 'Paris, often referred to as the "City of Light" (La Ville Lumière), is a timeless and enchanting capital that stands as an iconic symbol of romance, culture, and artistic expression.',
    image: ParisImage,
    left: 'left-[48%]',
    top: 'top-[32%] sm:top-[34%] lg:top-[36%]'
}

const Berlin: cityI = {
    name: 'Berlin',
    description: 'Berlin, the vibrant capital of Germany, is a city that pulsates with history, creativity, and a modern, cosmopolitan spirit. Shaped by a tumultuous past, Berlin has emerged as a symbol of resilience, innovation, and a thriving cultural scene.',
    image: BerlinImage,
    left: 'left-[50%]',
    top: 'top-[31%] sm:top-[33%] lg:top-[35%]'
}

const Washington: cityI = {
    name: 'Washington',
    description: 'Washington, D.C., the capital of the United States, is a city steeped in history, political significance, and cultural richness.',
    image: WashingtonImage,
    left: 'left-[28%]',
    top: 'top-[33%] sm:top-[35%] lg:top-[37%]'
}

const LasVegas: cityI = {
    name: 'LasVegas',
    description: 'Las Vegas, often referred to as the "Entertainment Capital of the World" or "Sin City," is a dazzling oasis in the Nevada desert known for its vibrant nightlife, world-renowned entertainment, and iconic casino resorts.',
    image: LasVegasImage,
    left: 'left-[17%]',
    top: 'top-[35%] sm:top-[37%] lg:top-[39%]'
}

export const allCities: citiesType = [Minks, Warsaw, Paris, Berlin, Washington, LasVegas]





const job1: jobI = {
    id: 1,
    position: 'Senior HR Business Partner',
    location: 'Warszawa / Poland',
    type: 'Full-time'
};

const job2: jobI = {
    id: 2,
    position: 'Software Engineer',
    location: 'San Francisco, CA, USA',
    type: 'Permanent'
};

const job3: jobI = {
    id: 3,
    position: 'Marketing Specialist',
    location: 'London, UK',
    type: 'Contract'
};

const job4: jobI = {
    id: 4,
    position: 'Data Scientist',
    location: 'Berlin, Germany',
    type: 'Part-time'
};

const job5: jobI = {
    id: 5,
    position: 'Product Manager',
    location: 'New York, NY, USA',
    type: 'Remote'
};

const job6: jobI = {
    id: 6,
    position: 'Financial Analyst',
    location: 'Tokyo, Japan',
    type: 'Full-time'
};

const job7: jobI = {
    id: 7,
    position: 'Customer Support Representative',
    location: 'Sydney, Australia',
    type: 'Permanent'
};

const job8: jobI = {
    id: 8,
    position: 'UX/UI Designer',
    location: 'Toronto, Canada',
    type: 'Contract'
};

const job9: jobI = {
    id: 9,
    position: 'Sales Executive',
    location: 'Mumbai, India',
    type: 'Full-time'
};

const job10: jobI = {
    id: 10,
    position: 'IT Support Specialist',
    location: 'Cape Town, South Africa',
    type: 'Remote'
};

export const allJobs = [job1, job2, job3, job4, job5, job6, job7, job8, job9, job10]








const news1: newsI = {
    id: 1,
    date: "oct 01",
    year: 2023,
    read: 2,
    images: [news1_1],
    title: "NovaPlus Unveils Next-Gen Game Engine",
    subtitle: "Revolutionizing gaming with cutting-edge technology.",
    body: "NovaPlus is thrilled to introduce its latest and most advanced game engine to date, marking a significant leap forward in the world of interactive entertainment. This groundbreaking engine, meticulously crafted by our team of seasoned developers, is set to redefine the gaming experience by delivering unparalleled graphics, realistic physics, and a level of immersion that transcends the boundaries of imagination.\n\nWith a focus on empowering developers, our new game engine offers a suite of tools that streamline the development process, allowing creators to bring their visions to life with unprecedented ease. Whether you're a veteran game developer or just starting your journey, NovaPlus is committed to providing you with the tools and support you need to push the boundaries of creativity.\n\nAs we celebrate this milestone, we extend our gratitude to the gaming community for their continuous support. NovaPlus remains dedicated to pushing the envelope, and we can't wait to see the incredible experiences that developers around the world will create with our next-gen game engine.",
    tags: ["Game Engine", "Innovation", "Developer Tools"]
};

const news2: newsI = {
    id: 2,
    date: "june 10",
    year: 2024,
    read: 3,
    images: [news2_1],
    title: "NovaPlus Hosts Global Game Developers Conference",
    subtitle: "Bringing industry leaders together for innovation and collaboration.",
    body: "NovaPlus, a trailblazer in the game development industry, recently played host to a global conference that brought together visionaries, innovators, and industry leaders from around the world. The event, which spanned three days of intense discussions and knowledge sharing, showcased NovaPlus's commitment to fostering collaboration and driving innovation in the gaming ecosystem.\n\nThe Global Game Developers Conference provided a platform for developers, artists, and industry experts to exchange ideas, showcase their latest projects, and explore the future of gaming. Attendees had the opportunity to participate in workshops led by industry veterans, attend insightful panels on emerging trends, and engage in networking sessions that facilitated valuable connections.\n\nNovaPlus takes pride in supporting the global game development community, and events like these underscore our dedication to pushing the boundaries of what is possible in the ever-evolving landscape of interactive entertainment.",
    tags: ["Game Developers Conference", "Innovation", "Collaboration"]
};

const news3: newsI = {
    id: 3,
    date: "june 14",
    year: 2024,
    read: 5,
    images: [news3_1],
    title: "NovaPlus Sponsors International eSports Championship",
    subtitle: "Supporting the rise of competitive gaming on the world stage.",
    body: "NovaPlus, a steadfast advocate for the gaming community, is excited to announce its sponsorship of the upcoming International eSports Championship. As the popularity of competitive gaming continues to soar, NovaPlus recognizes the importance of supporting events that showcase the skill, dedication, and passion of eSports athletes on the global stage.\n\nThe championship will feature top players and teams from around the world competing in intense battles across various gaming genres. NovaPlus's commitment to fostering the growth of eSports aligns with our belief in the power of gaming to unite people and communities. By sponsoring this prestigious event, NovaPlus aims to contribute to the elevation of competitive gaming, offering players a platform to shine and inspiring the next generation of eSports enthusiasts.\n\nStay tuned for an electrifying championship that promises thrilling moments, fierce competition, and the celebration of eSports excellence.",
    tags: ["eSports", "Championship", "Gaming Community"]
};

const news4: newsI = {
    id: 4,
    date: "febr 09",
    year: 2024,
    read: 2,
    images: [news4_1],
    title: "NovaPlus Teases Exciting New Game Title",
    subtitle: "Get ready for an adrenaline-pumping adventure!",
    body: "NovaPlus is thrilled to offer gamers a sneak peek into the development of our upcoming title, set to redefine the gaming landscape. This highly anticipated game promises an immersive narrative, stunning visuals, and gameplay mechanics that will keep players on the edge of their seats. Stay tuned for the official reveal, as we prepare to unveil a gaming experience like no other.",
    tags: ["Game Teaser", "Upcoming Title", "Adventure"]
};

const news5: newsI = {
    id: 5,
    date: "febr 23",
    year: 2024,
    read: 2,
    images: [news5_1],
    title: "NovaPlus Community Extravaganza",
    subtitle: "Celebrating our vibrant gaming community!",
    body: "Join NovaPlus in a week-long celebration dedicated to our incredible gaming community. From exclusive in-game events and challenges to live-streamed Q&A sessions with our developers, this extravaganza is our way of expressing gratitude to the passionate players who make NovaPlus games truly special. Get ready for surprises, giveaways, and a whole lot of fun – because at NovaPlus, the community is at the heart of everything we do!",
    tags: ["Community Event", "Celebration", "Gaming Community"]
};

const news6: newsI = {
    id: 6,
    date: "march 17",
    year: 2024,
    read: 4,
    images: [news6_1],
    title: "NovaPlus Welcomes New Talent to the Team",
    subtitle: "Expanding our creative force for future success.",
    body: "NovaPlus is excited to announce the addition of talented individuals to our growing team of game developers, designers, and innovators. These new hires bring a wealth of experience and fresh perspectives, contributing to NovaPlus's commitment to excellence. As we continue to push the boundaries of gaming, we're thrilled to have these exceptional individuals on board, each playing a crucial role in shaping the future of NovaPlus.",
    tags: ["New Hires", "Team Expansion", "Game Development"]
};

const news7: newsI = {
    id: 7,
    date: "march 30",
    year: 2024,
    read: 5,
    images: [news7_1],
    title: "NovaPlus Receives Industry Recognition",
    subtitle: "Acknowledging excellence in game development.",
    body: "NovaPlus proudly accepts industry recognition for its outstanding contributions to game development. This prestigious award acknowledges NovaPlus's commitment to innovation, creativity, and pushing the boundaries of what's possible in the gaming industry. We extend our gratitude to our dedicated team, passionate community, and industry partners for their continuous support in making NovaPlus a leader in the world of interactive entertainment.",
    tags: ["Industry Recognition", "Game Development", "Innovation"]
};

const news8: newsI = {
    id: 8,
    date: "apr 03",
    year: 2024,
    read: 6,
    images: [news8_1],
    title: "NovaPlus Unleashes Major Game Update",
    subtitle: "Enhancements, features, and surprises await!",
    body: "Hold on to your controllers! NovaPlus is excited to roll out a major update for one of our flagship games. This update brings a host of new features, gameplay enhancements, and surprises that will delight players and keep them engaged for hours on end. Dive into the immersive world of NovaPlus games and experience the thrill of our latest update – because the adventure is just getting started!",
    tags: ["Game Update", "Enhancements", "Gaming Experience"]
};

const news9: newsI = {
    id: 9,
    date: "apr 20",
    year: 2024,
    read: 1,
    images: [news9_1],
    title: "NovaPlus Listens to Community Feedback",
    subtitle: "Your voice shapes the future of our games.",
    body: "At NovaPlus, we believe in the power of community feedback. Our team has been diligently reviewing player suggestions and incorporating valuable insights into our game development process. Your passion drives us to create better, more engaging experiences. Keep the feedback coming – together, we'll continue to shape the future of NovaPlus games!",
    tags: ["Community Feedback", "Player Suggestions", "Game Development"]
};

const news10: newsI = {
    id: 10,
    date: "may 08",
    year: 2024,
    read: 3,
    images: [news10_1],
    title: "NovaPlus Rings in the New Year with Festive In-Game Events",
    subtitle: "Celebrate the season with special in-game festivities.",
    body: "As we welcome the new year, NovaPlus invites players to join us in festive in-game events and activities. From exclusive holiday-themed items to special challenges with exciting rewards, there's plenty to enjoy. May the new year bring joy, adventure, and countless memorable gaming moments. Happy gaming from the NovaPlus family!",
    tags: ["In-Game Events", "Festive Celebrations", "New Year"]
};

export const allUniqueNewsTags:Array<string> = ["Game Engine","New Year","Player Suggestions","Game Developers Conference","Enhancements","Innovation","Festive Celebrations","Gaming Community","Game Teaser","Upcoming Title","Adventure","Community Event","Celebration","New Hires","Team Expansion","Game Development",]

export const allNews: allNewsType = [news1, news2, news3, news4, news5, news6, news7, news8, news9, news10]



export const wholeTeam: teamType = [
    { id: 1, name: "Alice Smith", position: "Lead Developer", image:avatar1 },
    { id: 2, name: "Bob Johnson", position: "UI/UX Designer", image:avatar2 },
    { id: 3, name: "Charlie Williams", position: "Backend Developer", image:avatar3 },
    { id: 4, name: "Diana Brown", position: "QA Tester", image:avatar4 },
];





export const allSponsors: sponsorsType = [
    { id: 1, name: "TechCo", image: techco },
    { id: 2, name: "Microsoft", image: microsoft },
    { id: 3, name: "FutureTech", image: futureTech },
    { id: 4, name: "DigitalDynamics", image: digitalDinamics },
    { id: 5, name: "MegaSolutions", image: megaSolutions },
    { id: 6, name: "GlobalTech", image: globalTech },
    { id: 7, name: "Facebook", image: facebook },
    { id: 8, name: "Apple", image: apple },
    { id: 9, name: "StarSolutions", image: startSolutions },
    { id: 10, name: "Unity", image: unity },
    { id: 11, name: "Adobe", image: adobe },
    { id: 12, name: "Amazon", image: amazon },
    { id: 13, name: "Netflix", image: netflix },
    { id: 14, name: "QuantumTech", image: quantumTech },
    { id: 15, name: "Cisco", image: cisco },
  ];