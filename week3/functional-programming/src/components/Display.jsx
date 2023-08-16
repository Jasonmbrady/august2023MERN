import React from 'react';

const Display = ({collection, setCollection}) => {

    // delete handler function
    const deleteHandler = e => {
        // delete from database
        const nameOfCardToRemove = e.target.name;
        const filteredCollection = collection.filter( card => {
            return card.card !== nameOfCardToRemove;
        })
        setCollection(filteredCollection);
    }
    return(
        <table className='table table-striped'>
            <thead>
                <tr>
                    <td>Type</td>
                    <td>Card Name</td>
                    <td>Condition</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    collection.map(card => {
                        return(
                            <tr key={card.card}>
                                <td>{card.type}</td>
                                <td>{card.card}</td>
                                <td>{card.condition}</td>
                                <td><button name={card.card} onClick={deleteHandler}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default Display;