import { useLoaderData } from "react-router-dom";

const UserDetails = () =>{
    const user = useLoaderData();
    const {name, website} = user;
return(
    <div>
        <h3>User details of : {name}</h3>
        <p>website: {website}</p>
    </div>
)
}

export default UserDetails;