import NavBar from "./Pages/NavBar";
import styles from "./style";
import Main from "./Pages/Main";
import Footer from "./Pages/footer";
import NFT from "./Pages/NFT";







function App() {
    return (
        <div className={"bg-primary w-full overflow-hidden"}>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar/>
                    <Main/>
                    <Footer/>
                    <NFT/>
                </div>
            </div>
        </div>
    );
}

export default App;
