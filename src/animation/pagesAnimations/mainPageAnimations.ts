import { gsap } from "gsap";
import { createGameTimeLine, createJobsAnimation, createNewsAnimation, createWorldMapAnimation } from "../../animation/Animation";


export function addAnimationsToMainPage(){
    gsap.fromTo('.all--main--page', {
        backgroundColor: '#6733c8'
    }, {
        backgroundColor: '#020617'
    })
    const footerBgChanger = gsap.timeline({
        scrollTrigger:{
            trigger: '.main-explore-trigger',
            scrub: true,
            start: '20% center',
            onEnter: () => {
                if(document.documentElement.scrollTop > 6100)
                    
                    gsap.to('.all--main--page', { duration: 1.0, backgroundColor: '#6733c8'})
                    // alert(document.documentElement.scrollTop)
            },
            onLeaveBack: () => {
                gsap.to('.all--main--page', { duration: 1.0, backgroundColor: '#020617'})
            },
            end: '20% center',
        }
    })

    const weAreChanger = gsap.timeline({
        scrollTrigger:{
            trigger: '.second--block',
            scrub: true,
            start: 'center 60%',
            end: 'center 40%',
            onEnter: () => {
                gsap.to('.we--are--trigger', {
                    opacity: 1,
                    zIndex: 100
                })
            },
            onLeaveBack: () => {
                gsap.to('.we--are--trigger', {
                    opacity: 0,
                    zIndex: 100
                })
            }
        }
    })

    const gamesChanger = createGameTimeLine('60', '60', 1)
    const games2Changer = createGameTimeLine('60', '70', 2)
    const games3Changer = createGameTimeLine('60', '80', 3)

    const worldMapChanger = createWorldMapAnimation('20', '80', 1)
    const worldMap2Changer = createWorldMapAnimation('12', '82', 2)
    const worldMap3Changer = createWorldMapAnimation('18', '82', 3)
    const worldMap4Changer = createWorldMapAnimation('18', '82', 4)
    // const worldMap5Changer = createWorldMapAnimation('18', '82', 5)

    const jobsTimeLine = createJobsAnimation('10', 1)
    const jobs2TimeLine = createJobsAnimation('13', 2)
    const jobs3TimeLine = createJobsAnimation('16', 3)
    const jobs4TimeLine = createJobsAnimation('19', 4)
    const jobs5TimeLine = createJobsAnimation('23', 5)
    const jobs6TimeLine = createJobsAnimation('27', 6)
    const jobs7TimeLine = createJobsAnimation('30', 7)
    const jobs8TimeLine = createJobsAnimation('34', 8)
    const jobs9TimeLine = createJobsAnimation('39', 9)
    const jobs10TimeLine = createJobsAnimation('43', 10)

    const newsTimLine = createNewsAnimation('20', 0)
    for(let i = 1; i < 10; i++){
        createNewsAnimation('30', i)
    }
}