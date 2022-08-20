import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice.js";
import Input from "../InputField/Input.jsx";
import '../Post/post.css'

const postTags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"]

const Post = ({ setShowOpenPost }) => {
   const [title, setTitle] = useState("Add title...")
   const [desc, setDesc] = useState("Add desc...")
   const [selectedTag, setSelectedTag] = useState(0)

   const dispatch = useDispatch()

   const handlePost = () => {
      const newPost = {
         title,
         description: desc,
         tag: selectedTag
      }
      dispatch(createPost(newPost))
      setShowOpenPost(false)
   }

   return (
      <section className="makepost-container">
         <div className="makepost-navigation">
            <p className="makepost-save"
               onClick={handlePost}
            >Post</p>
         </div>
         <Input
            data={title}
            inputType="textarea"
            setData={setTitle}
            label="Title"
            className="makepost-title"
         />
         <Input
            data={desc}
            inputType="textarea"
            setData={setDesc}
            label="Descriptions"
            className="makepost-desc"
         />
         <label>Tags</label>
         <div className="makepost-tags">
            {postTags.map((tag, idx) => {
               return (
                  <button
                     key={idx}
                     className={`makepost-tags-${tag} ${selectedTag === idx ? 'makepost-tags--selected' : ''}`}
                     onClick={() => setSelectedTag(idx)}
                  >
                     {tag}
                  </button>)
            })}
         </div>
      </section>
   );
}

export default Post;