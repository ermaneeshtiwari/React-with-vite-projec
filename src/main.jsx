import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FunComponente from './componentes/FunComponente'
import ClassComponente from './componentes/ClassComponente'
import JsxComponent from './componentes/JsxComponent'
import StateFunComp from './componentes/StateFunComp'
import StateClassComp from './componentes/StateClassComp'
import PropFunComponent from './componentes/PropFunComponent'
import PropClassComponent from './componentes/PropClassComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FunComponente />
    <ClassComponente />
    <JsxComponent />
    <StateFunComp />
    <StateClassComp />
    <PropFunComponent title="Title Of Page" description="Este componente recebe props e as exibe." />
    <PropClassComponent title="Title Of Class Component Page" description="Este componente recebe props e as exibe." />
  </StrictMode>,
)
