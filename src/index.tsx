import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
	OptionType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const App = () => {
	const [articleParams, setArticleParams] =
		useState<ArticleStateType>(defaultArticleState);
	const [tempParams, setTempParams] =
		useState<ArticleStateType>(defaultArticleState);

	const handleTempUpdate = (key: keyof ArticleStateType, value: OptionType) => {
		setTempParams((prevState) => ({
			...prevState,
			[key]: value,
		}));
	};

	const handleApply = () => {
		setArticleParams(tempParams);
	};

	const handleReset = () => {
		setTempParams(defaultArticleState);
		setArticleParams(defaultArticleState);
	};

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleParams.fontFamilyOption.value,
					'--font-size': articleParams.fontSizeOption.value,
					'--font-color': articleParams.fontColor.value,
					'--container-width': articleParams.contentWidth.value,
					'--bg-color': articleParams.backgroundColor.value,
				} as React.CSSProperties
			}>
			<ArticleParamsForm
				tempParams={tempParams}
				onTempUpdate={handleTempUpdate}
				onApply={handleApply}
				onReset={handleReset}
			/>
			<Article />
		</div>
	);
};

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
