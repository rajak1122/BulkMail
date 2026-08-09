import { FiUploadCloud } from "react-icons/fi";
import { useState, useRef } from "react";
import parseExcel from "../utils/parseExcel";

function FileUploader({
  setEmailList,
  setFileUploaded,
  setFileName,
  fileName,
}) {
  const inputRef = useRef();
  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
      setFileUploaded(true);
      parseExcel(
        file,
        (emails) => {
          setEmailList(emails);
        },
        (error) => {
          console.log(error);
        },
      );
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (file) {
      setFileName(file.name);
      setFileUploaded(true);
      parseExcel(
        file,
        (emails) => {
          setEmailList(emails);
        },
        (error) => {
          console.log(error);
        },
      );
    }
  };
  const removeFile = () => {
    setFileName(null);
    inputRef.current.value = "";
    setFileUploaded(false);
    setEmailList([]);
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="w-[90%] md:w-[50%]">
          <h1 className="mb-2 text-lg font-medium text-[#C1CEDD] md:text-3xl">
            Upload your file*
          </h1>
          <div className="w-full py-5 rounded-3xl bg-[#141E30] shadow-[6px_6px_12px_#0D1625,-6px_-6px_12px_#1D2B43]  transition-all duration-300 hover:shadow-[inset_4px_4px_8px_#0b111c,inset_-4px_-4px_8px_#35577D]">
            <div
              className="flex flex-col items-center justify-center cursor-pointer"
              onClick={() => inputRef.current.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <FiUploadCloud className="text-5xl text-gray-600" />

              <h2 className="text-lg text-[#C1CEDD] font-semibold mt-5">
                Drag & Drop <span className="text-blue-500">Excel</span> File
              </h2>
              <p className="text-gray-500 mt-3">or Click to Browse</p>
              <p className="text-sm text-gray-400 mt-2">
                Supports .xlsx & .csv
              </p>
              <input
                type="file"
                accept=".xlsx,.csv"
                ref={inputRef}
                hidden
                onChange={handleFile}
              />
            </div>
            {fileName && (
              <div className="flex items-center justify-around md:gap-3 p-1">
                <p className="border border-gray-400 px-4 py-0.5 rounded-2xl text-sm w-[80%]  md:text-lg">
                  {fileName}
                </p>
                <button
                  onClick={removeFile}
                  className="border border-red-600 text-white bg-red-500  rounded-4xl cursor-pointer px-3 py-0.5"
                >
                  X
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FileUploader;
