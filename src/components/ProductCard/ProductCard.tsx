import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/Cart.slice';
import { MouseEvent } from 'react';

function ProductCard(props: ProductCardProps) {
	const dispatch = useDispatch<AppDispatch>();
	
	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartActions.add(props.id));
	};

	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}} > 
					<div className={styles['price']}>
						{props.price}&nbsp;
						<span className={styles['currency']}>₽</span>
					</div>
					<button className={styles['add-to-cart']} onClick={add}>
						<img src="/Bag-icon.svg" alt="Икока добавить в корзину"/>
					</button>
					<div className={styles['rating']}>
						{props.rating}
						<img src="/star-icon.svg" alt="иконка звезды"/>
					</div>
				</div>
				<div className={styles['footer']}>
					<div className={styles['name']}>{props.name}</div>
					<div className={styles['description']}>{props.description}</div>
				</div>
			</div>
		</Link>
	);
}
export default ProductCard;
