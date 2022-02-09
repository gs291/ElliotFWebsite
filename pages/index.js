import {Container} from '@mui/material';
import {styled} from '@mui/material/styles';

import AboutMe from '../components/index/AboutMe';


export default function Home() {

    return (
        <>
            <Container maxWidth="md">
                <AboutMe />
            </Container>
        </>
    )
}
