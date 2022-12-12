import React from "react";

const Person: React.FC<{
    name: string,
    age:number
}> = ({ name, age}) => {
    return (
        <div>
            <div> {name} </div>
            <div> {age} </div>
        </div>
    );
};

export default Person;