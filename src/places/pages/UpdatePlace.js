import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State',
    description: 'Very famouse building in the world',
    imageURL:
      'https://scontent.fsyq1-1.fna.fbcdn.net/v/t1.0-9/83581055_3750640914953052_3526903232095322243_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=8p9LRPwsqEUAX9uTHdl&_nc_ht=scontent.fsyq1-1.fna&oh=e67e075190b8045a440fe48c892ef9d8&oe=5F79EF26',
    address: 'Edificio Empire State, New York, NY 10001, EE. UU.',
    location: { lat: 40.748333, lng: -73.985278 },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State',
    description: 'Very famouse building in the world',
    imageURL:
      'https://scontent.fsyq1-1.fna.fbcdn.net/v/t1.0-9/83581055_3750640914953052_3526903232095322243_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=8p9LRPwsqEUAX9uTHdl&_nc_ht=scontent.fsyq1-1.fna&oh=e67e075190b8045a440fe48c892ef9d8&oe=5F79EF26',
    address: 'Edificio Empire State, New York, NY 10001, EE. UU.',
    location: { lat: 40.748333, lng: -73.985278 },
    creator: 'u2'
  }
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const idenftifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!idenftifiedPlace) {
    return (
      <div className='center'>
        <h2>Could not find place!</h2>
      </div>
    );
  }
  return (
    <form>
      {/* <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
      /> */}
    </form>
  );
};

export default UpdatePlace;
