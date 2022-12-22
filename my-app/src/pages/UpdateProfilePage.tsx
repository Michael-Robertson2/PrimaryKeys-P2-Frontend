import { UserIcon } from "@heroicons/react/24/solid";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { PrincipalContext, SetPrincipalContext } from "../context/PrincipalProvider";
import Profile from "../models/Profile";
import SylvesterAPI from '../utils/ApiConfig';

function UpdateProfilePage() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [displayName, setDisplayName] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [occupation, setOccupation] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [bio, setBio] = useState<string>("");
    const [profilePicUrl, setProfilePicUrl] = useState<string>("");
    const [error, setError] = useState<string>("");
    const principal = useContext(PrincipalContext);
    const setPrincipal = useContext(SetPrincipalContext);
    const navigate = useNavigate();

    console.log(error);
    console.log(setPrincipal);
    
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
    });

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
    
    return (
        <form onSubmit={(e)=>submit(e)} className="flex justify-center items-center" >
            <div className="flex flex-col items-center gap-7 shadow-xl rounded-xl mt-20 px-10 py-10 border-solid border-2">
                <h1 className="font-serif font-bold text-5xl">Update Profile</h1>
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2" placeholder={profile?.displayName} value={displayName} onChange={(e)=>setDisplayName(e.target.value)} />
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder={profile?.occupation} value={occupation} onChange={(e)=>setOccupation(e.target.value)} />
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder={profile?.location} value={location} onChange={(e)=>setLocation(e.target.value)}/>
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder={profile?.bio} value={bio} onChange={(e)=>setBio(e.target.value)}/>
                <div>
                <p className='inline-block pr-5'>Birth Date</p>
                <input type="date" className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder="Date of Birth" value={birthDate} onChange={(e)=>setBirthDate(e.target.value)} />
                </div>
                
                <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-110">Save</button>
                { error ? <p className='text-red-600'>{error}</p>: null }
                <Link to={"/"} className="text-blue-700 underline">Cancel </Link>
            </div>
        </form>
    );
}

export default UpdateProfilePage;