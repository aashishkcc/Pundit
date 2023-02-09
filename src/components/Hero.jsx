import { robot } from '../assets';
import { GetStarted } from '../components';
import styles from '../style';
import Button1 from './Button1';

const Hero = () => {
  // const [toggole, setToggole] = useState(false);
  return (
    <section id="home" className={`flex sm:my-[80px] my-[100px] md:flex-row flex-col sm:flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} my-[200px]  flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" loading='lazy' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center sm:px-6 px-7 w-full">
        <h1 className={`flex-1 web-font font-semibold sm:text-[90px] text-[45px] text-white ss:leading-[90.8px] leading-[50px] ${styles.heading2} `}>
            Empowering Your 
            <span className="text-gradient sm:text-[85px] text-[57px] "> Learning</span>{" "} {" "}Journey !!
          </h1>
          {/* <h2 className='className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full' >
            The Future of Education is Here !
          </h2>          */}
        </div>
        <p className={`${styles.paragraph}  sm:px-6 px-7 max-w-[750px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      <button type="submit" className=" sm:px-6 px-7 ss:flex md:mr-4 mr-0 mt-8">
        <GetStarted />
      </button>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="sm:w-[600px] w-[500px] md:w-[1000px] sm:h-[700px] h-[500px] relative z-[5]" />
      </div>
      
      <button  className='sm:bottom-[100px] bottom-[20px] sm:right-[100px] right-[20px] md:bottom-[100px] md:right-[100px] flex flex-1 fixed z-10 '>
        <Button1 action="./LGN.jsx" type="submit" />
      </button>

    </section>
  )
}

export default Hero