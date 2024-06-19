import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';

import { Separator } from '../separator/Separator';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group/RadioGroup';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { Select } from '../select';
import { useOutsideClick } from './hooks/useOutsideClick';

type ArticleParamsFormProps = {
	tempParams: {
		fontFamilyOption: OptionType;
		fontColor: OptionType;
		fontSizeOption: OptionType;
		contentWidth: OptionType;
		backgroundColor: OptionType;
	};
	onTempUpdate: (
		key: keyof ArticleParamsFormProps['tempParams'],
		option: OptionType
	) => void;
	onApply: () => void;
	onReset: () => void;
};

export const ArticleParamsForm = ({
	tempParams,
	onTempUpdate,
	onApply,
	onReset,
}: ArticleParamsFormProps) => {
	const [formState, setFormState] = useState(false);
	const formRef = useRef(null);

	const handleSelectChange = (
		option: OptionType,
		key: keyof ArticleParamsFormProps['tempParams']
	) => {
		onTempUpdate(key, option);
	};

	const handleClickOutside = () => {
		setFormState(false);
	};

	useOutsideClick(formRef, handleClickOutside);

	const handleClick = () => {
		setFormState(!formState);
	};

	return (
		<>
			<ArrowButton onClick={handleClick} formState={formState} />
			<aside
				ref={formRef}
				className={clsx(styles.container, {
					[styles.container_open]: formState,
				})}>
				<form className={styles.form}>
					<div className={styles.topContainer}>
						<Select
							options={fontFamilyOptions}
							title='Шрифт'
							selected={tempParams.fontFamilyOption}
							onChange={(option) =>
								handleSelectChange(option, 'fontFamilyOption')
							}
						/>
						<Select
							options={fontColors}
							selected={tempParams.fontColor}
							onChange={(option) => handleSelectChange(option, 'fontColor')}
						/>
						<RadioGroup
							options={fontSizeOptions}
							title='Шрифт'
							name='FontSize'
							selected={tempParams.fontSizeOption}
							onChange={(option) =>
								handleSelectChange(option, 'fontSizeOption')
							}
						/>
						<Separator />
						<Select
							options={backgroundColors}
							selected={tempParams.backgroundColor}
							onChange={(option) =>
								handleSelectChange(option, 'backgroundColor')
							}
						/>
						<Select
							options={contentWidthArr}
							selected={tempParams.contentWidth}
							onChange={(option) => handleSelectChange(option, 'contentWidth')}
						/>
					</div>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='button'
							onClick={onReset}
							name='resetButton'
						/>
						<Button
							title='Применить'
							type='button'
							onClick={onApply}
							name='applyButton'
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
