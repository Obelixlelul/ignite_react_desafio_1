import styles from '../components/Tasks.module.css'
import { Task } from '../components/Task'
import {ITask} from "../App"
import { ClipboardText } from 'phosphor-react'


interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Tasks({tasks, onDelete, onComplete}: Props) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span><p className={styles.b}>Tarefas criadas</p> <button>{tasksQuantity}</button> </span>
                <span><p className={styles.p}>Concluídas</p> <button>{completedTasks} de {tasksQuantity}</button> </span>
            </div>

            <div className={styles.content}>
                {tasks.map((task)=> (
                    <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete}/>
                ))}

                {tasks.length <= 0 && (
                    <section className={styles.empty}>
                        <ClipboardText size={50} />
                        <div>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </section>
                )}

            </div>

            


        </div>
    );
}