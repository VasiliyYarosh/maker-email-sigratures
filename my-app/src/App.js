import './App.css';
import InputForm from "./components/InputForm"

function App() {
  return (
    <div className="App">
     
      <div className='input-container'>
       <InputForm />  
      </div>
      <div className='mobile-message'>
        <h2>Сайт доступний для використання <br/> тільки для користувачів з ПК</h2>
      </div>
      
      
    </div>
  );
}

export default App;
