
import { createBrowserRouter } from 'react-router-dom';


import Welcome from '@/pages/Welcome/Welcome';
import Homepage from '@/pages/Hompage/Homepage';
import Layout from '../layout/Layout';
import Layout2 from '../layout/Layout2';
import ProfileForm from '@/pages/ProfileForm/ProfileForm';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Welcome />
            },
            {
                path: '/form',
                element: <ProfileForm/>
            },
            
        ]
    },
    {
        path: '/home',
        element: <Layout2 />,
        children: [
            {
                path: '/home',
                element: <Homepage />
            },
        ]
    },
])


export default router;