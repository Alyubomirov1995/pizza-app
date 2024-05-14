import {Outlet} from 'react-router-dom';
import styles from './AuthLayout.module.scss';


export function AuthLayout() {
	return <div className={styles['layout']}>
		<div className={styles['logo']}>
			<img src="/Logo.svg" alt="Логотип приложения" />
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>;
}