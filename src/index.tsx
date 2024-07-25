import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LazyAbout} from "./pages/about/About.lazy";
import {LazyShop} from "@/pages/shop/Shop.lazy";
import {Suspense} from "react";


const root = document.getElementById("root");

if(!root) {
    throw new Error('root not found!');
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'Загрузка...'}><LazyAbout/></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'Загрузка...'}><LazyShop/></Suspense>
            },
        ]
    }
]);

container.render(
    <RouterProvider router={router}/>
)