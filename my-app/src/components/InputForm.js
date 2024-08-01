import "./InputForm.css";
import GeneratedSignature from "./GeneratedSignature"

function InputForm() {
    return (
        <div className="App">
            <h2>Введіть ваші даня для створення підпису</h2>
            <div className="gap-container">
                <div >
                    <GeneratedSignature />
                </div> 
            </div>
        </div>
    );
}

export default InputForm;
