import { useState } from 'react';

const VendorDashboard = ({ user }) => {
    const [products, setProducts] = useState([
        { id: 101, name: 'Smartphone X', price: 699, stock: 50 },
        { id: 102, name: 'Wireless Buds', price: 129, stock: 15 } // Low Stock
    ]);

    return (
        <div>
            <h1>Vendor Portal: {user.name}</h1>

            {/* Alerts Section */}
            <div style={{ background: '#fff3cd', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
                <strong>⚠ Alerts:</strong>
                <ul>
                    <li>Low Stock Warning: Wireless Buds (Only 15 left!)</li>
                    <li>New Review received on "Smartphone X".</li>
                </ul>
            </div>

            <div className="dashboard-grid">
                <div className="card">
                    <h3>Monthly Sales</h3>
                    <p>$12,450</p>
                </div>
                <div className="card">
                    <h3>New Orders</h3>
                    <p>8</p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>My Products</h2>
                <button className="btn" style={{ width: 'auto' }}>+ Add Product</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>${p.price}</td>
                            <td>{p.stock}</td>
                            <td>
                                <button>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VendorDashboard;
