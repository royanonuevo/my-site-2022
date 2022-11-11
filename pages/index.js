import PageHead from 'components/PageHead'
import PageFooter from 'components/PageFooter'
import SectionMain from 'components/SectionMain'
import SectionPhotos from 'components/SectionPhotos'
import SectionVideos from 'components/SectionVideos'
import SectionContact from 'components/SectionContact';

export default function Home() {
  return (
    <>
      <PageHead />
      <main className="relative z-[1] pb-[60px]">
        <SectionMain />
        <SectionPhotos />
        <SectionVideos />
        <SectionContact />
      </main>
      <PageFooter />
    </>
  )
}
