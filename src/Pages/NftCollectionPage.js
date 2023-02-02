import React, {useEffect, useState} from 'react';
import getNFTsForOwner from "../api/getNFTsForOwner";
import { useSelector} from "react-redux";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NftContainer from "../components/NftContainer";



function NftCollection(props) {

    const defaultAccount = useSelector(state => state.setDefaultAccount.defaultAccount);
    const [nfts,setNfts]=useState([])




    const getNFT = async () => {
        const NftData = await getNFTsForOwner(defaultAccount);
        setNfts(NftData.ownedNfts)
        // console.log(NftData.ownedNfts);
        console.log(defaultAccount)

    }


    useEffect(() => {
            if (defaultAccount) {
                getNFT();
            }
        }
        , [defaultAccount]);


    return (
        <div>
            <NavBar/>
            <NftContainer nfts={nfts}/>
            <Footer/>
        </div>
    );
}

export default NftCollection;