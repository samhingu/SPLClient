declare module '~redux-toastr' {
    export module toastr {
        export interface IStoreEnhancerGeneric<TState> {
            (createStore: string): string;
        }


        export function combineReducers(reducers: any): any;
    }
}
