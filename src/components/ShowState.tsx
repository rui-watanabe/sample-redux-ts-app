import React from 'react'

interface OwnProps {
    inputValue: string
    selectedValue: string
    clickCount: number
}

const ShowState : React.FC<OwnProps> = props => {
    return(
        <div>
            <label>[states]</label>
            <div>{props.inputValue}</div>
            <div>{props.selectedValue}</div>
            <div>{props.clickCount}</div>
        </div>
    )
}

export default ShowState;
