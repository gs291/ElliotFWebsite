import {styled} from '@mui/material/styles';
import {AppBar, Container, Toolbar, Typography} from '@mui/material';

import NavLink from './NavLink';
import siteLinks from '../../lib/utils/siteLinks';


const HeaderBar = styled(AppBar)`
  box-shadow: none;
  z-index: 10;
`;

export default function Nav({}){

    return (
        <>
            <HeaderBar position="relative" color="transparent" component="div">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <NavLink path="/" active={false}>
                            <Typography variant="h3">
                                EF
                            </Typography>
                        </NavLink>

                        {siteLinks.map(({text, ...rest}) => (
                            <NavLink {...rest}>
                                {text}
                            </NavLink>
                        ))}
                    </Toolbar>
                </Container>
            </HeaderBar>
        </>
    );
}