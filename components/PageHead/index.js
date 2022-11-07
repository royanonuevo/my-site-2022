import Head from 'next/head'

export default function PageHead () {
  const pageUrl = 'https://royanonuevo.vercel.app'
  const pageTitle = 'Roy Anonuevo'
  const pageDescription = 'A software engineer from the Philippines who is passionate about hiking, photography, web development and an amateur travel filmmaker.'
  const pageImageUrl = `${pageUrl}/images/roy-anonuevo-og-image.jpg`

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      {/* SEO */}
      <title>{ pageTitle }</title>
      <meta name='description' content={pageDescription} />
      <meta name='author' content='Roy Anonuevo' />
      <meta name='keywords' content='Roy Anonuevo, photography, hiking, website development, travel filmmaker' />

      {/* OG TAGS */}
      <meta property='og:type' content='website' /> 
      <meta property='og:site_name' content={pageTitle} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:url' content={pageUrl} />
      <meta property='og:description' content={pageDescription} />
      <meta property='og:image' content={pageImageUrl} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content={pageTitle} />

      <meta itemProp='name' content={pageTitle} />
      <meta itemProp='url' content={pageUrl} />
      <meta itemProp='description' content={pageDescription} />
      <meta itemProp='thumbnailUrl' content={pageImageUrl} />
      <link rel='image_src' href={pageImageUrl} />

      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={pageDescription} />
      <meta name='twitter:image' content={pageImageUrl} />
      <meta name='twitter:url' content={pageUrl} />
      <meta name='twitter:card' content='summary' />
    </Head>
  )
}