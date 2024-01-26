import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'

// Imports Pages
import LoginPage from '../pages/login/loginPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />
    },
    {
        path: '/home',
        element: <p>Hello Home</p>
    }
]);

export default router