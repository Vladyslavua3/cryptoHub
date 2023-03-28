import React, {ReactNode} from "react";
import {Login} from "../components/Login/Login";
import {Calendar} from "../components/Calendar/Calendar";
import {RouteProps} from "react-router-dom";

export interface IRoute {
    path:string,
    component: React.ComponentType,
    exact?:boolean
}

export enum IRouteNames {
    LOGIN ='/login',
    CALENDAR ='/calendar'
}




export const publicRoutes:IRoute[] = [
    {path:IRouteNames.LOGIN,exact:true,component:Login }
]

export const privateRoutes: IRoute[] = [
    {path:IRouteNames.CALENDAR,exact:true,component: Calendar}
]