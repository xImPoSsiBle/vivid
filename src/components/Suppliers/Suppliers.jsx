import styles from '../../styles/Suppliers.module.css'
import SuppliersList from './SuppliersList'

import DesignerIcon from '../../image/designsIcon.png'
import PhotograpghersIcon from '../../image/photographersIcon.png'
import PresentersIcon from '../../image/presentersIcon.png'

import Designer1 from '../../image/suppliersIcons/designer1.png'
import Designer2 from '../../image/suppliersIcons/designer2.png'
import Designer3 from '../../image/suppliersIcons/designer3.png'
import Designer4 from '../../image/suppliersIcons/designer4.png'

import Photographer1 from '../../image/suppliersIcons/photographer1.png'
import Photographer2 from '../../image/suppliersIcons/photographer2.png'
import Photographer3 from '../../image/suppliersIcons/photographer3.png'
import Photographer4 from '../../image/suppliersIcons/photographer4.png'

import Leading1 from '../../image/suppliersIcons/leading1.png'
import Leading2 from '../../image/suppliersIcons/leading2.png'
import Leading3 from '../../image/suppliersIcons/leading3.png'
import Leading4 from '../../image/suppliersIcons/leading4.png'
import { useRef } from 'react'

const Suppliers = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    const designders = [{ id: 1, name: 'Алия Саулетова', city: 'Астана', img: Designer1 }, { id: 2, name: 'Тимур Жаксылыков', city: 'Астана', img: Designer2 }, { id: 3, name: 'Лейла Бекмуханова', city: 'Астана', img: Designer3 }, { id: 4, name: 'Мадияр Ермеков', city: 'Астана', img: Designer4 },]

    const photographers = [{ id: 1, name: 'Асель Кайратова', city: 'Астана', img: Photographer1 }, { id: 2, name: 'Нурлан Алтынбеков', city: 'Астана', img: Photographer2 }, { id: 3, name: 'Амина Сатыбалды', city: 'Астана', img: Photographer3 }, { id: 4, name: 'Диас Шарипов', city: 'Астана', img: Photographer4 },]

    const leadings = [{ id: 1, name: 'Динара Кенжебекова', city: 'Астана', img: Leading1 }, { id: 2, name: 'Рустам Сарсенбаев', city: 'Астана', img: Leading2 }, { id: 3, name: 'Камиля Айдарова', city: 'Астана', img: Leading3 }, { id: 4, name: 'Алишер Нурсеитов', city: 'Астана', img: Leading4 },]


    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className={styles.suppliersContainer}>
            <div className={styles.hero}>
                <div className={styles.title}>
                    <h1 className={styles.text}>Наши помощники</h1>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.categoryContainer}>
                    <h1>Категории помощников</h1>
                    <div className={styles.category}>
                        <div className={styles.categoryItem} onClick={() => scrollToSection(section1Ref)}>
                            <img src={DesignerIcon} alt='icon' />
                            <p>Дизайнеры</p>
                        </div>
                        <div className={styles.categoryItem} onClick={() => scrollToSection(section2Ref)}>
                            <img src={PhotograpghersIcon} alt='icon' />
                            <p>Фотографы</p>
                        </div>
                        <div className={styles.categoryItem} onClick={() => scrollToSection(section3Ref)}>
                            <img src={PresentersIcon} alt='icon' />
                            <p>Ведущие</p>
                        </div>
                    </div>
                </div>
                <SuppliersList items={designders} title={'Дизайнеры'} ref={section1Ref} />

                <SuppliersList items={photographers} title={'Фотографы'} ref={section2Ref} />

                <SuppliersList items={leadings} title={'Ведущие'} ref={section3Ref} />
            </div>
        </div>
    )
}

export default Suppliers