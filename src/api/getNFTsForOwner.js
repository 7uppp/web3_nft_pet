//This function will return all NFTs for a given owner address

import axios from "axios"


const GetNFTsForOwner = async (defaultAccount) => {



    const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.REACT_APP_KEY}`
    const url = `${baseURL}/getNFTs/?owner=${defaultAccount}`
    const config = {
        method: 'get',
        url: url,
    }


    let response = await axios(config)
    return response.data
}

export default GetNFTsForOwner;




