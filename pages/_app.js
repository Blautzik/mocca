import '../styles/globals.css'
import NavB from './Components/NavB/NavB';
import Nav from './Components/NavBa/NavBa'

function MyApp({ Component, pageProps }) {
  return (
  <>
    {/* <NavB /> */}
    <Nav className='drop-shadow-md' />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
