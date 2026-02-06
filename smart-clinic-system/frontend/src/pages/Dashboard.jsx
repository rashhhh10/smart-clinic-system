import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Load appointments from localStorage for Demo Mode
        const storedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        setAppointments(storedAppointments);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-primary pb-32">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">Dashboard</h1>
                    <p className="mt-2 text-xl text-indigo-100">Welcome back, {user?.name}!</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto -mt-24 px-4 sm:px-6 lg:px-8 pb-12">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden min-h-[500px]">
                    <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-800">
                            {user?.role === 'PATIENT' ? 'Your Appointments' : 'All Clinic Appointments'}
                        </h2>
                        {user?.role === 'PATIENT' && (
                            <Link to="/booking" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-sky-700 transition shadow-md">
                                + New Booking
                            </Link>
                        )}
                    </div>

                    <div className="p-6">
                        {appointments.length === 0 ? (
                            <div className="text-center py-12">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <h3 className="mt-2 text-sm font-medium text-gray-900">No appointments</h3>
                                <p className="mt-1 text-sm text-gray-500">You haven't booked any appointments yet.</p>
                                {user?.role === 'PATIENT' && (
                                    <div className="mt-6">
                                        <Link to="/booking" className="text-primary hover:text-indigo-500 font-medium">
                                            Book your first appointment &rarr;
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {appointments.map((apt) => (
                                            <tr key={apt.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{apt.date}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{apt.doctor}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{apt.department}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {apt.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
