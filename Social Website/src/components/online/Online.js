import "./online.css"

 const Online = ({user}) => {
  return (
    <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img  className="rightbarProfileImg" src={user.profilePicture} alt=""/>
              {/* "Images/person/3.jpg" */}
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
  )
}
export default Online;
