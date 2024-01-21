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