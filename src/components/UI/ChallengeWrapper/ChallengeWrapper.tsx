import React, {FC} from "react";
import {IChallengeWrapperProps} from "./ChallengeWrapper.types";
import {ChallengesWrapper} from "./ChallengeWrapper.style";


const ChallengeWrapper: FC<IChallengeWrapperProps> = ({
  children,
  dataTestId,
}) => {
  return (
    <ChallengesWrapper data-testid={dataTestId}>{children}</ChallengesWrapper>
  );
};

export default ChallengeWrapper;
