import './Users.css';
import { useLoaderData } from "react-router-dom";
const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div className="items">
            {
                users.map((data)=> <div className="item">
                    <h2>{data.name}</h2>
                    <h2>{data.username}</h2>
                    <h3>{data.email}</h3>
                </div>)
            }
        </div>
    );
};

export default Users;