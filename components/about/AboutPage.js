import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';


const AboutContainer = styled(`div`)`
  text-align: center;
`;

export default function AboutPage() {

    return (
        <>
            <AboutContainer>
                <Typography variant="h5">
                    This is the page about Elliot!
                </Typography>
            </AboutContainer>
        </>
    );
}