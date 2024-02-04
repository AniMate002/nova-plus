import { gsap } from "gsap";


export function startTransitionAnimation(navigate: (location: string) => void, location: string){
    gsap.to('.transition--overlay',{
        left: 0,
        onComplete: () => {
            navigate(location)
            gsap.to('.transition--overlay', {
                left: '-100%',
                onComplete:() => {
                    gsap.to('.transition--overlay', {
                        duration: 0,
                        left: '100%'
                    })
                }
            })
        }
    })
}


