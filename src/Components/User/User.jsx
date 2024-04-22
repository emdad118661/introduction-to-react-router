import { Link } from "react-router-dom";


const User = ({user}) => {
    const {name, email, phone, id} = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;