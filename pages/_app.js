import '../styles/globals.css'

import Nav from './Components/NavBa/NavBa'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Nav className='drop-shadow-md' />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
