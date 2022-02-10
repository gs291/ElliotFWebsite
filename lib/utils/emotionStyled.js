
export const globalOptions = {
    shouldForwardProp: prop =>
        prop !== 'data-dm' && prop !== 'data-m' && prop !== 'data-a'
};
