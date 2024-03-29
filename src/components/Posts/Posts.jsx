import './Posts.css'
import { useLoaderData } from "react-router-dom";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className="posts-wrapper">
            {
                posts.map((data)=><div className="posts-item">
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>
                </div>)
            }
        </div>
    );
};
export default Posts;