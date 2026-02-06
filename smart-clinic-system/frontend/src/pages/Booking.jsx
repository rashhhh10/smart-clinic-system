import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [doctor, setDoctor] = useState('');
    const [message, setMessage] = useState('');
    const [bookingStatus, setBookingStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simulate API call or Demo Mode
        setBookingStatus(null);

        // Save to localStorage for Demo Persistence
        const newAppointment = {
            id: Date.now(),
            date: date,
            doctor: doctor === '1' ? 'Dr. Smith (Cardiology)' : doctor === '2' ? 'Dr. Johnson (Pediatrics)' : 'General Physician',
            department: 'General Consultation',
            status: 'Pending'
        };

        const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        localStorage.setItem('appointments', JSON.stringify([...existingAppointments, newAppointment]));

        // In a real app, we would call api.post('/appointments', ...)
        // For Demo/Preview, we just show success
        setTimeout(() => {
            setBookingStatus('success');
            // Reset form
            setDate('');
            setDoctor('');
            setMessage('');
        }, 1000);
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Please Login</h2>
                    <p className="mt-2 text-gray-600">You need to be logged in to book an appointment.</p>
                    <button
                        onClick={() => navigate('/login')}
                        className="mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-sky-700"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        );
    }

    if (bookingStatus === 'success') {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="max-w-xl w-full bg-white rounded-lg shadow-xl p-8 text-center">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                        <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Booking Successful!</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Your appointment has been requested. We will confirm it shortly via email.
                    </p>
                    <button
                        onClick={() => setBookingStatus(null)}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Book Another Appointment
                    </button>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="mt-4 w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="md:flex">
                    <div className="hidden md:block md:w-1/2 bg-primary">
                        <img
                            className="h-full w-full object-cover opacity-90"
                            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1491&q=80"
                            alt="Appointment"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-6 py-8">
                        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Book an Appointment</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Select Department</label>
                                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md border">
                                    <option>General Consultation</option>
                                    <option>Cardiology</option>
                                    <option>Pediatrics</option>
                                    <option>Neurology</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                                <input
                                    type="date"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Select Doctor</label>
                                <select
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md border"
                                    value={doctor}
                                    onChange={(e) => setDoctor(e.target.value)}
                                >
                                    <option value="">Any Available Doctor</option>
                                    <option value="1">Dr. Smith (Cardiology)</option>
                                    <option value="2">Dr. Johnson (Pediatrics)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Reason for Visit</label>
                                <textarea
                                    rows="3"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                >
                                    Confirm Booking
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
