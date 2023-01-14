import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions'
import { Button, Input, Form } from '../../components';

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <Form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            dispatch(addTodo(input.value))
            input.value = ''
        }}>
            <Input id="input" ref={node => {
                input = node
            }} placeholder="Enter title" />
            <Button id="submit-add" type="submit">
                Add Todo
            </Button>
        </Form>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo
