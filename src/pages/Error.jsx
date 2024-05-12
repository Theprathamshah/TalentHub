import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
const Error = () => {
	return (
		<Wrapper>
			<div>
				<img src={img} alt='' />
				<h3>Ohh! Page Not Found!</h3>
				<p>{`we can't seem to find the page you are looking for`}</p>
				<Link to={"/dashboard"}>Back Home</Link>
			</div>
		</Wrapper>
	);
};
export default Error;
