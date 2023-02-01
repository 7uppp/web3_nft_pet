import React, {useEffect, useState} from 'react';
import getNFTsForOwner from "../api/getNFTsForOwner";
import {useDispatch, useSelector} from "react-redux";
import {setNFT} from "../store/setNFT";

function NftCollection(props) {

    const dispatch = useDispatch();
    const defaultAccount = useSelector(state => state.setDefaultAccount.defaultAccount);
    const nft = useSelector(state => state.setNFT.nft);
    // const [nftPic, setNftPic] = useState(null);

    useEffect(() => {
            const getNFT = async () => {
                const NftData = await getNFTsForOwner(defaultAccount);
                dispatch(setNFT(NftData.ownedNfts));
                // setNftPic(NftData.ownedNfts[0].metadata.image);
            }
            if (defaultAccount) {
                getNFT();
            }
        }
        , [defaultAccount]);


    return (
        <div>
            {nft.length>0?<img src={nft[0].metadata.image} alt=""/>:null}
        </div>
    );
}

export default NftCollection;