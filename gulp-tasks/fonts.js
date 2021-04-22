const {dest, src} = require('gulp');
const GetGoogleFonts = require('get-google-fonts');

const fonts = async () => {
  // Setup of the library instance by setting where we want
  // the output to go. CSS is relative to output font directory
  const instance = new GetGoogleFonts({
    outputDir: './dist/fonts',
    cssFile: './fonts.css'
  });

  // Grabs fonts and CSS from google and puts in the dist folder
  const result = await instance.download(
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap'
  );

  return result;
};

module.exports = fonts;
