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


function createAboutUsExperienceAnimation(triggerClass: string){
    return gsap.timeline({
        scrollTrigger: {
            trigger:`.${triggerClass}`,
            start: 'top 50%',
            end: 'center bottom',
        }  
    })
}

function createAboutUsExperienceLineAnimation(triggerClass: string){
    return gsap.timeline({
        scrollTrigger: {
            trigger:`.${triggerClass}`,
            start: '30% 50%',
            end: 'center bottom',
        }  
    })
}




function addAnimationsExperience(){
    const titleTimeLine = createAboutUsExperienceAnimation('aboutus--experience--title--trigger')
    titleTimeLine.to('.aboutus--experience--title--trigger', {
        opacity: 1
    })
    const textTimeLine = createAboutUsExperienceAnimation('aboutus--experience--text--trigger')
    textTimeLine.to('.aboutus--experience--text--trigger', {
        opacity: 1,
        left: 0
    })

    const starTimeLine = createAboutUsExperienceAnimation('aboutus--experience--star--trigger')
    starTimeLine.to('.aboutus--experience--star--trigger', {
        opacity: 1,
        rotate: '-30deg',
        scale: 1
    })

    const lineTimeLine = createAboutUsExperienceLineAnimation('aboutus--experience--image--trigger')
    lineTimeLine.to('.aboutus--experience--line1--trigger', {
        left: 0,
        opacity: 1
    })
    lineTimeLine.to('.aboutus--experience--line2--trigger', {
        left: 0,
        opacity: 1
    })
    lineTimeLine.to('.aboutus--experience--line3--trigger', {
        left: 0,
        opacity: 1
    })
}

function getTimeLime(triggerClass: string, startMarker: string){
    return gsap.timeline({
        scrollTrigger: {
            trigger: `.${triggerClass}`,
            start: `${startMarker} 50%`,
            end: 'center center',
        }
    })
}


function addAnimationsTeam(){
    const headerTimeLine = getTimeLime('aboutus--team--header--trigger', '-200%')
    headerTimeLine.to('.aboutus--team--header--trigger', {
        opacity: 1
    })
    headerTimeLine.to('.aboutus--team--title--trigger', {
        opacity: 1,
        top: 0
    })

    const textTimeLine = getTimeLime('aboutus--team--text--trigger', 'top')
    textTimeLine.to('.aboutus--team--text--trigger', {
        opacity: 1
    })

    const allAvatarTimeLine = getTimeLime('aboutus--team--allAvatars--trigger', 'top')
    for(let i = 1; i <= 4; i++) {
        allAvatarTimeLine.to(`.aboutus--team--avatar${i}--trigger`,{
            scale: 1
        }).to(`.aboutus--team--avatarText${i}--trigger`, {
            top: 0,
            opacity: 1
        })
    }

}

export function addAnimationsToAboutUs(){
    addAnimationsToOverviewImages()
    addAnimationsOverviewGames()
    addAnimationsExperience()
    addAnimationsTeam()
}