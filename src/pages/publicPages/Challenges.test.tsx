import { screen } from "@testing-library/react";
import axios from "axios";
import { renderReduxRoute } from "../../helpers/testing/renderReduxRouter";
import Challenges from "./Challenges";

jest.mock('axios')

describe('Challenges test', () => {

   let response: any
   beforeEach(() => {
      response = {
         data: [
            {
               "name": "challenge_name2",
               "goal": "make 20 pushups in 10 seconds",
               "bet": 0,
               "finish_datetime": "2023-02-02 18:25:43",
               "challenge_id": 8,
               "creator": "Luk2",
               "members_amount": 3,
               "bets_sum": 0
            },
            {
               "name": "342342",
               "goal": "23423423",
               "bet": 0,
               "finish_datetime": "2022-07-01 01:41:00",
               "challenge_id": 19,
               "creator": "Qwerty_123",
               "members_amount": 1,
               "bets_sum": 0
            }
         ]
      }
   })

   afterEach(() => {
      jest.clearAllMocks();
   })

   test('show challenge item', async () => {
      axios.get.mockReturnValue(response);
      renderReduxRoute()
      const challengeItems = await screen.findAllByTestId('challenge-item')
      screen.debug()
      expect(challengeItems.length).toBe(2);
   });
});