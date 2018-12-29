export const REQUEST = '_REQUEST';
export const FAILURE = '_FAILURE';
export const SUCCESS = '_SUCCESS';

export type AsyncStatus =
    typeof REQUEST |
    typeof FAILURE |
    typeof SUCCESS