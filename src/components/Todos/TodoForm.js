import styles from './TodoForm.module.css'
import {useState} from "react";
import Button from "../UI/Button";
function TodoForm({addTodo}) {
    const [text, setText] = useState('')
    function handleFormSubmit(event) {
        event.preventDefault()
        addTodo(text)
        setText('')
    }
    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={handleFormSubmit}>
                <input  placeholder="Enter new todo" value={text}
                       onChange={(e) => setText(e.target.value)}/>
                <Button type="submit" title="Submit">Submit</Button>
            </form>
        </div>
    )
}

export default TodoForm