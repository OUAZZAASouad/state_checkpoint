import React from 'react'

class Person extends React.Component{

    render(){
        return(
            <div className = 'content' style = {{boxShadow : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width : '400px'}}>
                <img src = {this.props.person.image} width = '100%' height = '250px'/>
                <div style = {{marginLeft : '10px', marginRight : '10px'}}>
                    <h4 style = {{color : '#0081ff'}}> {this.props.person.fullName}</h4>
                    <p  style = {{fontWeight : 'bold'}} > {this.props.person.profession}</p>
                    <p style = {{textAlign : 'justify', fontStyle : 'italic'}}>{this.props.person.bio}</p>
                </div>
            </div>
        );
    }
       
}

export default Person;