import React, {useEffect, useState} from 'react';
import {navLinks} from "../constants";
import {close, logo, menu} from '../assets';
import {ethers} from "ethers";
import GetGas from "../api/getGas.js";


function NavBar() {

    const [toggle, setToggle] = useState(false);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [gasPrice, setGasPrice] = useState(null);
    let Connected = false;


    useEffect(() => {
        //先定时，然后等待getGas()方法拿到gas返回值，再将gas通过setGasPrice写入gasPrice,从而使得下面的gasPrice变量更新
        window.setInterval(() => {
            try {
                const getGas = async () => {
                    const gas = await GetGas();
                    setGasPrice(gas);
                }
                getGas();
            } catch (e) {
                console.log(e)
            }


        }, 50000);
    }, []);


    //wallet connect handler

    const connectWalletHandler = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {

            window.ethereum.request({method: 'eth_requestAccounts'})
                .then(result => {
                    accountChangedHandler(result[0]);
                    Connected = true;
                })
                .catch(error => {
                    console.log(error.message);

                });

        } else {
            window.alert('Need to install MetaMask');

        }
    }

    // set the default account
    const accountChangedHandler = (newAccount) => {

        if (newAccount.length === 0) {
            Connected = false;
            setUserBalance(null);
            console.log('No account connected');
        }
        if (Connected = true) {
            setDefaultAccount(newAccount);
            getAccountBalance(newAccount.toString())
        } else {
            Connected = false;
            setDefaultAccount(null)
            setUserBalance(null);
        }

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

    //chain changed handler
    const chainChangedHandler = (ChainID) => {

        if (ChainID === '0x1') {
            connectWalletHandler();
            accountChangedHandler(defaultAccount)
            const balance = getAccountBalance(defaultAccount);
            setUserBalance(balance)
            console.log('Connected to Mainnet');

        } else {
            setUserBalance(null);
            alert("chain changed,please connect ETH mainnet");
        }

    }

    useEffect(() => {
        window.ethereum.on("chainChanged", chainChangedHandler);

        return () => {
            window.ethereum.removeListener("chainChanged", chainChangedHandler);
        };
    }, []);


    const ChainID = window.ethereum.chainId;


    window.ethereum.on('accountsChanged', accountChangedHandler);//listen for account changes


    return (
        <nav className={'w-full flex items-center justify-between py-6  navbar '}>
            <img className={'md:w-[200px] w-[100px]  md:h-[40px] h-[20px]'} src={logo} alt="logo"/>
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
            <span className="text-white md:text-[1px]  text-sm ml-6">Gas: {parseFloat(gasPrice).toFixed(1)} </span>
            {defaultAccount ? null : <button onClick={connectWalletHandler}
                                             className={"text-white text-sm ml-8 rounded-md border-solid border-2 border-white px-2 sm:flex hidden "}>
                Connect Wallet
            </button>}
            {defaultAccount ?
                <p className=" text-ellipsis overflow-hidden whitespace-nowrap  text-white  text-[1px] ml-4 w-20  ] "> {defaultAccount}</p> : null}
            {defaultAccount && ChainID === "0x1" ?
                <p className="text-white md:text-xs text-[1px] ml-2 "> Balance: {userBalance}</p> : null}

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