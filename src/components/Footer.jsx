import styles from '../styles/Footer.module.css'

import FooterIcon from '../image/footerIcon.png'
import FacebookIcon from '../image/FacebookIcon.png'
import TwitterIcon from '../image/TwitterIcon.png'
import LinkedInIcon from '../image/LinkedInIcon.png'
import InstagramIcon from '../image/InstagramIcon.png'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.icon}>
                <img src={FooterIcon} alt='icon' />
                <div className={styles.social}>
                    <span>Социальные сети</span>
                    <div className={styles.socialIcons}>
                        <img src={FacebookIcon} alt='icon' />
                        <img src={TwitterIcon} alt='icon' />
                        <img src={LinkedInIcon} alt='icon' />
                        <img src={InstagramIcon} alt='icon' />
                    </div>
                </div>
            </div>
            <div className={styles.footerItems}>
                <p>Города</p>
                <div className={styles.footerSubItems}>
                    <span>Астана</span>
                    <span>Алматы</span>
                    <span>Павлодар</span>
                    <span>Шымкент</span>
                </div>
            </div>
            <div className={styles.footerItems}>
                <p>Поставщики</p>
                <div className={styles.footerSubItems}>
                    <span>Декорации</span>
                    <span>Организаторы</span>
                    <span>Дизайнеры</span>
                </div>
            </div>
            <div className={styles.footerItems}>
                <p>Ссылки</p>
                <div className={styles.footerSubItems}>
                    <span>О нас</span>
                    <span>Карьера</span>
                    <span>Контакты</span>
                    <span>Правила и условия</span>
                </div>
            </div>
            <div className={styles.footerItems}>
                <p>Рассылка</p>
                <span>Подпишитесь, чтобы получать последние обновления</span>
                <button className={styles.mailingBtn}>Сообщение</button>
            </div>
        </footer>
    )
}

export default Footer