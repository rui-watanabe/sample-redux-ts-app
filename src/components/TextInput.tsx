import React from 'react';

interface OwnProps {
  title: string
  inputValue: string
  onChangeValue: Function
}

const TextInput: React.FC<OwnProps> = (props: OwnProps) => {
  return(
    <>
      <span>{props.title}</span>
      <input name={props.title} type="text" value={props.inputValue} onChange={e => props.onChangeValue(e.target.value)}></input>
    </>
  )
}

export default TextInput;