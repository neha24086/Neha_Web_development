import "./closeFriend.css"

 const CloseFriend = ({user}) => {
  return (
    <li className="sidebarFriend">
          <img className="sidebarFriendImg" src= {user.profilePicture}alt=""/>
          {/* "/Images/person/2.jpg" */}
          <span className="sidebarFriendName">{user.username}</span>
        </li>
  )
}
export default CloseFriend;
