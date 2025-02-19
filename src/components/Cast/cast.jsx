import styles from "./cast.module.css"

const Cast = ({mainActor, supportingActor}) => {
    return (
        <div className={styles.cast}>
            <p>Main actor: {mainActor}</p>
            <p>Supporting Actor: {supportingActor}</p>
        </div>
    )
}

export default Cast;