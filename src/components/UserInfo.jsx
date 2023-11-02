import {React, useEffect,useState} from "react";
import axios from 'axios';
import Loading from "./Loading";


function UserInfo({ userName }) {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://api.github.com/users/${userName}`).then((response) => {
            setUser(response.data);
            setLoading(false);
        }).catch((err)=>{
            setError(true)
            setLoading(false);
        });
    },[userName]);

    return (

        <div>
            {loading && <Loading/>}
            {error && <p className="text-center font-mono font-bold text-[red]">Dosen't Have Github user by this name. Write exact name, Plase. <br/> OR API rate limit exceeded.</p>}
            {user &&

            <div className="flex flex-wrap justify-evenly">
                <div className="md:w-[50%]">
                    <div className="grid place-content-center">
                        <img src={user.avatar_url} alt="df" className="p-4 w-[200px] h:[200px] md:w-[150px] md:h-[150px]" />
                    </div>
                    <div className="">
                        <p className="p-5 pb-4 font-mono text-justify text-2xl md:text-xl">
                        Hi!, Welcome to <span className="font-bold">{user.name}</span> 's
                        Github Profile. He is currently living in{" "}
                        <span className="font-bold"> {user.location}</span>. He is working with
                        <span className="font-bold">{user.company}</span>. He is active
                        github user since <span className="font-bold">{user.created_at}</span>. His
                        Total public repo is {user.public_repos}.
                        </p>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}

export default UserInfo;
