import './App.css'
import {Nav} from "./components/Nav/Nav";
import {Main} from "./components/Main/Main";
import {CryptoRank} from "./components/CryptoRank/CryptoRank";
import {News} from "./components/News/News";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Trending} from "./components/Trending/Trending";
import {Holders} from "./components/Holders/Holders";
import {CoinDescription} from "./components/Coin/CoinDescription/CoinDescription";
import {Layout, Menu} from 'antd';



const {Header, Content, Footer, Sider} = Layout;

export const App: React.FC = () => {


    return (
        <Layout style={{height: '100%'}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                style={{backgroundColor: '#202027'}}
            >
                <div className="logo"/>
                <Menu
                    style={{backgroundColor: '#202027', marginTop: '60px'}}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    <Nav/>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{padding: 0, backgroundColor: '#202027', textAlign: 'center'}}>
                    <h1 style={{color: 'whitesmoke'}}>Crypto<span style={{color: '#94AE93'}}>Hub</span></h1>
                </Header>
                <Content style={{margin: '24px 16px 0'}}>
                    <div style={{padding: 24, minHeight: 360, backgroundColor: '#94AE93'}}>
                        <Routes>
                            <Route path={"/"} element={<Main/>}/>
                            <Route path={"/allCrypto"} element={<CryptoRank/>}/>
                            <Route path={"/trending"} element={<Trending/>}/>
                            <Route path={"/holders"} element={<Holders/>}/>
                            <Route path={"/news"} element={<News/>}/>
                            <Route path={"/portfolio"} element={<Portfolio/>}/>
                            <Route path={"/:id"} element={<CoinDescription/>}/>
                        </Routes>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Crypto<span style={{color: '#94AE93'}}>Hub</span></Footer>
            </Layout>
        </Layout>
    );
};

