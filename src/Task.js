export const Task = (props) => {
    return (
        <div style={{ backgroundColor: props.status === true && "rgb(155, 245, 155)" }} className='taskNbutton'>
            <h3 className='displaytxt' >{props.taskName}</h3>
            <button className='button3' onClick={() => props.taskCompleted(props.id)} >Completed</button>
            <button className='button2' onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    )
}