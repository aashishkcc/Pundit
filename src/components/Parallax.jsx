import styles from "../style";
import GetStarted from "./GetStarted";

const Parallax = () => { 
    return(
        <section id="features" className=" relative w-[100%]">
            <div className= {`flex flex-col z-10 h-[0px] ${styles.flexCenter} `}>
                    <h1 className={`sm:text-[70px] text-[33px] font-extrabold relative sm:top-[500px] top-[500px] z-10 text-white`}>
                        Make Your <span>Learning </span> 
                    </h1>
                    <p className=" sm:text-[90px] text-[55px] font-extrabold relative sm:top-[480px] top-[460px] sm:leading-[80px] leading-[100px] z-10 text-white">
                        Easy & Fun.
                    </p>
                    <button className={` relative sm:top-[520px] top-[450px] z-10 ${styles.flexCenter}`}>
                        <GetStarted />
                    </button>
                    
            </div>
            <div className="h-[1000px] absolute left-[-400px] bg-pic w-[3000px] bg-fixed opacity-40">

            </div >

            
            
        </section>
    )
}

export default Parallax