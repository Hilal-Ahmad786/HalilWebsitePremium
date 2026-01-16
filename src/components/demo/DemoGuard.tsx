'use client';

import { useEffect, useState } from 'react';

export default function DemoGuard() {
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        // Function to check lock status
        const checkLock = () => {
            // User can type: localStorage.setItem('DEMO_ACCESS', 'BLOCK') in console to lock
            const status = localStorage.getItem('DEMO_ACCESS');
            setIsLocked(status === 'BLOCK');
        };

        // Check immediately
        checkLock();

        // Check periodically to catch console interactions in real-time
        const interval = setInterval(checkLock, 500);

        return () => clearInterval(interval);
    }, []);

    if (!isLocked) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black text-white flex flex-col items-center justify-center p-4">
            <div className="max-w-md text-center space-y-6">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold tracking-tight">Demo Access Suspended</h1>
                <p className="text-gray-400">
                    This demo instance has been deactivated due to a security policy or manual intervention.
                    Please contact the administrator to restore access.
                </p>
            </div>
        </div>
    );
}
