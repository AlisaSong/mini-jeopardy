export interface Clue {
    // TODO: Add comments defining each property.
    id: number;
    answer: string;
    question: string;
    value: number;
    airdate: string;
    created_at: string;
    updated_at: string;
    category_id: number;
    game_id: any;
    invalid_count: any;
}
