interface IMyProps {
	title: string;
	icon: JSX.Element;
}

const Filter: React.FC<IMyProps> = (props: IMyProps) => {
	return (
		<div className="flex flex-col items-center text-gray-500 hover:text-black hover:font-semibold hover:border-b hover:border-black duration-200 gap-2 py-1 px-3 sm:px-4  text-[15px] sm:text-[16px]">
			<div>{props.icon}</div>
			<div>{props.title}</div>
		</div>
	);
};

export default Filter;
