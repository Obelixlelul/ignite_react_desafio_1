import { Trash, CheckCircle } from 'phosphor-react'


import styles from '../components/Task.module.css'
import { ITask } from '../App';

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({task, onDelete, onComplete}: Props) {
    
    return (
        <div className={styles.container}>
            <span>
                <button className={styles.checkContainer} onClick={()=>onComplete(task.id)}>
                   {task.isCompleted ? <CheckCircle size={24}/> : <div/>} 
                </button>

                <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>

            </span>
            
            <Trash onClick={() => onDelete(task.id)}/>
        </div>
    );
}