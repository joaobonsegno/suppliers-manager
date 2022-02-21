import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { InvisibleLinkContainer } from './styles';

type InvisibleLinkProps = {
    children: ReactNode;
    to: string;
}

export function InvisibleLink({children, to}: InvisibleLinkProps) {

    return (
        <InvisibleLinkContainer>
            <Link to={to}>
                {children}
            </Link>
        </InvisibleLinkContainer>
    );
}