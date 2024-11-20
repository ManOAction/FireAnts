import React, { useState, useEffect } from "react";

const LogCard: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);

    // A function to add new logs
    const addLog = (message: string) => {
        setLogs((prevLogs) => [...prevLogs, message]);
    };

    // Replace the default console.log to capture logs
    useEffect(() => {
        const originalConsoleLog = console.log;
        console.log = (message: string) => {
            addLog(message);
            originalConsoleLog(message); // Keep the original behavior
        };

        return () => {
            console.log = originalConsoleLog; // Restore the original console.log
        };
    }, []);

    return (
        <div className="p-4 border rounded shadow-lg bg-gray-100 w-full max-w-lg mx-auto">
            <h2 className="text-lg font-bold mb-2">Console Logs</h2>
            <div className="overflow-auto h-64 bg-white border rounded p-2">
                {logs.map((log, index) => (
                    <p key={index} className="text-sm text-gray-800">
                        {log}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default LogCard;
