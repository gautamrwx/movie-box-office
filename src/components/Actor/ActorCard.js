import React from 'react';
import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({ image, name, gender, country, birthday }) => {
  return (
    <StyledActorCard>
      <div className="img-wrapper">
        <img src={image} alt="Person_Image" />
      </div>
      <h1>
        {name}
        {gender ? `(${gender})` : null}
      </h1>
      <p className="country-style">
        {country ? `Comes from ${country}` : 'Country Not Known'}
      </p>
      {birthday ? <p>Born {birthday}</p> : null}
    </StyledActorCard>
  );
};

export default ActorCard;
