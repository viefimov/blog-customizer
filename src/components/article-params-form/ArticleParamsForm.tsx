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
	defaultArticleState,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group/RadioGroup';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { Select } from '../select';
import { useClose } from './hooks/useClose';

type ArticleParamsFormProps = {
	onApply: (params: typeof defaultArticleState) => void;
	onReset: () => void;
};

export const ArticleParamsForm = ({
	onApply,
	onReset,
}: ArticleParamsFormProps) => {
	const [tempParams, setTempParams] = useState(defaultArticleState);
	const [isOpenAtricleParams, setisOpenAtricleParams] = useState(false);
	const formRef = useRef(null);

	const handleSelectChange = (
		option: OptionType,
		key: keyof typeof defaultArticleState
	) => {
		setTempParams((prevState) => ({
			...prevState,
			[key]: option,
		}));
	};

	useClose({
		isOpenAtricleParams,
		onClose: () => setisOpenAtricleParams(false),
		rootRef: formRef,
	});

	const handleClick = () => {
		setisOpenAtricleParams(!isOpenAtricleParams);
	};

	const handleApplyClick = () => {
		onApply(tempParams);
	};

	const handleResetClick = () => {
		setTempParams(defaultArticleState);
		onReset();
	};

	return (
		<>
			<ArrowButton
				onClick={handleClick}
				isOpenAtricleParams={isOpenAtricleParams}
			/>
			<aside
				ref={formRef}
				className={clsx(styles.container, {
					[styles.container_open]: isOpenAtricleParams,
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
							onClick={handleResetClick}
							name='resetButton'
						/>
						<Button
							title='Применить'
							type='button'
							onClick={handleApplyClick}
							name='applyButton'
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
