import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div>
			Register
			<Link to={"/login"}>Already have an account? Login</Link>
		</div>
	);
};
export default Register;
