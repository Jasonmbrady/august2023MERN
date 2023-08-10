import React from 'react';

const PersonCard = ({person, people}) => {

    const showPeople = (people) => {
        if (people.length > 0){
            people.map( person => {
                return (
                    <><h3>{person.lName}, {person.fName}</h3>
                    <p>Favorite Ice Cream: {person.favoriteIceCream}</p></>
                )
            })
        }
        console.log(people);
    }

    return(
        <div>
            {
                showPeople(people)
                // person ?
                //     <><h3>{person.lName}, {person.fName}</h3>
                //     <p>Favorite Ice Cream: {person.favoriteIceCream}</p></> : <></>
            }
        </div>
    );
}

export default PersonCard;