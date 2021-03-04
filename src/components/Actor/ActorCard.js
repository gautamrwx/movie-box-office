import React from 'react';

const ActorCard = ({ image, name, gender, country, birthday }) => {
  return (
    <div>
      <div>
        <img src={image} alt="Person_Image" />
      </div>
      <h1>
        {name}
        {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'Country Not Known'}</p>
      {birthday ? <p>Born {birthday}</p> : null}
    </div>
  );
};

export default ActorCard;
