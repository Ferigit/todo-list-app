import React from 'react'
import { Container } from '../../components'
import { useLocation, useNavigate } from 'react-router-dom'
import { Image } from '../../components'

const TaskDetail = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const { state } = location
    const { task: { id, createdAt } } = state

    return (
        <Container>
            <Image onClick={() => navigate(-1)} src="/assets/images/back.png" width={30} height={25} />
            <h2>Task detail is: </h2>
            <div>Task is :{id}</div>
            <div>Task created at :{createdAt?.toLocaleString()}</div>
        </Container>
    )
}

export default TaskDetail
