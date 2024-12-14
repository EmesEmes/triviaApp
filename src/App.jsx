import { PrimeReactProvider } from "primereact/api";
// import Table from "./components/Table"
import Trivia from "./components/Trivia"

import "primereact/resources/themes/lara-light-cyan/theme.css";
  

const App = () => {
  return (
    <PrimeReactProvider>

      <main className="flex  flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold mb-8">Trivia Challenge</h1>
        
        <Trivia />
      </main>
    </PrimeReactProvider>
  )
}

export default App