function SubjectInput({ subject, setSubject }) {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="w-[80%] md:w-[50%]">
          <p className="text-center italic text-[#C1CEDD]">
            (*) indicates as mandatory
          </p>
          <h1 className="mb-2 text-lg font-medium text-[#C1CEDD] md:text-3xl">
            Subject*
          </h1>
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            type="text"
            placeholder="Enter your subject here..."
            className="w-full px-6 py-5 rounded-3xl bg-[#141E30] text-[#C1CEDD] placeholder:text-[#8FA9C4] outline-none shadow-[inset_5px_5px_10px_#0D1625,inset_-5px_-5px_10px_#1D2B43] focus:shadow-[inset_3px_3px_7px_#0D1625,inset_-3px_-3px_7px_#1D2B43] transition-all duration-300"
          />
        </div>
      </div>
    </>
  );
}

export default SubjectInput;
