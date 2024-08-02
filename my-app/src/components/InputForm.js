import "./InputForm.css";
import GeneratedSignature from "./GeneratedSignature"

function InputForm() {
    return (
        <div className="App">
            <h2 style={{textAlign: 'center'}}>Введіть ваші дані для створення підпису</h2>
            <div className="gap-container">
                <div >
                    <GeneratedSignature />
                </div> 
            </div>
        </div>
    );
}

export default InputForm;
