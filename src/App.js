import NavBar from "./Pages/NavBar";
import styles from "./style";

function App() {
    return (
        <div className={"bg-primary w-full overflow-hidden"}>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar/>
                </div>
            </div>
        </div>
    );
}

export default App;
