import { Link } from 'react-router-dom';

function Login(){
    return (
        <form className="flex justify-center items-center" >
            <div className="flex flex-col items-center gap-7 shadow-xl rounded-xl mt-40 px-10 py-16">
                <h1 className="font-serif font-bold text-5xl">Welcome</h1>
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2" placeholder="Username" />
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder="Password" />
                <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-110">LOGIN</button>
                <Link to={"/signup"} className="text-blue-700 underline">Create new account</Link>
            </div>
        </form>
    );
}


export default Login;