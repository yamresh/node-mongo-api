const bunyan = require("bunyan");

/* module.exports = (() => {
  return bunyan.createLogger({
    name: "myapp",
    streams: [
      {
        level: "info",
        stream: process.stdout, // log INFO and above to stdout
      },
      {
        level: "error",
        path: "/var/tmp/myapp-error.log", // log ERROR and above to a file
      },
    ],
  });
})(); */

module.exports = bunyan.createLogger({
  name: "myapp",
  streams: [
    {
      level: "info",
      stream: process.stdout, // log INFO and above to stdout
    },
    {
      level: "error",
      path: "/var/tmp/myapp-error.log", // log ERROR and above to a file
    },
  ],
});
