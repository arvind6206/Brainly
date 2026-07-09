import React from 'react'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
  return (
    <div>
    <Button startIcon={<PlusIcon/>} variant="primary" size="sm" onClick={() => {}} text={"Share"}/>
    <Button variant="secondary" size="md" onClick={() => {}} text={"Add Content"}/>
      
    </div>
  )
}

export default App
