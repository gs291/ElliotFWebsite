import {styled} from '@mui/material/styles';

import Nav from './Nav';
import HeaderBackground from './HeaderBackground';


const HeaderContainer = styled('div')`
  position: relative;
  height: 25vh;
  width: 100%;
`;

export default function Header() {

    return (
        <>
            <HeaderContainer>
                <Nav />
                <HeaderBackground />
            </HeaderContainer>
        </>
    );
}