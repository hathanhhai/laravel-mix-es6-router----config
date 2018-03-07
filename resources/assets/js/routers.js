import React from 'react';
import UserList from './pages/users/UserLists'
import Home from './pages/homes/Home';
const routes = [
    {
        path:'/administrator/',
        exact:true,
        main:()=> <Home/>
    },
    {
        path:'/administrator/users-list',
        exact:false,
        main:()=> <UserList/>
    }

   
];

export default routes;