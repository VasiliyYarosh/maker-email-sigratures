import "./InputForm.css";
import GeneratedSignatureUpdateText from "./GeneratedSignature"

function InputForm() {
    return (
        <div className="App">
             <h1 style={{ textAlign: 'center' }}>Створіть ваш власний email підпис</h1>
            <h2 style={{textAlign: 'center'}}>Введіть ваші дані для створення підпису</h2>
            
            <div className="gap-container">
                <div >
                    {/* <GeneratedSignature /> */}
                    <GeneratedSignatureUpdateText/>
                </div> 
                
            </div>
        </div>
    );
}

export default InputForm;
