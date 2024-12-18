import Logo from '../../image/loginPage/authLogo.png'

import styles from '../../styles/Register.module.css'

import BackToIcon from '../../image/loginPage/backToIcon.png'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'

const Register = ({setIsAuth}) => {
    const [surname, setSurname] = useState("")
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
    
        // Валидация полей
        if (!name || !email || !phone || !password || !confirmPassword) {
          alert('Все поля должны быть заполнены.');
          return;
        }
    
        if (password !== confirmPassword) {
          alert('Пароли не совпадают.');
          return;
        }
    
        // Данные для отправки на сервер
        const registrationData = {
          name,
          email,
          phone,
          password,
        };
    
        // console.log('Регистрация прошла успешно:', registrationData);
    
        // Здесь можно отправить данные на сервер
        // Например:
        fetch('https://ditcn7.pythonanywhere.com/users/register/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(registrationData),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Ответ от сервера:', data)
            if(data.error) {
                alert(data.error)
            }
            setIsAuth(true)
            navigate('/')
        }
        )
          .catch(error => console.error('Ошибка регистрации:', error));
    
        // alert('Регистрация прошла успешно!');
      };
    return (
        <div className={styles.registerPage}>
            <div className={styles.loginLink}>
                <h1>Регистрация</h1>
                <Link to="/login">
                    <img src={BackToIcon} alt="icon" />
                    Вход в систему
                </Link>
            </div>
            <div className={styles.container}>
                <img src={Logo} alt='logo' className={styles.logo} />
                <div className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="surname">Фамилия</label>
                        <input onChange={e => setSurname(e.target.value)} value={surname} type="text" id='surname' />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Имя</label>
                        <input onChange={e => setName(e.target.value)} value={name} type="text" id='name' />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Телефон</label>
                        <input onChange={e => setPhone(e.target.value)} value={phone} type="text" id='phone' placeholder='+7 xxx xxx xx xx' />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">E-mail</label>
                        <input onChange={e => setEmail(e.target.value)} value={email} type="text" id='email' placeholder='xxxxx@xxxx.com' />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Пароль</label>
                        <input onChange={e => setPassword(e.target.value)} value={password} type="password" id='password' />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword">Подтверждение пароля</label>
                        <input onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}type="password" id='confirmPassword' />
                    </div>
                    <button onClick={handleRegister} className={styles.registerBtn}>Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export default Register