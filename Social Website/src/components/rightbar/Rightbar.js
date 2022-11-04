import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online";


 const Rightbar = ({profile}) => {

   const HomeRightbar = () =>{
return(
  <>
   <div className="birthdayContainer">
          <img className="birthdayImg" src="Images/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="Images/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  
const ProfileRightbar = () => {
  return (
    <>
    <h4 className="rightbarTitle">User information </h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">Bhopal</span>
      </div>
    </div>
    <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Rewa</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
      
      <h4 className="rightbarTitle">User friends </h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="Images/person/2.jpg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Pradeep Singh</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Images/person/3.jpg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Arvind Singh</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Images/person/4.jpg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Vinod Singh</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Images/person/5.jpg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Rakesh Singh</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Images/person/10.jpg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Neha Singh</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Images/person/11.jpg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Rupa Singh</span>
        </div>
      </div>
    
    </>
  )
}
   
     return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {profile ? <ProfileRightbar/> : <HomeRightbar/>} 
      

 

          {/* <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img  className="rightbarProfileImg" src="Images/person/4.jpg" alt=""/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Arvid singh</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img  className="rightbarProfileImg" src="Images/person/5.jpg" alt=""/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Vinod singh</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img  className="rightbarProfileImg" src="Images/person/6.jpg" alt=""/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Rakesh singh</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img  className="rightbarProfileImg" src="Images/person/10.jpg" alt=""/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">  Neha singh</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img  className="rightbarProfileImg" src="Images/person/11.jpg" alt=""/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Rupa singh</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img  className="rightbarProfileImg" src="Images/person/12.jpg" alt=""/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Seema singh</span>
          </li> */}
       
      </div>
    </div>
  )
}
export default Rightbar;