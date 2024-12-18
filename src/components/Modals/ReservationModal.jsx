import { useEffect, useState } from 'react'
import styles from '../../styles/ReservationModal.module.css'
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'


const ReservationModal = ({ setReservationModal, setIsSuccessModal, selectedPlacePrice }) => {
    const [total, setTotal] = useState(0);
    const [selectedDecoration, setSelectedDecoration] = useState(null);
    const [guestCount, setGuestCount] = useState('');
    const [duration, setDuration] = useState('1');
    const [comment, setComment] = useState('');
    const [selectedHelpers, setSelectedHelpers] = useState({
        leading: false,
        designer: false,
        photographer: false,
    });
    const [date, setDate] = useState({
        day: '1',
        month: 'Январь',
        year: '2024',
    });

    const handleDecorationChange = (value) => {
        setSelectedDecoration(value);
    };

    const handleHelperChange = (helper) => {
        setSelectedHelpers((prev) => ({
            ...prev,
            [helper]: !prev[helper],
        }));
    };

    const handleClick = () => {
        setReservationModal(false);
        setIsSuccessModal(true)
    };

    const handleDayChange = (e) => {
        if (e < 1 || e > 31) return
        setDate(prev => ({ ...prev, day: e }));
    };

    const handleDuration = (e) => {
        if (e.target.value < 1) return
        setDuration(e.target.value);
    }

    const handleGuestCount = (e) => {
        if (e.target.value < 1) return
        setGuestCount(e.target.value);
    }

    const getTotal = () => {
        let total = 0;

        if (selectedDecoration === 'default') {
            total += 1000;
        }

        if (selectedHelpers.leading) {
            total += 50000;
        }

        if (selectedHelpers.designer) {
            total += 50000;
        }

        if (selectedHelpers.photographer) {
            total += 50000;
        }

        total += guestCount * 2000;

        total += selectedPlacePrice * duration

        setTotal(total);
    }

    useEffect(() => {
        getTotal()
    }, [selectedDecoration, selectedHelpers, guestCount, duration])

    return (
        <div className={styles.modal} onClick={() => setReservationModal(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.title}>
                    <h1>БРОНИРОВАНИЕ</h1>
                </div>
                <div className={styles.form}>
                    <div className={styles.container}>
                        <p>Дата мероприятия:</p>
                        <div className={styles.inputDiv}>
                            <input
                                type="number"
                                className={styles.input}
                                max={'31'}
                                min={1}
                                value={date.day}
                                onChange={(e) => handleDayChange(e.target.value)}
                            />

                            <select className={styles.input} onChange={(e) => setDate({ ...date, month: e.target.value })}>
                                <option value=""></option>
                                <option value="Январь">Январь</option>
                                <option value="Февраль">Февраль</option>
                                <option value="Март">Март</option>
                                <option value="Апрель">Апрель</option>
                                <option value="Май">Май</option>
                                <option value="Июнь">Июнь</option>
                                <option value="Июль">Июль</option>
                                <option value="Август">Август</option>
                                <option value="Сеньтябрь">Сеньтябрь</option>
                                <option value="Октябрь">Октябрь</option>
                                <option value="Ноябрь">Ноябрь</option>
                                <option value="Декабрь">Декабрь</option>
                            </select>

                            <input
                                type="number"
                                className={styles.input}
                                maxLength={4}
                                value={date.year}
                                onChange={(e) => setDate({ ...date, year: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p>Продолжительость:</p>
                        <input
                            type="number"
                            className={`${styles.input} ${styles.inputTime}`}
                            value={duration}
                            onChange={handleDuration}
                        />
                    </div>
                    <div className={styles.container}>
                        <p>Количество гостей:</p>
                        <input
                            type="number"
                            className={`${styles.input} ${styles.quantity}`}
                            value={guestCount}
                            onChange={handleGuestCount}
                        />
                    </div>
                    <div className={styles.container}>
                        <p>Допольнительные пожелания:</p>
                        <textarea 
                        type="text" 
                        className={`${styles.input} ${styles.textarea}`} 
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        />
                    </div>
                    <div className={styles.choice}>
                        <div>
                            <p>Выбор помощников:</p>
                            <div className={styles.choiceDiv}>
                                <CustomCheckbox
                                    isChecked={selectedHelpers.leading}
                                    onChange={() => handleHelperChange('leading')}
                                />
                                <label htmlFor="leading">Ведущий</label>
                            </div>
                            <div className={styles.choiceDiv}>
                                <CustomCheckbox
                                    isChecked={selectedHelpers.designer}
                                    onChange={() => handleHelperChange('designer')}
                                />
                                <label htmlFor="designer">Дизайнер</label>
                            </div>
                            <div className={styles.choiceDiv}>
                                <CustomCheckbox
                                    isChecked={selectedHelpers.photographer}
                                    onChange={() => handleHelperChange('photographer')}
                                />
                                <label htmlFor="photographer">Фотограф</label>
                            </div>
                        </div>
                        <div>
                            <p>Выбор декораций:</p>
                            <div className={styles.choiceDiv}>
                                <CustomCheckbox
                                    isChecked={selectedDecoration === 'default'}
                                    onChange={() => handleDecorationChange('default')}
                                />
                                <label htmlFor="default">По умолчанию</label>
                            </div>
                            <div className={styles.choiceDiv}>
                                <CustomCheckbox
                                    isChecked={selectedDecoration === 'notChoose'}
                                    onChange={() => handleDecorationChange('notChoose')}
                                />
                                <label htmlFor="notChoose">Не выбирать</label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.total}>
                        Итоговая стоимость: <input type="text" className={styles.input} value={total} />
                    </div>
                    <div className={styles.btnDiv}>
                        <button className={styles.btn} onClick={handleClick}>Забронировать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservationModal