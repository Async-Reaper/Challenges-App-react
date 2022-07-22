import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { renderReduxRoute } from "../../helpers/testing/renderReduxRouter";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('Testing challenge component', () => {

   let response: any;
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

   test('Show challenge-item', async () => {
      mockedAxios.get.mockReturnValue(response)
      renderReduxRoute()
      const challengeItem = await screen.findAllByTestId('challenge-item')
      expect(challengeItem.length).toBe(2)
      expect(challengeItem[0]).toBeInTheDocument()
   })

   test('Redirect to challenge by id', async () => {
      mockedAxios.get.mockReturnValue(response)
      renderReduxRoute(null, '/',
         { login: { loginStatus: true } }
      )
      const challengeItem = await screen.findAllByTestId('challenge-item')
      // const linkChallengeByID = await screen.findAllByTestId('link-challengeById')

      // expect(linkChallengeByID).toBeInTheDocument()
      // userEvent.click(challengeItem[0])
      // expect(screen.getByTestId('challengeById-page')).toBeInTheDocument()
   })
});