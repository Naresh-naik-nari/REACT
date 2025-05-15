import { useState } from "react";
import { PostRegister } from "../Services/api";
import { registerUrl } from "../Services/Constants";
import { useNavigate } from "react-router-dom";

function Register() {
    const [inputData, setInputData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate password match
        if (inputData.password !== inputData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            const emailCheck = await fetch(`${registerUrl}?email=${inputData.email}`);
            const existingUsers = await emailCheck.json();

            if (existingUsers.length > 0) {
                alert("Email already exists. Please use another one.");

                return;
            }

            const { confirmPassword, ...dataToSend } = inputData;

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataToSend)
            };

            const response = await PostRegister(options);
            console.log(response)
            setInputData({ username: "", email: "", password: "", confirmPassword: "", gender: "" });
            localStorage.setItem("credentials",JSON.stringify(data))
            alert("data posted")
            navigate("/login")

        } catch (err) {
            console.error("Error during registration:", err);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <form onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                border: "2px solid black",
                padding: "20px",
                maxWidth: "300px",
                margin: "0 auto"
            }}
        >
            <h2>Register</h2>

            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                id="username"
                value={inputData.username}
                onChange={handleChange}
                required
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                value={inputData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                value={inputData.password}
                onChange={handleChange}
                required
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={inputData.confirmPassword}
                onChange={handleChange}
                required
            />

            <label htmlFor="gender">Gender</label>
            <select
                name="gender"
                id="gender"
                value={inputData.gender}
                onChange={handleChange}
                required
            >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <button type="submit">Submit</button>
        </form>
    );
}

export default Register;
