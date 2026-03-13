import {useState} from 'react'
import './components/Footer.css'
import { UrbanisticIdea } from './models/UrbanisticIdea.jsx'; // импорт модели
import UrbanisticIdeaCard from './components/UrbanisticIdeaCard.jsx'; // импорт компонента
import Header from './components/Header.jsx'
import Footer from "./components/Footer.jsx";
import CardsContainer from "./components/CardsContainer.jsx";
import CardCreationForm from "./components/CardCreationForm.jsx";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    const [activeWidget, setActiveWidget] = useState('main');
    const [ideas, setIdeas] = useState([
        new UrbanisticIdea(),
        new UrbanisticIdea(),
        new UrbanisticIdea(),
        new UrbanisticIdea(),
        new UrbanisticIdea(),
    ]);

    const addNewIdea = (newData)=>{
        const ideaInstance = new UrbanisticIdea(
            newData.title,
            newData.description,
            newData.author,
            newData.status,
            newData.likes,
            newData.imageLink,
            newData.avatarImageLink,
        );

        setIdeas([...ideas, ideaInstance]);
    }

    return (
        <>
            {/* Передаем функцию переключения */}
            <Header onNavigate={setActiveWidget}/>
            <main className="flex-grow-1">
                {activeWidget === 'main' && <CardsContainer items={ideas} />}
                {activeWidget === 'create' && (
                    <CardCreationForm onCancel={() => setActiveWidget('main')}/>
                )}
            </main>
            <Footer/>
        </>
    );
}

export default App
