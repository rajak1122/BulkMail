import { HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

function EmailCountCard({ emailList, fileUploaded }) {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="w-[80%] md:w-[50%] rounded-3xl bg-[#141E30] shadow-[6px_6px_12px_#0D1625,-6px_-6px_12px_#1D2B43] px-8 py-6">
          <h2 className="text-[#C1CEDD] text-xl md:text-2xl font-medium">
            Total Recipients
          </h2>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold text-[#C1CEDD]">
                {emailList.length}
              </h1>

              <div className="flex items-center gap-1 mt-2">
                {!fileUploaded ? (
                  <div className="flex items-center gap-1 mt-2">
                    <HiOutlineExclamationCircle className="text-lg md:text-xl text-red-600" />

                    <p className="text-[#C1CEDD] md:text-xl">
                      No file has been uploaded
                    </p>
                  </div>
                ) : emailList.length > 0 ? (
                  <div className="flex items-center gap-1 mt-2">
                    <HiOutlineCheckCircle className="text-lg md:text-xl text-[#6FAF8F]" />

                    <p className="text-[#35577D] md:text-xl">Ready to Send</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 mt-2">
                    <HiOutlineExclamationCircle className="text-lg md:text-xl text-[#B85C5C]" />

                    <p className="text-[#35577D] md:text-xl">
                      No valid email addresses found
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="h-20 w-20 rounded-full flex items-center justify-center bg-[#35577D] shadow-[6px_6px_12px_#0D1625,-6px_-6px_12px_#1D2B43]">
              <HiOutlineUserGroup className="text-4xl md:text-5xl text-[#C1CEDD]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailCountCard;
