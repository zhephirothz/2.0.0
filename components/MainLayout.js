import Head from 'next/head'

const ga = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-99360357-1', 'auto');
  ga('send', 'pageview');
`

export default function MainLayout ({ children }) {
  return (
    <div>
      <Head>
        <title>React Bangkok 2.0.0</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <meta
          property='og:image'
          content='https://cloud.githubusercontent.com/assets/193136/26197053/232bb2a8-3beb-11e7-9058-3e34af946bc9.jpg'
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script dangerouslySetInnerHTML={{ __html: ga }} />
      </Head>
      <style global jsx>{`
        @font-face {
          font-family: 'ThaiSans Neue';
          src: local('ThaiSans Neue'),
               url('static/thaisansneue/thaisansneue-bold-webfont.woff2') format('woff2'),
               url('static/thaisansneue/thaisansneue-bold-webfont.woff') format('woff');
          font-weight: bold;
          font-style: normal;
        }
        @font-face {
          font-family: 'ThaiSans Neue';
          src: local('ThaiSans Neue'),
               url('static/thaisansneue/thaisansneue-regular-webfont.woff2') format('woff2'),
               url('static/thaisansneue/thaisansneue-regular-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
        body {
          margin: 0;
          background: #222;
          color: #fff;
          font-family: ThaiSans Neue;
          font-size: 22px;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
      {children}
    </div>
  )
}
