const cron = require("cron");
const https = require("https");

const backendURL = "https://everearth.onrender.com/";

const job = new cron.CronJob("*/14 * * * *", function () {
    console.log("Restarting Server");

    https
        .get(backendURL, (res) => {
            if (res.statusCode === 200) {
                console.log("Server started");
            } else {
                console.error(
                    `Failed to restart server with status code: ${res.statusCode}`
                );
            }
        })
        .on("error", (err) => {
            console.log("Error during restart: ", err.message);
        });
});

module.exports = {
    job: job,
};
