import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div>
			Login
			<Link to={"/register"}>{`Don't have an account? register`}</Link>
		</div>
	);
};
export default Login;
