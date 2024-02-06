import { gsap } from "gsap";



export const showGamesSideBar = () => {
    gsap.to('.games--sidebar', {
        right: 0,
        duration: 0.5
    })
}

export const hideGamesSideBar = () => {
    gsap.to('.games--sidebar', {
        right: '-120%',
        duration: 0.5
    })
}