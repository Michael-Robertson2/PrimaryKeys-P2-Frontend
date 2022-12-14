import { UserIcon } from "@heroicons/react/24/solid";

function Profile(){
    const user = null;

    return (
        <div className=" flex flex-row border-solid border-4 h-full shadow-md bg-white px-1">
            <div className="flex flex-col w-1/5 items-center border-solid border-4 border-cyan-300 ">
                {user === null ? <UserIcon className="" /> : <img src="" alt="something" />}
                <ul>
                        <li >Profile name</li>
                        <li >Name and lastname</li>
                        <li>DOB or whatever info</li>
                </ul>
            </div>


            <div className="border-solid border-4 w-full">
                
                <h1>My Post</h1>
                { /*The bottom dive is the get request for our post and then mapped out */ }
                <div className="border-solid border-4">
                    Container2.1 PostHere
                </div>
            </div>


        </div>
    );
}


export default Profile;