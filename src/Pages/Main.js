import React from 'react';
import {main_cover} from "../assets";
import Typewriter from "./typewriter";


function Main(props) {
    return (
        <div>
            <div className="flex w-full items-center justify-center">
                <div className="flex flex-col items-center justify-center ">
                    <img src={main_cover} alt="main_cover" className="mt-32 "/>
                    <div className="flex flex-row items-center justify-center">
                        <h1 className="  md:text-[40px] text-[25px] mt-8 text-gradient font-bold ">I love my <Typewriter/> pet</h1>
                    </div>

                    <p className="md:text-4xl text-sm text-white md:leading-[50px] leading-4 md:mt-12 mt-4 ">
                        3,333 cutest cats are looking for new owners. Present by Firstdrop Studio (firstdrop.xyz), Sw33t
                        Friends is the very first fully on-chain dynamic NFT on Aptos. Owners can fully customize their
                        cat’s image and dress up. All components are tradable NFT.
                    </p>
                </div>
            </div>
            <div className="flex justify-around items-center text-white ">
                <button
                    className="md:text-3xl text-lg md:mt-20 mt-6 rounded-md border-solid border-2 rounded-full border-white md: px-4 md:py-4 hover:scale-125">Claim
                    Airdrop
                </button>
                <button
                    className="md:text-3xl text-lg md:mt-20 mt-6 rounded-md border-solid border-2 rounded-full border-white md: px-4 md:py-4 hover:scale-125">Go
                    to Editor
                </button>
            </div>
        </div>

    );
}

export default Main;