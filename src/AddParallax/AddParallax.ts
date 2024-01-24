export function addParallax():void {
    document.addEventListener('mousemove', parallax);
    function parallax(e: MouseEvent) {
        const els:NodeListOf<HTMLDivElement> = document.querySelectorAll('.fa-solid')
        els.forEach((move: HTMLElement) => {
            let movingValue = Number(move.dataset.parallax) * 4;
            let x = e.clientX / movingValue;
            let y = e.clientY / movingValue;
            // move.style.transform = `translateX(${x}px) translateY(${y}px)`;
            // move.style.transform = 'rotate(' + x/3 + "deg)" + `translateX(${x}px) translateY(${y}px)`
            move.style.transform = `rotate3d(${x}, ${y}, ${x-y}, 30deg)` + `translateX(${x}px)`
        });
    }


}