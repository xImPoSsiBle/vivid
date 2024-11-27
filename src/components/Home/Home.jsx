import styles from '../../styles/Home.module.css'
import CustomSlider from '../CustomSlider'

import Birthday from '../../image/birthday.png'
import Weeding from '../../image/weeding.png'
import Corporate from '../../image/corporate.png'
import Theme from '../../image/theme.png'

import AstanaNury from '../../image/Nury.png'
import Aray from '../../image/Aray.png'
import Deraliye from '../../image/Deraliye.png'
import Lugano from '../../image/Lugano.png'

import DiscountIcon from '../../image/discountIcon.png'

import ReviewIcon1 from '../../image/review1.png'
import ReviewIcon2 from '../../image/review2.png'
import ReviewIcon3 from '../../image/review3.png'
import ReviewIcon4 from '../../image/review4.png'
import ReviewIcon5 from '../../image/review5.png'


const Home = () => {
    const events = [{ id: 1, name: 'День Рождения', img: Birthday }, { id: 2, name: 'Свадьба', img: Weeding }, { id: 3, name: 'Корпоратив', img: Corporate }, { id: 4, name: 'Тематическая вечеринка', img: Theme }, { id: 5, name: 'День Рождения', img: Birthday }, { id: 6, name: 'Свадьба', img: Weeding }, { id: 7, name: 'Корпоратив', img: Corporate }, { id: 8, name: 'Тематическая вечеринка', img: Theme }, { id: 9, name: 'День Рождения', img: Birthday }, { id: 10, name: 'Свадьба', img: Weeding }, { id: 11, name: 'Корпоратив', img: Corporate }, { id: 12, name: 'Тематическая вечеринка', img: Theme }]

    const popularPlace = [{ id: 1, name: 'Астана Нұры', img: AstanaNury }, { id: 2, name: 'Aray', img: Aray }, { id: 3, name: 'Deraliye', img: Deraliye }, { id: 4, name: 'Lugano', img: Lugano }, { id: 5, name: 'Астана Нұры', img: AstanaNury }, { id: 6, name: 'Aray', img: Aray }, { id: 7, name: 'Deraliye', img: Deraliye }, { id: 8, name: 'Lugano', img: Lugano }, { id: 9, name: 'Астана Нұры', img: AstanaNury }, { id: 10, name: 'Aray', img: Aray }, { id: 11, name: 'Deraliye', img: Deraliye }, { id: 12, name: 'Lugano', img: Lugano }]

    const reviews = [{id: 1, review: '«Я долго думала, как организовать юбилей родителей, чтобы все прошло идеально, и благодарю вас справились всего за пару дней. Понравилось, что все получилось: выбрал ресторан, стильное оформление и добавил несколько необычных идей. Всё получилось даже лучше, чем я ожидала! Спасибо за такую ​​помощь организации!"', name: 'Катя Смирнова', role: 'Организатор', img: ReviewIcon1}, {id: 2, review: '"Очень удобно, что можно сразу подобраться к ресторану, выбрать стиль оформления и количество гостей. Интерфейс понятный, рекомендации по декору просто шикарные! Благодаря этому сайту удалось значительно ускорить процесс подготовки к мероприятию. Спасибо за такой полезный инструмент!"', name: 'Селия Альмеда', role: 'Организатор свадеб', img: ReviewIcon2},{id: 3, review: '"Я часто организую корпоративные мероприятия, и этот проект — находка! Возможность автоматизировать процесс выбора локации и продумать экономию времени. Особенно понравилось, что можно сразу увидеть, как будет выглядеть оформление. Всё четко, профессионально и стильно!"', name: 'Нат Рейнольдс', role: 'HR-менеджер', img: ReviewIcon3},{id: 4, review: '"Искала, как организовать выпускной для сына, и случайно наткнулась на ваш сайт. Все оказалось просто и понятно: выбрали ресторан, стиль вечеринки и даже нашли идею для фотозоны. Праздник получился невероятно красивым, и все благодаря вашему сайту. Удобно, быстро и результат. Рекомендую всем!"', name: 'Анна Келон', role: 'Мать выпускника', img: ReviewIcon4},{id: 5, review: '"Искал способ организовать детский праздник для дочки, и ваш сайт отлично справился с этой штукой. Очень удобно, что можно сразу выбрать место и продумать оформление. Отдельное спасибо за рекомендации по тематике праздника — получилось ярко и весело! Родители тоже оценили"', name: 'Александр Петров', role: 'Помощник организатора', img: ReviewIcon5},]

    return (
        <div className={styles.homePage}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1 className={styles.text}>Собирайтесь с близкими ярко и красиво</h1>
                </div>
                <div className={styles.inputDiv}>
                    <select className={styles.select}>
                        <option>Выбрать категорию</option>
                        <option>wasd</option>
                        <option>wasd</option>
                        <option>wasd</option>
                    </select>
                    <input placeholder='Астана' className={styles.input} />
                    <button className={styles.btn}>Найти</button>
                </div>
            </div>
            <div className={styles.slider}>
                <CustomSlider title='Предложения по Категориям' count={10} elements={events} />
                <CustomSlider title='Популярные места' count={100} elements={popularPlace} />
            </div>
            <div className={styles.discountContainer}>
                <div className={styles.discountBg}>
                    <img src={DiscountIcon} alt='icon' />
                </div>
                <div className={styles.discountText}>
                    <h1>Первое мероприятие со скидкой 20%!</h1>
                    <p>Новым клиентам предоставляется скидка 20% на первое мероприятие при бронировании через нашу платформу. Отличный способ попробовать наш сервис с выгодой!</p>
                    <div className={styles.discountBtnDiv}>
                        <button>Забронировать</button>
                    </div>
                </div>
            </div>
            <div className={styles.reviewsContainer}>
                <h1 className={styles.reviewsTitle}>Что говорят наши пользователи?</h1>
                <div className={styles.reviews}>
                    {reviews.map(i => {
                        return (
                            <div className={styles.reviewCard}>
                                <span className={styles.review}>{i.review}</span>
                                <img src={i.img} alt='icon'/>
                                <h1 className={styles.reviewName}>{i.name}</h1>
                                <span className={styles.role}>{i.role}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home