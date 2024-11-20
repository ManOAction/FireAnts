// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white mt-8">
            <div className="container mx-auto px-4 py-4 text-center">
                <p>&copy; {new Date().getFullYear()} Note Hunter</p>
            </div>
        </footer>
    );
};

export default Footer;
