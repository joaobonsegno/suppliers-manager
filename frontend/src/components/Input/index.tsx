import { InputHTMLAttributes } from 'react';
import { Size } from 'types';
import { InputContainer } from './styles';

type InputDefaultProps = InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
    maxWidth?: Size;
    minWidth?: Size;
}

export function Input({maxWidth, minWidth, style, ...rest}: InputProps & InputDefaultProps) {

    return (
        <InputContainer
            style={{
                ...style,
                maxWidth: maxWidth,
                minWidth: minWidth
            }}
            {...rest}
        />
    );
}