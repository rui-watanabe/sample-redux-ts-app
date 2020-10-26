import React from 'react'
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import ShowState from './ShowState';
import { SubmitButton } from './SubmitButton';
import { TopPageHandler } from '../container/TopPageContainer';

interface OwnProps {
    inputValue: string
    selectedValue: string
    clickCount: number

}
type Props = OwnProps & TopPageHandler
const TopPageForm: React.FC<Props> = (props: Props) => {
        return(
            <>
                <TextInput title='入力' inputValue={props.inputValue} onChangeValue={props.handleOnChangeValue}/>
                <RadioInput title='ラジオ' selectedValue={props.selectedValue} onChangeValue={props.handleOnSelectValue}/>
                <SubmitButton title='Click me' onClick={props.handleOnClick}/>
                <ShowState inputValue={props.inputValue} selectedValue={props.selectedValue} clickCount={props.clickCount}/>

            </>
        )
}

export default TopPageForm