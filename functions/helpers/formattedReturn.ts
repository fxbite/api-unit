export default (statusCode: number, body: any) => {
    return {
        statusCode,
        body: JSON.stringify(body),
    };
};