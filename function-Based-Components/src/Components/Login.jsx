import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUrl } from "../Services/Constants";

function Login() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const handleSubmit = async (event) => {
        //     event.preventDefault();
        //     GetLoginData(inputValue).then(data=>{setData(data)})
        //     alert("login successfull")
        //     navigate("./Register")
        //     setInputValue({email:"",password:""})

        try {
            const query = new URLSearchParams(inputValue).toString();
            const response = await fetch(`${registerUrl}?${query}`);
            const data = await response.json();

            if (data.length > 0) {
                setError("");
                alert("Login successful");
                navigate("/HomePage");
                setInputValue({ email: "", password: "" });
                localStorage.setItem("credentials",JSON.stringify(data))
            } else {
                setError("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Login failed:", error);
            setError("Login failed. Please check your credentials.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                border: "2px solid black",
                padding: "20px",
                maxWidth: "300px",
                margin: "0 auto"
            }}
        >
            <h1>Login</h1>

            <label htmlFor="email">Email</label>
            <input
                type="email"
                placeholder="User email"
                id="email"
                name="email"
                onChange={handleChange}
                value={inputValue.email}
                required
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="User password"
                id="password"
                name="password"
                onChange={handleChange}
                value={inputValue.password}
                required
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">Submit</button>

            <p>
                Don't have an account?{" "}
                <span
                    style={{
                        color: "blue",
                        cursor: "pointer",
                        textDecoration: "underline"
                    }}
                    onClick={() => navigate("/Register")}
                >
                    Signup
                </span>
            </p>
        </form>
    );
}

export default Login;
