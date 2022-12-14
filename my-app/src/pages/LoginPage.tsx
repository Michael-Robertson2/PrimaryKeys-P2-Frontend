import { Link } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import SylvesterAPI from './ApiConfig';

function LoginPage(){
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    async function submit(e: FormEvent){
        e.preventDefault();
        await SylvesterAPI.post("/auth",{
            username: username,
            password: password
        }).then((response) => {console.log(response)})
            .catch((error) => {console.log(error)});
        
        //console.log("Client attempted login: (Username: " + username + " Password: " + password+ ")");
        

    }








    return (
        <form onSubmit={(e)=> submit(e)} className="flex justify-center items-center" >
            <div className="flex flex-col items-center gap-7 shadow-xl rounded-xl mt-40 px-10 py-16">
                <h1 className="font-serif font-bold text-5xl">Login</h1>
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2" type="text" placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-110">LOGIN</button>
                <Link to={"/signup"} className="text-blue-700 underline">Create new account</Link>
            </div>
        </form>
    );
}


export default LoginPage;