import { useEffect, useLayoutEffect } from "react";
import MainPage from "./Components/Pages/MainPage";
import Lenis from '@studio-freight/lenis'



const App:React.FC = () => {
    useEffect(() => {
        document.addEventListener('mousemove', parallax);
      }, []);
      
      function parallax(e: MouseEvent) {
        const els:NodeListOf<HTMLDivElement> = document.querySelectorAll('.fa-solid')
        els.forEach((move: HTMLElement) => {
          let movingValue = Number(move.dataset.parallax) * 4;
          let x = e.clientX / movingValue;
          let y = e.clientY / movingValue;
          move.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      }
      
    return (
        <div>
            <MainPage />
        </div>
    );
}
 
export default App;