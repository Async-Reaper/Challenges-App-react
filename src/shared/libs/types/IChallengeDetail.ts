export interface IChallengeDetails {
    name: string;
    goal: string;
    bet: number;
    finish_datetime: string;
    description: string;
    requirements: string;
    challenge_id: number;
    creator: string;
    members_amount: number;
    bets_sum: number;
    video_example_path?: string;
}