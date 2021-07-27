export interface HttpResponse {
    error: Error;
    message: string;
    name: string;
    ok: boolean;
    status: number;
    statusText: string;
    url: string;
}

export interface Error {
    cause: Number;
    debugMessage: Number;
    localDateTime: string;
    localizedMessage: string;
    message: string;
    status: string;
}
