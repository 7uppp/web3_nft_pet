import React from 'react';
import errorPic from '../assets/404.png'

function NftContainer({nfts}) {
    console.log(nfts)

    return (
        <ul className={'list-none flex flex-wrap justify-between items-start mt-24'}>
            {nfts.map((nft, index) => (
                <li key={index}>
                    {(nft.metadata.image)?<img className="w-[240px] h-auto" src={nft.metadata.image} alt=""/>:<img className="w-[240px] h-[240px]" src={errorPic} alt="404"/>}
                    <h3 className="text-sm text-white font-bold mt-2"> Collection: {nft.contractMetadata.name}</h3>
                    <h3 className="text-sm text-white font-bold mt-2">Token
                        Standard: {nft.contractMetadata.tokenType}</h3>
                    {(nft.contractMetadata.openSea.floorPrice) ? <h3 className="text-sm text-white font-bold">Floor
                            Price: {nft.contractMetadata.openSea.floorPrice} eth</h3> :
                        <h3 className="text-sm text-red-600 font-bold">Warning: No Floor Price</h3>}
                </li>
            ))}
        </ul>
    );
}


export default NftContainer;