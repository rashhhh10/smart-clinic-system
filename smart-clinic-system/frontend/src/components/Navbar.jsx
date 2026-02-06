import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link to="/" className="flex-shrink-0 flex items-center text-2xl font-bold text-primary">
                            SmartClinic
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
                        <Link to="/services" className="text-gray-700 hover:text-primary">Services</Link>
                        <Link to="/about" className="text-gray-700 hover:text-primary">About</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
                        {user ? (
                            <>
                                <Link to="/dashboard" className="text-gray-700 hover:text-primary">Dashboard</Link>
                                <span className="text-sm font-medium text-gray-500">Hi, {user.name}</span>
                                <button
                                    onClick={handleLogout}
                                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-sky-600 transition"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-gray-700 hover:text-primary">Login</Link>
                                <Link to="/register" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-sky-600 transition">
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
