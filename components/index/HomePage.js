import {styled} from '@mui/material/styles';
import {Typography} from '@mui/material';


const HomeContainer = styled(`div`)`
  text-align: center;
`;

export default function HomePage() {

    return (
        <>
            <HomeContainer>
                <Typography variant="h4">
                    Hello
                </Typography>
                <Typography variant="body1">
                    Welcome to the home page for Elliot.
                </Typography>
                <br />
                <Typography variant="body1">
                    This will contain the circles/buttons with "Travel"/"Commercial"/"Drone".
                    (I was not too sure how this was going to be implemented, so I will do it once I get more information from you Elliot)
                </Typography>
            </HomeContainer>
        </>
    );
}