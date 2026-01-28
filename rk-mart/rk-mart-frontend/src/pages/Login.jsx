import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // In real app: axios.post('http://localhost:8081/api/users/login', formData)
            // Simulating response for demo purposes if backend isn't running perfectly
            const mockResponse = {
                email: formData.email,
                name: formData.email.includes('admin') ? 'Super Admin' : 'Vendor User',
                role: formData.email.includes('admin') ? 'ADMIN' : (formData.email.includes('vendor') ? 'VENDOR' : 'CUSTOMER')
            };

            // Actual API Call (Uncomment when backend is ready)
            // const res = await axios.post('http://localhost:8081/api/users/login', formData);
            // onLogin(res.data);

            onLogin(mockResponse); // Using mock for safety
            if (mockResponse.role === 'ADMIN') navigate('/admin');
            else if (mockResponse.role === 'VENDOR') navigate('/vendor');
            else navigate('/');

        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="form-box">
            <h2>Login to RK Mart</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" required onChange={e => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" required onChange={e => setFormData({ ...formData, password: e.target.value })} />
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    );
};

export default Login;
