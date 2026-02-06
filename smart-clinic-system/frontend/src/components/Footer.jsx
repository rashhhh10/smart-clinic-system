import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold text-primary">SmartClinic</span>
                        <p className="mt-4 text-gray-400">
                            Providing accessible and high-quality healthcare services to everyone. Book appointments, manage records, and more.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link to="/" className="text-base text-gray-400 hover:text-white">Home</Link></li>
                            <li><Link to="/services" className="text-base text-gray-400 hover:text-white">Services</Link></li>
                            <li><Link to="/about" className="text-base text-gray-400 hover:text-white">About Us</Link></li>
                            <li><Link to="/contact" className="text-base text-gray-400 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-base text-gray-400 hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} SmartClinic System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
