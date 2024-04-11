import { useEffect } from 'react';
import styles from './AvatarList.module.css';
import Headling from '../../components/Headling/Headling';

export function AvatarList() {

	useEffect(() => {
		const savedAvatar = localStorage.getItem('selectedAvatar');
		if (savedAvatar) {
			document.getElementById('avatar')!.src = savedAvatar;

		}
	}, []);

	const handleAvatarClick = (event) => {
	
		const selectedAvatar = event.target.src;
		localStorage.setItem('selectedAvatar', selectedAvatar);
		document.getElementById('avatar')!.src = selectedAvatar;
	};
	const avatarList = ['/Avatar.png', '/Avatar1.png', '/Avatar2.png', '/Avatar3.png', '/Avatar4.png', '/Avatar5.png'];

	return (
		<>
			<Headling className={styles['headling']}>Выбрать аватарку</Headling>
			{avatarList.map((avatar, index) => (
				<img key={index} className={styles['avatar']} src={avatar} alt="Аватарка" onClick={handleAvatarClick} />
			))}
		</>
	);
}