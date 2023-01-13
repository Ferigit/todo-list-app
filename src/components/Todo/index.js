import React from 'react'
import PropTypes from 'prop-types'
import { TD, Image } from '../index';

const Todo = ({ onClick, completed, text, createdAt, handleDeleteTask, handleDetail }) => (
    <>
        <TD
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </TD>

        <TD >{createdAt?.toLocaleString()}</TD>
        <TD onClick={onClick}>
            {completed ? <Image src="/assets/images/tick.png" width={20} height={20} />
                :
                <Image src="/assets/images/red-tick.png" width={20} height={20} />}
        </TD>
        <TD>
            <Image src="/assets/images/bin.png" width={20} height={20} onClick={() => handleDeleteTask()} />
        </TD>
        <TD onClick={handleDetail}>Details</TD>
    </>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
