import styles from '../../styles/Home.module.css'

import Bg1 from '../../image/bg1.png'
import Bg2 from '../../image/bg2.png'

import CategoryBg from '../../image/categoryBg.png'
import PlaceBg from '../../image/placeBg.png'
import HelperBg from '../../image/helperBg.png'

import TrustIcon from '../../image/trustIcon.png'

import ReviewIcon1 from '../../image/reviewIcon1.png'
import ReviewIcon2 from '../../image/reviewIcon2.png'
import ReviewIcon3 from '../../image/reviewIcon3.png'

import { Link } from 'react-router-dom';



const Home = () => {

    return (
        <div className={styles.homePage}>
            <div className={styles.hero}>
                <div className={styles.title}>
                    <h1 className={styles.text}>Собирайтесь с близкими ярко и красиво</h1>
                </div>
                <img className={styles.bg1} src={Bg1} alt='icon' />
                <img className={styles.bg2} src={Bg2} alt='icon' />
            </div>
            <div className={styles.about}>
                <p>
                    Мы — команда Vivid Occasions , которая помогает превратить организацию мероприятий в простой процесс.
                </p>
            </div>
            <div className={styles.info}>
                <div className={styles.infoDiv}>
                    <p>1000</p>
                    <span>Мероприятий</span>
                </div>
                <div className={styles.infoDiv}>
                    <p>2000</p>
                    <span>Пользователей</span>
                </div>
                <div className={styles.infoDiv}>
                    <p>100</p>
                    <span>Проведенных</span>
                </div>
            </div>
            <div className={styles.choise}>
                <h1 className={styles.choiseTitle}>Что вы можете выбрать?</h1>
                <div className={styles.choiseVariants}>
                    <div>
                    <Link to={"/places"}>
                        <img src={CategoryBg} alt='icon' className={styles.choiseImg} />
                        </Link>
                        <p className={styles.choiseText}>Категорию мероприятий</p>
                    </div>
                    <div>
                        <Link to={"/places"}>
                        <img src={PlaceBg} alt='icon' className={styles.choiseImg} />
                        </Link>
                        <p className={styles.choiseText}>Место проведения</p>
                    </div>
                    <div>
                        <Link to={"/places"}>
                        <img src={HelperBg} alt='icon' className={styles.choiseImg} />
                        </Link>
                        <p className={styles.choiseText}>Помощников в организации</p>
                    </div>
                </div>
            </div>
            <div className={styles.trustSection}>
                <h1>Доверьтесь нам — и наслаждайтесь своими яркими моментами!</h1>
                <div className={styles.trustSectionContent}>
                    <img src={TrustIcon} alt='icon' className={styles.trustIcon} />
                    <div className={styles.trustSectionText}>
                        <p>
                            С нашим приложением вам больше не нужно тратить часы на поиск подходящего места, обсуждение декора, расчет бюджета и выбор фотографа. Мы объединили все необходимые инструменты в одном месте, чтобы вы могли сосредоточиться на самом важном — создании уникальной атмосферы и незабываемых впечатлений для вас и ваших гостей.
                            <br />
                            <br />
                            С нами ваш праздник станет проще в подготовке, а сам процесс — более приятным и вдохновляющим, ведь все заботы о деталях мы берем на себя.
                        </p>

                        <Link to={"/places"}>
                        <button className={styles.trustSectionBtn}>Начать создание мероприятия</button>
                        </Link>
                       
                    </div>
                </div>
            </div>

            <div className={styles.reviewsSection}>
                <h1 className={styles.reviewsSectionTitle}>Что говорят наши пользователи?</h1>
                <div className={styles.reviewsContainer}>
                    <div className={styles.reviewsDiv}>
                        <div className={styles.user}>
                            <img src={ReviewIcon1} alt='icon' className={styles.reviewIcon} />
                            <span className={styles.username}>
                                Катя Смирнова
                            </span>
                            <span>
                                Организатор
                            </span>
                        </div>
                        <div className={styles.reviewsText}>
                            <span>«Я долго думала, как организовать юбилей родителей, чтобы все прошло идеально. Понравилось, что все получилось: выбрал ресторан, стильное оформление и добавил несколько необычных идей. Всё получилось даже лучше, чем я ожидала! Спасибо за такую ​​помощь организации!"</span>
                        </div>
                    </div>
                    <div className={`${styles.reviewsDiv} ${styles.reviewsDivRight}`}>
                        <div className={styles.reviewsText}>
                            <span>"Искал способ организовать детский праздник для дочки, и ваш сайт отлично справился с этой штукой. Очень удобно, что можно сразу выбрать место и продумать оформление. Отдельное спасибо за рекомендации по тематике праздника — получилось ярко и весело! Родители тоже оценили"</span>
                        </div>
                        <div className={styles.user}>
                            <img src={ReviewIcon2} alt='icon' className={styles.reviewIcon} />
                            <span className={styles.username}>
                                Александр Петров
                            </span>
                            <span>
                                Директор
                            </span>
                        </div>
                    </div>
                    <div className={styles.reviewsDiv}>
                        <div className={styles.user}>
                            <img src={ReviewIcon3} alt='icon' className={styles.reviewIcon} />
                            <span className={styles.username}>
                                Селия Альмеда
                            </span>
                            <span>
                                Организатор свадеб
                            </span>
                        </div>
                        <div className={styles.reviewsText}>
                            <span>"Очень удобно, что можно сразу подобраться к ресторану, выбрать стиль оформления и количество гостей. Интерфейс понятный, рекомендации по декору просто шикарные! Благодаря этому сайту удалось значительно ускорить процесс подготовки к мероприятию. Спасибо за такой полезный инструмент!"</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home