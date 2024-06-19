import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { OptionType } from '../../constants/articleProps';

const meta: Meta<typeof Select> = {
	component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectWithState = ({
	options,
	title,
	selected,
	onChange,
}: {
	options: OptionType[];
	title?: string;
	selected: OptionType;
	onChange: (option: OptionType) => void;
}) => {
	return (
		<>
			<Select
				selected={selected}
				onChange={onChange}
				options={options}
				title={title}
			/>
		</>
	);
};

export const SelectStory: Story = {
	render: () => (
		<SelectWithState
			options={[]}
			selected={{
				title: '',
				value: '',
				className: '',
				optionClassName: undefined,
			}}
			onChange={function (): void {
				throw new Error('Function not implemented.');
			}}
		/>
	),
};
