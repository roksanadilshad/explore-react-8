
import './App.css'
import ControlledField from './Componenet/ControlledField/ControlledField'
import FormAction from './Componenet/FormSet/FormAction/FormAction'
import FormSet from './Componenet/FormSet/FormSet'
import HookForm from './Componenet/HokkForm/HookForm'
import Product from './Componenet/ProductManagement/ProductForm'
import ProductManagement from './Componenet/ProductManagement/ProductManagement'
import Uncontroled from './Componenet/Uncontroled/Uncontroled'

function App() {
  
  return (
    <>
      
      <h1>Vite + React</h1>
      <FormSet></FormSet>
      <FormAction></FormAction>
      <ControlledField></ControlledField>
      <Uncontroled></Uncontroled>
      <HookForm></HookForm>
      <ProductManagement></ProductManagement>
    </>
  )
}

export default App
