import React  from 'react';
import './Profile.css';
import Anonymous from './img/zarya.jpg';

function Profile(isAnonymous){
  if(isAnonymous){ //익명일 경우
    return(
        <div className="anonymous">
          <div className="today_title">
            무엇을 공유할까요?
          </div>
          <div className="anonymous_name">
          Zarya
          </div>
          <div className="anonymous_img_wrap">
            <img src={Anonymous} alt="profiles" className="anonymous_img"/>
          </div>
        </div>
    )
  }else{//익명이 아닐 경우는 일단은 빈 div
    return <div/>;
  }
}
export default Profile;