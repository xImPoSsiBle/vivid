import React from 'react';
import styles from '../../styles/SuppliersList.module.css';

const SuppliersList = React.forwardRef(({ items, title }, ref) => {
    return (
        <div className={styles.container} ref={ref}>
            <h1>{title}</h1>
            <div className={styles.list}>
                {items.map((i) => {
                    return (
                        <div className={styles.item} key={i.id}>
                            <img src={i.img} alt="icon" className={styles.icon} />
                            <span>{i.name}</span>
                            <span>{i.city}</span>
                            <span>★★★★★ 5 (22)</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default SuppliersList;