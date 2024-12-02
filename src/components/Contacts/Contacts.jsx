import { useState } from 'react'
import styles from '../../styles/Contacts.module.css'

const Contacts = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = () => {
        setName('')
        setNumber('')
        setMail('')
        setMessage('')

        return alert('Сообщение отправлено!')
    }

    return (
        <div className={styles.contactsContainer}>
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
                <h1>Напишите нам!</h1>
                <div className={styles.form}>
                    <label htmlFor="name">ФИО</label>
                    <input
                        type="text" id='name'
                        className={styles.input}
                        placeholder='Введите ФИО'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className={styles.form}>
                    <label htmlFor="number">Номер телефона</label>
                    <input
                        type="text"
                        id='number'
                        className={styles.input}
                        placeholder='+7 (xxx) xxx xx xx'
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />

                </div>
                <div className={styles.form}>
                    <label htmlFor="mail">Почта</label>
                    <input
                        type="text" id='mail'
                        className={styles.input}
                        placeholder='Введите почту'
                        value={mail}
                        onChange={e => setMail(e.target.value)}
                    />
                </div>
                <div className={styles.form}>
                    <label htmlFor="message">Сообщение</label>
                    <textarea
                        type="text"
                        id='message'
                        className={`${styles.input} ${styles.message} `}
                        placeholder='Текст'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </div>
                <button className={styles.btn} onClick={handleSubmit}>Отправить</button>
            </div>
        </div>
    )
}

export default Contacts