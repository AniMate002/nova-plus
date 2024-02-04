import meeting1 from '../../images/career/meeting1.jpg'
import meeting2 from '../../images/career/meeting2.jpg'
import meeting3 from '../../images/career/meeting3.jpg'





const CareerMeetings:React.FC = () => {
    return (
        <div className="py-20 flex w-full justify-between
        flex-col
        md:flex-row
        ">
            <img src={meeting1} alt={meeting1} className='
            w-full
            md:w-[34%]
            ' />
            <img src={meeting2} alt={meeting2} className='
            w-full
            md:w-[34%]
            ' />
            <img src={meeting3} alt={meeting3} className='
            w-full
            md:w-[34%]
            ' />
        </div>
    );
}
 
export default CareerMeetings;