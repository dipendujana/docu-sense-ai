import './App.css'// src/App.tsx
import { useState } from 'react';

export default function App() {
  const [fileName, setFileName] = useState<string>('No file selected yet');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="min-h-screen font-redhat bg-[#F4F4F5] flex flex-col items-center justify-center gap-6 px-4">
      <div className="flex justify-center mb-2">
        <div className="">
          <img className="w-[122px] h-[24px]" src="../src/assets/logo.png" alt="Logo" />
        </div>
      </div>
      <div className="bg-white flex flex-col gap-20 py-8 px-6 rounded-lg shadow-md w-full max-w-4xl text-center">
        <div className="">
          <h2 className="text-xl leading-[100%] font-semibold text-[#09090B] ">
            Let’s uncover what your document is saying.
          </h2>
          <p className="text-sm text-[#71717A] font-normal mt-[6px]">
            Upload a document and ask anything — DocuSense will find the answers.
          </p>
        </div>

        <div className="text-left w-[95%] lg:w-[80%] mx-auto">
          <label className="text-[#18181B] text-sm font-medium leading-[100%] mb-1">
            Upload Your Document
          </label>
          <div className="flex gap-2 my-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={fileName}
                readOnly
                className="w-full px-3 py-2 border border-[#E4E4E7] text-[#71717A] font-normal rounded-md text-sm pr-8"
              />
              {fileName !== 'No file selected yet' && (
                <button
                  type="button"
                  onClick={() => setFileName('No file selected yet')}
                  className="absolute top-1/2 -translate-y-1/2 right-2 text-[#18181B] text-sm"
                >
                  <img className="cursor-pointer" src="../src/assets/closeicon.svg" alt="Logo" />
                </button>
              )}
            </div>
            <label className="flex items-center gap-2 px-4 py-[10px] bg-[#F4F4F5] text-[#18181B] rounded-md text-sm font-medium cursor-pointer">
              <img  src="../src/assets/upload.svg" alt="Upload a file"/>Upload a file
              <input
                type="file"
                accept=".pdf,.docx,.txt"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <p className="text-xs leading-[100%] text-[#71717A]">
            Supported formats: PDF, DOCX, TXT
          </p>
        </div>

        <button
          className={`w-1/2 lg:w-1/5 mx-auto py-2 rounded-md cursor-pointer text-sm text-white ${
            fileName !== 'No file selected yet'
              ? 'bg-[#18181B]'
              : 'bg-[#18181B] opacity-50 cursor-not-allowed'
          }`}
          disabled={fileName === 'No file selected yet'}
        >
          Continue to Chat
        </button>
      </div>
    </div>
  );
}
