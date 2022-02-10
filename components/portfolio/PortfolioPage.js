import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';


const PortfolioContainer = styled(`div`)`
  text-align: center;
`;

export default function PortfolioPage() {

    return (
        <>
            <PortfolioContainer>
                <Typography variant="h5">
                    This is Elliot's portfolio page
                </Typography>
            </PortfolioContainer>
        </>
    );
}