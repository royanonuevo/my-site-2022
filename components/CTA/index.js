const CTA = ({ label = '', href, icon }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="border border-[#3b3c3c] border-solid backface-hidden font-bold py-[15px] px-[50px] tracking-[2px] cursor-pointer uppercase relative z-[1] ease-out duration-30 before:bg-[#3b3c3c] before:content-[''] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:ease-out before:duration-300 before:scale-x-0 hover:before:scale-x-100 hover:text-white"
    >
      <div className="relative z-[2] inline-flex items-center">
        <span className="mr-1">{ label }</span>
        { icon }
      </div>
    </a>
  )
}

export default CTA