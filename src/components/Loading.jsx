import React from 'react';

function Loading() {
    return (
        <main className="Loading" 
            style={{ 
                marginTop: '5rem', 
                background: 'white' 
            }}
        >
            <div className="text-center">
                <div className="spinner-border text-danger" 
                    style={{ width: '3rem', height: '3rem' }} 
                    role="status"
                >
                    <span className="sr-only"></span>
                </div>
                <p>Loading your way to Spacestagram ....</p>
            </div>
        </main>
    )
}

export default Loading
