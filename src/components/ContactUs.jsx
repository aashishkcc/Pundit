import styles from "../style";
import GetStarted from "../components/GetStarted";
import { Pic } from "../assets";

const Contactus = () => {
    return (
        <>
            <div id="contact" class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <div class="mx-auto sm:px-1 px-9 py-20 lg:px-20">
                    <div class="mt-8 overflow-hidden">
                        <div class="grid grid-cols-1 md:grid-cols-2 md:space-x-20 space-x-0">
                            <div class="px-10 w-[490px] h-[600px] bg-black/20 sm:rounded-lg rounded-lg flex flex-col justify-center items-start">
                                    <h1 class={`web-font text-[40px] sm:text-[66px] text-white font-extrabold tracking-tight ${styles.heading2}`}>
                                        Get in touch
                                    </h1>
                                    <p class={`text-lg  sm:text-[20px] text-[15px] text-gray-300 ${styles}`}>
                                        We will be very glad to hear from your side. Please email us at any time, We will be glad to help you.

                                    </p>

                                    <div class="flex items-center mt-8 text-gray-300">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-300">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide sm:text-[16px] text-[15px] font-semibold w-40">
                                            Mahalaxmi-01, Imadol, lalitpur,
                                            44705
                                        </div>
                                    </div>

                                    <div class="flex items-center mt-4 text-gray-300">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-300">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                        <div class="ml-4 sm:text-[16px] text-[15px] text-md tracking-wide font-semibold w-40">
                                            +977 9812345678
                                        </div>
                                    </div>
                                    <div class="flex items-center mt-2 text-gray-300">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-300">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide sm:text-[16px] text-[15px] font-semibold w-40">
                                            Pundit123@gmail.com
                                        </div>
                                    </div>
                                </div>
                            <form class="py-6 flex-col justify-center">
                                <div class="flex flex-col">
                                    <label for="name" class="text-white/40 text-[25px]">Full Name</label>
                                    <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-cyan-300 focus:outline-none" />
                                </div>

                                <div class="flex flex-col mt-2">
                                    <label for="email" class="text-white/40 text-[25px]">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-cyan-300 focus:outline-none" />
                                </div>

                                <div class="flex flex-col mt-2">
                                    <label for="message" class="text-white/40 text-[25px]">Message...</label>
                                    <textarea type="message" rows="6"  name="message" id="message" placeholder="Message..." class="w-100 mt-2 py-3 px-3 resize-none rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-cyan-300 focus:outline-none" ></textarea>
                                </div>

                                <button type="submit" class="md:w-40 text-white font-bold py-3sm:rounded-lg rounded-lg mt-3">
                                    <GetStarted />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>    
        </>

    )
}

export default Contactus