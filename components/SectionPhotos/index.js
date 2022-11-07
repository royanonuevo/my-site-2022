
import Image from 'next/image'
import img1 from 'public/images/ig/1.jpg'
import img2 from 'public/images/ig/2.jpg'
import img3 from 'public/images/ig/3.jpg'
import img4 from 'public/images/ig/4.jpg'
import img5 from 'public/images/ig/5.jpg'
import img6 from 'public/images/ig/6.jpg'
import ContentWrapper from 'components/ContentWrapper'
import HorizontalLine from 'components/HorizontalLine'
import SectionTitle from 'components/SectionTitle'
import CTA from 'components/CTA'
import { FaLongArrowAltRight } from "react-icons/fa"

const SectionPhotos = () => {
  const photos = [
    {
      alt: 'Mt. Purgatory',
      src: img1,
      bgSrc: '/images/ig/1.jpg'
    },
    {
      alt: 'M.t Pulag',
      src: img2,
      bgSrc: '/images/ig/2.jpg'
    },
    {
      alt: 'Mt. Mapalad',
      src: img3,
      bgSrc: '/images/ig/3.jpg'
    },
    {
      alt: 'Japan',
      src: img4,
      bgSrc: '/images/ig/4.jpg'
    },{
      alt: 'Japan',
      src: img5,
      bgSrc: '/images/ig/5.jpg'
    },
    {
      alt: 'Bali, Indonesia',
      src: img6,
      bgSrc: '/images/ig/6.jpg'
    }
  ]
  return (
    <section className="text-center bg-white">
      <ContentWrapper>
        <SectionTitle>Adventurous / Photographer</SectionTitle>
        <HorizontalLine />
        <p className="mb-10">An adventurer who really loves to discover new places, a nature lover and a budding landscape photographer one day.</p>
       
        <ul className="text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
              photos.map((photo, index) => (
                <li 
                  key={`photo-${index}`} 
                  className="h-[300px] overflow-hidden"
                >
                  <div 
                    style={{backgroundImage: `url(${photo.bgSrc})`}} 
                    className="w-full h-full bg-center bg-no-repeat bg-cover origin-center ease-out duration-500 hover:scale-110" 
                  />
                  <span className="hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                    />
                  </span>
                </li>
              ))
            }
        </ul>

        <div className="mt-11 text-center">
          <CTA label='View More' href='https://www.instagram.com/auxiliary.ph' icon={<FaLongArrowAltRight />} />
        </div>
      </ContentWrapper>
    </section>
  )
}

export default SectionPhotos