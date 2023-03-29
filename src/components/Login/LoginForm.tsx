import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {AuthActionCreators} from "../../store/auth/actionCreators";
import {useSelector} from "react-redux";
import {authStateType} from "../../store/auth";


export const LoginForm = () => {

    const dispatch = useAppDispatch()
    const {error,isLoading} = useSelector<AppRootStateType,authStateType>(state => state.auth)
    const [username,setUsername] = useState<string>('')
    const [password,setPassword] = useState<string>('')


    const submit = () => dispatch(AuthActionCreators.login(username,password))


    return (
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={submit}
                autoComplete="off"
            >
                {error && <div style={{display:'flex' ,justifyContent:'center',color:'red'}}>{error}</div>}

                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input value={username} onChange={(e) => setUsername(e.currentTarget.value)} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
    );

};

