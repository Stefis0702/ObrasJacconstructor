import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesCom from './Routes/Routes.tsx'
import { CotizacionProvider } from './Context/Context.tsx'
import './index.css'
import AuthProvider from './Context/AuthContext.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <CotizacionProvider >
        <AuthProvider>
        <RoutesCom>
        </RoutesCom>
        </AuthProvider>
    </CotizacionProvider>
  </React.StrictMode>,
)
