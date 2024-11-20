// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white shadow">
            <div className="container mx-auto px-4 py-4">
                <h1 className="text-2xl font-bold">Note Hunter</h1>
            </div>
        </header>
    );
};

export default Header;
