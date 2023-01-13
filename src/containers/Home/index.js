import React from 'react'
import AddTodo from '../AddTodo'
import VisibleTodoList from '../VisibleTodoList'
import UndoRedo from '../UndoRedo'
import styled from "styled-components";

const FlextContainer = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        padding: 8px;
      }
`;

const Home = () => (
    <FlextContainer>
        <h1>To-Do Application </h1>
        <AddTodo />
        <VisibleTodoList />
        <UndoRedo />
    </FlextContainer>
)

export default Home
