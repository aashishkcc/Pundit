import styles from "../style"

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter}  w-[190px] h-[60px] bg-blue-gradient hover:bg-black sm:rounded-lg rounded-lg p-[2px]`}>
      <div className={`${styles.flexCenter} w-[100%] h-[100%] text-white hover:text-black transition-all duration-300`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="web-font font-medium text-[18px] leading-[23px] mr-2 hover:text-black">
            <span className="text-[20px]">Get</span>
          </p>
        </div>
        <p className="web-font font-medium text-[18px] leading-[23px]">
            <span className="text-[20px]">Started</span>
            
          </p>
      </div>
    </div>
  )
}

export default GetStarted