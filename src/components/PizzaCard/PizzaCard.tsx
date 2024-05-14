
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/Cart.slice';
import { AppDispatch } from '../../store/store';
import styles from './PizzaCard.module.scss';
import { PizzaCardProps } from './PizzaCard.props';
import {MouseEvent, useEffect, useState } from 'react';
import Button from '../Button/Button';
import { useParams } from 'react-router-dom';
import { PREFIX } from '../../helpers/API.constants';
import { Product } from '../../intefaces/product.interface';

function PizzaCard(props: PizzaCardProps) {
	const dispatch = useDispatch<AppDispatch>();
	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartActions.add(props.id));
	};

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
			return;
		}
	};

	useEffect(() => {
		if (id) {
			getProduct(parseInt(id, 10));
		}
	}, [id]);

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
						{product !== undefined && product.ingredients.map((ingredient, index) => (
							<li key={index}>{ingredient}</li>
						))}
						
					</div>
				</div><div className={styles['header']}>
					<Button appearence='big' onClick={add}><img src="/Bag-icon.svg" alt="Икока добавить в корзину"/> В корзину</Button>
				</div>
			
			</div>
		</>
	);
}
export default PizzaCard;