import { Link } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: 'General Consultation',
        description: 'Expert medical advice from our experienced general practitioners.',
        icon: '🏥',
        price: '$50'
    },
    {
        id: 2,
        title: 'Cardiology',
        description: 'Comprehensive heart care and diagnostic services.',
        icon: '❤️',
        price: '$120'
    },
    {
        id: 3,
        title: 'Pediatrics',
        description: 'Specialized healthcare for infants, children, and adolescents.',
        icon: '👶',
        price: '$80'
    },
    {
        id: 4,
        title: 'Dental Care',
        description: 'Complete scaling, polishing, and dental surgeries.',
        icon: '🦷',
        price: '$100'
    },
    {
        id: 5,
        title: 'Laboratory',
        description: 'Advanced pathology and diagnostic lab services.',
        icon: '🔬',
        price: 'Varies'
    },
    {
        id: 6,
        title: 'Neurology',
        description: 'Diagnosis and treatment of nervous system disorders.',
        icon: '🧠',
        price: '$150'
    }
];

const Services = () => {
    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Medical Services</h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Top-notch healthcare services tailored to your needs.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div key={service.id} className="flow-root bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="px-6 py-8">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white text-2xl mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 tracking-tight">{service.title}</h3>
                                <p className="mt-3 text-base text-gray-500">
                                    {service.description}
                                </p>
                                <div className="mt-6 flex items-center justify-between">
                                    <span className="text-lg font-bold text-primary">{service.price}</span>
                                    <Link to="/booking" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        Book Now &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
