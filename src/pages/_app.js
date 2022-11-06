import Navbar from "../layouts"
import "../styles/globals.css"
import { wrapper, store } from "../store/store"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
