const ContentWrapper = ({ children, className = '', withPaddingY = true }) => {
  let combineClassNames = ''

  if (withPaddingY) {
    combineClassNames = `py-[80px] md:py-[140px] px-5 w-full mx-auto xl:max-w-[1200px] xl:px-0 ${className}`
  } else {
    combineClassNames = `px-5 w-full mx-auto xl:max-w-[1200px] xl:px-0 ${className}`
  }

  return (
    <div className={combineClassNames}>
      { children }
    </div>
  )
}

export default ContentWrapper