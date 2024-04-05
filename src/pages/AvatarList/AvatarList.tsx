
import styles from './AvatarList.module.css';
import Headling from '../../components/Headling/Headling';

export function AvatarList() {


	return (
		<>
			<Headling className={styles['headling']}>Выбрать аватарку</Headling>
			<div>
				<img className={styles['avatar']} src="/Avatar.png" alt="Аватарка"  />
				<img className={styles['avatar']} src="/Avatar1.png" alt="Аватарка"  />
				<img className={styles['avatar']} src="/Avatar2.png" alt="Аватарка"  />
				<img className={styles['avatar']} src="/Avatar3.png" alt="Аватарка" />
				<img className={styles['avatar']} src="/Avatar4.png" alt="Аватарка"  />
				<img className={styles['avatar']} src="/Avatar5.png" alt="Аватарка"  />
			</div>
		</>);

}