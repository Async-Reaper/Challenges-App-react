import React, { FC, useEffect } from "react";
import ChallengeItem from "../../components/Challenge/ChallengeItem/ChallengeItem";
import CreateChallenge from "../../components/Challenge/CreateChallenge/CreateChallenge";
import Loader from "../../shared/ui/Loader/Loader";
import MainWrapper from "../../shared/ui/MainWrapper/MainWrapper";
import Popup from "../../shared/ui/Popup/Popup";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getChallenges } from "../../services/ChallengesService";
import { postApi } from "../../services/PostService";

const Challenges: FC = () => {
  // const { data: challenges, isLoading } = postApi.useGetAllChallengesQuery('')
  const { loginStatus } = useTypedSelector((state) => state.login);
  const { challenges, loading } = useTypedSelector((state) => state.challenges);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getChallenges());
  }, []);

  return (
    <MainWrapper dataTestid="challenges-page">
      <Popup />
      {loginStatus && <CreateChallenge />}
      {loading ? <Loader /> : challenges.map((challenge) => <ChallengeItem key={challenge.challenge_id} challenge={challenge} />)}
    </MainWrapper>
  );
};

export default Challenges;
