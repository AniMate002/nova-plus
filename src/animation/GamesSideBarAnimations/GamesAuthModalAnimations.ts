import { gsap } from "gsap";


export function showGamesAuthModal(){
    gsap.to('.games--auth--modal', {
        scale: 1,
    })
}



export function hideGamesAuthModal(){
    gsap.to('.games--auth--modal', {
        scale: 0
    })
}
