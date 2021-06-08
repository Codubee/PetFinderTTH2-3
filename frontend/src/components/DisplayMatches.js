import React from 'react';
import { Table } from 'reactstrap';
import '../styles/DisplayMatches.css'

/* This function displays the matches in a bordered table  */
function DisplayMatches(props){

  console.log(props)
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
        {props.matches.map((animal, id) => (
          
            <tr key={id}>
              <th scope="row">{id+=1}</th>
              <td>{animal.name}</td>
              <td>{animal.type}</td>
              <td>{animal.sex}</td>
              <td>{animal.shelter_name}</td>
              <td><a className="url-color" href={animal.adoption_url}> View Pet </a></td>
            </tr>
          
        ))
        }
        </tbody>

    </Table>
  );
}

export default DisplayMatches;