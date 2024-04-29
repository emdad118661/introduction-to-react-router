import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }

    const handlePostDetails = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h3>Post of Id: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post details</Link>
            <button onClick={handlePostDetails}>Click to see post details</button>
        </div>
    );
};

export default Post;