import logo from "../assets/logo1.png";
import { TbWorld } from "react-icons/tb";
import { BiMenu } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center border-b">
			{/* Left */}
			<div className=" flex h-20 w-36">
				<img src={logo} className="object-cover -my-10" alt="logo" />
			</div>
			{/* Middle */}
			<div className="flex justify-center items-center relative shadow-sm shadow-slate-400 border rounded-full">
				<input
					type="search"
					placeholder=""
					className="py-2.5 w-[20rem] rounded-full outline-0"
				/>
				<div className="flex justify-between absolute w-full pr-16 pl-6">
					<button className="font-semibold w-full">Place</button>
					<button className="font-semibold border-1 border-x px-6">
						Time
					</button>
					<button className="text-slate-600/60 w-full pl-4">
						Group Size
					</button>
				</div>
				<div className="bg-[#ff3f62] p-2 rounded-full mr-2">
					<FiSearch className="text-white" />
				</div>
			</div>
			{/* Right */}
			<div className="flex items-center pr-3">
				<p>Rent House</p>
				<TbWorld />
				<div className="flex items-center">
					<BiMenu />
					<FaUserCircle />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
