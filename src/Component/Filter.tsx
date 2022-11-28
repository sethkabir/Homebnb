//to pass props but can use "any" if not able to remember
interface IMyProps {
	title: string;
	icon: JSX.Element;
}

const Filter: React.FC<IMyProps> = (props: IMyProps) => {
	return (
		<div className="flex flex-col items-center text-gray-500 hover:text-black hover:font-semibold hover:border-b hover:border-black duration-200 gap-2 py-1 px-3 sm:px-4 ">
			<div className="text-[22px] sm:text-[20px] ">{props.icon}</div>
			<div className="text-[15px] sm:text-[16px] truncate">{props.title}</div>
		</div>
	);
};

export default Filter;
