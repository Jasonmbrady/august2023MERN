import React, {useState, useEffect} from 'react';

const Display = ({pizzaList}) => {
    const [filteredList, setFilteredList] = useState([]);

    useEffect(()=>{
        setFilteredList( pizzaList.filter((pizza)=>{pizza.isDelivery}))
    }, [])
    return(
        <table className='table table-striped'>
            <thead>
                <td>Size</td>
                <td>Toppings</td>
                <td>Delivery or Carryout</td>
            </thead>
            <tbody>
                {
                    filteredList.map( (pizza, idx) => {
                        return(
                            <tr key={idx} >
                                <td>{pizza.size}</td>
                                <td>{pizza.toppings}</td>
                                <td>{pizza.isDelivery ? "Delivery" : "Carryout"}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default Display;