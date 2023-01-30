//to do,need check

// import {Network, Alchemy} from 'alchemy-sdk';
//
// const settings = {
//     apiKey: process.env.REACT_APP_KEY,
//     network: Network.ETH_MAINNET,
// };
//
// const alchemy = new Alchemy(settings);
//
// async function getTokenBalance() {
//
//     const account = "0x64fa7BB0F6BC7761681A5D21286471cd4A7e185b";
//     const balance = await alchemy.core.getTokenBalances(account);
//     const nonZeroBalances = balance.tokenBalances.filter((token) =>  token.tokenBalance != "0");
//
//
//     let i = 1;
//     for (let token of nonZeroBalances) {
//         let balance = token.tokenBalance;
//         const metadata = await alchemy.core.getTokenMetadata(token.contractAddress);
//         balance = balance / Math.pow(10, metadata.decimals);
//         balance = parseFloat(balance).toFixed(4);
//         console.log(`${i++}. ${metadata.name} : ${balance} ${metadata.symbol}`);
//     }
// }
//
// getTokenBalance();

