import { Await, useLoaderData} from 'react-router-dom';
import type { Product } from '../../intefaces/product.interface';
import { Suspense } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';


export function Product() {

	const data = useLoaderData() as { data: Product};
	return <>
		<Suspense fallback={
			<ClipLoader
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
						<div>{data.id}</div></>
				)}

			</Await>
         
		</Suspense>
		
	</>;

} 