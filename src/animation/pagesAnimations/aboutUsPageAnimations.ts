import { gsap } from "gsap";

const markers: boolean | ScrollTrigger.MarkersVars | undefined = {
    startColor: 'white',
    endColor: 'white'
}

export const createOverviewTitleAnimation = () => {
    return gsap.timeline({
        scrollTrigger:{
            trigger:'.overview--title--trigger',
            // scrub: true,
            start: 'top 70%',
            end: 'bottom center',
        }
    })
}

export const createOverviewImageAnimation = (imageNumber: number) => {
    return gsap.timeline({
        scrollTrigger:{
            trigger: `.overview--${imageNumber}--image--trigger`,
            start: 'top 50%',
            end: 'center bottom',

        }
    })
}

export const createOverviewTextAnimation = (textNumber: number) => {
    return gsap.timeline({
        scrollTrigger:{
            trigger: `.overview--${textNumber}--text--trigger`,
            start: 'top 70%',
            end: 'bottom center'
        }
    })
}

function addAnimationsToOverviewImages(){
    const overviewTitleTimeline = createOverviewTitleAnimation()
    overviewTitleTimeline.to('.overview--title--trigger', {
        opacity: 1,
        duration: 1
    })

    const overviewImage1Timeline = createOverviewImageAnimation(1)
    overviewImage1Timeline.to('.overview--1--image--trigger', {
        opacity: 1,
        left: 0,
    })
    overviewImage1Timeline.to('.overview--2--image--trigger', {
        opacity: 1,
        left: 0,
        bottom: 'auto',
        top: 0
    })
    const overviewText1Timeline = createOverviewTextAnimation(1)
    overviewText1Timeline.to('.overview--1--text--trigger', {
        opacity: 1,
    })


    const overviewImage3Timeline = createOverviewImageAnimation(3)
    overviewImage3Timeline.to('.overview--3--image--trigger', {
        opacity: 1,
        right: 0,
    })
    overviewImage3Timeline.to('.overview--4--image--trigger', {
        opacity: 1,
        left: 0,
        bottom: 'auto',
        top: 0
    })
    const overviewText2Timeline = createOverviewTextAnimation(2)
    overviewText2Timeline.to('.overview--2--text--trigger', {
        opacity: 1,
    })
}

const createOverviewGamesAnimation = () => {
    return gsap.timeline({
        scrollTrigger:{
            trigger: '.overview--games--trigger',
            start: 'top 50%',
            end: 'center bottom',
            markers
        }
    })
}

function addAnimationsOverviewGames(){
    const overviewGamesTimeline = createOverviewGamesAnimation()
    overviewGamesTimeline.to('.overview--images--list--trigger', {
        opacity: 1,
        right: 0
    })
    overviewGamesTimeline.to('.overview--games--list--trigger', {
        opacity: 1,
        left: 0
    })
}


export function addAnimationsToAboutUs(){
    addAnimationsToOverviewImages()
    addAnimationsOverviewGames()
}