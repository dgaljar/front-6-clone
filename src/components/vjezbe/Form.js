import { useState } from "react";

function Form(){
    const [ime, setIme] = useState("");
    return(
        <div>
            <h3>Kako se zoveš?</h3>
            <input 
                type="text" 
                value={ime}
                onChange={(event) => setIme(event.target.value)}
            />

            <h1>Pozdrav, {ime}!</h1>

            { /*
                {ime && <h1>Pozdrav, {ime}!</h1>}
                - prikazuje se samo ako je ime unijeto, tj. ako je ime true
            */ }

        </div>
    )
}

export default Form;