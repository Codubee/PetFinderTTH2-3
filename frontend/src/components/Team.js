import React from 'react';
import img1 from './Assets/Aashritha.jpg'
import img2 from './Assets/Ashleigh.jpg'
import img3 from './Assets/Brie.jpg'
import img4 from './Assets/Hannah.jpg'
import img5 from './Assets/Shivani.jpg'

import {
  Card, CardText, CardBody, CardImg,
  CardTitle, CardSubtitle, CardGroup
} from 'reactstrap';

const TeamCards = (props) => {
  return (
    <div>
      <CardGroup>
        <Card>
          <CardBody className='text-center'>
            <CardTitle tag="h5">Aashritha Ananthula</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas at Dallas</CardSubtitle>
            <CardImg top width="100%" src={img1} alt="" />
            <CardText>Computer Science major</CardText>
            <CardText>Sophomore</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody className='text-center'>
            <CardTitle tag="h5">Ashleigh Trout</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas at Dallas</CardSubtitle>
            <CardImg top width="100%" src={img2} alt="" />
            <CardText>Computer Science major</CardText>
            <CardText>Junior</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody className='text-center'>
            <CardTitle tag="h5">Brie Haynes</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas at Dallas</CardSubtitle>
            <CardImg top width="100%" src={img3} alt="" />
            <CardText>Computer Science major</CardText>
            <CardText>Sophomore</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody className='text-center'>
            <CardTitle tag="h5">Hannah Hicks</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas at Dallas</CardSubtitle>
            <CardImg top width="100%" src={img4} alt="" />
            <CardText>Computer Science major</CardText>
            <CardText>Senior</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody className='text-center'>
            <CardTitle tag="h5">Shivani Gandhi</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas at Dallas</CardSubtitle>
            <CardImg top width="100%" src={img5} alt="" />
            <CardText>Software Engineering major</CardText>
            <CardText>Junior</CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

export default TeamCards;