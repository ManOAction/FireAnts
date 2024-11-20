// src/components/ItemList.tsx
import React, { useEffect, useState } from 'react';

interface Item {
    id: number;
    name: string;
}

const ItemList: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('http://localhost:8000/items/');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching items: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    return (
        <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Items List</h2>
            {loading ? (
                <p>Loading items...</p>
            ) : items.length > 0 ? (
                <ul className="space-y-2">
                    {items.map((item) => (
                        <li key={item.id} className="p-4 border rounded shadow">
                            {item.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items found.</p>
            )}
        </div>
    );
};

export default ItemList;
