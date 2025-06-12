// import './App.css';
// import { useState } from 'react';

// export default function Chat() {
//   const [question, setQuestion] = useState('');

//   return (
//     <div className="min-h-screen font-redhat bg-[#F4F4F5] px-4 py-6 flex flex-col items-center">
//       {/* Header */}
//       <div className="w-full max-w-4xl flex justify-between items-center mb-6">
//         <img src="../src/assets/logo.png" className="h-6" alt="Logo" />
//         <label className="flex items-center gap-2 text-sm font-medium px-4 py-2 bg-[#18181B] text-[#FAFAFA] border rounded-md">
//          <img src="../src/assets/upload_light.svg" alt="Upload" />
//           Upload a new doc
//               <input
//                 type="file"
//                 accept=".pdf,.docx,.txt"
//                 className="hidden"
//               />          
//         </label>
//       </div>

//       {/* Chat Container */}
//       <div className="bg-white min-h-[662px] w-full max-w-4xl rounded-lg shadow-sm p-6 flex justify-between flex-col gap-4">
//         <div className="flex flex-col gap-4">
//             {/* Document Title */}
//             <h2 className="text-xl leading-[100%] font-semibold text-[#09090B] mb-3">
//             Document in Focus: Luna’s Resume
//             </h2>

//             {/* User Message */}
//             <div className=" group self-end  text-white text-sm rounded-lg px-4 py-2 max-w-lg">
//                 <p className="bg-[#71717A] text-white rounded-lg px-4 py-2 ">
//                     Can you give me a quick summary of Luna's profile?
//                 </p>
//                 <div className='flex items-center justify-between gap-2 h-[16px] mt-2'>
//                     {/* Timestamp */}
//                     <span className=" text-xs text-[#A1A1AA] group-hover:block hidden">
//                         11:47 AM
//                     </span>

//                     {/* Action Icons */}
//                     <div className=" bg-[#fff] flex items-center gap-2 group-hover:flex hidden">
//                         <button className="p-1 hover:opacity-80">
//                         <img src="../src/assets/copy.svg" alt="Copy" className="w-4 h-4" />
//                         </button>
//                         <button className="p-1 hover:opacity-80">
//                         <img src="../src/assets/edit.svg" alt="Edit" className="w-4 h-4" />
//                         </button>
//                     </div>

//                 </div>
//             </div>

//             {/* Bot Message */}
//             <div className="text-sm text-[#18181B] bg-white px-2">
//                 Luna is a marketing professional with over 5 years of experience, specializing in digital campaigns, brand strategy, and social media engagement. She has worked with both startups and mid-sized companies and holds a Master’s degree in Marketing from NYU.
//             </div>

//             {/* User Message */}
//             <div className=" group self-end  text-white text-sm rounded-lg px-4 py-2 max-w-lg">
//                 <p className="bg-[#71717A] text-white rounded-lg px-4 py-2 ">
//                     Can you highlight Luna’s career growth and any key achievements mentioned in the resume?
//                 </p>
//                 <div className='flex items-center justify-between gap-2 h-[16px] mt-2'>
//                     {/* Timestamp */}
//                     <span className=" text-xs text-[#A1A1AA] group-hover:block hidden">
//                         11:47 AM
//                     </span>

//                     {/* Action Icons */}
//                     <div className=" bg-[#fff] flex items-center gap-2 group-hover:flex hidden">
//                         <button className="p-1 hover:opacity-80">
//                         <img src="../src/assets/copy.svg" alt="Copy" className="w-4 h-4" />
//                         </button>
//                         <button className="p-1 hover:opacity-80">
//                         <img src="../src/assets/edit.svg" alt="Edit" className="w-4 h-4" />
//                         </button>
//                     </div>

//                 </div>
//             </div>

//             {/* Bot Reply */}
//             <div className="text-sm text-[#18181B] px-2">
//             Luna’s resume shows clear growth in the marketing field. She’s moved from junior roles into more strategic and leadership-driven positions. Along the way, she’s taken on projects that show both impact and initiative.
//             <br />
//             • Led a product launch that increased web traffic by 60%<br />
//             • Managed a rebranding project across multiple teams<br />
//             • Mentored junior team members and improved team productivity by 25%
//             </div>    
//         </div>

//         {/* Input Field */}
//         <div className="mt-6">
//           <div className="flex items-end border border-[#E4E4E7] rounded-md p-2">
//             <textarea
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             placeholder="Ask something..."
//             rows={1}
//             className="flex-1 h-24 resize-none px-2 py-1 text-sm outline-none text-[#18181B] bg-transparent"
//             />
//             <button
//             className={`p-2 rounded-md transition-opacity ${
//                 question.trim()
//                 ? 'bg-[#18181B] opacity-100 cursor-pointer'
//                 : 'bg-[#18181B] opacity-50 cursor-not-allowed'
//             }`}
//             disabled={!question.trim()}
//             onClick={() => {
//                 if (!question.trim()) return;
//                 // Handle send here (e.g. API call)
//                 setQuestion('');
//             }}
//             >
//             <img src="../src/assets/send.svg" alt="Send" className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import './App.css';
import { useState } from 'react';

type Message = {
  id: number;
  text: string;
  time: string;
  sender: 'user' | 'bot';
};

export default function Chat() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Can you give me a quick summary of Luna's profile?",
      time: '11:47 AM',
      sender: 'user',
    },
    {
      id: 2,
      text: "Luna is a marketing professional with over 5 years of experience, specializing in digital campaigns, brand strategy, and social media engagement. She has worked with both startups and mid-sized companies and holds a Master’s degree in Marketing from NYU.",
      time: '11:48 AM',
      sender: 'bot',
    },
    {
      id: 3,
      text: "Can you highlight Luna’s career growth and any key achievements mentioned in the resume?",
      time: '11:49 AM',
      sender: 'user',
    },
    {
      id: 4,
      text: `Luna’s resume shows clear growth in the marketing field. She’s moved from junior roles into more strategic and leadership-driven positions. Along the way, she’s taken on projects that show both impact and initiative.
• Led a product launch that increased web traffic by 60%
• Managed a rebranding project across multiple teams
• Mentored junior team members and improved team productivity by 25%`,
      time: '11:50 AM',
      sender: 'bot',
    },
  ]);
  const [editMessageId, setEditMessageId] = useState<number | null>(null);

  const handleSend = () => {
    if (!question.trim()) return;

    if (editMessageId !== null) {
      // Update existing message
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === editMessageId ? { ...msg, text: question } : msg
        )
      );
      setEditMessageId(null);
    } else {
      // Send new message (not implemented fully)
      alert(`You sent: ${question}`);
    }

    setQuestion('');
  };

  const handleEdit = (id: number, text: string) => {
    setEditMessageId(id);
    setQuestion(text);
  };

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert('Message copied!');
  };

  return (
    <div className="min-h-screen font-redhat px-4 py-6 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <img src="../src/assets/logo.png" className="h-6" alt="Logo" />
        <label className="flex items-center gap-2 text-sm font-medium px-4 py-2 bg-text-primary text-[#FAFAFA] border rounded-md">
          <img src="../src/assets/upload_light.svg" alt="Upload" />
          Upload a new doc
          <input type="file" accept=".pdf,.docx,.txt" className="hidden" />
        </label>
      </div>

      {/* Chat Container */}
      <div className="bg-white min-h-[662px] w-full max-w-4xl rounded-lg shadow-sm p-6 flex justify-between flex-col gap-4">
        {/* Document Title */}
        <h2 className="text-xl border-b border-bg-primary leading-[100%] font-semibold text-[#09090B] pb-3">
          Document in Focus: Luna’s Resume
        </h2>
        <div className="flex flex-col gap-4 min-h-[396px]">

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`group text-sm rounded-lg px-4 py-2  ${
                msg.sender === 'user'
                  ? 'self-end text-white'
                  : 'bg-white'
              }`}
            >
              <p
                className={`${
                  msg.sender === 'user' ? 'bg-text-secondary max-w-lg' : ''
                } rounded-lg px-4 py-2 whitespace-pre-line`}
              >
                {msg.text}
              </p>

              {msg.sender === 'user' && (
                <div className="flex items-center justify-between gap-2 h-[16px] mt-2">
                  <span className="text-xs text-[#A1A1AA] group-hover:block hidden">
                    {msg.time}
                  </span>
                  <div className="bg-white flex items-center gap-2 group-hover:flex hidden">
                    <button
                      className="p-1 hover:opacity-80"
                      onClick={() => handleCopy(msg.text)}
                    >
                      <img
                        src="../src/assets/copy.svg"
                        alt="Copy"
                        className="w-4 h-4"
                      />
                    </button>
                    <button
                      className="p-1 hover:opacity-80"
                      onClick={() => handleEdit(msg.id, msg.text)}
                    >
                      <img
                        src="../src/assets/edit.svg"
                        alt="Edit"
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div className="mt-6">
          <div className="flex items-end border border-[#E4E4E7] rounded-md p-2">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask something..."
              rows={1}
              className="flex-1 h-24 resize-none px-2 py-1 text-sm outline-none bg-transparent"
            />
            <button
              className={`p-2 rounded-md transition-opacity ${
                question.trim()
                  ? 'bg-[#18181B] opacity-100 cursor-pointer'
                  : 'bg-[#18181B] opacity-50 cursor-not-allowed'
              }`}
              disabled={!question.trim()}
              onClick={handleSend}
            >
              <img
                src="../src/assets/send.svg"
                alt="Send"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
