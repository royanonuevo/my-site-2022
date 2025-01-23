import { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import StackIcon from 'tech-stack-icons'

import ContentWrapper from 'components/ContentWrapper'
import HorizontalLine from 'components/HorizontalLine'
import SectionTitle from 'components/SectionTitle'

const logos = [
  [
    { label: 'HTML 5', icon: 'html5' }, 
    { label: 'CSS 3', icon: 'css3' }, 
    { label: 'SASS', icon: 'sass' }, 
    { label: 'Tailwind CSS', icon: 'tailwindcss' },
    { label: 'shadcn/ui', icon: 'shadcnui' },
    { label: 'JavaScript', icon: 'js' }, 
    { label: 'JQuery', icon: 'jquery'}, 
    { label: 'Angular', icon: 'angular' }, 
    { label: 'Vue JS', icon: 'vuejs' }, 
    { label: 'React JS', icon: 'reactjs' },
    { label: 'Next JS', icon: 'nextjs2' },
    { label: 'GSAP', icon: 'gsap' },
  ], [
    { label: 'TypeScript', icon: 'typescript'},
    { label: 'npm2', icon: 'npm2' },
    { label: 'Node JS', icon: 'nodejs' },
    { label: 'zod', icon: 'zod' },
    { label: 'php', icon: 'php' },
    { label: 'MySQL', icon: 'mysql' },
    { label: 'WordPress', icon: 'wordpress' },
    { label: 'Apache', icon: 'apache' },
    { label: 'Docker', icon: 'docker' },
    { label: 'AWS', icon: 'aws' }, 
    { label: 'OpenAI', icon: 'openai' },
    { label: 'Python', icon: 'python' }
  ], [

    { label: 'Git', icon: 'git' },
    { label: 'GitHub', icon: 'github' },
    { label: 'Bitbucket', icon: 'bitbucket' },
    { label: 'Visual Studio Code', icon: 'vscode' },
    { label: 'Cloudflare', icon: 'cloudflare' },
    { label: 'Cloudinary', icon: 'cloudinary' },
    { label: 'ESLint', icon: 'eslint' },
    { label: 'Analytics', icon: 'analytics' },
    { label: 'Postman', icon: 'postman' },
    { label: 'Adobe Lightroom', icon: 'lightroom' },
    { label: 'Adobe Photoshop', icon: 'ps' },
  ]
]


const SectionTechStack = () => {

  useEffect(() => {
		ScrollTrigger.refresh()
	}, [])

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger)

		let direction = 1 // 1 = forward, -1 = backward scroll

		const marquee1 = roll('.marquee-0', { duration: 12 })
		const marquee2 = roll('.marquee-1', { duration: 15 })
		const marquee3 = roll('.marquee-2', { duration: 20 })
		const marquee = ScrollTrigger.create({
			trigger: '.marquee',
			start: '-50% bottom',
			markers: false,
			onUpdate (self) {
				if (self.direction !== direction) {
					direction *= -1
				}
				marquee1.timeScale(direction * 2.5)
				marquee2.timeScale(direction * 4)
				marquee3.timeScale(direction * 5)
				gsap.to([marquee1, marquee2, marquee3], { timeScale: direction, overwrite: true, duration: 1 })
			},
			onRefresh () {
				// console.log('Marquee Refresh')
			},
		})

		// helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
		function roll (targets, vars, reverse) {
			vars = vars || {}
			vars.ease || (vars.ease = 'none')
			const tl = gsap.timeline({
				repeat: -1,
				onReverseComplete () {
					this.totalTime(this.rawTime() + this.duration() * 10) // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
				},
			})
			const elements = gsap.utils.toArray(targets)
			// console.log('marquee el', elements)
			const clones = elements.map((el) => {
				let clone = el.cloneNode(true)
				el.parentNode.appendChild(clone)
				return clone
			})
			const positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], { position: 'absolute', overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth) }))
			positionClones()
			elements.forEach((el, i) => tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0))
			window.addEventListener('resize', () => {
				let time = tl.totalTime() // record the current time
				tl.totalTime(0) // rewind and clear out the timeline
				positionClones() // reposition
				tl.totalTime(time) // jump back to the proper time
			})
			return tl
		}
	})

  return (
    <section className='marquee text-center bg-[#393E46] text-white '>
      <ContentWrapper className='md:py-[120px]'>
        <SectionTitle>Tech Stack</SectionTitle>
        <HorizontalLine />

        <p className='mb-10'>Here are the tools, frameworks, and programming languages that have shaped my career and powered my projects.</p>
       
        <div className='bg-[#393E46] overflow-hidden'>
          {logos.map((row, rowIndex) => (
            <div 
              key={`tech-stack-row-${rowIndex}`} 
              className='relative w-full whitespace-nowrap overflow-hidden py-7 border-b border-b-solid border-b-[#999] last:border-transparent'
            >
              <div className={`marquee-${rowIndex} inline-block w-max`}>
                { row.map((logo, index) => {
                  return (
                    <div key={`tech-stack-icon-${rowIndex}-${index}`} title={logo.label} className='icon inline-block mx-6'>
                      <div className='flex gap-2 flex-row items-center text-[#b7b6b6]'>  
                        <StackIcon name={logo.icon} className='h-[40px]' />
                        <span className='font-bold text-[13px]'>{ logo.label }</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        
      </ContentWrapper>
    </section>
  )
}

export default SectionTechStack