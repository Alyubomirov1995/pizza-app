import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/Cart.slice';
import { CartItemdProps } from './CartItem.props';

function CartItem(props: CartItemdProps) {
	const dispatch = useDispatch<AppDispatch>();
	
	const increase = () => {
		dispatch(cartActions.add(props.id));
	};

	const descrease = () => {
	};

	const remove = () => {
	};


	return (
		<div className={styles['item']}>
			<div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}> </div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['currency']}>{props.price}&nbsp;₽</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['button']} onClick={descrease}>
					<img src="/Bag-icon.svg" alt="Икока удалить из корзины"/>
				</button>
				<div>{props.count}</div>
				<button className={styles['button']} onClick={increase}>
					<img src="/Bag-icon.svg" alt="Икока добавить в корзину"/>
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img src="/Bag-icon.svg" alt="Икока удалить все"/>
				</button>
			</div>
		</div>
	);
}
export default CartItem;
