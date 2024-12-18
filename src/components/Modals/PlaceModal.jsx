import styles from '../../styles/PlaceModal.module.css';

import Weeding1 from '../../image/weedingIcons/weeding1.png'

import CloseIcon from '../../image/Close.png';
import { useEffect, useState } from 'react';

const PlaceModal = ({ setIsModalOpen, setReservationModal, selectedPlaceId, setSelectedPlacePrice }) => {
    const [place, setPlace] = useState({})
    const [placeCategory, setPlaceCategory] = useState(null)

    const handleClick = () => {
        setIsModalOpen(false);
        setReservationModal(true);
    }

    const getPlace = async () => {
        const response = await fetch(`https://ditcn7.pythonanywhere.com/event/events/${selectedPlaceId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();

        setPlace(data);
        setSelectedPlacePrice(data.price);

        switch (data.place_category) {
            case 'cafe':
                setPlaceCategory('Кафе');
                break;
            case 'restaurant':
                setPlaceCategory('Ресторан');
                break;
            case 'hall':
                setPlaceCategory('Зал');
                break;
            default:
                setPlaceCategory(data.place_category);
                break;
        }

    }

    useEffect(() => {
        getPlace();
    }, [selectedPlaceId])

    return (
        <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <span className={styles.close} onClick={() => setIsModalOpen(false)}>
                    <img src={CloseIcon} alt="icon" />
                </span>
                <h1 className={styles.title}>{place.name}</h1>
                <img src={place.photo} alt="icon" className={styles.image} />
                <div className={styles.infoTiteDiv}>
                    <div className={styles.line}></div>
                    <span className={styles.infoTitle}>Информация</span>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.info}>
                    <p>Тип заведения: {placeCategory}</p>
                    <p>Количество мест: {place.capacity}</p>
                    <p>Почасовая ставка: {Math.floor(place.price)}</p>
                    <p>Адрес: {place.address}</p>
                    <button className={styles.btn} onClick={handleClick}>Забронировать</button>
                </div>
            </div>
        </div>
    );
};

export default PlaceModal;
