import { Link } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative bg-white overflow-hidden">
            {/* Hero Section */}
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Healthcare made</span>{' '}
                            <span className="block text-primary xl:inline">simple and smart</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Book appointments with top doctors, manage your health records, and order medicines online. Experience the future of healthcare today.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <Link to="/register" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-sky-700 md:py-4 md:text-lg md:px-10">
                                    Get Started
                                </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <Link to="/login" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10">
                                    Log In
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Doctor"
                />
            </div>

            {/* Features Section */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A better way to manage health
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                        📅
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Easy Scheduling</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Book appointments with our top specialists in just a few clicks. Choose your preferred time and date.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                        🛡️
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure Records</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Your medical history is safe with us. Access your records anytime, anywhere with bank-grade security.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                        💊
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Online Pharmacy</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Order medicines directly from our platform and get them delivered to your doorstep.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                        📞
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">24/7 Support</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Our dedicated support team is available round the clock to assist you with any queries.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">What our patients say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <p className="text-gray-600 mb-4">"The best clinic experience I've ever had. Booking was a breeze and the doctors are amazing."</p>
                            <div className="font-bold text-gray-900">- Sarah Jenkins</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <p className="text-gray-600 mb-4">"I love being able to access my records online. It makes managing my family's health so much easier."</p>
                            <div className="font-bold text-gray-900">- Michael Chen</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <p className="text-gray-600 mb-4">"Highly recommend Smart Clinic. The staff is professional and the facility is top-notch."</p>
                            <div className="font-bold text-gray-900">- Emily Davis</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
