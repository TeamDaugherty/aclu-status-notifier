var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });

exports.handler = (event, context, callback) => {
    sendMail("Test Email", "Sample Body",event);
};

async function sendMail(subject, data,event) {
  console.log(event.complaintId);
  const emailParams = {
        Destination: {
          ToAddresses: ["justin.bergkamp@gmail.com"],
        },
        Message: {
          Body: {
            Text: { Data: data },
          },
          Subject: { Data: subject },
        },
        Source: event.email,
  };

  let code = 200;

  try {
        let key = await ses.sendEmail(emailParams).promise();
        console.log("Email delivered successfully");
  } catch (e) {
        console.log("Failure in sending Email", e);
        code = 500;
  }

  const response = {
      "statusCode": code,
      "headers": {
        "Access-Control-Allow-Headers" : "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT"
      },
      "body": JSON.stringify(),
      "isBase64Encoded": false
    };

    return response;
}
