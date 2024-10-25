
import { Fragment, useState } from "react";
// {items: [], heading: string}



function ListGroup(){
    let items = [
        'New York',
        'Tokyo',
        'San Francisco', 
        'London',
        'Paris'
    ];

   
    //hook
    const [selectedIndex, setSeelectedIndex] = useState(-1);


    

    // items = [];

    //event handler
    //const handleClick = (event) => console.log(event); 
   

    

    return ( <>
        <h1>List</h1>
        {items.length === 0 ? <p>No item found.</p> : null }
        <ul className="list-group">
            {items.map((item, index) => (
                <li className={selectedIndex === index ? 'list-group-item active' : "list-group-item"}
                 key={item}
                  onClick={() => {setSeelectedIndex(index)}}>
                    {item}
                    </li>
            ))}

        </ul>
    
    </>
    )
};

export default ListGroup;