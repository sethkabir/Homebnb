import { IoKeyOutline } from "react-icons/io5"; //new
import { CiMountain1 } from "react-icons/ci"; //top of the world
import { AiOutlineFire } from "react-icons/ai"; //trending
import { TbDisabled2, TbBuildingCastle, TbBeach } from "react-icons/tb"; // adapted //castles //beach front
import {
	GiBowlingStrike,
	GiFarmTractor,
	GiIsland,
	GiCampingTent,
} from "react-icons/gi"; //play //farms //islands //camping
import { RiAncientGateLine } from "react-icons/ri"; // hanoks
import { MdOutlineBedroomParent, MdCabin } from "react-icons/md"; //private rooms //cabins
import { FaSwimmingPool } from "react-icons/fa"; //swimming pools
import Filter from "./Filter";

type FilterIcons = {
	title: string;
	icon: JSX.Element;
}[];

const Filters = () => {
	const sorting: FilterIcons = [
		{ title: "New", icon: <IoKeyOutline /> },
		{ title: "Top of the world", icon: <CiMountain1 /> },
		{ title: "Trending", icon: <AiOutlineFire /> },
		{ title: "Adapted", icon: <TbDisabled2 /> },
		// { title: "Play", icon: <GiBowlingStrike /> },
		// { title: "Hanoks", icon: <RiAncientGateLine /> },
		// { title: "Private rooms", icon: <MdOutlineBedroomParent /> },
		// { title: "Farms", icon: <GiFarmTractor /> },
		// { title: "Cabins", icon: <MdCabin /> },
		// { title: "Swimming pools", icon: <FaSwimmingPool /> },
		// { title: "Castles", icon: <TbBuildingCastle /> },
		// { title: "Beach front", icon: <TbBeach /> },
		// { title: "Islands", icon: <GiIsland /> },
		// { title: "Camping", icon: <GiCampingTent /> },
	];
	return (
		<div className="sm:mx-6 md:mx-10 lg:mx-12">
			<div className="flex justify-start gap-3 sm:gap-4 mt-4 px-3">
				{sorting.map((obj) => (
					<Filter {...obj} />
				))}
			</div>
		</div>
	);
};

export default Filters;
