import Logo from '../../image/loginPage/authLogo.png'

import styles from '../../styles/Register.module.css'

import BackToIcon from '../../image/loginPage/backToIcon.png'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className={styles.registerPage}>
            <div className={styles.loginLink}>
                <h1>Регистрация</h1>
                <Link to="/login">
                    <img src={BackToIcon} alt="icon" />
                    Вход в систему
                </Link>
            </div>
            <div className={styles.container}>
                <img src={Logo} alt='logo' className={styles.logo} />
                <div className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="surname">Фамилия</label>
                        <input type="text" id='surname' />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Имя</label>
                        <input type="text" id='name' />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Телефон</label>
                        <input type="text" id='phone' placeholder='+7 xxx xxx xx xx' />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id='email' placeholder='xxxxx@xxxx.com' />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" id='password' />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="confrimPassword">Подтверждение пароля</label>
                        <input type="password" id='confrimPassword' />
                    </div>
                    <button className={styles.registerBtn}>Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export default Register