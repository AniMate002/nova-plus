import { cardI, cardsType } from "./modalCardReducer";
import card1 from '../images/cards/card1.jpg'
import card2 from '../images/cards/card2.jpg'
import card3 from '../images/cards/card3.jpg'
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





const firstCard: cardI = {
    id: 1,
    title: 'Apex Vanguard',
    description: "Gear up for a high-octane, futuristic experience in 'Apex Vanguard,' an adrenaline-fueled PC game that catapults players into a relentless world of advanced technology, ruthless corporations, and intense combat. As an elite Vanguard operative, you are the last line of defense against a looming cybernetic threat. It's time to prove your mettle in the apex of warfare.",
    stars: 4.5,
    image: card1,
}


const secondCard: cardI = {
    id: 2,
    title: 'Starlight Seraph',
    description: "Prepare to soar among the cosmos in 'Starlight Seraph,' a mesmerizing PC game that propels players into an interstellar odyssey filled with cosmic wonders and celestial challenges. As the chosen Seraph, your destiny unfolds across the vastness of space, blending futuristic technology with the enchantment of the stars.",
    stars: 4.7,
    image: card2,
}

const thirdCard: cardI = {
    id: 3,
    title: 'Celestial Citadel',
    description: "Embark on an otherworldly journey in 'Celestial Citadel,' a breathtaking PC game that transports players to the mystical realm of an ancient celestial city suspended among the stars. As a courageous adventurer, you find yourself drawn to the enigmatic Citadel, a place where the boundaries between magic and technology blur, and the secrets of the universe unfold.",
    stars: 4.2,
    image: card3,
}


export const cardsArray:cardsType = [
    firstCard,
    secondCard,
    thirdCard
]





const Minks:cityI = {
    name: "Minks",
    description: 'Minsk, the capital city of Belarus, is a harmonious blend of rich history, vibrant culture, and modern aspirations. Nestled along the banks of the Svislach River, Minsk is a city that gracefully straddles its past and present.',
    image: MinksImage,
    left: "left-[55%]",
    top: 'top-[34%]'
}

const Warsaw:cityI = {
    name: 'Warsaw',
    description: 'Warsaw, the capital city of Poland, is a dynamic metropolis that weaves together a tapestry of history, resilience, and contemporary vibrancy.',
    image: WarsawImage,
    left: 'left-[52%]',
    top: 'top-[35%]'
}

const Paris: cityI = {
    name: 'Paris',
    description: 'Paris, often referred to as the "City of Light" (La Ville Lumière), is a timeless and enchanting capital that stands as an iconic symbol of romance, culture, and artistic expression.',
    image: ParisImage,
    left: 'left-[48%]',
    top: 'top-[36%]'
}

const Berlin: cityI = {
    name: 'Berlin',
    description: 'Berlin, the vibrant capital of Germany, is a city that pulsates with history, creativity, and a modern, cosmopolitan spirit. Shaped by a tumultuous past, Berlin has emerged as a symbol of resilience, innovation, and a thriving cultural scene.',
    image: BerlinImage,
    left: 'left-[50%]',
    top: 'top-[35%]'
}

const Washington: cityI = {
    name: 'Washington',
    description: 'Washington, D.C., the capital of the United States, is a city steeped in history, political significance, and cultural richness.',
    image: WashingtonImage,
    left: 'left-[28%]',
    top: 'top-[37%]'
}

const LasVegas: cityI = {
    name: 'LasVegas',
    description: 'Las Vegas, often referred to as the "Entertainment Capital of the World" or "Sin City," is a dazzling oasis in the Nevada desert known for its vibrant nightlife, world-renowned entertainment, and iconic casino resorts.',
    image: LasVegasImage,
    left: 'left-[17%]',
    top: 'top-[39%]'
}

export const allCities: citiesType = [Minks, Warsaw, Paris, Berlin, Washington, LasVegas]





const job1: jobI = {
    position: 'Senior HR Business Partner',
    location: 'Warszawa / Poland',
    type: 'Full-time'
};

const job2: jobI = {
    position: 'Software Engineer',
    location: 'San Francisco, CA, USA',
    type: 'Permanent'
};

const job3: jobI = {
    position: 'Marketing Specialist',
    location: 'London, UK',
    type: 'Contract'
};

const job4: jobI = {
    position: 'Data Scientist',
    location: 'Berlin, Germany',
    type: 'Part-time'
};

const job5: jobI = {
    position: 'Product Manager',
    location: 'New York, NY, USA',
    type: 'Remote'
};

const job6: jobI = {
    position: 'Financial Analyst',
    location: 'Tokyo, Japan',
    type: 'Full-time'
};

const job7: jobI = {
    position: 'Customer Support Representative',
    location: 'Sydney, Australia',
    type: 'Permanent'
};

const job8: jobI = {
    position: 'UX/UI Designer',
    location: 'Toronto, Canada',
    type: 'Contract'
};

const job9: jobI = {
    position: 'Sales Executive',
    location: 'Mumbai, India',
    type: 'Full-time'
};

const job10: jobI = {
    position: 'IT Support Specialist',
    location: 'Cape Town, South Africa',
    type: 'Remote'
};

export const allJobs = [job1, job2, job3, job4, job5, job6, job7, job8, job9, job10]









const news1: newsI = {
    date: "oct 01",
    year: 2023,
    read: 2,
    images: [news1_1],
    title: "NovaPlus Unveils Next-Gen Game Engine",
    subtitle: "Revolutionizing gaming with cutting-edge technology.",
    body: "NovaPlus is thrilled to introduce its latest and most advanced game engine to date, marking a significant leap forward in the world of interactive entertainment. This groundbreaking engine, meticulously crafted by our team of seasoned developers, is set to redefine the gaming experience by delivering unparalleled graphics, realistic physics, and a level of immersion that transcends the boundaries of imagination.\n\nWith a focus on empowering developers, our new game engine offers a suite of tools that streamline the development process, allowing creators to bring their visions to life with unprecedented ease. Whether you're a veteran game developer or just starting your journey, NovaPlus is committed to providing you with the tools and support you need to push the boundaries of creativity.\n\nAs we celebrate this milestone, we extend our gratitude to the gaming community for their continuous support. NovaPlus remains dedicated to pushing the envelope, and we can't wait to see the incredible experiences that developers around the world will create with our next-gen game engine."
};

const news2: newsI = {
    date: "june 10",
    year: 2024,
    read: 3,
    images: [news2_1],
    title: "NovaPlus Hosts Global Game Developers Conference",
    subtitle: "Bringing industry leaders together for innovation and collaboration.",
    body: "NovaPlus, a trailblazer in the game development industry, recently played host to a global conference that brought together visionaries, innovators, and industry leaders from around the world. The event, which spanned three days of intense discussions and knowledge sharing, showcased NovaPlus's commitment to fostering collaboration and driving innovation in the gaming ecosystem.\n\nThe Global Game Developers Conference provided a platform for developers, artists, and industry experts to exchange ideas, showcase their latest projects, and explore the future of gaming. Attendees had the opportunity to participate in workshops led by industry veterans, attend insightful panels on emerging trends, and engage in networking sessions that facilitated valuable connections.\n\nNovaPlus takes pride in supporting the global game development community, and events like these underscore our dedication to pushing the boundaries of what is possible in the ever-evolving landscape of interactive entertainment."
};

const news3: newsI = {
    date: "june 14",
    year: 2024,
    read: 5,
    images: [news3_1],
    title: "NovaPlus Sponsors International eSports Championship",
    subtitle: "Supporting the rise of competitive gaming on the world stage.",
    body: "NovaPlus, a steadfast advocate for the gaming community, is excited to announce its sponsorship of the upcoming International eSports Championship. As the popularity of competitive gaming continues to soar, NovaPlus recognizes the importance of supporting events that showcase the skill, dedication, and passion of eSports athletes on the global stage.\n\nThe championship will feature top players and teams from around the world competing in intense battles across various gaming genres. NovaPlus's commitment to fostering the growth of eSports aligns with our belief in the power of gaming to unite people and communities. By sponsoring this prestigious event, NovaPlus aims to contribute to the elevation of competitive gaming, offering players a platform to shine and inspiring the next generation of eSports enthusiasts.\n\nStay tuned for an electrifying championship that promises thrilling moments, fierce competition, and the celebration of eSports excellence."
};



const news4: newsI = {
    date: "febr 09",
    year: 2024,
    read: 2,
    images: [news4_1],
    title: "NovaPlus Teases Exciting New Game Title",
    subtitle: "Get ready for an adrenaline-pumping adventure!",
    body: "NovaPlus is thrilled to offer gamers a sneak peek into the development of our upcoming title, set to redefine the gaming landscape. This highly anticipated game promises an immersive narrative, stunning visuals, and gameplay mechanics that will keep players on the edge of their seats. Stay tuned for the official reveal, as we prepare to unveil a gaming experience like no other."
};

const news5: newsI = {
    date: "febr 23",
    year: 2024,
    read: 2,
    images: [news5_1],
    title: "NovaPlus Community Extravaganza",
    subtitle: "Celebrating our vibrant gaming community!",
    body: "Join NovaPlus in a week-long celebration dedicated to our incredible gaming community. From exclusive in-game events and challenges to live-streamed Q&A sessions with our developers, this extravaganza is our way of expressing gratitude to the passionate players who make NovaPlus games truly special. Get ready for surprises, giveaways, and a whole lot of fun – because at NovaPlus, the community is at the heart of everything we do!"
};

const news6: newsI = {
    date: "march 17",
    year: 2024,
    read: 4,
    images: [news6_1],
    title: "NovaPlus Welcomes New Talent to the Team",
    subtitle: "Expanding our creative force for future success.",
    body: "NovaPlus is excited to announce the addition of talented individuals to our growing team of game developers, designers, and innovators. These new hires bring a wealth of experience and fresh perspectives, contributing to NovaPlus's commitment to excellence. As we continue to push the boundaries of gaming, we're thrilled to have these exceptional individuals on board, each playing a crucial role in shaping the future of NovaPlus."
};

const news7: newsI = {
    date: "march 30",
    year: 2024,
    read: 5,
    images: [news7_1],
    title: "NovaPlus Receives Industry Recognition",
    subtitle: "Acknowledging excellence in game development.",
    body: "NovaPlus proudly accepts industry recognition for its outstanding contributions to game development. This prestigious award acknowledges NovaPlus's commitment to innovation, creativity, and pushing the boundaries of what's possible in the gaming industry. We extend our gratitude to our dedicated team, passionate community, and industry partners for their continuous support in making NovaPlus a leader in the world of interactive entertainment."
};

const news8: newsI = {
    date: "apr 03",
    year: 2024,
    read: 6,
    images: [news8_1],
    title: "NovaPlus Unleashes Major Game Update",
    subtitle: "Enhancements, features, and surprises await!",
    body: "Hold on to your controllers! NovaPlus is excited to roll out a major update for one of our flagship games. This update brings a host of new features, gameplay enhancements, and surprises that will delight players and keep them engaged for hours on end. Dive into the immersive world of NovaPlus games and experience the thrill of our latest update – because the adventure is just getting started!"
};

const news9: newsI = {
    date: "apr 20",
    year: 2024,
    read: 1,
    images: [news9_1],
    title: "NovaPlus Listens to Community Feedback",
    subtitle: "Your voice shapes the future of our games.",
    body: "At NovaPlus, we believe in the power of community feedback. Our team has been diligently reviewing player suggestions and incorporating valuable insights into our game development process. Your passion drives us to create better, more engaging experiences. Keep the feedback coming – together, we'll continue to shape the future of NovaPlus games!"
};

const news10: newsI = {
    date: "may 08",
    year: 2024,
    read: 3,
    images: [news10_1],
    title: "NovaPlus Rings in the New Year with Festive In-Game Events",
    subtitle: "Celebrate the season with special in-game festivities.",
    body: "As we welcome the new year, NovaPlus invites players to join us in festive in-game events and activities. From exclusive holiday-themed items to special challenges with exciting rewards, there's plenty to enjoy. May the new year bring joy, adventure, and countless memorable gaming moments. Happy gaming from the NovaPlus family!"
};


export const allNews: allNewsType = [news1, news2, news3, news4, news5, news6, news7, news8, news9, news10]