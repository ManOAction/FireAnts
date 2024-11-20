import React, { useState } from "react";

const HelloButton: React.FC = () => {
    const [message, setMessage] = useState<string>("");

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
            console.error("Error fetching message: ", error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <button className="btn btn-primary" onClick={handleClick}>
                Say Hello
            </button>
            {message && <p className="mt-4 text-xl">{message}</p>}
        </div>
    );
};

export default HelloButton;