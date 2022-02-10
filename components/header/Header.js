import {useState} from 'react';
import {useSelector} from 'react-redux';
import {styled} from '@mui/material/styles';

import Nav from './Nav';
import NavDrawer from './NavDrawer';
import HeaderBackground from './HeaderBackground';
import {getMobile} from '../../lib/redux/selectors';


const HeaderContainer = styled('header')`
  position: relative;
  height: 25vh;
  width: 100%;
  
  z-index: 3000;
`;

export default function Header() {
    const mobile = useSelector(getMobile);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => setDrawerOpen(prevOpen => !prevOpen);
    const handleDrawerClose = () => setDrawerOpen(false);

    return (
        <>
            <HeaderContainer>
                <Nav drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
                <HeaderBackground />
            </HeaderContainer>
            {mobile && (
                <NavDrawer drawerOpen={drawerOpen} closeDrawer={handleDrawerClose}/>
            )}
        </>
    );
}