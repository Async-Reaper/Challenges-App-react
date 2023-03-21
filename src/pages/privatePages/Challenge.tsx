import React, { FC } from "react";
import { useParams } from "react-router-dom";
import ChallengeById from "../../components/Challenge/ChallengeById/ChallengeById";
import ChallengeMembers from "../../components/Challenge/ChallegeMembers/ChallengeMembers";
import Loader from "../../shared/ui/Loader/Loader";
import MainWrapper from "../../shared/ui/MainWrapper/MainWrapper";
import Popup from "../../shared/ui/Popup/Popup";
import { postApi } from "../../services/PostService";

const Challenge: FC = () => {
  const params = useParams();
  const { data: challenge, isLoading } = postApi.useGetChallengeByIdQuery(params.id!);
  const { data: challengeMembers } = postApi.useGetChallengeMembersQuery(params.id!);

  return (
    <MainWrapper dataTestid="challengeById-page">
      <Popup />
      {isLoading && <Loader />}
      {challenge && <ChallengeById challenge={challenge} />}
      {challengeMembers && <ChallengeMembers challengeMembers={challengeMembers} />}
    </MainWrapper>
  );
};

export default Challenge;
