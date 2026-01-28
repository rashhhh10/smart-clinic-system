import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <Link to="/" className="brand">
                <img src="/logo.jpg" alt="RK MART" style={{ height: '50px', marginRight: '10px' }} />
            </Link>
            <div className="nav-links">
                {user ? (
                    <>
                        <span>Welcome, {user.name} ({user.role})</span>
                        {user.role === 'ADMIN' && <Link to="/admin">Admin Panel</Link>}
                        {user.role === 'VENDOR' && <Link to="/vendor">Vendor Dashboard</Link>}
                        <button onClick={() => { onLogout(); navigate('/login'); }}>Logout</button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
