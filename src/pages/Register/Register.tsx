
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from '../Login/Login.module.css';
import { FormEvent, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { UserActions, register } from '../../store/user.slice';


export type RegisterForm = {
   email: {
      value: string;
   };
   password: {
      value: string;
   };
   name: {
      value: string;
   };
}

export function Register() {
	const navigate = useNavigate(); 
	const dispatch = useDispatch<AppDispatch>();
	const { jwt, RegisterErrorMessage } = useSelector((s: RootState) => s.user);


	useEffect(() => {
		if (jwt) {
			navigate('/');
		}
	}, [jwt, navigate]);
   

	const submit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(UserActions.clearRegisterError());
		const target = e.target as typeof e.target & RegisterForm;
		const { email, password, name } = target;
		dispatch(register({ email: email.value, password: password.value, name: name.value}));
	};
   

	return <div className={styles['login']}>
		<Headling>Регистрация</Headling>
		{RegisterErrorMessage && <div className={styles['error']}>{RegisterErrorMessage}</div>}
		<form className={styles['form']} onSubmit={submit}>
			<div>
				<label className={styles['field']}
					htmlFor="email">Ваш email</label>
				<Input id="email" name='email' placeholder='Email' />
			</div>
			<div className={styles['field']}>
				<label htmlFor="password">Ваш пароль</label>
				<Input id="password" name='password' type="password" placeholder='Пароль' />
			</div>
			<div className={styles['field']}>
				<label htmlFor="name">Ваше имя</label>
				<Input id="name" name='name' placeholder='name' />
			</div>
			<Button appearence="big">Зарегистрироваться</Button>
		</form>
		<div className={styles['links']}>
			<div>Есть аккаунт?</div>
			<Link to="/auth/login">Войти</Link>
		</div>
	</div>;

}