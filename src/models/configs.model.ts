export interface ServerConfig {
    port: string;
    baseApiUrl: string;
    baseViewUrl?: string;
}

export interface DbConfig {
    url: string;
    port: string;
    database: string;
    user: string;
    password: string;
}