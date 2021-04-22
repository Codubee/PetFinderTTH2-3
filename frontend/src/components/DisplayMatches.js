import React from 'react';
import { Table } from 'reactstrap';

/* This function displays the matches in a bordered table  */
const DisplayMatches = (props) => {

  /* Add animals to this array to display matches */
  const animals = [
    { name: "Leo", type: "Dog", sex: "Male", shelterName: "Shelter_name", adoptionUrl: "example.com" },
    { name: "Martha", type: "Cat", sex: "Female", shelterName: "Shelter-name2", adoptionUrl: "example2.com" },
    { name: "Dory", type: "Fish", sex: "Female", shelterName: "Shelter-name2", adoptionUrl: "example3.com" }
  ]

  return (
    <Table bordered>
      <div>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Type</th>
            <th>Sex</th>
            <th>Shelter Name</th>
            <th>Adoption Url</th>
          </tr>
        </thead>
        {animals.map((animals, id) => (
          <tbody key={id}>
            <tr>
              <th scope="row">{id + 1}</th>
              <td>{animals.name}</td>
              <td>{animals.type}</td>
              <td>{animals.sex}</td>
              <td>{animals.shelterName}</td>
              <td><a href={animals.adoptionUrl}> {animals.adoptionUrl} </a></td>
            </tr>
          </tbody>
        ))
        }
      </div>
    </Table>
  );
}

export default DisplayMatches;