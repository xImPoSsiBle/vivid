
import styles from '../../styles/CustomCheckbox.module.css';

const CustomCheckbox = ({ isChecked = false, onChange }) => {
    return (
        <label className={styles.customCheckbox}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
            />
            <span></span>
        </label>
    );
};

export default CustomCheckbox;
