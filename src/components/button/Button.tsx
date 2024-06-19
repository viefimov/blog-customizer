import { Text } from 'components/text';

import styles from './Button.module.scss';

export const Button = ({
	title,
	onClick,
	type,
	name,
}: {
	title: string;
	onClick?: () => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	name?: string;
}) => {
	return (
		<button className={styles.button} type={type} onClick={onClick} name={name}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
