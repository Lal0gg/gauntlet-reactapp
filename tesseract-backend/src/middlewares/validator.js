export function validator(request, response, next) {
  if (!request.body.title) {
    return response.status(400).send({
      message: "Missing Information",
    });
  }

  next();
}
