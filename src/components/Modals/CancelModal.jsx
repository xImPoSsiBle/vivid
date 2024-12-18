import { useState } from 'react'
import styles from '../../styles/CancelModal.module.css'
import { useNavigate } from 'react-router-dom'

const CancelModal = ({ setIsCancelModal }) => {
    const [cancel, setCancel] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        setIsCancelModal(false)
        navigate('/')
    }

    return (
        <div className={styles.modal} onClick={() => setIsCancelModal(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {cancel
                    ? <>
                        <p
                            className={styles.title}
                            style={{ width: '100%', marginTop: '33.33px', marginBottom: '24.33px' }}
                        >
                            Ваша бронь успешна отменена!
                        </p>
                        <button
                            className={styles.btn}
                            onClick={handleClick}
                            style={{ width: '170.67px', backgroundColor: 'white' }}
                        >
                            Вернуться на главную
                        </button>
                    </>
                    : <>
                        <p className={styles.title}>Вы действительно хотите свою отменить бронь? </p>
                        <div className={styles.buttons}>
                            <button className={styles.btn} onClick={() => setIsCancelModal(false)}>Нет</button>
                            <button className={styles.btn} onClick={() => setCancel(true)}>Да</button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default CancelModal