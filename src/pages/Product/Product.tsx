import { Await, useLoaderData, useParams} from 'react-router-dom';
import type { Product } from '../../intefaces/product.interface';
import { Key, Suspense, useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { PREFIX } from '../../helpers/API.constants';
import PizzaCard from '../../components/PizzaCard/PizzaCard';
import Headling from '../../components/Headling/Headling';
import styles from './Product.module.css';


export function Product() {
	const [product, setProduct] = useState<Product>();
	const { id } = useParams<{ id: string }>();

	const getProduct = async (productId: number  ) => {
		try {
			const res = await fetch(`${PREFIX}/products/${productId}`);
			if (!res.ok) {
				return;
			}
			const data = await res.json() as Product;
			setProduct(data);
		} catch (e) {
			console.error(e);
			return;
		}
	};

	useEffect(() => {
		if (id) {
			getProduct(parseInt(id, 10));
		}
	}, [id]);

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
				{product !== undefined && <PizzaCard 
					id={product.id}
					name={product.name}
					rating={product.rating}
					price={product.price}
					image={product.image} 
					description={product.ingredients.join(', ')}	/>}
				
			</div> 
         
		</Suspense>
		
	</>;

} 