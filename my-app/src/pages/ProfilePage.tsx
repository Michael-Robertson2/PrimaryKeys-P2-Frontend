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
    
    async function fetch() {
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
        }, {
            headers: {
                authorization: principal?.token
            }
        })
        .then((response) => console.log(response))
        .catch((error)=>console.log(error));
    }
    
    useEffect( ()=> {
        fetch();
    }, []);

    function registerChange(setter:any, value:any) {
        setter(value);
        setHasUpdates(true);
    }
    
    function toggleOff() {
        setHasUpdates(false);
    }

    return (
        <form onSubmit={(e)=>submit(e)} >
            <div className="flex flex-row border-solid border-4 h-full shadow-md bg-white">
                <div>
                    {profile === null ? <UserIcon /> : (
                    profile.profilePicUrl === null ? <img src="https://vectorified.com/images/twitter-default-icon-25.jpg" /> : <img src={profile.profilePicUrl} />
                    )}

                    <input className="bg-gray-100 shadow-xl rounded-md" placeholder={profile?.profilePicUrl} value={profilePicUrl} onChange={(e)=>registerChange(setProfilePicUrl, e.target.value)} />
                </div>
                <div>
                    <h1><input className="bg-gray-100 shadow-xl rounded-md" placeholder={profile?.displayName} value={displayName} onChange={(e)=>registerChange(setDisplayName, e.target.value)} /></h1>
                    <h2>{principal?.username}</h2>
                </div>
            </div>
            <div className = "border-solid border-4 h-full shadow-md bg-white">
                <input className="bg-gray-100 shadow-xl rounded-md"  placeholder={profile?.bio} value={bio} onChange={(e)=>registerChange(setBio, e.target.value)}/>
            </div>
            <div>
            <ul>
                <li>
                    <p className='inline-block pr-5'>Location</p>
                    <input className="bg-gray-100 shadow-xl rounded-md"  placeholder={profile?.location} value={location} onChange={(e)=>registerChange(setLocation, e.target.value)}/></li>
                <li>
                    <p className='inline-block pr-5'>Occupation</p>
                    <input className="bg-gray-100 shadow-xl rounded-md"  placeholder={profile?.occupation} value={occupation} onChange={(e)=>registerChange(setOccupation, e.target.value)} /></li>
                <li>
                    <p className='inline-block pr-5'>Birth Date</p>
                    <input type="date" className="bg-gray-100 shadow-xl rounded-md" placeholder={profile?.birthDate} value={birthDate} onChange={(e)=>registerChange(setBirthDate, e.target.value)} />
                </li>
            </ul>
            
            { hasUpdates ? <button className="bg-slate-800 rounded-md text-white ease-out duration-300 hover:scale-110" onClick={ toggleOff }>Update</button> : <></> }
            { error ? <p className='text-red-600'>{error}</p>: null }
            { hasUpdates ? <Link to={"/profile"} className="text-blue-700 underline">Cancel </Link> : <></> }

            </div>

            <div className="border-solid border-4 w-full">
                <h1>My Post</h1>
                { /*The bottom dive is the get request for our post and then mapped out */ }
                <div className="border-solid border-4">
                    Container2.1 PostHere
                </div>
            </div>
        </form>
    );
}


export default ProfilePage;