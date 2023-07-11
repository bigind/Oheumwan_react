import React from 'react';
import { ProfileBody, ProfileButtons } from './ProfileBody';

const ProfileScreen = () => {
  let circuls = [];
  let numberofcircels = 10;

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <div key={index}>
        {index === 0 ? (
          <div
            style={{
              width: 30,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              margin: '0 5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 40, color: 'black' }}>+</span>
          </div>
        ) : (
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              margin: '0 5px',
            }}
          ></div>
        )}
      </div>,
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'white'}}>
      <div style={{ width: '100%', padding: 20 }}>
        <ProfileBody
          name="Sohui Han"
          accountName="xeesoxee"
          profileImage={"img/sohee.jpg"}
          followers="3.6M"
          following="35"
          post="500"
        />
        <ProfileButtons
          id={0}
          name="Sohui Han"
          accountName="xeesoxee"
          profileImage={"img/sohee.jpg"}
        />
      </div>
      <div>
      </div>
    </div>
  );
};

export default ProfileScreen;