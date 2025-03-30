import app from "./app";

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "development") {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export const viteNodeApp = app;
