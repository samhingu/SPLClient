export type ILink = {
    _id: string,
    title: string,
    body: string,
    createdOn: string
}

export type IState = ILink[]

export type IState2 = {
    links: IState,
    isLoading: boolean,
    errorMessage: string
}
