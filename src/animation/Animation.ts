import { gsap } from "gsap";


export function createGameTimeLine (start: string, end: string, cardNumber: number):gsap.core.Timeline {
    return gsap.timeline({
        scrollTrigger:{
            trigger: '.second--block',
            scrub: true,
            start: `${start}% center`,
            end: `${end}% center`,
            onEnter: () => {
                gsap.to(`.single--card--trigger--${cardNumber}`, {
                    // scale: 1
                    opacity: 1
                })
            },
            onLeaveBack: () => {
                gsap.to(`.single--card--trigger--${cardNumber}`, {
                    // scale: 0
                    opacity: 0
                })
            }
        }
    })
}




export function createWorldMapAnimation(start: string, end: string, mapNumber: number):gsap.core.Timeline{
    return gsap.timeline({
        scrollTrigger: {
            trigger: '.fourth--trigger',
            scrub: true,
            start: `${start}% center`,
            end: `${end}% center`,
            onEnter:() => {
                gsap.to(`.world--map--${mapNumber}`, {
                    scale: 1
                })
            },
            onLeaveBack:() => {
                gsap.to(`.world--map--${mapNumber}`, {
                    scale: 0
                })
            }
        }
    })
}





export function createJobsAnimation(start: string,jobNumber: number):gsap.core.Timeline{
    return gsap.timeline({
        scrollTrigger: {
            trigger: '.fifth-trigger',
            // scrub: true,
            start: `${start}% center`,
            end: `${start} center`,
            // markers: {
            //     startColor: 'white',
            //     endColor: 'white'
            // },
            onEnter:() => {
                gsap.to(`.job--trigger--${jobNumber}`, {
                    left: 0
                })
            },
            // onLeaveBack:() => {
            //     gsap.to(`.job--trigger--${jobNumber}`, {
            //         left: '-200%'
            //     })
            // }
        }
    })
}


export function createNewsAnimation(start: string, newsNumber: number):gsap.core.Timeline{
    return gsap.timeline({
        scrollTrigger: {
            trigger: '.sixth--trigger',
            scrub: true,
            start: `${start}% center`,
            end: `${start} center`,
            markers: {
                startColor: 'white',
                endColor: 'white'
            },
            onEnter:() => {
                gsap.to(`.news--trigger--${newsNumber}`, {
                    opacity: 1
                })
                // alert()
            },
            onLeaveBack:() => {
                gsap.to(`.news--trigger--${newsNumber}`, {
                    opacity: 0
                })
            }
        }
    })
}


