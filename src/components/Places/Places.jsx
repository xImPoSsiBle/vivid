import styles from '../../styles/Places.module.css'
import PlaceRender from './PlacesList'

import Birthday1 from '../../image/birthdayIcons/birthday1.png'
import Birthday2 from '../../image/birthdayIcons/birthday2.png'
import Birthday3 from '../../image/birthdayIcons/birthday3.png'
import Birthday4 from '../../image/birthdayIcons/birthday4.png'
import Birthday5 from '../../image/birthdayIcons/birthday5.png'
import Birthday6 from '../../image/birthdayIcons/birthday6.png'

import Weeding1 from '../../image/weedingIcons/weeding1.png'
import Weeding2 from '../../image/weedingIcons/weeding2.png'
import Weeding3 from '../../image/weedingIcons/weeding3.png'
import Weeding4 from '../../image/weedingIcons/weeding4.png'
import Weeding5 from '../../image/weedingIcons/weeding5.png'
import Weeding6 from '../../image/weedingIcons/weeding6.png'

import Corporate1 from '../../image/corporateIcons/corporate1.png'
import Corporate2 from '../../image/corporateIcons/corporate2.png'
import Corporate3 from '../../image/corporateIcons/corporate3.png'
import Corporate4 from '../../image/corporateIcons/corporate4.png'
import Corporate5 from '../../image/corporateIcons/corporate5.png'
import Corporate6 from '../../image/corporateIcons/corporate6.png'

import Theme1 from '../../image/ThematicIcons/theme1.png'
import Theme2 from '../../image/ThematicIcons/theme2.png'
import Theme3 from '../../image/ThematicIcons/theme3.png'
import Theme4 from '../../image/ThematicIcons/theme4.png'
import Theme5 from '../../image/ThematicIcons/theme5.png'
import Theme6 from '../../image/ThematicIcons/theme6.png'

import DiscountIcon from '../../image/discountIcon.png'

const Places = () => {

    const birthday = [{ id: 1, name: 'Uchquduq', seats: 310, img: Birthday1 }, { id: 2, name: 'Admiral Pub & Karaoke', seats: 80, img: Birthday2 }, { id: 3, name: 'MILLIONAIRE', seats: 100, img: Birthday3 }, { id: 4, name: 'MANSION', seats: 120, img: Birthday4 }, { id: 5, name: 'Turandot', seats: 80, img: Birthday5 }, { id: 6, name: 'Mary Express', seats: 50, img: Birthday6 },]

    const weeding = [{ id: 1, name: 'FIESTA HALL', seats: 500, img: Weeding1 }, { id: 2, name: 'GRAND HALL ARAY', seats: 260, img: Weeding2 }, { id: 3, name: 'Portofino', seats: 300, img: Weeding3 }, { id: 4, name: 'Традициональ', seats: 120, img: Weeding4 }, { id: 5, name: 'El-Plaza', seats: 300, img: Weeding5 }, { id: 6, name: 'Mahabbat Hall', seats: 250, img: Weeding6 },]

    const corporate = [{ id: 1, name: 'FIESTA HALL', seats: 500, img: Corporate1 }, { id: 2, name: 'GRAND HALL ARAY', seats: 260, img: Corporate2 }, { id: 3, name: 'Portofino', seats: 300, img: Corporate3 }, { id: 4, name: 'Традициональ', seats: 120, img: Corporate4 }, { id: 5, name: 'El-Plaza', seats: 300, img: Corporate5 }, { id: 6, name: 'Mahabbat Hall', seats: 250, img: Corporate6 },]

    const thematic = [{ id: 1, name: 'FIESTA HALL', seats: 500, img: Theme1 }, { id: 2, name: 'GRAND HALL ARAY', seats: 260, img: Theme2 }, { id: 3, name: 'Portofino', seats: 300, img: Theme3 }, { id: 4, name: 'Традициональ', seats: 120, img: Theme4 }, { id: 5, name: 'El-Plaza', seats: 300, img: Theme5 }, { id: 6, name: 'Рыба Пила', seats: 250, img: Theme6 },]

    return (
        <div className={styles.placesContainer}>
            <div className={styles.hero}>
                <div className={styles.title}>
                    <h1 className={styles.text}>Предложения по ресторанам</h1>
                </div>
            </div>
            <div className={styles.inputDiv}>
                <input className={styles.input} type="text" placeholder='Количество гостей' />
                <select className={styles.input}>
                    <option>Тип мероприятия</option>
                    <option>Дни рождения</option>
                    <option>Свадебные мероприятия</option>
                    <option>Корпоратив</option>
                    <option>Тематические вечеринки</option>
                </select>

                <select className={styles.input}>
                    <option>Тип заведения</option>
                    <option>Ресторан</option>
                    <option>Кафе</option>
                    <option>Караоке</option>
                </select>
                <input className={styles.input} type="text" placeholder='Бюджет' />
                <button className={`${styles.input} ${styles.findBtn}`}>Найти</button>
            </div>

            <PlaceRender elements={birthday} title='Дни Рождения' count={22} />

            <PlaceRender elements={weeding} title='Свадебные мероприятия' count={22} />

            <PlaceRender elements={corporate} title='Корпоратив' count={22} />

            <PlaceRender elements={thematic} title='Тематические вечеринки' count={22} />

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
        </div>
    )
}

export default Places