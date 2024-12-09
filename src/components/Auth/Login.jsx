import { useState } from 'react'

import logo from '../../image/loginPage/authLogo.png'
import EmailIcon from '../../image/loginPage/emailIcon.png'
import Secure from '../../image/loginPage/Secure.png'
import Eye from '../../image/loginPage/Eye.png'

import styles from '../../styles/Login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
    const [remember, setRemember] = useState(false)
    const [isSecure, setIsSecure] = useState(false)

    return (
        <div className={styles.logoPage}>
            <div className={styles.container}>
                <img src={logo} alt='logo' className={styles.logo} />
                <div className={styles.form}>
                    <h1 className={styles.title}>Вход в систему</h1>
                    <div className={styles.inputs}>
                        <div className={styles.inputDiv}>
                            <img src={EmailIcon} alt="icon" className={styles.icon} />
                            <input type='text' placeholder='Email адрес или ID' />
                        </div>
                        <div className={styles.inputDiv}>
                            <img src={Secure} alt="icon" className={`${styles.icon} ${styles.secure}`} />
                            <input type={isSecure ? 'text' : 'password'} placeholder='Пароль' className={styles.password} />
                            <img src={Eye} alt="icon" className={styles.eye} onClick={() => setIsSecure(!isSecure)} />
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.rememberDiv}>
                            <div className={styles.remember}>
                                <div className={styles.checkbox} onClick={() => setRemember(!remember)}>
                                    <div
                                        style={{ display: remember ? 'block' : 'none' }}
                                        className={styles.checked}
                                    ></div>
                                </div>
                                <label htmlFor='remember'>Запомнить меня</label>
                            </div>
                            <Link to='/password-reset'>Забыли пароль?</Link>
                        </div>
                        <button>Войти</button>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.registerLink}>
                        <p>Нет персонального аккаунта?</p>
                        <Link to="/register">Регистрация</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login