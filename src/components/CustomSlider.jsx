import Slider from "react-slick";

import styles from "../styles/CustomSlider.module.css";

const CustomArrow = ({ className, style, onClick, direction }) => {
    return (
        <div
            className={`${styles.arrow} ${direction === "prev" ? styles.prev : styles.next
                }`}
            onClick={onClick}
            style={{ ...style }}
        >
            <span className={styles.arrowIcon}>{direction === "prev" ? "«" : "»"}</span>
        </div>
    );
};

const CustomSlider = ({ title, count, elements }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <CustomArrow direction="prev" />,
        nextArrow: <CustomArrow direction="next" />,
        dotsClass: `${styles.customDots}`,
        customPaging: (i) => (
            <div
                className={styles.dots}
            >
                {i + 1}
            </div>
        ),
    };

    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.titleDiv}>
                <p className={styles.titleDiv}>{title}</p>
                <p>Посмотреть все ({count})</p>
            </div>
            <Slider {...settings}>
                {elements.map(i => {
                    return (
                        <div key={i.id} className={styles.sliderElement}>
                            <img src={i.img} alt="icon" className={styles.icon}/>
                            <span>{i.name}</span>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default CustomSlider;
