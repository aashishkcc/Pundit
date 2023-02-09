import styles from "../style"
import {login} from '../assets';

const Button1 = () => {
    return(
        <div className={`${styles.flexCenter} sm:w-[140px] w-[70px] sm:h-[140px] h-[70px] shadow-lg shadow-cyan-500/50 rounded-full bg-blue-gradient p-[2px] cursor-pointer text-dimWhite hover:text-white`}>
            <div className={`${styles.flexCenter} w-[100%] h-[100%] rounded-full flex justify-center align-middle items-center relative left-[-5px]`}>
                <div className={`${styles.flexStart} flex-row w-[100px]  `} >
                    <img src={login} className="sm:w-[40px] w-[25px] sm:h-[40px] h-[25px] object-contain" alt="" loading='lazy' />
                    <p className="web-font font-medium sm:text-[20px] text-[14px] relative sm:top-[-10px] top-[-6px] ">
                    Log In
                    </p>
                    <p className=" flex sm:text-[25px] text-[17px] sm:absolute absolute  sm:top-[57px] top-[30px] sm:right-[17px] right-[1px]">
                        HERE
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Button1
