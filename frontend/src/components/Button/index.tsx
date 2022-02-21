import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Color, Size } from 'types';
import { ButtonContainer } from './styles';

type ButtonDefaultProps = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
    children: ReactNode;
    maxWidth?: Size;
    background?: Color;
}

export function Button({children, type="button", maxWidth, background, style, ...rest}: ButtonProps & ButtonDefaultProps) {

    return (
        <ButtonContainer 
            type={type} 
            style={{
                ...style,
                maxWidth: maxWidth,
                background: background
            }}
            {...rest}
        >
            {children}
        </ButtonContainer>
    );
}