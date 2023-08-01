import React, { useState } from 'react';
import ProfileTab, { ProfileBody, ProfileButtons } from '../components/ProfileBody';
import EditProfile from '../components/EditProfile';

const ProfileScreen = () => {
  let circuls = [];
  let numberofcircels = 10;

  const [username,setUsername] = useState("user1");
  const [userIntroduce, setUserIntroduce] = useState("안녕하세요, 한소희입니다.");
  const [userPostConut, setUserPostConut] = useState(500);

  const [editProfile, setEditProfile] = useState(false);

  // useEffect로 유저정보를 가져오는 코드
  // 여기서 가져와서 State에 넣기

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

  const handleProfileEditOpen = () => {
    setEditProfile(true);
  }

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'white'}}>
      <div style={{ width: '100%', padding: 20 }}>

        {/* 유저 프로필 상단 */}
        <ProfileBody
          name=""
          accountName={username}
          profileImage={"img/sohee.jpg"}
          followers="3.6M"
          following="35"
          post={userPostConut}
        />
        
        {/* 유저 소개 */}
        {!editProfile && (
        <div style={{paddingLeft: 20, paddingBottom: 10}}>{userIntroduce}</div>
        )}

        {editProfile && 
        (
          <EditProfile userIntroduce={userIntroduce} setUserIntroduce={setUserIntroduce} />
        )}
        
        {/* 유저 소개 수정 버튼 */}
        <ProfileButtons
          handleProfileEditOpen={handleProfileEditOpen}
          id={0}
          name="Sohui Han"
          accountName={username}
          profileImage={"img/sohee.jpg"}
          editProfile={editProfile}
        />

        {/* 유저 게시글 썸네일 이미지 모음 */}
        <ProfileTab
        profileImage={"img/sohee.jpg"} 
        />
      </div>
      <div>
      </div>
    </div>
  );
};

export default ProfileScreen;