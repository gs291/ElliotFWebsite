import Link from 'next/link';
import {useRouter} from 'next/router';
import {useSelector} from 'react-redux';
import {styled} from '@mui/material/styles';
import {Link as MUILink} from '@mui/material';

import {getMobile} from '../../lib/redux/selectors';
import {globalOptions} from '../../lib/utils/emotionStyled';


const HoverLink = styled('div')`
  transition: 0.1s;
  text-align: center;
  padding: 0 2em;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.palette.secondary.main};
  }
`;

const MLink = styled(MUILink, globalOptions)`
  transition: 0.3s;
  height: 100px;
  ${props => props['data-m'] ? 'width: 100%;' : ''}
  color: ${props => props.theme.palette.textOpposite.primary};
  border-bottom: 5px solid ${props => props['data-a'] ? 'black' : 'transparent'};
`;

const A = styled('div', globalOptions)`
  display: inline-block;
  min-width: 100px;
  line-height: 100px;
`;

export default function NavLink({path, children, active=true, ...rest}) {
    const router = useRouter();
    const mobile = useSelector(getMobile);

    return (
        <>
            <Link href={path} passHref>
                <MLink
                    underline="none"
                    {...(active ? {"data-a": router.pathname === path} : null)}
                    data-m={mobile}
                    {...rest}
                >
                    <HoverLink >
                        <A>
                            {children}
                        </A>
                    </HoverLink>
                </MLink>
            </Link>
        </>
    );
}