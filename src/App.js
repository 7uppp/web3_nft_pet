
import styles from "./style";
import Main from "./Pages/Main";
import NFT from "./Pages/NftCollectionPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
    },
    {
        path: "/nft",
        element: <NFT/>,
    },
]);


function App() {


    return (
        <div className={"bg-primary w-full overflow-hidden"}>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <RouterProvider router={router}/>
                </div>
            </div>
        </div>
    );
}

export default App;
