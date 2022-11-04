import "./post.css";
import {MoreVert} from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

 function Post({post}) {
   const [like,setLike] = useState(post.like);
   const [isLiked,setIsLiked] = useState(false);

   const likeHandler =() => {
     setLike(isLiked ? like-1 : like+1)
     setIsLiked(!isLiked)
   }
  //  console.log(post)
  // const user = Users.filter(u=>u.id===1)
  // console.log(user[0].username)
 
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
<img className="postProfileImg"
 src={Users.filter(u=>u.id === post.userId)[0].profilePicture}
  alt=""/>
  {/* "/Images/person/10.jpg" */}
<span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
<span className="postDate">{post.date}</span>
             </div>
             <div className="postTopRight"></div>
             <MoreVert/>
             
             </div>
           <div className="postCenter">
               <span className="postText">{post?.desc}</span>
               <img className="postImg" src={post.photo} alt=""/>
               {/* "Images/post/1.jpg" */}
               </div>  
           <div className="postBottom">
               <div className="postBottomLeft">
                   <img className="likeIcon" src="Images/like.png" onClick={likeHandler} alt=""/>
                   <img  className="likeIcon" src="Images/heart.png"onClick={likeHandler} alt=""/>
                   <span className="postLikeCounter">{like} people like it</span>
                  
               </div>
               <div className="postBottomRight">
               <span className="postCommentText">{post.comment} comments </span>
               </div>
           </div>
             </div>
             </div>
  )
 }
  
  
 export default Post; 