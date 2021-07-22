import styles from './DNAlabs.module.scss';

export default function DNAlabs(){
    return(
        <div className={styles.DNA_Labs_wrapper}>
            <h2>WORLDWIDE ACCREDITED DNA LAB</h2>
            <div className={styles.images_wrapper}>
            <img src="https://dnaq.com.au/wp-content/uploads/2021/05/accreditations-labs.png.png" alt="DNAImages"/>
            </div>
        </div>
    )
}