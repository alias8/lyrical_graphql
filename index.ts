import { app, port } from "./server/server";

app.listen(port, () => {
  console.log("Listening on port", port);
});
