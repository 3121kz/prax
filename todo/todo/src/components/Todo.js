import styles from "../style.module.css";

const Todo = ({todoItem}) => {
    return(<div>
        <div className={styles.item}>
            <h3 className={styles.todoname}> {todoItem} </h3>
            <button className={styles.donebutton}>Done</button>
        </div>
    </div>)
}
export default Todo; 