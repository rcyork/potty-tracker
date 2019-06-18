import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './CreateRoom.css';

export const CreateRoom = () => {
  const [roomName, setRoomName] = useState('');
  const [roomHasBeenChecked, setRoomHasBeenChecked] = useState(false);
  const [isNewRoomName, setIsNewRoomName] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState(null);
  const inputIsEmpty = !roomName || roomName.length === 0;
  const onRoomNameChange = text => {
    setRoomName(text);
  };
  const checkRoom = roomKey => {
    fetch(`/api/check-rooms/${roomKey}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setIsNewRoomName(!res);
        setRoomHasBeenChecked(true);
      })
      .catch(error => console.log(error));
  };

  const createRoom = roomKey => {
    fetch(`api/rooms/${roomKey}`, { method: 'POST' })
      .then(res => res.json())
      .then(() => {
        setRedirectUrl(`/${roomKey}/settings`);
      });
  };

  const joinRoom = roomKey => {
    setRedirectUrl(`${roomKey}/settings`);
  };

  if (redirectUrl) return <Redirect to={redirectUrl} />;

  return (
    <div className="createRoom">
      <h2 className="instructions">
        Enter an existing room to join, or a new one to create.
      </h2>
      <div className="roomNameInputWrap">
        <label className="roomNameInputLabel" htmlFor="roomNameInput">
          room name
        </label>
        <input
          id="roomNameInput"
          type="text"
          value={roomName}
          className={inputIsEmpty ? 'inputWarning' : null}
          onChange={event => onRoomNameChange(event.target.value)}
        />
        {inputIsEmpty ? (
          <p className="inputWarningText">You must enter a room name.</p>
        ) : null}
      </div>
      {roomHasBeenChecked ? (
        <div className="roomHasBeenCheckedButtons">
          <button
            className="cancel"
            onClick={() => {
              setRoomHasBeenChecked(false);
              setIsNewRoomName(false);
            }}
          >
            cancel
          </button>
          {isNewRoomName ? (
            <button className="confirm" onClick={() => createRoom(roomName)}>
              <i className="fas fa-plus" />
              create room
            </button>
          ) : (
            <button className="confirm join" onClick={() => joinRoom(roomName)}>
              <i className="fas fa-users" />
              join room
            </button>
          )}
        </div>
      ) : (
        <button
          className={`joinOrCreateRoomButton ${
            inputIsEmpty ? 'disabled' : null
          }`}
          onClick={() => checkRoom(roomName)}
        >
          check room
        </button>
      )}
    </div>
  );
};
