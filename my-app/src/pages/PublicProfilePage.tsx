import { UserIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Profile from "../models/Profile";
import Feed from "../components/Feed";
import SylvesterAPI from '../utils/ApiConfig';
import { useParams } from "react-router-dom";


function PublicProfilePage(){
    
    const [profile, setProfile] = useState<Profile | null>(null);
    const [error, setError] = useState<string>("");
    const [posts, setPosts] = useState([]);
    const params = useParams();
    const userId = params.userId;

    console.log(error);
    
    async function fetch() {
        await SylvesterAPI.get(`/profiles/user?id=${userId}`)
            .then((response) => {
                setError("");
                let resdata = response.data;
                let temp = new Profile(resdata.profileId, resdata.displayName, resdata.location,resdata.birthDate,resdata.occupation, resdata.bio, resdata.profilePicUrl, userId, resdata.username)
                setProfile!(temp);
            }).catch( (error) => {
                setError(error.response.data.message);
            }) 
    }

    async function fetchUser(setter: any) {
        await SylvesterAPI.get(`/posts/user?id=${userId}`)
        .then((response) => {
            console.log(response.data);
            setter(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    async function fetchPosts(setter: any) {
        await SylvesterAPI.get(`/posts/user?id=${userId}`)
        .then((response) => {
            console.log(response.data);
            setter(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }
    
    useEffect( ()=> {
        fetch();
        fetchPosts(setPosts);
    }, []);

    return (
        <div>
            <div className="flex flex-row border-solid border-4 h-full shadow-md bg-white">
                <div>
                    {profile === null ? <UserIcon /> : (
                    profile.profilePicUrl === "" ? <UserIcon /> : <img src={profile.profilePicUrl}/>
                    )}
                </div>
                <div className="px-3 py-20">
                    <h1 className = "text-lg font-bold">{profile?.displayName}</h1>
                    <h2>{"@" + profile?.username}</h2>
                </div>
            </div>
            <div className = "flex border-solid border-4 h-full shadow-md bg-white">
                {profile?.bio}
            </div>
            <div className="flex border-solid border-4 h-full shadow-md bg-white">
            <ul>
                <li>
                    <p className='inline-block pr-5'>Location</p>
                    {profile?.location}
                </li>
                <li>
                    <p className='inline-block pr-5'>Occupation</p>
                    {profile?.occupation}
                </li>
                <li>
                    <p className='inline-block pr-5'>Birth Date</p>
                    {profile?.birthDate}
                </li>
            </ul>
            </div>

            <div className="border-solid border-4 w-full">
                <h1 className="text-lg font-bold text-center">Posts</h1>
                <ol>
                    <Feed posts={posts} />
                </ol>
            </div>
        </div>
    );
}


export default PublicProfilePage;