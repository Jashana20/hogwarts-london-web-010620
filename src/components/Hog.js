import React from 'react'

class Hog extends React.Component {

    constructor(props){
        super()
        this.state = {
            showDetails: true
        }
    }

    handleShowDetails = () => {
        this.setState({showDetails: !this.state.showDetails})
    }

    getImg = name => {
        let imgName = name
          .split(" ")
          .join("_")
          .toLowerCase();
        let hogImg = require(`../hog-imgs/${imgName}.jpg`);
        return hogImg;
      };


    render(){
        return(
            <div className="pigTile">
                <h2>{this.props.hog.name}</h2>
                <img src={this.getImg(this.props.hog.name)} alt={this.props.hog.name}/>
                <br></br>
                <button onClick={this.handleShowDetails}>Show Details</button>
                {this.state.showDetails && (
                <div>
                     <h3>Specialty: {this.props.hog.specialty}</h3>
                     <h3>Greased: {this.props.hog.greased ? "Greased" : "Not Greased"}</h3>
                     <h3>Weight: {this.props.hog.weight}</h3>
                </div>
                )}
            </div>
        )
    }
}

export default Hog