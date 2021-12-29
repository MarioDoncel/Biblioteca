import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';

import { NewComponentContainer } from './styles';




const NewComponent = ({onClick,children}:HTMLAttributes<HTMLDivElement>) => {
     return (
        <NewComponentContainer onClick={onClick}>
            {children}
        </NewComponentContainer>
    )
}

export default NewComponent;