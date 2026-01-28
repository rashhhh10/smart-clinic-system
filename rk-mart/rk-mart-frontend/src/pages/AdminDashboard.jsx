import { useState } from 'react';

const AdminDashboard = () => {
    // Mock Data
    const [vendors, setVendors] = useState([
        { id: 1, name: 'Electro World', email: 'vendor@rk.com', status: 'Active' },
        { id: 2, name: 'Fashion Hub', email: 'style@rk.com', status: 'Pending' }
    ]);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div className="dashboard-grid">
                <div className="card">
                    <h3>Total Revenue</h3>
                    <p>$125,000</p>
                </div>
                <div className="card">
                    <h3>Total Vendors</h3>
                    <p>{vendors.length}</p>
                </div>
                <div className="card">
                    <h3>Pending Complaints</h3>
                    <p>5</p>
                </div>
            </div>

            <h2>Vendor Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Shop Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.map(v => (
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.email}</td>
                            <td>{v.status}</td>
                            <td>
                                <button style={{ marginRight: '5px' }}>Verify</button>
                                <button className="btn" style={{ background: '#e74c3c', width: 'auto' }}>Block</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
