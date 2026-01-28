import { useState } from 'react';

const UserHome = ({ user }) => {
    const [products] = useState([
        { id: 1, name: 'Premium Watch', price: 299, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Gaming Laptop', price: 1299, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Sneakers', price: 89, image: 'https://via.placeholder.com/150' },
    ]);

    return (
        <div>
            <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1>Welcome to RK MART</h1>
                <p>Your one-stop shop for everything!</p>
                <input
                    type="text"
                    placeholder="Search products..."
                    style={{ padding: '0.75rem', width: '50%', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </header>

            <h2>Featured Products</h2>
            <div className="dashboard-grid">
                {products.map(p => (
                    <div className="card" key={p.id} style={{ textAlign: 'left' }}>
                        <img src={p.image} alt={p.name} style={{ width: '100%', borderRadius: '4px' }} />
                        <h3>{p.name}</h3>
                        <p style={{ fontSize: '1.25rem' }}>${p.price}</p>
                        <button className="btn" style={{ marginTop: '1rem' }}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserHome;
