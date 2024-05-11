import { useNavigate } from "react-router-dom";

const Error = () => {
	const navigate = useNavigate();
	return (
		<h1>
			Error
			<button onClick={() => navigate("/")}>Home</button>
		</h1>
	);
};
export default Error;
