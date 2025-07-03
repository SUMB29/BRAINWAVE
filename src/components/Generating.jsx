import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base bg-neutral-950`}
    >
      <img className="w-5 h-5 mr-4 text-neutral-100" src={loading} alt="Loading" />
     <p className="text-neutral-100">AI is generating</p>
    </div>
  );
};

export default Generating;