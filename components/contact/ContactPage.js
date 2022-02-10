import {styled} from '@mui/material/styles';
import {Link, Typography} from '@mui/material';


const ContactContainer = styled(`div`)`
  text-align: center;
`;

export default function ContactPage() {

    return (
        <>
            <ContactContainer>
                <Typography variant="h5">
                    This is the page to contact Elliot.
                </Typography>
                <Typography variant="h5">
                    Any kind of form can be shown to contact
                </Typography>
                <Typography variant="h5">
                    E.g. a form with "email", "subject", "message"
                </Typography>
                <Link href="https://colorlib.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp/wp-content/uploads/sites/2/free-html5-contact-form-templates.jpg" target="_blank">
                    Contact Form Example
                </Link>
            </ContactContainer>
        </>
    );
}