import React from 'react'
import Hog from './Hog'

class HogContainer extends React.Component{

    filterHogs = (hogs) => {
        const isGreased =  this.props.greased 
        ? hogs.filter(hog => hog.greased)
        : hogs
        return this.props.weight
        ? isGreased.filter(hog => hog.weight > 1.5)
        : isGreased
    }

    sortHogs = (hogs) => {
        if (this.props.sort === "alpha") {
            // sort alphabetically
        } else if (this.props.sort === "weight") {
            // sort by weight
        } else {
            return hogs
        }
        
        // const sortedHogs = arrayOfHogs.sort((a, b) => null)

        // return sortedHogs
    }

    calculateHogsToRender = () => {
        const allHogs = this.props.hogs
        const filteredHogs = this.filterHogs(allHogs)
        const sortedAndFilteredHogs = this.sortHogs(filteredHogs)

        return sortedAndFilteredHogs
    }

    render(){
        const hogsIWantToRender = this.calculateHogsToRender()

        return(
            <div>
                {hogsIWantToRender.map(hog => <Hog key={hog.name} hog={hog} />)}
            </div>
        )
    }
}

export default HogContainer