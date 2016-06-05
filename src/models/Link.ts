export type Link = {
    _id: string,
    title: string,
    body: string,
    createdOn: string
}

export type IState = Link[]

export type IState2 = {
    links: IState,
    isLoading: boolean,
    errorMessage: string
}
