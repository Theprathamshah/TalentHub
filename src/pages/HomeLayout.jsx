import { Outlet } from "react-router-dom";

const HomeLayout = () => {
	return (
		<div className=''>
			<nav>This is an navbar</nav>
			<Outlet />
		</div>
	);
};
export default HomeLayout;
