
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/Cart.slice';
import { AppDispatch } from '../../store/store';
import styles from './PizzaCard.module.css';
import { PizzaCardProps } from './PizzaCard.props';
import { MouseEvent } from 'react';
import Button from '../Button/Button';

function PizzaCard(props: PizzaCardProps) {
	const dispatch = useDispatch<AppDispatch>();
	
	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartActions.add(props.id));
	};
	

	return (
		<>
			
			<div className={styles['card']}>
				<div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}} > 
				</div>
				<div className={styles['card-info']}>
					<div className={styles['price']}>
						<div>Цена</div>
						<div>{props.price}&nbsp;
							<span className={styles['currency']}>₽</span></div>
					</div>
					<div className={styles['rating']} >
						<div>Рейтинг</div>
						<div className={styles['rating-value']}>{props.rating}
							<img src="/star-icon.svg" alt="иконка звезды"/></div>
					</div>

					<div className={styles['description']}>
						<ul>Состав:</ul>
						<li>{props.description}</li>
					</div>
				</div><div className={styles['header']}>
					<Button appearence='big' onClick={add}><img src="/Bag-icon.svg" alt="Икока добавить в корзину"/> В корзину</Button>
				</div>
			</div>
		</>
	);
}
export default PizzaCard;