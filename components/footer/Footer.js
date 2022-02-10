import {styled} from '@mui/material/styles';


const FooterContainer = styled('footer')`
  display: flex;
  flex-direction: row;
  gap: 0 20px;
  height: 100px;
  
  text-align: center;
`;

export default function Footer({ className }) {

    return (
        <FooterContainer className={className}>
            <div>
                <div>
                    This is the footer. It can contain socials or anything.
                </div>
                <div>
                    (I will also be tagging myself in this so people can easily find me too)
                </div>
            </div>
        </FooterContainer>
    );
}