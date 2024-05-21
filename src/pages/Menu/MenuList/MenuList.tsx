import ProductCard from '../../../components/ProductCard/ProductCard';
import { MenuListProps } from './MenuList.props';
import styles from './MenuList.module.scss';

export function MenuList ({ products}: MenuListProps) {
	return <ul className={styles.card}> {products.map(p => (
		<li className={styles['product-card']}><ProductCard
			key={p.id}
			id={p.id}
			name={p.name}
			description={p.ingredients.join(', ')}
			rating={p.rating}
			price={p.price}
			image={p.image}
		/></li>))}
	</ul>;
}
