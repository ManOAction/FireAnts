// src/components/Navigation.tsx
import React from 'react';

const Navigation: React.FC = () => {
    return (
        <nav className="bg-gray-100 shadow">
            <div className="container mx-auto px-4">
                <ul className="flex space-x-4 py-2">
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
