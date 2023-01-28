import React, {useState} from 'react';
import {navLinks} from "../constants";
import {close, logo, menu} from '../assets';
import {ethers} from "ethers";


function NavBar() {

    const [toggle, setToggle] = useState(false);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    //wallet connect

    const connectWalletHandler = async () => {
        if (window.ethereum && window.ethereum.isMetaMask) {

            await window.ethereum.request({method: 'eth_requestAccounts'})
                .then(result => {
                    accountChangedHandler(result[0]);
                })
                .catch(error => {
                    console.log(error.message);

                });

        } else {
            window.alert('Need to install MetaMask');

        }
    }

    //set the default account
    const accountChangedHandler = (newAccount) => {

        setDefaultAccount(newAccount);
        getAccountBalance(newAccount.toString());

    }

    //get wallet balance
    const getAccountBalance = (account) => {
        window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
            .then(balance => {
                setUserBalance(parseFloat(ethers.utils.formatEther(balance)).toFixed(4));
            })
            .catch(error => {
                console.log(error.message);
            });

    };

    const chainChangedHandler = () => {
        // reload the page
        window.location.reload();
    }

    window.ethereum.on('accountsChanged', accountChangedHandler);

    window.ethereum.on('chainChanged', chainChangedHandler);


    return (
        <nav className={'w-full flex items-center justify-between py-6  navbar '}>
            <img className={'w-[124px] h-[32px]'} src={logo} alt="logo"/>
            {/*pc navbar*/}
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
            {defaultAccount ? null : <button onClick={connectWalletHandler}
                                             className={"text-white text-sm ml-8 rounded-md border-solid border-2 border-white px-2 sm:flex hidden "}>
                Connect Wallet
            </button>}
            {defaultAccount ?
                <p className="text-white md:text-xs hidden ml-4 ">Address: {defaultAccount}</p> : null}
            {defaultAccount ?
                <p className="text-white md:text-xs text-[1px] ml-2 ">balance: {userBalance}eth</p> : null}

            <div className={"sm:hidden flex flex-1 justify-end items-center"}> {/*手机端显示menu和close图标*/}
                <img src={toggle ? close : menu} alt="menu" className={"w-[28px] h-[28px] object-contain"}
                     onClick={() => setToggle((prev) => !prev)}/>
            </div>


            {/* mobile navbar*/}
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
                {defaultAccount ? null : <button onClick={connectWalletHandler}
                                                 className={`${toggle ? 'flex' : 'hidden'} text-white text-sm rounded-md border-solid border-2 mt-2 border-white md:hidden`}>
                    Connect Wallet</button>}

            </div>

        </nav>
    );
}

export default NavBar;