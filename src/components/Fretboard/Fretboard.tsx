import * as React from 'react';
import { Box } from 'rebass/styled-components';
import { useAppSelector } from '../../app/hooks';
import { selectFretboardRotation, selectPointers } from '../../redux/appSlice';

import { FretboardContainer, Pointer } from './FretboardStyles';
import FretboardSvg from './FretboardSvg';

interface IFretboardProps {
}

const Fretboard: React.FunctionComponent<IFretboardProps> = (props) => {
    const rotation = useAppSelector(selectFretboardRotation);
    const pointersRedux = useAppSelector(selectPointers);

    const pointers = pointersRedux.map(([x,y]) => {
        const styles = {'--x':x,'--y':y} as React.CSSProperties
        return <Pointer style={styles} key={`${x}${y}`}/>
    })

    const styles = {'--rotation':`${rotation}`} as React.CSSProperties

    return (
        <Box mb="4em" height="16em" fontSize="min(1.4vw,1rem)">
            <FretboardContainer style={styles}>
                <FretboardSvg/>
                {pointers}
            </FretboardContainer>
        </Box>
    );
};

export default Fretboard;
