import * as React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectFretboardRotation, selectPointers } from '../../redux/appSlice';
import { FretboardContainer, FretboardFixedHeightContainer, Pointer } from './FretboardStyles';
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
        <FretboardFixedHeightContainer mb="3em">
            <FretboardContainer style={styles}>
                <FretboardSvg/>
                {pointers}
            </FretboardContainer>
        </FretboardFixedHeightContainer>
    );
};

export default Fretboard;
