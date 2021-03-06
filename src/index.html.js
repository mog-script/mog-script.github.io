import image from './landing-page/mog-script-logo.png'

module.exports = function ({ htmlWebpackPlugin }) {
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta charset="UTF-8">
        <title>M.O.G.</title>
        <meta name="description" content="M.O.G. - Modern front-end development made easy" />
        <meta property="og:title" content="M.O.G." />
        <meta property="og:description" content="Modern front-end development made easy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="M.O.G." />
        <meta name="twitter:title" content="M.O.G." />
        <meta name="twitter:description" content="Modern front-end development made easy" />
        <meta property="og:image" content="http://mog-script.js.org/${image}" />
      </head>
      <body>
        <div id="mog-script.github.io"></div>
      </body>
    </html>
  `)
}
