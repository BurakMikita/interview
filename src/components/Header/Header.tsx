import React from 'react';
import s from './Header.module.css';
import {Link, NavLink} from "react-router-dom";
import {Avatar, Button, Col, Layout, Menu, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUserLogin, selectIsAuth} from "../../redux/auth-selectors";
import {logout} from "../../redux/auth-reducer";

export type MapPropsType = {
}
export type DispatchPropsType = {
}

 export const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {

     const isAuth = useSelector(selectIsAuth)
     const login = useSelector(selectCurrentUserLogin)
     const dispatch = useDispatch()
     const logoutCollBack = ()=>{
         dispatch(logout())
     }

    const { Header } = Layout;

    return    <Header className="header">
        <Row>
            <Col span={18}> <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"><Link to="/users" >Программситы</Link></Menu.Item>
            </Menu></Col>

                {isAuth
                    ?<><Col span={1}>
                        <Avatar alt={login || ''} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />}/>
                    </Col>
                        <Col span={5}>
                          <Button onClick={logoutCollBack}>Log out</Button> </Col></>

                    : <Col span={6}><Link to={'/login'}>Login</Link>  </Col>}


        </Row>


    </Header>


    // <header className={s.header}>
    //     <img src='https://placepic.ru/wp-content/uploads/2019/04/744667-male-lion-faces-wallpaper-2048x1423-for-meizu-1024x711.jpg'/>
    //
    //     <div className={s.loginBlock}>
    //         { props.isAuth
    //             ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
    //             : <NavLink to={'/login'}>Login</NavLink> }
    //     </div>
    // </header>
}

