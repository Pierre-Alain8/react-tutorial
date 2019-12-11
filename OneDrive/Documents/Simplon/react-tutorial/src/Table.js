import React, { Component } from 'react';


const TableHeader = () => {
    //Composant simple utilisant une fonction, ce premier composant simple contiendra la premire scruture du tableau : le header(thead)
    return (
        <thead>
            <tr>
                <th> Name </th>
                <th>Job </th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    //Composant simple utilisant une fonction, ce premier composant simple contiendra la seconde partie de la scruture du tableau : le body(tbody)
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                   <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
           
    
}

// les composants simples (fonctions) sont situés dans le même fichier pour pouvoir être utilisé dans le composant class
//Un composant simple n'a besoin que d'un return contrairement aux composants class qui fonctionnent avec un render(){} et un return

class Table extends Component {
    //les composant class personnalisés permettent de mieux les différencier des éléments HTML classique
    // Un composant class doit inclure render()et return ne peut renvoyer qu'un seul élément parent
        render() {
            const { characterData, removeCharacter } = this.props
            // récupération des données characterData dans Table via la propriéte props

            return (
             <table>
                 <TableHeader /> 
                 <TableBody characterData={characterData} removeCharacter= {removeCharacter} />
             </table>
                    
            )
        }
    };
    

export default Table