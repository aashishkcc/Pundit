import styles, { layout } from '../style'
import {code} from '../assets';
import GetStarted from './GetStarted';

const Business = () => {
  return (
    <section id='about' className={`relative px-7 ${layout.section}`}>
      <div className='relative left-[3\200px] my-20'>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>You Write The Code, & It Will Check For You.</h2>
        </div>
          <p className={`${styles.paragraph} sm:w-[100%] w-[100%] mt-8`}>With the right credit card, 
          you can improve your financial life by building credit, earning rewards and saving money. 
          But with hundreds of credit cards on the market.With the right credit card, 
          you can improve your financial life by building credit, earning rewards and saving money. 
          But with hundreds of credit cards on the market.With the right credit card, 
          you can improve your financial life by building credit, earning rewards and saving money. 
          But with hundreds of credit cards on the market.With the right credit card, 
          you can improve your financial life by building credit, earning rewards and saving money. 
          But with hundreds of credit cards on the market.With the right credit card, 
          you can improve your financial life by building credit, earning rewards and saving money. 
          But with hundreds of credit cards on the market.</p>

          <button type='submit' className='sm:mt-5 mt-5'>
          <GetStarted  />
        </button>

          
        </div>

        

      {/* <div className={`flex ${styles.flexCenter} relative md:my-0 my-10 bg-black w-full justify-center align-middle items-center flex-1` }>
        <img src={code} alt='Code-editor-picture' className='w-[100%] h-[100%] relative z-[5]' />
        <h1 className='text-white text-[50px] web-font'>Hello World</h1>
      </div> */}

      <div className={`flex ${styles.flexCenter} md:my-0 my-10relative`}>
        <img src={code} alt="billing" className="sm:w-[500px] md:w-[6000px] sm:h-[600px] relative" />
      </div>
    </section>
  )
}

export default Business