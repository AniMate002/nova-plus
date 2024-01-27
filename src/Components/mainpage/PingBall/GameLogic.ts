
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

export function checkPositons(cube:HTMLDivElement, thorn: HTMLDivElement): boolean{
    const dinoTop = parseInt(window.getComputedStyle(cube).getPropertyValue('top'))
    const thornLeft = parseInt(window.getComputedStyle(thorn).getPropertyValue('left'))
    const calculatedDinoTop = dinoTop / window.innerHeight
    const calculatedThornLeft = thornLeft / window.innerWidth
    console.log(calculatedDinoTop)
    return !(calculatedThornLeft <= 0.125 && calculatedThornLeft >= 0.09 && calculatedDinoTop >= 0.78);
}

export function stopGame(cube:HTMLDivElement, thorn: HTMLDivElement): void{
    cube.classList.remove(startJumb)
    thorn.classList.remove('move--thorn')
}


export function changeSpeed(thorn: HTMLDivElement, points: number): void{
    if(points <= 100){
        thorn.style.animationDuration = '2s'
    }
    if(points > 100 && points <= 200){
        thorn.style.animationDuration = '1s'
    }
    if(points > 200 && points <= 300){
        thorn.style.animationDuration = '0.8s'
    }
    if(points > 300){
        thorn.style.animationDuration = '0.7s'
    }
}


export function removeGivingPoints(timerId: NodeJS.Timer){
    clearInterval(timerId)
}