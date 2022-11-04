const SectionTitle = ({ children, className = '' }) => {
  return (
    <h2 className={`text-4xl md:text-[40px] ${className}`}>{ children }</h2>
  )
}

export default SectionTitle