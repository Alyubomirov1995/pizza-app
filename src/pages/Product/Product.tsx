import { Await, useLoaderData} from 'react-router-dom';
import type { Product } from '../../intefaces/product.interface';
import { Key, Suspense, useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { PREFIX } from '../../helpers/API.constants';
import PizzaCard from '../../components/PizzaCard/PizzaCard';
import Headling from '../../components/Headling/Headling';
import styles from './Product.module.css';


export function Product() {
	const [products, setProducts] = useState<Product[]>([]);

	const getMenu = async () => {
		try {
			const res = await fetch(`${PREFIX}/products`);
			if (!res.ok) {
				return;
			}
			const data = await res.json() as Product[];
			setProducts(data);
		} catch (e) {
			console.error(e);
			return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);

	const data = useLoaderData() as {
      id: Key | null | undefined; data: Product
};
	return <>
		<Suspense fallback={
			<ClipLoader className={styles['s']}
				size={50}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		}>
			<Await
				resolve={data.data}
			>
				{({data} : { data: Product }) => (
					<>
						<Headling className={styles['headling']}>{data.name}</Headling></>
				)}
			</Await>
			<div>
				{products.map(p => (
					<PizzaCard
						key={p.id}
						id={p.id}
						name={p.name}
						rating={p.rating}
						price={p.price}
						image={p.image} 
						description={p.ingredients.join(', ')}				/>
				) )}
				
			</div>
         
		</Suspense>
		
	</>;

} 