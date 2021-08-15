import React, {Component} from 'react';
import './App.css';
import {HashRouter, Link, NavLink, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {UsersPage} from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {error, initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import NotFound from "./components/common/404/error404";
import 'antd/dist/antd.css';

import {Layout, Menu, Breadcrumb, Avatar, Row, Col} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {Header} from "./components/Header/Header";
const { SubMenu } = Menu;
const {  Content, Footer, Sider } = Layout;


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const ChatPageContainer = React.lazy(() => import('./Pages/Chat/ChatPage'));


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
    error:any

}

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);
const SuspendedPageChat = withSuspense(ChatPageContainer);


class App extends Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (PromiseRejectionEvent:any) => {
        this.props.error(`${PromiseRejectionEvent.reason}`)
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        if (this.props.errorText!=null){
           return <NotFound errorText={this.props.errorText} />
        }

        return (
            <Layout>
            <Header/>

                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                //defaultSelectedKeys={['1']}
                                //defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >





                                <SubMenu key="sub1" icon={<UserOutlined />} title="My profile">
                                    <Menu.Item key="1"><Link to="/profile" >Profile</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to='/dialogs' >Messages</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to='/chat' >Chat</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Users">
                                    <Menu.Item key="5"><Link to="/users" >Users</Link></Menu.Item>
                                </SubMenu>

                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}><Switch>
                                        <Route exact path='/'
                                            render={() => <Redirect to={"/profile"}/>}/>

                                    <Route path='/dialogs'
                                            render={() => <SuspendedDialogs /> }/>

                                     <Route path='/profile/:userId?'
                                            render={() => <SuspendedProfile /> }/>

                                     <Route path='/users'
                                            render={() => <UsersPage pageTitle={"Самураи"}/>}/>

                                     <Route path='/login'
                                          render={() => <LoginPage/>}/>

                                      <Route path='/chat'
                                            render={() => <SuspendedPageChat/>}/>

                                    <Route path='*'
                                         render={() => <div>404 NOT FOUND
                                          </div>}/>

                                 </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Добро пожалоть 2021</Footer>
            </Layout>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
    errorText: state.app.errorText
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp,error}))(App);

const SamuraiJSApp: React.FC = () => {
    return <HashRouter >
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;
