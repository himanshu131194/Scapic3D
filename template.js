export default ()=>{
  return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>MERN Skeleton</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
          <meta name="google-signin-client_id" content="820301897401-3v97489dlrhplu79fdvv8jt1b3dt6mi7.apps.googleusercontent.com">
          <style>
              a{
                text-decoration: none
              }
          </style>
        </head>
        <body style="margin:0">
          <div>dfdfdfdfdfdfdfd</div>
          <div id="root">sdsdsds</div>
          <style id="jss-server-side"></style>
          <script type="text/javascript" src="/dist/bundle.js"></script>
          <script>
            function onSuccess(googleUser) {
              console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
            }
            function onFailure(error) {
              console.log(error);
            }
            function renderButton() {
              gapi.signin2.render('my-signin2', {
                'scope': 'profile email',
                'width': 240,
                'height': 50,
                'longtitle': true,
                'theme': 'dark',
                'onsuccess': onSuccess,
                'onfailure': onFailure
              });
            }
          </script>
        <script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>
        </body>
      </html>`
}
