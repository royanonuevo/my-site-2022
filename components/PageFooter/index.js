import ContentWrapper from 'components/ContentWrapper'

const PageFooter = () => (
  <footer className="bg-[#1d1d1d] text-[#868585] text-center text-[14px]">
    <ContentWrapper withPaddingY={false} className="py-[20px]">
      <div className="">
        <p>Site of <span className="text-white">Roy Anonuevo</span> © 2022,  All Rights Reserved.</p>
      </div>
    </ContentWrapper>
  </footer>   
)

export default PageFooter