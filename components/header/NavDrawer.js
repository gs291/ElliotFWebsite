import styled from '@emotion/styled';
import {useSelector} from 'react-redux';
import {Drawer, Typography} from '@mui/material';

import NavLink from './NavLink';
import siteLinks from '../../lib/utils/siteLinks';
import {getDarkMode} from '../../lib/redux/selectors';
import {globalOptions} from '../../lib/utils/emotionStyled';

const TopDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    height: 100%;
  }
`;

const DrawerContainer = styled('div', globalOptions)`
  height: 100%;
  padding-top: 25vh;
  padding-bottom: 5%;
  background-color: ${props => props.theme.palette.background.paper};
  transition: 0.3s;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  overflow-y: auto;
`;

const DrawerLink = styled(NavLink)`
  flex: 1;
`;

export default function NavDrawer({drawerOpen, closeDrawer}) {
    const darkMode = useSelector(getDarkMode);


    return (
        <>
            <TopDrawer
                open={drawerOpen}
                onClose={closeDrawer}
                anchor="top"
                transitionDuration={350}
            >
                <DrawerContainer data-dm={darkMode}>
                    {siteLinks.map(({text, ...rest}) => (
                        <DrawerLink active={false} onClick={closeDrawer} {...rest} >
                            <Typography variant="h4">
                                {text}
                            </Typography>
                        </DrawerLink>
                    ))}
                </DrawerContainer>
            </TopDrawer>
        </>
    );
}