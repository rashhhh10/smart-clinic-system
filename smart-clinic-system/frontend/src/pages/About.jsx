import { Link } from 'react-router-dom';

const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Qualified Doctors', value: '50+' },
    { label: 'Happy Patients', value: '10k+' },
    { label: 'Medical Awards', value: '25+' },
];

const About = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-primary">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover mix-blend-multiply filter brightness-50"
                        src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Hospital walkway"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">We Care About You</h1>
                    <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                        Dedicated to providing the best healthcare services with a personal touch. Our mission is to accessible, affordable, and high-quality medical care to everyone.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-16 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Mission</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Transforming Healthcare with Technology
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            We leverage cutting-edge technology to streamline appointments, manage records secure, and connect patients with the best specialists instantly.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="bg-white px-4 py-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">{stat.label}</dt>
                                <dd className="order-1 text-5xl font-extrabold text-primary">{stat.value}</dd>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-indigo-700">
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Ready to prioritize your health?</span>
                        <span className="block">Start your journey today.</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-indigo-200">
                        Join thousands of satisfied patients who trust us with their health. Sign up now to book your first appointment.
                    </p>
                    <Link
                        to="/register"
                        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
                    >
                        Sign up for free
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
