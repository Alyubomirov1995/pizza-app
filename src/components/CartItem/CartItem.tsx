import styles from './CartItem.module.scss';
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
		dispatch(cartActions.remove(props.id));
	};

	const remove = () => {
		dispatch(cartActions.delete(props.id));
	};


	return (
		<div className={styles['item']}>
			<div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}> </div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['price']}>{props.price}&nbsp;₽</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['minus']} onClick={descrease}>
					<img src="/minus-icon.svg" alt="Икока удалить из корзины"/>
				</button>
				<div className={styles['number']}>{props.count}</div>
				<button className={styles['plus']} onClick={increase}>
					<img src="/plus-icon.svg" alt="Икока добавить в корзину"/>
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img src="/x-icon.svg" alt="Икока удалить все"/>
				</button>
			</div>
		</div>
	);
}
export default CartItem;
