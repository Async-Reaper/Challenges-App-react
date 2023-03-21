import { Button } from "@mui/material";
import React, { FC } from "react";
import { useInput } from "../../hooks/useInput";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ICreateChallenge } from "../../models/ICreateChallenge";
import { createChallenge } from "../../services/ChallengesService";
import { setDate } from "../../store/reducers/dateSlice";
import { errorForm } from "../../store/reducers/errorSlice";
import Calendar from "../../shared/ui/Calendar/Calendar";
import ErrorText from "../../shared/ui/Error/ErrorText";
import FormWrapper from "../../shared/ui/FormWrapper/FormWrapper";
import Input from "../../shared/ui/Input/Input";

const FormCreateChallenge: FC = () => {
  const dispatch = useTypedDispatch();
  const { date } = useTypedSelector((state) => state.date);

  const name = useInput("", { isEmpty: true });
  const finishDate = useInput(date, { isEmpty: true });
  const goal = useInput("", { isEmpty: true });
  const description = useInput("", { isEmpty: true });
  const requirements = useInput("", { isEmpty: true });

  const newChallenge: ICreateChallenge = {
    name: name.value,
    finish_datetime: finishDate.value,
    goal: goal.value,
    description: description.value,
    requirements: requirements.value,
    bet: 0,
  };

  const handleCreateChallenge = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    name.onBlur();
    finishDate.onBlur();
    goal.onBlur();
    description.onBlur();
    requirements.onBlur();

    if (!name.isEmpty && !goal.isEmpty && !description.isEmpty && !requirements.isEmpty) {
      dispatch(createChallenge(newChallenge));
    }
  };

  return (
    <FormWrapper method="POST" onSubmit={(e) => handleCreateChallenge(e)}>
      <Calendar label="Finish datetime: " value={finishDate.value} onChange={(newDate) => dispatch(setDate(newDate))} />
      <Input label="Name" value={name.value} onChange={name.onChange} />
      {name.isDirty && name.isEmpty && <ErrorText>The field is empty</ErrorText>}
      <Input label="Goal" value={goal.value} onChange={goal.onChange} />
      {goal.isDirty && goal.isEmpty && <ErrorText>The field is empty</ErrorText>}
      <Input label="Description" value={description.value} onChange={description.onChange} />
      {description.isDirty && description.isEmpty && <ErrorText>The field is empty</ErrorText>}
      <Input label="Requirements" value={requirements.value} onChange={requirements.onChange} />
      {requirements.isDirty && requirements.isEmpty && <ErrorText>The field is empty</ErrorText>}
      <Button type="submit" variant="contained">
        Create challenge
      </Button>
    </FormWrapper>
  );
};

export default FormCreateChallenge;
