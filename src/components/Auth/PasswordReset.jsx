import styles from '../../styles/PasswordReset.module.css'

import Logo from '../../image/loginPage/authLogo.png'
import MailIcon from '../../image/loginPage/mailIcon.png'
import { Link } from 'react-router-dom'

const PasswordReset = () => {
    return (
        <div className={styles.PasswordResetPage}>
            <div className={styles.container}>
                <img src={Logo} alt='logo' className={styles.logo} />
                <div className={styles.form}>
                    <h1>Сброс пароля</h1>
                    <Link to={'/reset-from-mail'} className={styles.formGroup}>
                        <div className={styles.formContent}>
                            <img src={MailIcon} alt="icon" />
                            <div className={styles.formGroupContent}>
                                <span className={styles.formGroupTitle}>Адрес электронной почты</span>
                                <span className={styles.formGroupDescription}>На Вашу почту поступит ссылка для сброса пароля</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset