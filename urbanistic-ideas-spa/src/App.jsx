import {useState} from 'react'
import './conponents/Footer.css'
import Card from './conponents/Card.jsx'
import Header from './conponents/Header.jsx'
import Footer from "./conponents/Footer.jsx";
import CardsContainer from "./conponents/CardsContainer.jsx";
import CardCreationForm from "./conponents/CardCreationForm.jsx";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    const [activeWidget, setActiveWidget] = useState('main');

    return (
        <>
            <>
                {/* Передаем функцию переключения */}
                <Header onNavigate={setActiveWidget}/>
                <main className="flex-grow-1">
                    {activeWidget === 'main' && <CardsContainer />}
                    {activeWidget === 'create' && (
                        <CardCreationForm onCancel={() => setActiveWidget('main')} />
                    )}
                </main>
                <Footer/>
            </>
        </>
    );
}

export default App
