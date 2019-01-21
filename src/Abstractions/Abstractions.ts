export interface IBug {
    id: string,
    title: string,
    state: 'Created' | 'Open' | 'InProgress' | 'InReview' | 'Done' | 'Closed'
}

export interface ICreateBug {
    title: string,
    state: 'Created' | 'Open' | 'InProgress' | 'InReview' | 'Done' | 'Closed'
}
