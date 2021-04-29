import React from 'react';
import { Table } from 'reactstrap';
import '../styles/DisplayMatches.css'

/* This function displays the matches in a bordered table  */
const DisplayMatches = (props) => {

  /* Add animals to this array to display matches */
  const animals = [
    { name: "Leo", type: "Dog", sex: "Male", shelterName: "Shelter-name", adoptionUrl: "example.com" },
    { name: "Martha", type: "Cat", sex: "Female", shelterName: "Shelter-name-2", adoptionUrl: "example2.com" },
    { name: "Dory", type: "Fish", sex: "Female", shelterName: "Shelter-name-3", adoptionUrl: "example3.com" }
  ]

  return (
    <Table bordered>

        <thead className="table-color">
          <tr className="text-color">
            <th></th>
            <th>Name</th>
            <th>Type</th>
            <th>Sex</th>
            <th>Shelter Name</th>
            <th>Adoption Url</th>
          </tr>
        </thead>
        <tbody >
        {animals.map((animals, id) => (
          
            <tr key={id}>
              <th scope="row">{id+=1}</th>
              <td>{animals.name}</td>
              <td>{animals.type}</td>
              <td>{animals.sex}</td>
              <td>{animals.shelterName}</td>
              <td><a className="url-color" href={animals.adoptionUrl}> {animals.adoptionUrl} </a></td>
            </tr>
          
        ))
        }
        </tbody>

    </Table>
  );
}

export default DisplayMatches;