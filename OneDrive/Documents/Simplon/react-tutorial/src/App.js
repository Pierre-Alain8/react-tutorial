import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

// class   App extends Component {
//     //création d'un component class contenant un tableau de data au format JSON
    
//    render () {
//     const characters = [
//         {
//          name:'Charlie',
//          job: 'Janitor',
//         }, 
         
//         {
//          name:'Mac',
//          job: 'Bouncer',
//         },
         
//         {
//          name: 'Dee',
//          job: 'Aspring actress',
//         },

//         {
//          name: 'Dennis',
//          job: 'Bartender',
//         },
//     ]

//     return(  
//         <div className="container">
//             <Table characterData={characters} />
//         {/* la propriété data permet de transmettre des données, celle-ci peut être appelé n'importe où  */}
//         {/* en passant les données dans la variable characters, les data sont maintenant acessible dans le component Table */}
//         </div>
//     )
//   }
// }

class App extends Component {
    state = {
    // création d'un etat
        characters: [],
    }

    removeCharacter = index => {
        const { characters } = this.state

        this.setState( {
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })

        
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render(){
      const { characters } = this.state

      return (
       <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit} />
       </div>
  )
    }
}

export default App
//L'export default permet d'exporter ce composant App et de le charger dans le composant index.js
//Séparer les composant permet de rendre l'application moins lourde et simple à prendre en main