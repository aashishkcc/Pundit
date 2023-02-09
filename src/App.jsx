import {Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Testimonials } from './components'
import Business2 from './components/Business2'
import Contactus from './components/ContactUs'
import Parallax from './components/Parallax'
import styles from "./style"

const App = () => {
  return (
    <div className="w-full overflow-hidden ">
      <div className={`bg-black/30 fixed w-full z-50 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`web-bg2 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`web-bg3 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
          {/* <Billing /> */}
          <Business2 />
          <Parallax />
          {/* <CardDeal /> */}
           {/* <Testimonials /> */}
          {/* <Clients /> */}
          {/* <CTA /> */}
          <Contactus />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App