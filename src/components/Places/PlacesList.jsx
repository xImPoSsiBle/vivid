import styles from "../../styles/PlacesList.module.css";

const PlaceRender = ({ title, count, elements }) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleDiv}>
                <p className={styles.title}>{title}</p>
                <p>Посмотреть все ({count})</p>
            </div>
            <div className={styles.container}>
                {elements.map(i => {
                    return (
                        <div key={i.id} className={styles.element}>
                            <img src={i.img} alt="icon" className={styles.icon} />
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

export default PlaceRender;
