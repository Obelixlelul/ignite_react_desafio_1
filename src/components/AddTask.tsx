import { PlusCircle } from 'phosphor-react'

import styles from './AddTask.module.css'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onAddTask: (taskTitle:string) => void;
}

export function AddTask({onAddTask}: Props){
    
    const [title, setTitle] = useState("");


    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.taskbar}>
                <form className="addTaskForm" onSubmit={handleSubmit}>
                    <input type="text" name="task" id="task" placeholder='Adicione uma nova tarefa' onChange={onChangeTitle} value={title}/>
                    <button className={styles.myButton} type='submit'>
                        <div className={styles.buttonContents}>
                            <span>Criar</span> 
                            <PlusCircle/> 
                        </div>
                    </button>
                </form>
            </div>
            
        </div>
    );
}