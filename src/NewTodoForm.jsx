import { useState } from "react"

export function NewTodoForm(props) {
    props.onSubmit
    const [newItem, setNewItem] = useState("")
  

    function handleSubmit(e) {
        e.preventDefault()
        // mdn: preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
        if (newItem === "") return 


         props.onSubmit(newItem)

        setNewItem("")
}

    return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New item</label>
            <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} 
            type="text"
            id="item" 
            />
            {/* onchange gets value of input, sets it with 
            the event object */}
        </div>
        <button className="btn">Add</button>
    </form>
    )
}