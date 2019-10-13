import { app } from "./server/server";

app.listen(process.env.PORT || 4000, () => {
  console.log("Listening on port", process.env.PORT);
});
