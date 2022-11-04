import { useState, useEffect } from 'react'
import ContentWrapper from 'components/ContentWrapper'
import HorizontalLine from 'components/HorizontalLine'
import SectionTitle from 'components/SectionTitle'
import Me from 'components/Me'
import { FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa"

const SectionContact = () => {
  const [randomId, setRandomId] = useState(null)

  const socialLinks = [
    {
      id: 's1',
      url: 'https://www.facebook.com/auxiliaryOfficial',
      title: 'My Facebook Page',
      icon: <FaFacebookF />
    },
    {
      id: 's2',
      url: 'https://www.instagram.com/auxiliary.ph',
      title: 'My Instagram',
      icon: <FaInstagram />
    },
    {
      id: 's3',
      url: 'https://www.youtube.com/AuxiliaryOfficial',
      title: 'My Youtube Channel',
      icon: <FaYoutube />
    },
    {
      id: 's4',
      url: 'https://www.linkedin.com/in/anonuevoroy',
      title: 'My LinkedIn Profile',
      icon: <FaLinkedinIn />
    },
  ]

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      let allIds = socialLinks.map(s => s.id)
      if (randomId !== null) {
        allIds = allIds.filter(id => id !== randomId)
      }
      
      const randomNumber = Math.floor(Math.random() * allIds.length)
      const newRandomId = allIds[randomNumber]
      setRandomId(newRandomId)
    }, 3000);
  
    return () => {
      clearTimeout(timeOutId)
    };
  }, [randomId]) // eslint-disable-line

  return (
    <section className="text-center bg-[#252525] text-[#999]">
      <ContentWrapper>
        <SectionTitle className="text-[#FFF] uppercase">Get In Touch</SectionTitle>
        <HorizontalLine />

        <div className="sm:grid sm:gap-[34px] sm:grid-flow-col sm:max-w-[800px] m-auto">
          <div className="flex justify-center mb-4 sm:block sm:mb-0">
            <Me />
          </div>
          <div className="text-left">
            <p className="mb-10">{`I love to hear what people have to say. If you have any questions or thoughts you'd like to share with me, please let us know. I'm eager to hear your opinion.`}</p>
            <a 
              className="flex items-center ease-in duration-300 hover:text-white"
              href="mailto:anonuevoroy@gmail.com?Subject=Hi Roy" 
              title="Email me at anonuevoroy@gmail.com"
              target="_top"
            >
              <FaEnvelope />
              <span className="ml-1">anonuevoroy@gmail.com</span>
            </a>

            <ul className="mt-[30px] flex">
                <li className="mr-2">Connect with me:</li>
                {
                  socialLinks.map((link, index) => (
                    <li key={`link-${index}`} className={`flex mr-3 last:mr-0 ${link.id === randomId? 'shake' : ''}`}>
                      <a 
                        href={link.url}
                        className="text-[30px] ease-in duration-300 hover:text-white" 
                        title={link.title} 
                        target="_blank" 
                        rel="noreferrer"
                      >
                        { link.icon }
                      </a>
                    </li>
                  ))
                }
              </ul>
          </div>
        </div>
       
      </ContentWrapper>
    </section>
  )
}

export default SectionContact