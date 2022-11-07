import ContentWrapper from 'components/ContentWrapper'

const SectionMain = () => {
  return (
    <section className="h-screen w-full relative">
      <video loop autoPlay muted poster='/videos/nagpatong-rock.jpg' className="object-cover object-[30%_50%] md:object-[10%_50%] w-full h-full lg:object-left">
        <source src='/videos/nagpatong-rock.mp4' type='video/mp4' />
      </video>

      <div className="bg-black/[0.3] absolute w-full h-full top-0 left-0 flex flex-col justify-center text-white">
        <ContentWrapper>
          <div className="max-w-[800px] lg:mt-[7%]">
            <h1 className="text-4xl uppercase font-thin sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[80px] element-from-bottom [animation-delay:500ms]">
              <span className="">Hello,</span>
              <span className="">{` I\'m `}</span>
              <span className="font-light block lg:inline-block">Roy Anonuevo</span>
            </h1>
            <p className="mt-2 leading-5 sm:text-base lg:text-lg element-from-bottom [animation-delay:1000ms]">A software engineer from the Philippines who is passionate about hiking, photography, web development and an amateur travel filmmaker.</p>
          </div>
        </ContentWrapper>
      </div>
    </section>
  )
}

export default SectionMain