import styles from "../../styles/PlacesList.module.css";

const PlaceList = ({ title, count, elements, setIsModalOpen, setSelectedPlaceId }) => {

    const handleClick = (id) => {
        setIsModalOpen(true)
        setSelectedPlaceId(id)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleDiv}>
                <p className={styles.title}>{title}</p>
                <p>Посмотреть все ({count})</p>
            </div>
            <div className={styles.container}>
                {elements.map(i => {
                    return (
                            <div key={i.id} className={styles.element} onClick={() => handleClick(i.id)}>
                                <img src={i.photo} alt="icon" className={styles.icon} />
                                <span>{i.name}</span>
                                <span>★★★★★ 5 (22)</span>
                                <span>{i.seats} мест</span>
                            </div>
                    )
                })}
            </div>

        </div>
    );
};

export default PlaceList;
