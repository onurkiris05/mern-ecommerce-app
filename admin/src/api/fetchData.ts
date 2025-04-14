import * as Err from "../errors/http_errors";
import store from "../redux/store";

export async function fetchData(input: RequestInfo, init?: RequestInit) {
  const token = store.getState().user.currentUser?.token || "";

  const headers = {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
    ...init?.headers,
  };

  const response = await fetch(
    (process.env.REACT_APP_BACKEND_URL || "http://localhost:5000") + input,
    {
      ...init,
      headers,
    }
  );

  if (response.ok) return response;

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
