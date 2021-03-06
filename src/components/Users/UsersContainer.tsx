import React from 'react';
import {useSelector} from 'react-redux';
import {FilterType} from '../../redux/users-reducer';
import Preloader from "../common/Preloader/Preloader";
import {getIsFetching} from "../../redux/users-selectors";
import {UserType} from '../../Types/types';
import {Users} from "./Users";





type UsersPagePropsType = {
    pageTitle: string
}

export const UsersPage:React.FC<UsersPagePropsType> = ({pageTitle})=>{
    const isFetching = useSelector(getIsFetching)

    return  ( <>
         <h2>{pageTitle}</h2>
         {isFetching? <Preloader/> : null}
         <Users/>
     </>)
 }





