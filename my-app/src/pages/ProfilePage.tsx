import { UserIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import { PrincipalContext, SetPrincipalContext } from "../context/PrincipalProvider";
import Profile from "../models/Profile";
import SylvesterAPI from '../utils/ApiConfig';


function ProfilePage(){
    
    const [profile, setProfile] = useState<Profile | null>(null);
    const [error, setError] = useState<string>("");
    const principal = useContext(PrincipalContext);
    const setPrincipal = useContext(SetPrincipalContext);
    
    async function fetchData() {
        await SylvesterAPI.get(`/profiles/user?id=${principal?.id}`)
            .then((response) => {
                setError("");
                let resdata = response.data;
                let temp = new Profile(resdata.profileId, resdata.displayName, resdata.location,resdata.birthDate,resdata.occupation, resdata.bio, resdata.profilePicUrl, principal?.id)
                setProfile!(temp);
                console.log(temp);
            }).catch( (error) => {
                setError(error.response.data.message);
            }) 
    }
    
    useEffect( ()=> {
        fetchData();
    },[]);
    

    return (
        <div className=" flex flex-row border-solid border-4 h-full shadow-md bg-white px-1">
            <div className="flex flex-col w-1/5 items-center border-solid border-4 border-cyan-300 ">
                {profile === null ? <UserIcon className="" /> : (
                    profile.profilePicUrl === null ? "" : <img src={profile.profilePicUrl} alt="something" />
                )}
                <ul>
                        <li >{principal?.username}</li>
                        <li >{profile?.displayName}</li>
                        <li>{profile?.birthDate}</li>
                        <li>{profile?.occupation}</li>
                        <li>{profile?.location}</li>
                </ul>
            </div>


            <div className="border-solid border-4 w-full">
                <h1>Bio</h1>
                <div className="border-solid border-4">
                    {profile === null ? <br/> : (
                        profile.bio === null ? <br/> : profile.bio
                    )}
                </div>
                
                <h1>My Post</h1>
                { /*The bottom dive is the get request for our post and then mapped out */ }
                <div className="border-solid border-4">
                    Container2.1 PostHere
                </div>
            </div>


        </div>
    );
}


export default ProfilePage;