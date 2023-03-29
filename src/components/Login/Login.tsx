import React, {useState} from 'react';

import {Card, Layout, Row} from "antd";
import {LoginForm} from "./LoginForm";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {authStateType} from "../../store/auth";


export const Login = () => {

    const {isAuth} = useSelector<AppRootStateType,authStateType>(state => state.auth)

    const nav = useNavigate()

    if(isAuth) nav("/cryptoHub")


    return (
        <Layout>
            <Row justify={"center"} align={"middle"} style={{height:'calc(100vh - 64px)'}} >
                <Card>
                    <LoginForm />
                </Card>
            </Row>
        </Layout>
    );
};
