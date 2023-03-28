import React, {useState} from 'react';

import {Layout, Row} from "antd";
import {LoginForm} from "./LoginForm";


interface IFormInput{
    firstName: string;
    lastName: string;
    age: number
}


export const Login = () => {
    const [userData,setUserData] = useState<IFormInput>({
        firstName:'',
        lastName:'',
        age:0
    })

    console.log(userData)


    return (
        <Layout>
            <Row justify={"center"} align={"middle"} style={{height:'calc(100vh - 64px)'}} >
                       <LoginForm />
            </Row>
        </Layout>
    );
};
