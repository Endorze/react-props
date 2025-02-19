import styles from "./header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>Hello, welcome to my website!</h2>
            <p>Today we're learning how to use props to pass data.</p>
            <h3 className={styles.subtitle}>My favorite movies of all time!</h3>
        </header>
    )
}

export default Header;