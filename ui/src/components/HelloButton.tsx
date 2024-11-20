// src/components/HelloButton.tsx
import React, { useState } from 'react';

const HelloButton: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    const handleClick = async () => {
        try {
            const response = await fetch('http://localhost:8000/items/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: 'Sample Item' }),
            });
            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            console.error('Error fetching message: ', error);
        }
    };

    return (
        <div className="text-center my-8">
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleClick}
            >
                Say Hello
            </button>
            {message && <p className="mt-4 text-xl text-gray-700">{message}</p>}
        </div>
    );
};

export default HelloButton;
