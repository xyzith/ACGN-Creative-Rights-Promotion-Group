export const parseCookies = () => {
    const { cookie } = document;
    return cookie.split(';').reduce((result, item) => {
        const [k, v] = item.trim().split('=');
        return { ...result, [decodeURIComponent(k)]: decodeURIComponent(v) };
    }, {});
};