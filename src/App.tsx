import './App.css'
import {Nav} from "./components/Nav/Nav";
import {Main} from "./components/Main/Main";
import {CryptoRank} from "./components/CryptoRank/CryptoRank";
import {News} from "./components/News/News";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Navigate, Route, Routes} from "react-router-dom";
import {Trending} from "./components/Trending/Trending";
import {Holders} from "./components/Holders/Holders";
import {CoinDescription} from "./components/Coin/CoinDescription/CoinDescription";
import {Layout, Menu} from 'antd';
import {Login} from "./components/Login/Login";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "./store/store";
import {AuthActionCreators} from "./store/auth/actionCreators";
import {authStateType} from "./store/auth";
import {useEffect} from "react";
import {IUser} from "./models/User";





const {Header, Content, Footer, Sider} = Layout;

export const App = () => {

    const dispatch = useAppDispatch()

    const router = useNavigate()

    const {isAuth,user} = useSelector<AppRootStateType,authStateType>(state => state.auth)



    useEffect(()=>{
        if(localStorage.getItem('auth')){
            dispatch(AuthActionCreators.setUser({username:localStorage.getItem('username')}as IUser))
            dispatch(AuthActionCreators.setIsAuth(true))
        }
    },[])

    return (
        <Layout style={{height: '100%'}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                style={{backgroundColor: '#202027'}}
            >
                <div className="logo"/>
                {isAuth ?
                    <>
                        <div style={{color:"whitesmoke",fontSize:'15px'}}>{user.username}</div>
                    <Menu theme={'dark'} mode={'horizontal'} selectable={false} style={{display:'flex'}} >
                        <Menu.Item key={'2'} onClick={()=> dispatch(AuthActionCreators.logOut())} >
                            Log Out
                        </Menu.Item>
                    </Menu>
                    </>
                :
                    <Menu theme={'dark'} mode={'horizontal'} selectable={false} style={{display:'flex'}} >
                    <Menu.Item key={'1'} onClick={()=> router("/cryptoHub/login")} >
                    Login
                    </Menu.Item>
                    </Menu>
                }
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

                            <Route path={"/cryptoHub"} element={<Main/>}/>
                            <Route path={"/cryptoHub/allCrypto"} element={<CryptoRank/>}/>
                            <Route path={"/cryptoHub/trending"} element={<Trending/>}/>
                            <Route path={"/cryptoHub/holders"} element={<Holders isAuth={isAuth}/>}/>
                            <Route path={"/cryptoHub/news"} element={<News isAuth={isAuth}/>}/>
                            <Route path={"/cryptoHub/portfolio"} element={<Portfolio isAuth={isAuth}/>}/>
                            <Route path={"/cryptoHub/:id"} element={<CoinDescription/>}/>
                            <Route path={"*"} element={<Navigate to="/cryptoHub"/>}/>
                            <Route path={"/cryptoHub/login"} element={<Login/>}/>

                        </Routes>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Crypto<span style={{color: '#94AE93'}}>Hub</span></Footer>
            </Layout>
        </Layout>
    );
};

