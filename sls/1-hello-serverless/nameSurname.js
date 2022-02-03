'use strict';

module.exports.getFullName = async (event) => {
    let { name, surname } = JSON.parse(event.body)
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                fullname : name + surname
            },
            null,
            2
        ),
    };
};
