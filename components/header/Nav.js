import {useSelector} from 'react-redux';
import {styled} from '@mui/material/styles';
import {AppBar, Container, Toolbar, Typography} from '@mui/material';

import NavLink from './NavLink';
import siteLinks from '../../lib/utils/siteLinks';
import {getMobile} from '../../lib/redux/selectors';


const HeaderBar = styled(AppBar)`
  box-shadow: none;
  z-index: 10;
`;

export default function Nav({}){
    const mobile = useSelector(getMobile);

    return (
        <>
            <HeaderBar position="relative" color="transparent" component="div">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <NavLink path="/" active={false}>
                            <Typography variant={mobile ? "h3" : "h5"}>
                                EF
                            </Typography>
                        </NavLink>

                        {!mobile && siteLinks.map(({text, ...rest}) => (
                            <NavLink {...rest}>
                                <Typography variant={mobile ? "h4" : "body1"}>
                                    {text}
                                </Typography>
                            </NavLink>
                        ))}
                    </Toolbar>
                </Container>
            </HeaderBar>
        </>
    );
}