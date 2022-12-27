import { UserIcon } from "@heroicons/react/24/solid";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { PrincipalContext, SetPrincipalContext } from "../context/PrincipalProvider";
import Profile from "../models/Profile";
import SylvesterAPI from '../utils/ApiConfig';


function ProfilePage(){
    
    const [profile, setProfile] = useState<Profile | null>(null);
    const [displayName, setDisplayName] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [occupation, setOccupation] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [bio, setBio] = useState<string>("");
    const [profilePicUrl, setProfilePicUrl] = useState<string>("");
    const [error, setError] = useState<string>("");
    const principal = useContext(PrincipalContext);
    const navigate = useNavigate();
    const [hasUpdates, setHasUpdates] = useState<boolean>(false);

    console.log(error);
    
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

    async function submit(e: FormEvent) {
        e.preventDefault();
        await SylvesterAPI.put(`/profiles`, {
            displayName: displayName,
            location: location,
            birthDate: birthDate,
            occupation: occupation,
            bio: bio,
            profilePicUrl: profilePicUrl
        }).then((response) => {
            setError("")
            console.log(response.data);
            navigate("/");
        }).catch((error)=>{
            setError(error.response.data.message)
            setTimeout(() =>setError(""),5000);
            console.log(error.response.data.message);
        });
    }
    
    useEffect( ()=> {
        fetchData();
    });
    
    function toggleOff() {
        setHasUpdates(false);
    }

    return (
        <form onSubmit={(e)=>submit(e)} >
            <div className=" flex flex-row border-solid border-4 h-full shadow-md bg-white px-1">
                <input className="bg-gray-100 shadow-xl rounded-md" placeholder={profile?.profilePicUrl} value={profilePicUrl} onChange={(e)=>setProfilePicUrl(e.target.value)} />
                {profile === null ? <UserIcon className="" /> : (
                    profile.profilePicUrl === null ? "" : <img src={profile.profilePicUrl} alt="something" />
                )}
                <ul>
                        <li>{principal?.username}</li>
                        <li><input className="bg-gray-100 shadow-xl rounded-md" placeholder={profile?.displayName} value={displayName} onChange={(e)=>setDisplayName(e.target.value)} /></li>
                        <li><div>
                            <p className='inline-block pr-5'>Birth Date</p>
                            <input type="date" className="bg-gray-100 shadow-xl rounded-md"  placeholder="Date of Birth" value={birthDate} onChange={(e)=>setBirthDate(e.target.value)} />
                        </div></li>
                        <li><input className="bg-gray-100 shadow-xl rounded-md"  placeholder={profile?.occupation} value={occupation} onChange={(e)=>setOccupation(e.target.value)} /></li>
                        <li><input className="bg-gray-100 shadow-xl rounded-md"  placeholder={profile?.location} value={location} onChange={(e)=>setLocation(e.target.value)}/></li>
                </ul>
            </div>


            <div className="border-solid border-4 w-full">
                <h1>Bio</h1>
                <div className="border-solid border-4">
                    <input className="bg-gray-100 shadow-xl rounded-md"  placeholder={profile?.bio} value={bio} onChange={(e)=>setBio(e.target.value)}/>
                </div>
                
                <h1>My Post</h1>
                { /*The bottom dive is the get request for our post and then mapped out */ }
                <div className="border-solid border-4">
                    Container2.1 PostHere
                </div>
            </div>

            { hasUpdates ? <button className="bg-slate-800 rounded-md text-white ease-out duration-300 hover:scale-110" onClick={ toggleOff }>Update</button> : <></> }
            { error ? <p className='text-red-600'>{error}</p>: null }
            <Link to={"/"} className="text-blue-700 underline">Cancel </Link>
        </form>
    );
}


export default ProfilePage;