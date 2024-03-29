import { useLoaderData } from "react-router-dom";

const Post = () => {
    const data = useLoaderData();
    return (
        <div>
            <div>
                <h4>{data.title}</h4>
                <p>{data.body}</p>
            </div>
        </div>
    );
};
export default Post;