import styles, { layout } from '../style';
import { features } from '../constants';
import FeaturedCard from './FeaturedCard';
import { coding } from '../assets';

const Business2 = () => {
    return (
      <section id='features' className={`w-full ${layout.section}`}>
        <div className={`text-[40px] font-semibold flex flex-1 justify-center items-center`}>
          <img src={coding} alt="Coding pics" className='h-[80%] w-[80%] opacity-[20%]' />
          <div className=' flex flex-col justify-center items-center absolute sm:leading-[75px] leading-[45px] web-font'>
            <h1 className= "sm:text-[60px] text-[35px] text-white">
              Some of our
            </h1>
            <p className='sm:text-[130px] text-[70px] text-white'>Features</p>
          </div>
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
           {
            features.map((feature, key) => (
              <FeaturedCard key={key} {...feature} index={key} />
            ))
           }
        </div>
        
      </section>
    )
  }
  
  export default Business2