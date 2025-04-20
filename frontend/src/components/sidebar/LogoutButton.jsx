
import { BiLogOut } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import useLogout from "../../hooks/useLogout";
import { useState } from "react";

const LogoutButton = () => {
	const { loading, logout } = useLogout();
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className='mt-auto relative'>
			<div className='flex items-center gap-4'>
				{!loading ? (
					<>
						<button 
							className='md:hidden'
							onClick={() => setShowMenu(!showMenu)}
						>
							<HiMenu className='w-6 h-6 text-white' />
						</button>
						<BiLogOut 
							className='w-6 h-6 text-white cursor-pointer hidden md:block' 
							onClick={logout} 
						/>
					</>
				) : (
					<span className='loading loading-spinner'></span>
				)}
			</div>
			
			{showMenu && (
				<div className='absolute bottom-full left-0 mb-2 bg-gray-800 rounded-lg shadow-lg p-2 min-w-[150px]'>
					<button 
						className='w-full text-left px-4 py-2 text-white hover:bg-gray-700 rounded'
						onClick={() => {
							logout();
							setShowMenu(false);
						}}
					>
						Logout
					</button>
				</div>
			)}
		</div>
	);
};
export default LogoutButton;
