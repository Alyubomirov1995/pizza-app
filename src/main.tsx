import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider, createBrowserRouter, defer} from 'react-router-dom';
import { Cart } from './pages/Cart/Cart.tsx';
import { Error } from './pages/Error/Error.tsx';
import { Layout } from './layout/Menu/Layout.tsx';
import { Product } from './pages/Product/Product.tsx';
import { PREFIX } from './helpers/API.ts';
import axios from 'axios';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<>Загрузка...</>}><Menu/></Suspense>
			},
			{
				path: '/cart',
				element: <Cart/>
			},
			{
				path: '/product/:id',
				element: <Product/>,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => { 
					return defer({
						data: new Promise((resolve, reject) => {
							setTimeout(() => {
								axios.get(`${PREFIX}/products/${params.id}`).then(data => resolve(data)).catch(e => reject(e));
							}, 2000);
						})
					});
					// return defer({
					// 	data: axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
					// });
					// await new Promise<void>((resolve) => {
					// 	setTimeout(() => {
					// 		resolve();
					// 	}, 2000);
					// });
					// const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
					// return data;
				}
			}
		]

	},
	{
		path: '/cart',
		element: <Cart/>
	},
	{
		path: '*',
		element: <Error/>
	}

]);
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

console.log('commit');