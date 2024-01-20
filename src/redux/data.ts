import { cardI, cardsType } from "./modalCardReducer";
import card1 from '../images/cards/card1.jpg'
import card2 from '../images/cards/card2.jpg'
import card3 from '../images/cards/card3.jpg'


const firstCard: cardI = {
    id: 1,
    title: 'Apex Vanguard',
    description: "Gear up for a high-octane, futuristic experience in 'Apex Vanguard,' an adrenaline-fueled PC game that catapults players into a relentless world of advanced technology, ruthless corporations, and intense combat. As an elite Vanguard operative, you are the last line of defense against a looming cybernetic threat. It's time to prove your mettle in the apex of warfare.",
    stars: 4,
    image: card1,
}


const secondCard: cardI = {
    id: 2,
    title: 'Starlight Seraph',
    description: "Prepare to soar among the cosmos in 'Starlight Seraph,' a mesmerizing PC game that propels players into an interstellar odyssey filled with cosmic wonders and celestial challenges. As the chosen Seraph, your destiny unfolds across the vastness of space, blending futuristic technology with the enchantment of the stars.",
    stars: 5,
    image: card2,
}

const thirdCard: cardI = {
    id: 3,
    title: 'Celestial Citadel',
    description: "Embark on an otherworldly journey in 'Celestial Citadel,' a breathtaking PC game that transports players to the mystical realm of an ancient celestial city suspended among the stars. As a courageous adventurer, you find yourself drawn to the enigmatic Citadel, a place where the boundaries between magic and technology blur, and the secrets of the universe unfold.",
    stars: 5,
    image: card3,
}


export const cardsArray:cardsType = [
    firstCard,
    secondCard,
    thirdCard
]
