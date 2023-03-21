export interface IChallenge {
    name: string;
    goal: string;
    bet: number;
    finish_datetime: string;
    challenge_id: number;
    creator: string;
    members_amount: number;
    bets_sum: number;
}