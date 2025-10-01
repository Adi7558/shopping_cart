export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Help</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">Customer Service</a></li>
                            <li><a href="#" className="hover:text-white">Returns</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Follow us</h3>
                        <ul className="mt-4 flex space-x-4">
                            <li><a href="#" className="hover:text-white">Facebook</a></li>
                            <li><a href="#" className="hover:text-white">Twitter</a></li>
                            <li><a href="#" className="hover:text-white">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    &copy; 2025 Your Company, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
