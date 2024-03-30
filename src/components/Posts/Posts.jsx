import './Posts.css'
import { Link, useLoaderData, useNavigate } from "react-router-dom";
const Posts = () => {
    const posts = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className="posts-wrapper">
            {
                posts.map((data)=><div className="posts-item">
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>
                    <Link to={`/posts/${data.id}`}>Show details</Link>
                </div>)
            }
        </div>
    );
};
export default Posts;