import { Link } from 'react-router-dom';

function Signup(){
    return (
        <form className="flex justify-center items-center" >
            <div className="flex flex-col items-center gap-7 shadow-xl rounded-xl mt-40 px-10 py-10 border-solid border-2">
                <h1 className="font-serif font-bold text-5xl">Create Account</h1>
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2" placeholder="Username" />
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder="Password" />
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder="Confirm Password" />
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder="Email" />
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder="Name" />
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder="Last Name" />
                <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-110">LOGIN</button>
                <Link to={"/login"} className="text-blue-700 underline">Already a member? Log in </Link>
            </div>
        </form>
    );
}


export default Signup;