export const returnUrl = (context) => {
    if (process.env.NODE_ENV === "production") {
        return `https://${context.req.rawHeaders[1]}`;
      } else if (process.env.NODE_ENV !== "production") {
        return "http://localhost:3000";
      }
}