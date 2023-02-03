import React, { useEffect, useState } from 'react'
import getNFTsForOwner from "../api/getNFTsForOwner"
import { useSelector } from "react-redux"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import NftContainer from "../components/NftContainer"
import { setDefaultAccount } from '../store/setDefaultAccount'
import { setState } from '../store/setConnectState'
import { useDispatch } from 'react-redux'
import { setBalance } from '../store/setBalance'
import { ethers } from "ethers"



function NftCollection () {

    const defaultAccount = useSelector(state => state.setDefaultAccount.defaultAccount)
    const [nfts, setNfts] = useState([])
    const dispatch = useDispatch()



    //reload wallet address automatically and display nft
    useEffect(() => {
        window.setInterval(() => {
            try {
                if (window.ethereum && window.ethereum.isMetaMask) {

                    window.ethereum.request({ method: 'eth_requestAccounts' })
                        .then(result => {
                            dispatch(setDefaultAccount(result[0]))
                            dispatch(setState(true))

                        })
                }


            } catch (e) { console.log(e) }

        }, 100)
    }, [])

    useEffect(() => {
        try {
            const account = defaultAccount.toString()
            window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
                .then(balance => {
                    dispatch(setBalance(parseFloat(ethers.utils.formatEther(balance)).toFixed(4)))
                    console.log(balance)
                })
        }
        catch (e) {
            console.log(e)
        }
    }, [defaultAccount]
    )


    const getNFT = async () => {
        const NftData = await getNFTsForOwner(defaultAccount)
        setNfts(NftData.ownedNfts)
        // console.log(NftData.ownedNfts);
        // console.log(defaultAccount)
    }


    useEffect(() => {
        if (defaultAccount) {
            getNFT()
        }
    }, [defaultAccount]
    )


    return (
        <div>
            <NavBar />
            <NftContainer nfts={nfts} />
            <Footer />
        </div>
    )
}

export default NftCollection