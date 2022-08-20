import { useSelector } from "react-redux";
import './post.css'

const postTags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"]

const PostList = () => {

   const postList = useSelector(state => state.post.posts)
   return (
      <section className="post-container">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/9MMSRn5NoFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         {postList.slice(1).map((post, postidx) => {
            return (
               <div className="posts" key={postidx}>
                  <p className="posts-title">{post.title}</p>
                  <p className={`posts-tags-${postTags[post.tag]} posts-tags`}>{postTags[post.tag]}</p>
                  <p className="posts-description">{post.description}</p>
               </div>
            )
         })}
      </section>
   );
}

export default PostList;