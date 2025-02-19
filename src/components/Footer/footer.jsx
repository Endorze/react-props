import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                &copy; 2025 Carlex Corporation Movies
                <h2>Enjoy our movies in 7Dx</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora temporibus voluptatum perspiciatis aspernatur corrupti quam? Exercitationem nulla dignissimos excepturi dolore unde tenetur debitis sed? Tempora laboriosam cum saepe libero quidem?</p>
            </div>
        </footer>
    )
}

export default Footer;