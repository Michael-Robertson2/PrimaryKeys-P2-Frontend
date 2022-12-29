import { UserIcon } from "@heroicons/react/24/solid";
import { FormEvent, useContext, useEffect, useState } from "react";
import { PrincipalContext } from "../context/PrincipalProvider";
import Profile from "../models/Profile";
import Feed from "../components/Feed";
import SylvesterAPI from '../utils/ApiConfig';


function ProfilePage(){
    
    const [profile, setProfile] = useState<Profile | null>(null);
    const [displayName, setDisplayName] = useState<string | undefined>("");
    const [birthDate, setBirthDate] = useState<string | undefined>("");
    const [occupation, setOccupation] = useState<string | undefined>("");
    const [location, setLocation] = useState<string | undefined>("");
    const [bio, setBio] = useState<string | undefined>("");
    const [profilePicUrl, setProfilePicUrl] = useState<string | undefined>("");
    const [error, setError] = useState<string | undefined>("");
    const principal = useContext(PrincipalContext);
    const [hasUpdates, setHasUpdates] = useState<boolean>(false);
    const [posts, setPosts] = useState([]);

    console.log(error);
    
    async function fetch() {
        await SylvesterAPI.get(`/profiles/user?id=${principal?.id}`)
            .then((response) => {
                setError("");
                let resdata = response.data;
                let temp = new Profile(resdata.profileId, resdata.displayName, resdata.location,resdata.birthDate,resdata.occupation, resdata.bio, resdata.profilePicUrl, principal?.id)
                setProfile!(temp);
                changeOnStates(temp);
            }).catch( (error) => {
                setError(error.response.data.message);
            }) 
    }

    async function fetchPosts(setter: any) {
        await SylvesterAPI.get(`/posts/user?id=${principal?.id}`)
            .then((response) => {
                console.log(response.data);
                setter(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }

    async function submit(e: FormEvent) {
        setHasUpdates(false);
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
        fetchPosts(setPosts);
    }, []);

    function registerChange(setter:any, value:any) {
        setter(value);
        setHasUpdates(true);
    }

    function changeOnStates(profile:any) {
        setDisplayName(profile.displayName);
        setBirthDate(profile.birthDate);
        setOccupation(profile.occupation);
        setLocation(profile.location);
        setBio(profile.bio);
        setProfilePicUrl(profile.profilePicUrl);
}

    return (
        <form onSubmit={(e)=>submit(e)} >
            <div className="flex flex-row border-solid border-4 h-full shadow-md bg-white">
                <div>
                    {profile === null ? <UserIcon /> : (
                    profilePicUrl === "" ? <UserIcon /> : <img src={profile.profilePicUrl}/>
                    )}

                    <input className="bg-gray-100 shadow-xl rounded-md" type= "url" placeholder={"Profile Pic URL"} value={profilePicUrl} onChange={(e)=>registerChange(setProfilePicUrl, e.target.value)} />
                </div>
                <div className="flex-col self-center px-3">
                    <h1 className = "text-lg font-bold"><input className="bg-gray-100 shadow-xl rounded-md" placeholder={"Display Name"} value={displayName} onChange={(e)=>registerChange(setDisplayName, e.target.value)} /></h1>
                    <h2>{"@" + principal?.username}</h2>
                </div>
            </div>
            <div className = "flex border-solid border-4 h-full shadow-md bg-white">
                <textarea className="grow bg-gray-100 shadow-xl rounded-md" maxLength={128} rows={3} placeholder={"Bio"} value={bio} onChange={(e)=>registerChange(setBio, e.target.value)}/>
            </div>
            <div className="flex border-solid border-4 h-full shadow-md bg-white">
            <ul>
                <li>
                    <p className='inline-block pr-5'>Location</p>
                    <input className="grow bg-gray-100 shadow-xl rounded-md"  placeholder={"Location"} value={location} onChange={(e)=>registerChange(setLocation, e.target.value)}/></li>
                <li>
                    <p className='inline-block pr-5'>Occupation</p>
                    <input className="grow bg-gray-100 shadow-xl rounded-md"  placeholder={"Occupation"} value={occupation} onChange={(e)=>registerChange(setOccupation, e.target.value)} /></li>
                <li>
                    <p className='inline-block pr-5'>Birth Date</p>
                    <input type="date" className="bg-gray-100 shadow-xl rounded-md" placeholder={"Birth Date"} value={birthDate} onChange={(e)=>registerChange(setBirthDate, e.target.value)} />
                </li>
            </ul>
            </div>
            
            <div className="grid gap-px">
                { hasUpdates ? <button className="bg-green-500 rounded-md text-white ease-out duration-300 hover:scale-110" onClick={ submit }>Update</button> : <></> }
                { hasUpdates ? <button className="bg-red-500 rounded-md text-white ease-out duration-300 hover:scale-110" onClick={ () => changeOnStates(profile) }>Cancel</button> : <></> }
                { error ? <p className='text-red-600'>{error}</p>: null }
            </div>

            <div className="border-solid border-4 w-full">
                <h1 className="text-lg font-bold text-center">Posts</h1>
                <ol>
                    <Feed posts={posts} />
                </ol>
            </div>
        </form>
    );
}


export default ProfilePage;