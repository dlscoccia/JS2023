import { store } from '@/core/global/store'
import { NavigationLayout } from '@/shared/components/Layout/NavigationLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NavigationLayout>
        <Component {...pageProps} />
      </NavigationLayout>
    </Provider>
  )
}
