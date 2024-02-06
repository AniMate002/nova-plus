import { gsap } from "gsap";


export function showGamesAuthModal(){
    gsap.to('.games--auth--modal', {
        scale: 1,
        duration: 0
    })
}



export function hideGamesAuthModal(){
    gsap.to('.games--auth--modal', {
        scale: 0,
        duration: 0
    })
}
