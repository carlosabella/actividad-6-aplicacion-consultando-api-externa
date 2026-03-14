export interface IUsersResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    results: IUser[];
}

export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    image: string;
}
