import axios from "axios";


 const GetGas = async () => {

    const url = `https://eth-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_KEY}`

    try {

        const response = await axios({
                url: url,
                method: 'post',
                header: 'content-type: application/json',
                data: {
                    "id": 1,
                    "jsonrpc": "2.0",
                    "method": "eth_gasPrice"
                }

            }
        );
        const gas= (Number(response.data.result)*0.000000001)
        return gas;




    } catch (error) {
        console.error(error);
    }
}
export default GetGas;

