import { code } from "../assets"
import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => {
  return (
    <section id="Contact" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex md:flex-col flex-col sm:mb-6 mb-[230px] relative z-[1]">
      <h2 className={styles.heading2}>
        Stay In Touch<br className="sm:block hidden" /> With US.
      </h2>
      <p className={`w-[700px] my-7 ${styles.paragraph}`}>
          Let us know about what you think and expect from us. We will be glad to 
          help you in all your difficulties. Feel free to contact us.
        </p>
    </div>

    <div className={` left-[0px] absolute ${styles.paddingY}`}>
      <h1 className="">First Name</h1>

    </div>

    {/* <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div> */}
  </section>
  )
}

export default Testimonials