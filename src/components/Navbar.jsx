import { useState } from 'react';
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import Button1 from './LogInBtn';
import Button2 from './SignUp';

const Navbar = () => {
  const [toggole, setToggole] = useState(false);
  return (
    <nav className='flex py-6 items-center '>
      <h1 className=' font-normal web-font cursor-pointer text-[40px] text-white'>Pundit</h1>
      <div className='list-none sm:flex hidden justify-end items-center flex-1'>
        <ul className='list-none sm:flex loading="lazy'>
          {
            navLinks.map((nav, key) => (
              <li key={key} className={` font-poppins font-normal cursor-pointer text-[18px] text-white hover:text-secondary ${key === navLinks.length ? 'ml-0' : 'mr-10'} text-white`}>
                <a className='sm:flex hidden' href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
          }    
        </ul>
      </div>
      <div className='sm:hidden mm:hidden flex flex-1 justify-end items-center'>
        <img src={toggole ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain'
        onClick={() => setToggole((prev) => !prev)}
        />

        <div className={`${toggole ? 'flex' : 'hidden'} flex flex-col p-[50px] bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] rounded-xl sidebar`}>
          <ul className='list-none justify-center items-center flex-1'>
            {
              navLinks.map((nav, key) => (
                <li key={key} className={`font-poppins font-normal cursor-pointer text-[20px] ${key === navLinks.length ? 'mb-0' : 'mb-4'} text-white`}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))
            }
          </ul>
          <div className='flex flex-col relative left-[-20px] top-[-10px] '>
            <Button1 styles="relative left-[18px] top-[25px]" />
            <Button2 styles="rounded-xl relative left-[20px] top-[20px]" />
          </div> 
        </div>
      </div>

      
    </nav>
  )
}

export default Navbar;