import './App.css'
import {Nav} from "./components/Nav/Nav";
import {Main} from "./components/Main/Main";
import {CryptoRank} from "./components/CryptoRank/CryptoRank";
import {News} from "./components/News/News";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Trending} from "./components/Trending/Trending";
import {Holders} from "./components/Holders/Holders";

export function App() {

    return (
        <div className="App">
            <header className={'header'}>
                <div className={'headerTitle'}>Crypto <span>Hub</span></div>
            </header>
            <Nav/>
            <div className={'main'}>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/allCrypto"} element={<CryptoRank/>}/>
                <Route path={"/trending"} element={<Trending/>}/>
                <Route path={"/holders"} element={<Holders/>} />
                <Route path={"/news"} element={<News/>}/>
                <Route path={"/portfolio"} element={<Portfolio/>}/>
            </Routes>
            </div>
        </div>
    )
}
