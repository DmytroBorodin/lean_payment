import React from "react";
import './Menu.css';
import logo from '../assets/imgs/logo.png';
import user_icon from '../assets/imgs/user.svg';
import logo_min from '../assets/imgs/logo_min.png';
import {NavLink} from "react-router-dom";


const Menu = (props) => {

    const sublinks = React.createRef();
    const sSublinks = React.createRef();

    const makeActive = (block) => {
        block.current.classList.toggle('active');
        block.current.classList.add('active__mobile');
    }

    return (
        <div className='menu'>
            <div className="user__block">
                <img src={logo} className="logo"/>
                <img src={logo_min} className='logo__min'/>
                <div className="menu__user__block">
                    <NavLink to='/profile' className="user__icon__block" onClick={() => {props.disableFunc(sublinks)}}>
                        <img src={user_icon} className="user__icon"/>
                    </NavLink>
                    <div className="menu__user__info__block">
                        <p className="user__name">Vishal Bhatia</p>
                        <p className="user__email">koolguy@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="menu__block">
                <NavLink to='/dashboard' activeClassName={'active'} className="menu__link" onClick={() => {props.disableFunc(sublinks)}}>
                    <span className="icon-menu_icon_1 link__icon"></span>
                    <span className="link__title">Dashboard</span>
                </NavLink>
                <NavLink to='/businesses' className="menu__link" onClick={() => {makeActive(sublinks)}}>
                    <span className="icon-menu_icon_2 link__icon"></span>
                    <span className="link__title">Businesses</span>
                </NavLink>
                <div className="sublinks__block" ref={sublinks} onClick={() => {props.disableFunc(sublinks)}}>
                    <NavLink to='/create_business' className="menu__link sublink">
                        <span>+</span>
                        <span className="link__title">Create a Business</span>
                    </NavLink>
                    <NavLink to='/business_profile' className="menu__link sublink" onClick={() => {props.disableFunc(sublinks)}}>
                        <span className="icon-menu_icon_2 link__icon sublink__icon"></span>
                        <span className="link__title" onClick={() => {makeActive(sSublinks)}}>Kool Company</span>
                    </NavLink>
                    <div className="sublinks__block s__sublinks__block" ref={sSublinks}>
                        <NavLink to='/business/payees' className="menu__link sublink">
                            <span className="icon-menu_icon_5 link__icon sublink__icon"></span>
                            <span className="link__title">Payees</span>
                        </NavLink>
                        <NavLink to='/business/members' className="menu__link sublink">
                            <span className="icon-menu_icon_6 link__icon sublink__icon"></span>
                            <span className="link__title">Members</span>
                        </NavLink>
                    </div>
                </div>
                <div className="menu__border__div"></div>
                <NavLink to='/logout' className="menu__link" onClick={() => {props.disableFunc(sublinks)}}>
                    <span className="icon-menu_icon_4 link__icon"></span>
                    <span className="link__title">Logout</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Menu;