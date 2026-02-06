import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-2">Welcome, {user.name}!</h2>
                        <p className="text-gray-500">You are logged in as {user.role}.</p>
                        {user.role === 'PATIENT' && <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-sky-600">Book Appointment</button>}
                        {user.role === 'DOCTOR' && <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-sky-600">View Appointments</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
