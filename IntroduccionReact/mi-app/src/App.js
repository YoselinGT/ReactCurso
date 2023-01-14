import { Component } from "react"

class App extends Component {
  render() {
    return (
      <div>
        <p>Hola mundo</p>
        <button onClick={() => console.log('click')}>Enviar</button>
      </div>
    )
  }
}

export default App