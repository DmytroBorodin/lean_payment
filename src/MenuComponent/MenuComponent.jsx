import React from "react";
import './Menu.css';
import logo from '../assets/imgs/logo.png';
import user_icon from '../assets/imgs/user.svg';
import logo_min from '../assets/imgs/logo_min.png';
import {NavLink} from "react-router-dom";


const Menu = (props) => {

    const sublinks = React.createRef();

    const makeActive = () => {
        sublinks.current.classList.toggle('active');
    }

    return (
        <div className='menu'>
            <div className="user__block">
                <img src={logo} className="logo"/>
                <img src={logo_min} className='logo__min'/>
                <div className="menu__user__block">
                    <NavLink to='/profile' className="user__icon__block">
                        <img src={user_icon} className="user__icon"/>
                    </NavLink>
                    <div className="menu__user__info__block">
                        <p className="user__name">Vishal Bhatia</p>
                        <p className="user__email">koolguy@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="menu__block">
                <NavLink to='/dashboard' activeClassName={'active'} className="menu__link">
                    <span className="icon-menu_icon_1 link__icon"></span>
                    <span className="link__title">Dashboard</span>
                </NavLink>
                <NavLink to='/businesses' className="menu__link" onClick={makeActive}>
                    <span className="icon-menu_icon_2 link__icon"></span>
                    <span className="link__title">Businesses</span>
                </NavLink>
                <div className="sublinks__block" ref={sublinks}>
                    <NavLink to='/create_business' className="menu__link">
                        <span>+</span>
                        <span className="link__title">Create a Business</span>
                    </NavLink>
                    <NavLink to='/kool_company' className="menu__link">
                        <span className="icon-menu_icon_2 link__icon"></span>
                        <span className="link__title">Kool Company</span>
                    </NavLink>
                </div>
                <div className="menu__border__div"></div>
                <NavLink to='/logout' className="menu__link">
                    <span className="icon-menu_icon_4 link__icon"></span>
                    <span className="link__title">Logout</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Menu;