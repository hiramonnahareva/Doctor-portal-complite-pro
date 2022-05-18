import image from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinmentBanner = ({date, setDate}) => {
   
  return (
    <div className="hero min-h-screen lg:bg-[url('assets/images/bg.png')] mb-20">
    <div className="hero-content flex-col lg:flex-row-reverse lg:gap-56 justify-between">
    <div className='pb-[64px]'>
    <img src={image} className="w-54 lg:w-[596px] rounded-lg shadow-2xl" alt='assets'/>
   </div>
        <div className='bg-white shadow-lg'>
        <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
    />
        </div>
    </div>
</div>

    );
};

export default AppoinmentBanner;