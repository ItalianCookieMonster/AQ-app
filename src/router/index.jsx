
import { createBrowserRouter } from 'react-router-dom';

import Questions from '@/pages/Questions/Questions';
import Form from '@/pages/Form/Form';
import Welcome from '@/pages/Welcome/Welcome';
import Homepage from '@/pages/Hompage/Homepage';
import Layout from '../layout/Layout';
import Layout2 from '../layout/Layout2';

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
                element: <Form/>
            },
            {
                path: '/questions',
                element: <Questions />
            }
        ]
    },
    {
        path: '/home',
        element: <Layout2 />,
        children: [
            {
                path: '/home',
                element: <Homepage />
            }
        ]
    },
])


export default router;