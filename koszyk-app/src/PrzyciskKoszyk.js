import React, { useState } from "react";
function PrzyciskKoszyk() {
    const [selectedItem, setSelectedItem] = useState(['maslo','chleb','ser']);
    const [selectedAmount, setSelectedAmount] = useState("1");


    const handleChange = (e)=>{
       this.setState
    }

    const handleSubmit = (e)=>{
        alert(selectedItem.value + selectedAmount.value)
    }

    return (
        <form>
            <label>
                co dodac:
                <select value={selectedItem}>
                    <option value="chleb">chleb</option>
                    <option value="chleb">chleb</option>
                    <option value="ser">ser</option>
                </select><br></br>
                ile:
                <input type="number" value={selectedAmount}/><br></br>
            </label>
            <input type="submit" value="wyślij" /><br></br>
        </form>
    )
}

export default PrzyciskKoszyk;