import { useEffect, useState } from 'react'
import Logo from '../image/logo.png'
import DownArrow from '../image/downArrow.png'

import styles from '../styles/Header.module.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = ({ isAuth, setIsAuth }) => {
    const [activeNav, setActiveNav] = useState('Главная')
    const navigate = useNavigate()
    const location = useLocation()

    const navsTitle = [
        { path: '/', name: 'Главная' },
        { path: '/places', name: 'Места' },
        { path: '/suppliers', name: 'Поставщики' },
        { path: '/about', name: 'О нас' },
        { path: '/contacts', name: 'Контакты' }
    ]

    useEffect(() => {
        const currentNav = navsTitle.find(nav => nav.path === location.pathname)
        if (currentNav) {
            setActiveNav(currentNav.name)
        }
    }, [location.pathname])

    const handleNavClick = (nav) => {
        setActiveNav(nav.name)
        navigate(nav.path)
    }

    return (
        <div className={styles.header}>
            <div>
                <img src={Logo} className={styles.logo} alt='logo' />
            </div>
            <div className={styles.nav}>
                <div className={styles.loginDiv}>
                    <div className={styles.language}>
                        РУС
                        <img src={DownArrow} className={styles.arrow} alt='icon' />
                    </div>
                    <div className={styles.authBtnsDiv}>
                        {isAuth ? (
                            <>
                                <div onClick={() => {
                                    setIsAuth(false); // Логаут
                                    navigate('/login'); // Переход на страницу логина
                                }}>
                                    ВЫЙТИ
                                </div>
                                <div className={styles.signUp} onClick={() => navigate('/profile')}>
                                    Профиль
                                </div>
                            </>
                        ) : (<>
                            <div onClick={() => navigate('/login')}>ВХОД</div>
                            <div className={styles.signUp} onClick={() => navigate('/register')}>РЕГИСТРАЦИЯ</div>
                        </>
                        )}

                    </div>
                </div>
                <div className={styles.navLinkDiv}>
                    {navsTitle.map(i => {
                        return (
                            <nav
                                key={i.name}
                                className={`${styles.navLink} ${activeNav === i.name && styles.active}`}
                                onClick={() => handleNavClick(i)}>
                                {i.name}
                            </nav>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Header