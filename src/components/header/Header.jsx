import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Company Name</span>
            </div>

            <div className={css.right}>
                <div className={css.menu}></div>
            </div>

            <input type="text" className={css.search} />

            <span>PNG icon for cart</span>
        </div>
    )
}

export default Header