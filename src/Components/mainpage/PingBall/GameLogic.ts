
const startJumb = 'start--jump'
const thornClass = 'move--thorn'


export function makeThornMove(thorn: HTMLDivElement): void {
    if(!thorn.classList.contains(thornClass)){
        thorn.classList.add(thornClass)
    }
}

export function jump(cube: HTMLDivElement): void {
    if(!cube.classList.contains(startJumb)){
        cube.classList.add(startJumb)
    }
    setTimeout(() => {
            cube.classList.remove(startJumb)
    }, 400)
    console.log(cube)
}

export function checkPositons(cube:HTMLDivElement, thorn: HTMLDivElement, givingPoints: NodeJS.Timer, setAliveCube: (alive:boolean) => void): void{
    const dinoTop = parseInt(window.getComputedStyle(cube).getPropertyValue('top'))
    const thornLeft = parseInt(window.getComputedStyle(thorn).getPropertyValue('left'))
    if(thornLeft <= 180 && thornLeft >= 100 && dinoTop >= 660){
        // alert("left: " + thornLeft + " top: " + dinoTop + "You Lost!!!")
        stopGame(cube, thorn, givingPoints, setAliveCube)
    }
}

export function stopGame(cube:HTMLDivElement, thorn: HTMLDivElement, givingPoints: NodeJS.Timer, setAliveCube: (alive:boolean) => void): void{
    cube.classList.remove(startJumb)
    thorn.classList.remove('move--thorn')
    clearInterval(givingPoints)
    setAliveCube(false)
}

export function givePoints(points: number, setPoints: React.Dispatch<React.SetStateAction<number>>) {
    return setInterval(() => {
        setPoints((prev: number) => prev + 1);
    }, 100);
}


export function changeSpeed(thorn: HTMLDivElement, points: number): void{
    if(points <= 100){
        thorn.style.animationDuration = '2s'
    }
    if(points > 100 && points <= 200){
        thorn.style.animationDuration = '1s'
    }
    if(points > 200 && points <= 300){
        thorn.style.animationDuration = '0.5s'
    }
    if(points > 300){
        thorn.style.animationDuration = '0.3s'
    }
}


export function removeGivingPoints(timerId: NodeJS.Timer){
    clearInterval(timerId)
}