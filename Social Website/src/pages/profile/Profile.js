import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export const Profile = () => {
  return (
    
    <>

    <Topbar/>
            <div className="profile">
         
            <Sidebar/>
            <div className="profileRight">
              <div className="profileRightTop">
                <div className="profileCover">
                <img  className ="profileCoverImg"
                src="Images/post/1.jpg" alt=""/>
                <img  className ="profileUserImg"
                src="Images/person/2.jpg" alt=""/>
                </div>
                <div className="profileInfo">
                  <h4 className="profileInfoName">Pradeep Singh</h4>
                  <span className="profileInfoDesc">Hello my friends!</span>
                </div>
              </div>
              <div className="profileRightBottom"></div>
            </div>
            <Feed/>
            <RightbarProfile/>
            </div>
            
        
            </>
  )
}
