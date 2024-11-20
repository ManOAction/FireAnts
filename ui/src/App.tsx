// src/App.tsx
import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Navigation from './components/Navigation.tsx';
import HelloButton from './components/HelloButton.tsx';
import ItemList from './components/ItemList.tsx';

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <Navigation />

            <main className="flex-grow container mx-auto px-4 py-8">
                <HelloButton />
                <ItemList />
            </main>

            <Footer />
        </div>
    );
};

export default App;
