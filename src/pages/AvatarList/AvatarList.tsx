import  { useEffect } from 'react';
import styles from './AvatarList.module.css';
import Headling from '../../components/Headling/Headling';

export function AvatarList() {

	useEffect(() => {
		const savedAvatar = localStorage.getItem('selectedAvatar');
		if (savedAvatar) {
			document.getElementById('avatar').src = savedAvatar;
		}
	}, []);

	const handleAvatarClick = (event) => {
		const selectedAvatar = event.target.src;
		localStorage.setItem('selectedAvatar', selectedAvatar);
		document.getElementById('avatar').src = selectedAvatar;
	};

	return (
		<>
			<Headling className={styles['headling']}>Выбрать аватарку</Headling>
			<div>
				<img className={styles['avatar']} src="/Avatar.png" alt="Аватарка" onClick={handleAvatarClick} />
				<img className={styles['avatar']} src="/Avatar1.png" alt="Аватарка" onClick={handleAvatarClick} />
				<img className={styles['avatar']} src="/Avatar2.png" alt="Аватарка" onClick={handleAvatarClick} />
				<img className={styles['avatar']} src="/Avatar3.png" alt="Аватарка" onClick={handleAvatarClick} />
				<img className={styles['avatar']} src="/Avatar4.png" alt="Аватарка" onClick={handleAvatarClick} />
				<img className={styles['avatar']} src="/Avatar5.png" alt="Аватарка" onClick={handleAvatarClick} />
			</div>
		</>
	);
}
