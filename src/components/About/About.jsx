import styles from '../../styles/About.module.css'

import AboutImage1 from '../../image/aboutImgs/aboutImg1.png'
import AboutImage2 from '../../image/aboutImgs/aboutImg2.png'
import AboutImage3 from '../../image/aboutImgs/aboutImg3.png'

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.hero}>
                <div className={styles.title}>
                    <h1 className={styles.text}>
                        VIVID OCCASIONS
                        <br />
                        <span>
                            Мы создаем
                            события вашей
                            мечты
                        </span>
                    </h1>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1>О нас</h1>
                    <span>Мы — команда профессионалов, создающая новое слово в сфере организации мероприятий. <b>Наша цель</b> — сделать процесс планирования событий простым, доступным и приятным для каждого. Мы помогаем вам воплотить в жизнь ваши идеи для праздников, свадеб, корпоративных встреч и любых других значимых событий, не затрачивая лишних усилий. Мы верим, что каждый момент, проведённый с близкими людьми, важен и неповторим. Поэтому наша миссия — сделать так, чтобы создание этих моментов было лёгким и вдохновляющим для всех. С нами вы сможете не просто организовать мероприятие, а создать настоящее событие, полное эмоций и радости.  </span>
                </div>
                <img src={AboutImage1} alt="icon" className={styles.img} />
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

            <div className={styles.container}>
                <img src={AboutImage2} alt="icon" className={styles.img2} />
                <div className={`${styles.textContainer} ${styles.textContainer2}`}>
                    <h1>Что мы предлагаем?</h1>
                    <span>
                        С нашим приложением вам больше не нужно тратить часы на поиск подходящего места, обсуждение декора, расчет бюджета и выбор фотографа. Мы объединили все необходимые инструменты в одном месте, чтобы вы могли сосредоточиться на самом важном — создании уникальной атмосферы и незабываемых впечатлений для вас и ваших гостей.
                        <br />
                        <br />
                        С нами ваш праздник станет проще в подготовке, а сам процесс — более приятным и вдохновляющим, ведь все заботы о деталях мы берем на себя.
                    </span>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1>Почему выбирают нас?</h1>
                    <span>
                        <li>
                            Полная автоматизация. <br />
                            От подбора ресторанов до выбора стиля и расчета количества гостей — всё это теперь можно сделать в несколько кликов.
                        </li>
                        <li>
                            Персонализация. <br />
                            Мы учитываем ваши предпочтения и создаём предложения, которые подходят именно вам
                        </li>
                        <li>
                            Простота и удобство. <br />
                            Мы продумали каждый шаг, чтобы вам было легко в использовании, независимо от опыта в организации мероприятий.
                        </li>
                    </span>
                </div>
                <img src={AboutImage3} alt="icon" className={styles.img}/>
            </div>
        </div>
    )
}

export default About