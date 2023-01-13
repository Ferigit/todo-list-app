import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
import Todo from '../Todo'
import { TR, TH, Container } from '../index';
import { deleteTodo } from '../../redux/actions'

let TodoList = ({ todos, onTodoClick, dispatch }) => {

    let navigate = useNavigate();

    const handleClick = (task) => navigate("/task?id=" + task.id, { state: { task: task } });
    const handleDeleteTask = (id) => dispatch(deleteTodo(id))

    if (todos.length === 0) return null
    return (
        <Container>
            <thead>
                <TR>
                    <TH>Name</TH>
                    <TH>Create at</TH>
                    <TH>Action</TH>
                    <TH>Delete</TH>
                </TR>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <TR key={todo.id}>
                        <Todo
                            key={todo.id}
                            {...todo}
                            onClick={() => onTodoClick(todo.id)}
                            handleDetail={() => handleClick(todo)}
                            handleDeleteTask={() => handleDeleteTask(todo.id)}
                        />
                    </TR>
                ))}
            </tbody>
        </Container>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

TodoList = connect()(TodoList)

export default TodoList