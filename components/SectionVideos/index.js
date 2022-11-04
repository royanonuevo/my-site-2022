import ContentWrapper from 'components/ContentWrapper'
import HorizontalLine from 'components/HorizontalLine'
import SectionTitle from 'components/SectionTitle'
import CTA from 'components/CTA'
import { FaLongArrowAltRight } from "react-icons/fa"

const SectionVideos = () => {
  const videos = [
    {
      src: 'jlxshR6z738',
      title: 'Chasing Wonders'
    },
    {
      src: 'osbDqLqFT50',
      title: 'Japan'
    },
    {
      src: 's4mDLIONIPQ',
      title: 'Lumot Lake'
    },
    {
      src: 'I6bo9VYzEGo',
      title: 'Mapanuepe Lake'
    },
  ]
  return (
    <section className="text-center bg-[#F5F5F5]">
      <ContentWrapper>
        <SectionTitle>Travel Film Making</SectionTitle>
        <HorizontalLine />
        <p className="mb-10">A hobbyist travel filmmaker from the Philippines who travels a lot to document unforgettable moments. I am open to collaboration. Please do not hesitate to email me.</p>
        
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-7">
          {
            videos.map(video => (
              <li key={`video-${video.src}`} className="overflow-hidden pt-[56.25%] relative">
                <iframe 
                  width="560" 
                  height="315" 
                  src={`https://www.youtube.com/embed/${video.src}`} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full absolute left-0 top-0"
                />
              </li>
            ))
          }
        </ul>

        <div className="mt-11 text-center">
          <CTA label='Watch More' href='https://www.youtube.com/AuxiliaryOfficial' icon={<FaLongArrowAltRight />} />
        </div>
      </ContentWrapper>
    </section>
  )
}

export default SectionVideos