import React from 'react'

interface OwnProps {
    title: string
    onClick: Function
}

export const SubmitButton : React.FC<OwnProps> = props => {
    return(
        <div>
            <button onClick={() => props.onClick()}>{props.title}</button>
        </div>
    )
}