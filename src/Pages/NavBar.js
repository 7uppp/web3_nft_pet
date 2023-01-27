import React, {useState} from 'react';
import {navLinks} from "../constants";
import {close, logo, menu} from '../assets';

function NavBar(props) {

    const [toggle, setToggle] = useState(false);

    return (
        <nav className={'w-full flex items-center justify-between py-6  navbar '}>
            <img className={'w-[124px] h-[32px]'} src={logo} alt="logo"/>
            {/*电脑端navbar*/}
            <ul className={'list-none sm:flex hidden justify-end items-center flex-1 text-red'}>
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <button className={"text-white text-sm ml-8 rounded-md border-solid border-2 border-white px-2 sm:flex hidden "}>Connect Wallet</button>



            <div className={"sm:hidden flex flex-1 justify-end items-center"}> {/*手机端显示menu和close图标*/}
                <img src={toggle ? close : menu} alt="menu" className={"w-[28px] h-[28px] object-contain"}
                     onClick={() => setToggle((prev) => !prev)}/>
            </div>


            {/*手机端navbar*/}
            <div
                className={`${toggle ? 'flex-col' : 'hidden'} md:hidden p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className={'list-none flex flex-col justify-end items-center flex-1 '}>
                    {navLinks.map((nav, index) => (
                        <li key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className={`${toggle ? 'flex' : 'hidden'} text-white text-sm rounded-md border-solid border-2 mt-2 border-white md:hidden`}>Connect Wallet</button>
            </div>

        </nav>
    );
}

export default NavBar;