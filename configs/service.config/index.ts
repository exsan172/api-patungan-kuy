export const response = (res, statusCode, message, data) => {
    return res.json({
        statusCode : statusCode,
        message    : message,
        data       : data
    })
}