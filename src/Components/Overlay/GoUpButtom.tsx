

const GoUpButton:React.FC = () => {
    function goUp(){
        document.documentElement.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }
    return (
        <div onClick={goUp} className="go--up--button fixed z-50 bottom-0 text-[20px] left-[50%] translate-x-[-50%] opacity-0">
            <button>
                <span className="text-white">go</span>
                <span>up</span>
            </button>
        </div>
    );
}
 
export default GoUpButton;