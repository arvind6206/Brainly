import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <div>
    <Button startIcon={<PlusIcon size={"md"}/>} variant="primary" size="sm" onClick={() => {}} text={"Share"}/>
    <Button startIcon={<ShareIcon size={"md"}/>} variant="secondary" size="md" onClick={() => {}} text={"Add Content"}/>
      
    </div>
  )
}

export default App
