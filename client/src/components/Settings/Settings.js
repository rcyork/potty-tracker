import React, { useState } from 'react';

// import { Link } from 'react-router-dom';

// import { ColorOption } from './ColorOption/ColorOption';
// import { DogsList } from './DogsList/DogsList';
// import './Settings.css';

// const COLOR_OPTIONS = [
//   'red',
//   'blue',
//   'orange',
//   'green',
//   'purple',
//   'pink',
//   'yellow',
//   'black',
//   'grey',
// ];

export const Settings = () => {
  const [test, setTest] = useState(false);
  console.log('render');
  return <div>blah</div>;
};

// export const blah = ({ dogs, setDogs, roomKey }) => {
//   const [newDog, setNewDog] = useState({ name: '', color: 'red' });
//   // const duplicateDogNames = dogs.find(dog => dog.name === newDog.name);
//   // const tooManyDogs = dogs.length >= 9;
//   // const emptyNameInputField = !newDog.name || newDog.name === '';

//   const onDogNameChange = () => {};
//   // const onDogNameChange = text => {
//   //   setNewDog(() => {
//   //     return { name: text, ...newDog };
//   //   });
//   // };

//   const onColorChanged = newColor => {};
//   // const onColorChanged = newColor => {
//   //   setNewDog(() => {
//   //     return { ...newDog, color: newColor };
//   //   });
//   // };

//   const onDogDeleted = (dogToDelete, roomKey) => {};
//   // const onDogDeleted = (dogToDelete, roomKey) => {
//   //   fetch(`/api/${roomKey}/dogs/${dogToDelete}`, {
//   //     method: 'DELETE',
//   //     headers: { 'Content-Type': 'application/json' },
//   //   })
//   //     .then(res => res.json())
//   //     .then(res => {
//   //       setDogs(res);
//   //     })
//   //     .catch(error => console.log(error));
//   // };

//   // const onDogAdded = (dogToAdd, roomKey) => {
//   // const onDogAdded = (dogToAdd, roomKey) => {
//   //   fetch(`/api/${roomKey}/dogs`, {
//   //     method: 'POST',
//   //     headers: { 'Content-Type': 'application/json' },
//   //     body: JSON.stringify(dogToAdd),
//   //   })
//   //     .then(res => res.json())
//   //     .then(res => {
//   //       setDogs([...dogs, { ...res, currentNumber: '1' }]);
//   //       setNewDog({ name: '', color: 'red' });
//   //     });
//   // };

//   console.log('render');

//   return null;

//   // return (
//   //   <div className="configureContainer">
//   //     <div className="dogNameInputWrap">
//   //       <label htmlFor="dogNameInput" className="dogNameInputLabel">
//   //         dog name
//   //       </label>
//   //       <input
//   //         type="text"
//   //         id="dogNameInput"
//   //         value={newDog.name}
//   //         onChange={event => onDogNameChange(event.target.value)}
//   //         className={`${
//   //           duplicateDogNames || tooManyDogs || emptyNameInputField
//   //             ? 'inputWarning'
//   //             : null
//   //         }`}
//   //       />
//   //       {duplicateDogNames ? (
//   //         <p className="inputWarningText">Your dogs must have unique names</p>
//   //       ) : tooManyDogs ? (
//   //         <p className="inputWarningText">
//   //           You have the maxium amount of dogs allowed
//   //         </p>
//   //       ) : emptyNameInputField ? (
//   //         <p className="inputWarningText">Your dog needs a name!</p>
//   //       ) : null}
//   //     </div>
//   //     <div className="colorSectionWrap">
//   //       <label className="colorSectionLabel">color</label>
//   //       <ul className="colorSelection">
//   //         {COLOR_OPTIONS.map(color => {
//   //           return (
//   //             <ColorOption
//   //               key={color}
//   //               color={color}
//   //               currentColor={newDog.color}
//   //               onColorChanged={onColorChanged}
//   //             />
//   //           );
//   //         })}
//   //       </ul>
//   //       <button
//   //         disabled={duplicateDogNames || tooManyDogs || emptyNameInputField}
//   //         className={`addDogButton`}
//   //         onClick={() =>
//   //           onDogAdded({ name: newDog.name, color: newDog.color }, roomKey)
//   //         }
//   //       >
//   //         <i className="fas fa-plus" /> add dog
//   //       </button>
//   //     </div>
//   //     <div className="dogsListWrap">
//   //       <div className="scrollingList">
//   //         <DogsList dogs={dogs} onDogDeleted={onDogDeleted} roomKey={roomKey} />
//   //       </div>
//   //       <Link
//   //         className={`doneButton ${
//   //           !dogs || dogs.length === 0 ? 'disabled' : ''
//   //         }`}
//   //         to={`/${roomKey}`}
//   //       >
//   //         <i className="fas fa-check" /> done
//   //       </Link>
//   //     </div>
//   //   </div>
//   // );
// };
