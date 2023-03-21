import { Button } from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IChallenge } from "../../../shared/libs/types/IChallenge";
import ChallengeWrapper from "../../../shared/ui/ChallengeWrapper/ChallengeWrapper";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { IChallengeItemProps } from "./ChallengeItem.types";

const ChallengeItem: FC<IChallengeItemProps> = ({ challenge }) => {
  const navigate = useNavigate();
  const { loginStatus } = useTypedSelector((state) => state.login);

  return (
    <ChallengeWrapper dataTestId="challenge-item">
      <li>Name: {challenge.name}</li>
      <li>Creator: {challenge.creator}</li>
      <li>Goal: {challenge.goal}</li>
      <li>Members amount: {challenge.members_amount}</li>
      <li>Finish datetime: {challenge.finish_datetime}</li>
      {loginStatus && (
        <Button data-testid="link-challengeById" variant="contained" onClick={() => navigate(`/challenges/${challenge.challenge_id}`)}>
          <InfoOutlinedIcon />
        </Button>
      )}
    </ChallengeWrapper>
  );
};

export default ChallengeItem;
