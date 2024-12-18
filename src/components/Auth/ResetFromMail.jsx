import styles from '../../styles/ResetFromMail.module.css'
import Logo from '../../image/loginPage/authLogo.png'
import EmailIcon from '../../image/loginPage/emailIcon.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ResetFromMail = () => {
    const [message, setMessage] = useState(false);

    const handleClick = () => {
        setMessage(true);
    }

    return (
        <div className={styles.PasswordResetPage}>
            <div className={styles.container}>
                <img src={Logo} alt='logo' className={styles.logo} />
                <div className={styles.form}>
                    <h1>Сброс пароля</h1>
                    {message
                        ? <div>
                            <span>Мы отправили вам письмо на ваш адрес электронной почты с дальнейшими инструкциями. Если вы не видите письмо в своем почтовом ящике в течение нескольких минут, пожалуйста, проверьте папку спам. Если вы все еще не можете найти письмо, свяжитесь с нашей службой поддержки для получения помощи. </span>
                        </div>
                        : <div>
                            <p className={styles.description}>Введите адрес электронной почты, привязанный к Вашему аккаунту. Вам поступит инструкция по сбросу пароля.</p>
                            <div className={styles.inputDiv}>
                                <img src={EmailIcon} alt="icon" className={styles.icon} />
                                <input type='text' placeholder='Email адресс' required />
                            </div>

                            <Link to={'/new-password'}>
                                <button className={styles.btn} >
                                    Продолжить
                                </button>
                            </Link>

                            <div className={styles.line}></div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ResetFromMail