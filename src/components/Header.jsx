import { useState } from 'react'
import Logo from '../image/logo.png'
import DownArrow from '../image/downArrow.png'

import styles from '../styles/Header.module.css'

const Header = () => {
    const [activeNav, setActiveNav] = useState('Главная')

    const navsTitle = ['Главная', 'Места', 'Поставщики', 'О нас', 'Контакты']

    const handleNavClick = (nav) => {
        setActiveNav(nav)
    }

    return (
        <div className={styles.header}>
            <div>
                <img src={Logo} className={styles.logo} alt='logo'/>
            </div>
            <div className={styles.nav}>
                <div className={styles.loginDiv}>
                    <div className={styles.language}>
                        РУС
                        <img src={DownArrow} className={styles.arrow} alt='icon'/>
                    </div>
                    <div className={styles.authBtnsDiv}>
                        <div>ВХОД</div>
                        <div className={styles.signUp}>РЕГИСТРАЦИЯ</div>
                    </div>
                </div>
                <div className={styles.navLinkDiv}>
                    {navsTitle.map(i => {
                        return (
                            <nav
                                key={i}
                                className={`${styles.navLink} ${activeNav === i && styles.active}`}
                                onClick={() => handleNavClick(i)}>
                                {i}
                            </nav>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header