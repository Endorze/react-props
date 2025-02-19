import styles from "./header.module.css"

const Header = ({title, subtitle}) => {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.subtitle}>{subtitle}</h3>
        </header>
    )
}

export default Header;