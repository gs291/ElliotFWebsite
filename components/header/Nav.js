import {useSelector} from 'react-redux';
import {styled} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import {AppBar, Button, Container, Toolbar, Typography} from '@mui/material';

import NavLink from './NavLink';
import siteLinks from '../../lib/utils/siteLinks';
import {getMobile} from '../../lib/redux/selectors';
import {globalOptions} from '../../lib/utils/emotionStyled';


const HeaderBar = styled(AppBar)`
  box-shadow: none;
  z-index: 10;
  
  height: 100%;
  justify-content: center;
`;

const Menu = styled(Button, globalOptions)`
  transition: 0.3s;
  height: 100px;
  width: 100px;
  color: ${props => props.theme.palette.textOpposite.primary};
`;

export default function Nav({drawerOpen, closeDrawer, toggleDrawer}){
    const mobile = useSelector(getMobile);

    return (
        <>
            <HeaderBar position="relative" color="transparent" component="div">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <NavLink path="/" active={false} onClick={closeDrawer}>
                            <Typography variant="h3">
                                EF
                            </Typography>
                        </NavLink>

                        {!mobile && siteLinks.map(({text, ...rest}) => (
                            <NavLink {...rest}>
                                <Typography variant="h4">
                                    {text}
                                </Typography>
                            </NavLink>
                        ))}
                        {mobile && (
                            <Menu onClick={toggleDrawer}>
                                {drawerOpen ? (
                                    <ClearIcon fontSize="large"/>
                                ) : (
                                    <MenuIcon fontSize="large"/>
                                )}
                            </Menu>
                        )}
                    </Toolbar>
                </Container>
            </HeaderBar>
        </>
    );
}