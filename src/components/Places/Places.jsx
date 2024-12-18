import styles from '../../styles/Places.module.css'
import PlaceList from './PlacesList'

import DiscountIcon from '../../image/discountIcon.png'
import { useEffect, useState } from 'react'

const Places = ({ setIsModalOpen, setSelectedPlaceId }) => {
    const [birthday, setBirthday] = useState([]);
    const [wedding, setWedding] = useState([]);
    const [corporate, setCorporate] = useState([]);
    const [party, setParty] = useState([]);

    // const birthday = [{ id: 1, name: 'Uchquduq', seats: 310, img: Birthday1 }, { id: 2, name: 'Admiral Pub & Karaoke', seats: 80, img: Birthday2 }, { id: 3, name: 'MILLIONAIRE', seats: 100, img: Birthday3 }, { id: 4, name: 'MANSION', seats: 120, img: Birthday4 }, { id: 5, name: 'Turandot', seats: 80, img: Birthday5 }, { id: 6, name: 'Mary Express', seats: 50, img: Birthday6 },]

    // const weeding = [{ id: 1, name: 'FIESTA HALL', seats: 500, img: Weeding1 }, { id: 2, name: 'GRAND HALL ARAY', seats: 260, img: Weeding2 }, { id: 3, name: 'Portofino', seats: 300, img: Weeding3 }, { id: 4, name: 'Традициональ', seats: 120, img: Weeding4 }, { id: 5, name: 'El-Plaza', seats: 300, img: Weeding5 }, { id: 6, name: 'Mahabbat Hall', seats: 250, img: Weeding6 },]

    // const corporate = [{ id: 1, name: 'FIESTA HALL', seats: 500, img: Corporate1 }, { id: 2, name: 'GRAND HALL ARAY', seats: 260, img: Corporate2 }, { id: 3, name: 'Portofino', seats: 300, img: Corporate3 }, { id: 4, name: 'Традициональ', seats: 120, img: Corporate4 }, { id: 5, name: 'El-Plaza', seats: 300, img: Corporate5 }, { id: 6, name: 'Mahabbat Hall', seats: 250, img: Corporate6 },]

    // const thematic = [{ id: 1, name: 'FIESTA HALL', seats: 500, img: Theme1 }, { id: 2, name: 'GRAND HALL ARAY', seats: 260, img: Theme2 }, { id: 3, name: 'Portofino', seats: 300, img: Theme3 }, { id: 4, name: 'Традициональ', seats: 120, img: Theme4 }, { id: 5, name: 'El-Plaza', seats: 300, img: Theme5 }, { id: 6, name: 'Рыба Пила', seats: 250, img: Theme6 },]

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://ditcn7.pythonanywhere.com/event/events', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const data = await response.json()
            setBirthday(data.filter(i => i.event_category === 'birthday'))
            setWedding(data.filter(i => i.event_category === 'wedding'))
            setCorporate(data.filter(i => i.event_category === "conference"))
            setParty(data.filter(i => i.event_category === 'party'))
        }

        getData()
    }, [])

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

            <PlaceList elements={birthday} title='Дни Рождения' count={22} setIsModalOpen={setIsModalOpen} setSelectedPlaceId={setSelectedPlaceId} />

            <PlaceList elements={wedding} title='Свадебные мероприятия' count={22} setIsModalOpen={setIsModalOpen} setSelectedPlaceId={setSelectedPlaceId} />

            <PlaceList elements={corporate} title='Корпоратив' count={22} setIsModalOpen={setIsModalOpen} setSelectedPlaceId={setSelectedPlaceId} />

            <PlaceList elements={party} title='Тематические вечеринки' count={22} setIsModalOpen={setIsModalOpen} setSelectedPlaceId={setSelectedPlaceId} />

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