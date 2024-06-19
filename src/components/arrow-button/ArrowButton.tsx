import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { MouseEventHandler } from 'react';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */

type ArrowButtonProps = {
	onClick?: MouseEventHandler<HTMLDivElement>;
	isOpenAtricleParams: boolean;
};
export const ArrowButton = ({
	onClick,
	isOpenAtricleParams,
}: ArrowButtonProps) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, {
				[styles.container_open]: isOpenAtricleParams,
			})}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, {
					[styles.arrow_open]: isOpenAtricleParams,
				})}
			/>
		</div>
	);
};
