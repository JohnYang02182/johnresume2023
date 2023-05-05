<template>
  <div>
    <p>When I buid my profolio I meet a problem while I try to send a request to openAI and I got CROS.</p>
    <p>The error showed that it relative to <b>"withcredentials"</b> that one of the setting of axios</p>
    <P>then I read axios document again and digged a little deeper, than I found out that </P>
    <span>If you're encountering a CORS error while using Axios with withCredentials: true , it might be because the server is not set up to allow requests with credentials from the origin of your application.</span>
    <a href="https://stackoverflow.com/questions/53019539/axios-cannot-send-cookie-with-request-even-with-withcredential-true" target="_blank">ok it makes sance.</a>
  </div>
</template>