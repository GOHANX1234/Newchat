import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { IoArrowBack } from "react-icons/io5";

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className={`md:min-w-[450px] flex flex-col h-screen ${selectedConversation ? 'fixed inset-0 z-50 bg-gray-900 md:relative md:inset-auto' : ''}`}>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					<div className='bg-gray-800 px-6 py-4 flex items-center gap-4 border-b border-gray-700 shadow-lg'>
						<button 
							className='md:hidden text-white' 
							onClick={() => setSelectedConversation(null)}
						>
							<IoArrowBack size={20} />
						</button>
						<span className='label-text'>To:</span>
						<span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;