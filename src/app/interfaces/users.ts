export interface UsersResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Users[];
}

export interface Users {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    image: string;
}
