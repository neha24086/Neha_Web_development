import "./sidebar.css"
import { RssFeed,Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline, 
  Event,
  School,} from "@material-ui/icons";
  import {Users} from "../../dummyData"
  import CloseFriend from "../closeFriend/CloseFriend";


 const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <RssFeed className="sidebarIcon" />
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <Chat className="sidebarIcon" />
          <span className="sidebarListItemText">Chats</span>
        </li>
        <li className="sidebarListItem">
          <PlayCircleFilledOutlined className="sidebarIcon" />
          <span className="sidebarListItemText">Videos</span>
        </li>
        <li className="sidebarListItem">
          <Group className="sidebarIcon" />
          <span className="sidebarListItemText">Groups</span>
        </li>
        <li className="sidebarListItem">
          <Bookmark className="sidebarIcon" />
          <span className="sidebarListItemText">Bookmarks</span>
        </li>
        <li className="sidebarListItem">
          <HelpOutline className="sidebarIcon" />
          <span className="sidebarListItemText">Questions</span>
        </li>
        <li className="sidebarListItem">
          <WorkOutline className="sidebarIcon" />
          <span className="sidebarListItemText">Jobs</span>
        </li>
        <li className="sidebarListItem">
          <Event className="sidebarIcon" />
          <span className="sidebarListItemText">Events</span>
        </li>
        <li className="sidebarListItem">
          <School className="sidebarIcon" />
          <span className="sidebarListItemText">Courses</span>
        </li>
      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr" />
      <ul className="sidebarFriendList">
        {/* <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/Images/person/2.jpg" alt=""/>
          <span className="sidebarFriendName">Pradeep Singh</span>
        </li> */}
        {/* <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/Images/person/3.jpg" alt=""/>
          <span className="sidebarFriendName">Arvind Singh</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/Images/person/4.jpg" alt=""/>
          <span className="sidebarFriendName">Vinod Singh</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/Images/person/5.jpg" alt=""/>
          <span className="sidebarFriendName">Deepak Singh</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/Images/person/6.jpg" alt=""/>
          <span className="sidebarFriendName">Rakesh Singh</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/Images/person/7.jpg" alt=""/>
          <span className="sidebarFriendName">Ravi Singh</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/Images/person/8.jpg" alt=""/>
          <span className="sidebarFriendName">Rahul Singh</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/Images/person/9.jpg" alt=""/>
          <span className="sidebarFriendName">Anand Singh</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/Images/person/10.jpg" alt=""/>
          <span className="sidebarFriendName">Neha Singh</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/Images/person/11.jpg" alt=""/>
          <span className="sidebarFriendName">Rupa Singh</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/Images/person/12.jpg" alt=""/>
          <span className="sidebarFriendName">Seema Singh</span>
        </li> */}

          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>

</div>

    
  )
}

export default Sidebar;