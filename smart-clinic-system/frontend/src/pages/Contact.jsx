import { useState } from 'react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('success');
        setTimeout(() => setFormStatus(null), 3000);
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="relative bg-primary pb-32">
                <div className="absolute inset-0">
                    <img className="w-full h-full object-cover opacity-10" src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Hospital background" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Contact Us</h1>
                    <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
                        Get in touch with us for any inquiries, appointments, or feedback. We are here to help.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Info Card */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Clinic Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-primary">
                                        📍
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                                    <p className="mt-1 text-gray-500">
                                        123 Healthcare Avenue,<br />
                                        Medical District, NY 10001
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-primary">
                                        📞
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Phone Support</h3>
                                    <p className="mt-1 text-gray-500">
                                        +1 (555) 123-4567<br />
                                        Mon-Fri 8am - 8pm
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-primary">
                                        📧
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                                    <p className="mt-1 text-gray-500">
                                        support@smartclinic.com<br />
                                        appointments@smartclinic.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Map */}
                        <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
                            <iframe
                                title="Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841264858953!2d-73.9877312846059!3d40.75797467932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1626354674068!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>

                    {/* Contact Form Details */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        {formStatus === 'success' ? (
                            <div className="rounded-md bg-green-50 p-4 h-full flex items-center justify-center">
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <h3 className="mt-2 text-sm font-medium text-green-800">Message sent successfully!</h3>
                                    <p className="mt-1 text-sm text-gray-500">We'll get back to you soon.</p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                    <input type="text" id="subject" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" placeholder="Appointment Inquiry" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" rows="5" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
