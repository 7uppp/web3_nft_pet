import { ethers, unit256 } from 'ethers'
import testNFT from '../assets/nft.json'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setDefaultAccount } from '../store/setDefaultAccount'
import { setState } from '../store/setConnectState'
import { useState } from 'react'

const nftContractAddress = "0x79ca3df315c4f06Af1271cB339f0cD9a52c5834A"


function Mint () {

  const defaultAccount = useSelector(state => state.setDefaultAccount.defaultAccount)
  const [mintAmount, setMintAmount] = useState(1)
  const dispatch = useDispatch()

  const accountChangedHandler = (defaultAccount) => {

    if (defaultAccount.length === 0) {
      dispatch(setState(false))
      console.log('No account connected')

    }
    if (true) {
      dispatch(setDefaultAccount(defaultAccount))
    }

  }
  useEffect(() => {
    window.ethereum.on('accountsChanged', accountChangedHandler)//listen for account changes
    return () => {
      window.ethereum.removeListener('accountsChanged', accountChangedHandler)
    }

  }, [])

  async function handleMint () {

    if (defaultAccount) {
      console.log('defaultAccount:', defaultAccount)
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(nftContractAddress, testNFT.abi, signer)

      try {
        const response = await contract.safeMint("0xa1C66B4D3FFFC8801909AC50173FF84E008edf2F", 1)
        console.log('response:', response)
      }
      catch (err) {
        console.log('err！', err.message)
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return
    setMintAmount(mintAmount - 1)
  }

  const handleIncrement = () => {
    if (mintAmount >= 3) return
    setMintAmount(mintAmount + 1)
  }

  return (
    <div>
      <div>
        <button
          className="md:text-3xl text-lg md:mt-20 mt-6 rounded-md border-solid border-2 rounded-full border-white md: px-4 md:py-4 hover:scale-125" onClick={handleMint}>Mint Now
        </button>
      </div>
      <div className='ml-12'>
        <button className="text-2xl " onClick={handleDecrement}>-</button>
        <input type="number" value={mintAmount} className="w-[40px] h-[20px] text-black text-center" />
        <button className="text-2xl" onClick={handleIncrement}>+</button>
      </div>
    </div>

  )
}
export default Mint