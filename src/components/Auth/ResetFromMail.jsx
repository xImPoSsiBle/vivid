import styles from '../../styles/ResetFromMail.module.css'
import Logo from '../../image/loginPage/authLogo.png'
import EmailIcon from '../../image/loginPage/emailIcon.png'
import { Link } from 'react-router-dom'

const ResetFromMail = () => {
    return (
        <div className={styles.PasswordResetPage}>
            <div className={styles.container}>
                <img src={Logo} alt='logo' className={styles.logo} />
                <div className={styles.form}>
                    <h1>Сброс пароля</h1>
                    <p className={styles.description}>Введите адрес электронной почты, привязанный к Вашему аккаунту. Вам поступит инструкция по сбросу пароля.</p>
                    <div className={styles.inputDiv}>
                        <img src={EmailIcon} alt="icon" className={styles.icon} />
                        <input type='text' placeholder='Email адресс' />
                    </div>

                    <Link to={'/reset-from-mail'}>
                        <button className={styles.btn}>
                            Продолжить
                        </button>
                    </Link>

                    <div className={styles.line}></div>

                </div>
            </div>
        </div>
    )
}

export default ResetFromMail