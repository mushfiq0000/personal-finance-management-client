import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import AddTransaction from "../Pages/AddTransaction";
import MyTransactions from "../Pages/MyTransactions";
import Reports from "../Pages/Reports";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";





const router = createBrowserRouter([
 {
    path: "/",
    Component: HomeLayout,
    children:[
        {
            path:'/',
            Component: Home,
        },
        {
            path: '/add-transaction',
            Component: AddTransaction,
        },
        {
            path: '/my-transactions',
            Component: MyTransactions,
        },
        {
            path: '/reports',
            Component: Reports,
        },
        {
            path:'/login',
            Component: Login,
        },
        {
            path:'/signup',
            Component: SignUp
        },
    ],
 }
]);

export default router;