export const showStatus = (status: number) => {
  let message = ''
  switch (status) {
    case 200:
      message = 'Success(200)'
      break
    case 400:
      message = 'Bad Request(400)'
      break
    case 401:
      message = 'Unauthorized(401)'
      break
    case 403:
      message = 'Forbidden(403)'
      break
    case 404:
      message = 'Not Found(404)'
      break
    case 408:
      message = 'Request Timeout(408)'
      break
    case 500:
      message = 'Internal Server Error(500)'
      break
    case 501:
      message = 'Not Implemented(501)'
      break
    case 502:
      message = 'Bad Gateway(502)'
      break
    case 503:
      message = 'Service Unavailable(503)'
      break
    case 504:
      message = 'Gateway Timeout(504)'
      break
    case 505:
      message = 'HTTP Version Not Support'
      break
    default:
      message = `Error have occurred (${status})!`
  }
  return `${message}, Please check again or call to back-end teams`
}
