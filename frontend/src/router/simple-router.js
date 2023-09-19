import React from 'react'
// auth


import Recoverpw from '../views/dashboard/auth/recoverpw'
import SignIn from '../views/dashboard/auth/sign-in'
import SignUp from '../views/dashboard/auth/sign-up'
// errors
import Error404 from '../views/dashboard/errors/error404'
import Error500 from '../views/dashboard/errors/error500'
import Maintenance from '../views/dashboard/errors/maintenance'

export const SimpleRouter = [
    {
        path: 'auth/sign-in',
        element: <SignIn />
    },
    {
        path: 'auth/sign-up',
        element: <SignUp />
    },
    
    
    {
        path: 'auth/recoverpw',
        element: <Recoverpw />
    },
    {
        path: 'errors/error404',
        element: <Error404 />
    },
    {
        path: 'errors/error500',
        element: <Error500 />
    },
    {
        path: 'errors/maintenance',
        element: <Maintenance />
    }
]
