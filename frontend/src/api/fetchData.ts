import * as Err from "../errors/http_errors";

export async function fetchData(input: RequestInfo, init?: RequestInit) {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDA0NzM0YzliM2YxZTllNjc3MDdlNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0MTk0NDQ1MSwiZXhwIjoxNzQyMDMwODUxfQ.-sZKXSFah2Tx3gIaYOX7ZT8KXFcboqphMIN1IJ23SGc";

  const headers = {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
    ...init?.headers,
  };

  const response = await fetch("http://localhost:5000" + input, {
    ...init,
    headers,
  });

  if (response.ok) {
    return response;
  }

  const errorBody = await response.json();
  const errorMessage = errorBody.error;

  switch (response.status) {
    case 400:
      throw new Err.BadRequestError(errorMessage);
    case 401:
      throw new Err.UnauthorizedError(errorMessage);
    case 403:
      throw new Err.ForbiddenError(errorMessage);
    case 409:
      throw new Err.ConflictError(errorMessage);
    default:
      throw new Error(`Request failed with status: ${response.status}. Message: ${errorMessage}`);
  }
}
