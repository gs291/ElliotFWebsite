import Link from 'next/link';
import {useRouter} from 'next/router';
import {styled} from '@mui/material/styles';
import {Link as MUILink} from '@mui/material';

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
  color: ${props => props.theme.palette.text.primary};
  border-bottom: 5px solid ${props => props['data-a'] ? 'black' : 'transparent'};
`;

const A = styled('div', globalOptions)`
  display: inline-block;
  min-width: 100px;
  font-size: ${props => props['data-m'] ? 2 : 1.5 }em;
  line-height: 100px;
`;

export default function NavLink({path, children, active=true, ...rest}) {

    const router = useRouter();

    return (
        <>
            <Link href={path} passHref>
                <MLink
                    underline="none"
                    {...(active ? {"data-a": router.pathname === path} : null)}
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