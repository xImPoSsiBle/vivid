import { useNavigate } from 'react-router-dom'
import styles from '../../styles/SuccessModal.module.css'

const SuccessModal = ({ setIsSuccessModal, setIsCancelModal }) => {
  const navigate = useNavigate()

  const clickReturn = () => {
    setIsSuccessModal(false)
    navigate('/')
  }

  const clickCancel = () => {
    setIsSuccessModal(false)
    setIsCancelModal(true)
  }

  return (
    <div className={styles.modal} onClick={() => setIsSuccessModal(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.title}>Бронирование прошло успешно!</span>
        <div className={styles.text}>
          <p>Спасибо, что выбрали Vivid Occasions! Мы уже начали подготовку к вашему мероприятию, чтобы сделать его уникальным.</p>
        </div>
        <div className={styles.sendMail}>
          <span>Отправить подтверждение на почту</span>
        </div>
        <div className={styles.buttons}>
          <button className={`${styles.btn} ${styles.cancel}`} onClick={clickCancel}>Отменить бронь</button>
          <button className={`${styles.btn} ${styles.return}`} onClick={clickReturn}>Вернуться на главную</button>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal