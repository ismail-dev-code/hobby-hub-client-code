import React from 'react';
import { FaEdit, FaInfoCircle } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const GroupCard = ({group}) => {
    console.log(group);
    const {name, photo, category, date, members, } = group
    return (
        <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img className='w-44 h-44 rounded-lg p-2'
      src={photo}
      alt="photo" />
  </figure>

    <div className='ml-4'>
        <h2 className="card-title">{name}</h2>
    <h2 className="card-title">{category}</h2>
    <h2>{members}</h2>
    <p className="card-title">{date}</p>
    </div>
   
  
</div>
    );
};

export default GroupCard;