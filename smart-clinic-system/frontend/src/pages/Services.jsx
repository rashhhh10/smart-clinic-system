import { Link } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: 'General Consultation',
        description: 'Expert medical advice from our experienced general practitioners.',
        icon: '🏥',
        price: '$50',
        image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        title: 'Cardiology',
        description: 'Comprehensive heart care and diagnostic services.',
        icon: '❤️',
        price: '$120',
        image: 'https://images.unsplash.com/photo-1576091160550-217358c7e618?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        title: 'Pediatrics',
        description: 'Specialized healthcare for infants, children, and adolescents.',
        icon: '👶',
        price: '$80',
        image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 4,
        title: 'Dental Care',
        description: 'Complete scaling, polishing, and dental surgeries.',
        icon: '🦷',
        price: '$100',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 5,
        title: 'Laboratory',
        description: 'Advanced pathology and diagnostic lab services.',
        icon: '🔬',
        price: 'Varies',
        image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 6,
        title: 'Neurology',
        description: 'Diagnosis and treatment of nervous system disorders.',
        icon: '🧠',
        price: '$150',
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];

const Services = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-primary py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Our Medical Services</h2>
                    <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto">
                        We provide a wide range of medical services to ensure your health and well-being.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20">
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div key={service.id} className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <div className="h-48 w-full overflow-hidden">
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                            </div>
                            <div className="flex-1 p-8 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                                        <span className="text-2xl">{service.icon}</span>
                                    </div>
                                    <p className="mt-3 text-base text-gray-500 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
                                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                                    <Link to="/booking" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-sky-700 transition-colors">
                                        Book Now
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
