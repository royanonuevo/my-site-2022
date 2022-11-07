import { FaRegHandPointRight } from "react-icons/fa"

const Me = () => {
  return (
    <div className="h-[225px] w-[225px] relative">
      <div className="w-full h-full absolute group">
        <div className="w-full h-full transition-all ease-out duration-[0.4s] transform-preserve-3d group-hover:-rotate3d-180deg">
          <div 
            className="absolute w-full h-full rounded-[50%] bg-cover"
            style={{backgroundImage: `url('images/roy-anonuevo-2.jpeg')`}} 
          ></div>
          <div className="w-full h-full rounded-[50%] backface-hidden bg-black p-4 flex flex-col items-center justify-center text-center rotate3d-180deg">
            <p>Hello,<br />for any inquiries or collaboration,<br />Don&apos;t hesitate to contact me.</p>
            <FaRegHandPointRight className="text-[20px] mt-2 animate-bounce-arrow-right"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Me