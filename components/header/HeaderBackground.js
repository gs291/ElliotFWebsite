import ReactPlayer from 'react-player'
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {styled} from '@mui/material/styles';

import {videos} from '../../lib/utils/utils';
import {getMobile} from '../../lib/redux/selectors';


const BackgroundContainer = styled('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  overflow: hidden;
`;

const VideoPlayer = styled(ReactPlayer)`
  position: absolute;
  top: ${props => props['data-m'] ? '0' : '-50%'};
  transform: scale(1.75);
`;

export default function HeaderBackground({}) {
    const mobile = useSelector(getMobile);

    const [ videoIndex, setVideoIndex ] = useState(0);
    const [ videoURL, setVideoURL ] = useState(videos[videoIndex]);

    const handleEndOfVideo = () => {
        setVideoIndex(prevIndex => {
            if (prevIndex + 1 < videos.length) {
                return prevIndex + 1;
            } else if (prevIndex + 1 === videos.length) {
                return 0;
            }
            return prevIndex;
        });
    }

    useEffect(() => {
        setVideoURL(videos[videoIndex])
    }, [videoIndex])


    return (
        <>
            <BackgroundContainer>
                <VideoPlayer
                    url={videoURL}
                    volume={0}
                    muted={true}
                    width="100%"
                    height="auto"
                    playing={true}
                    onEnded={handleEndOfVideo}
                    data-m={mobile}
                />
            </BackgroundContainer>
        </>
    );
}