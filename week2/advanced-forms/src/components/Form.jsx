import React, {useState} from 'react';

const Form = ({pizzaList, setPizzaList}) => {
    const [size, setSize] = useState("");
    const [toppings, setToppings] = useState("");
    const [isDelivery, setIsDelivery] = useState(false);
    const [possibleToppings] = useState([
        {
            label: "Pepperoni",
            value: "pepperoni"
        },
        {
            label: "Veggie",
            value: "veggie"
        },
        {
            label: "Cheese",
            value: "cheese"
        },
        {
            label: "Meat Lover's",
            value: "meatlovers"
        },
    ])

    const newPizzaHandler = e => {
        e.preventDefault();
        const newPizza = {
            size, toppings, isDelivery
        }
        setPizzaList([...pizzaList, newPizza]);
        setIsDelivery(false);
        setSize("");
        setToppings("");
    }

    return(
        <form onSubmit={newPizzaHandler}>
            <div>
                <select onChange={e => setSize(e.target.value)}>
                    <option value="" selected disabled>Please Choose a Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div>
                <select onChange={e => setToppings(e.target.value)}>
                    <option value="" selected disabled>Please Choose Your Toppings</option>
                    {
                        possibleToppings.map( (topping, idx) => {
                            return (
                                <option key={idx} value={topping.value}>{topping.label}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                <label>Delivery?</label>
                <input type="checkbox" checked={isDelivery} onChange={e => setIsDelivery(e.target.checked)}/>
            </div>
            <button>Order Now</button>
        </form>
    );
}

export default Form;