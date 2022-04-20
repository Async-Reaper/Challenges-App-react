import React, { FC } from 'react';
import { IChallengeDetails } from '../../models/IChallengeDetail';

interface ChallengeByIdProps {
    challenge: IChallengeDetails
}

const ChallengeById: FC<ChallengeByIdProps> = ({challenge}) => {
    return (
        <div>ChallengeById</div>
    )
}

export default ChallengeById