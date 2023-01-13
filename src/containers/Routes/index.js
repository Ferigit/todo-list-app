import * as React from 'react';
import {
    BrowserRouter as Router,
    useRoutes,
} from "react-router-dom";
import Home from '../Home';
import TaskDetail from '../TaskDetail';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/task", element: <TaskDetail /> },
    ]);
    return routes;
};


export default function Routes() {

    return (
        <Router>
            <AppRoutes />
        </Router>
    )
}