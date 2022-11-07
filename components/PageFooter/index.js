import ContentWrapper from 'components/ContentWrapper'

const PageFooter = () => (
  <footer className="fixed z-0 left-0 bottom-0 w-full bg-[#1d1d1d] text-[#868585] text-center text-[14px]">
    <ContentWrapper withPaddingY={false} className="h-[60px] flex items-center justify-center">
      <p>Site of <span className="text-white">Roy Anonuevo</span> © 2022,  All Rights Reserved.</p>
    </ContentWrapper>
  </footer>   
)

export default PageFooter