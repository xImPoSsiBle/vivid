import styles from '../../styles/NewPassword.module.css'
import Logo from '../../image/loginPage/authLogo.png'
import EyeIcon from '../../image/loginPage/Eye.png'
import SecureIcon from '../../image/loginPage/Secure.png'
import { useState } from 'react'

const NewPassword = () => {
    const [isSecure, setIsSecure] = useState(true)

    return (
        <div className={styles.PasswordResetPage}>
            <div className={styles.container}>
                <img src={Logo} alt='logo' className={styles.logo} />
                <div className={styles.form}>
                    <h1 className={styles.title}>Новый пароль</h1>
                    <div className={styles.inputDiv}>
                        <div className={styles.secureDiv}>
                            <img src={SecureIcon} alt="icon" className={styles.secure} />
                        </div>

                        <input type={isSecure ? 'password' : 'text'} placeholder='Пароль'/>

                        <div className={styles.eyeDiv}>
                            <img src={EyeIcon} alt="icon" className={styles.eye} onClick={() => setIsSecure(!isSecure)}/>
                        </div>
                    </div>
                    <div className={styles.inputDiv}>
                        <div className={styles.secureDiv}>
                            <img src={SecureIcon} alt="icon" className={styles.secure}/>
                        </div>

                        <input type={isSecure ? 'password' : 'text'} placeholder='Повторите пароль'/>

                        <div className={styles.eyeDiv}>
                            <img src={EyeIcon} alt="icon" className={styles.eye} onClick={() => setIsSecure(!isSecure)}/>
                        </div>
                    </div>
                    <div className={styles.btnDiv}>
                        <button>Продолжить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPassword