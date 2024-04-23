import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={postStyle}>
            <h3>Post of Id: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post details</Link>
        </div>
    );
};

export default Post;