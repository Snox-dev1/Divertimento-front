import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'Divertimento ',
  siteName: 'Divertimento',
  description:
    "Divertimento est un site spécialisé dans la location et la vente de déguisements pour toutes les occasions. Nous offrons une vaste sélection de costumes pour adultes et enfants, allant des classiques tels que les costumes de super-héros et de princesses, aux tenues plus originales comme les costumes de mascottes et les déguisements d'animaux. Que vous recherchiez un costume pour Halloween, une soirée à thème ou tout autre événement, Divertimento a tout ce dont vous avez besoin pour faire sensation. ",
  url: 'https://divertimento.fr',
  type: 'website',
  robots: 'follow, index',
  image: '',
};

export default function Seo(props) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;

  return (
    <head>
      <title>{meta.title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, maximum-scale=5 "
      />
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      {/* <meta property="og:url" content={`${meta.url}${router.asPath}`} /> */}
      {/* <link rel="canonical" href={`${meta.url}${router.asPath}`} /> */}
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta name="publish_date" property="og:publish_date" content={meta.date} />
          <meta name="author" property="article:author" content="Hubert Vangermee" />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </head>
  );
}

const favicons = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#00e887',
  },
  { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
];
