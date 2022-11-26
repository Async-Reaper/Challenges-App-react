import {Button} from "@mui/material";
import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import ChallengeWrapper from "../../UI/ChallengeWrapper/ChallengeWrapper";
import {IChallengeByIdProps} from "./ChallengeById.types";


const ChallengeById: FC<IChallengeByIdProps> = ({ challenge }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button variant="contained" onClick={() => navigate(`/challenges/`)}>
        Back
      </Button>
      <ChallengeWrapper>
        <li>Name: {challenge.name}</li>
        <li>Creator: {challenge.creator}</li>
        <li>Goal: {challenge.goal}</li>
        <li>Description: {challenge.description}</li>
        <li>Requirements: {challenge.requirements}</li>
        <li>Members amount: {challenge.members_amount}</li>
        <li>Finish datetime: {challenge.finish_datetime}</li>
      </ChallengeWrapper>
    </>
  );
};

export default ChallengeById;
