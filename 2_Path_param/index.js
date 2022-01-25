exports.handler = async (event) => {

    console.log(event);

    const kod = event.pathParameters.kod || "0";

    const sonuc = {
        message : `${kod} değeri alındı`
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(sonuc),
    };
    return response;
};
