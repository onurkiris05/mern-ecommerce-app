import { fetchData } from "./fetchData";

export const createPaymentIntent = async (amount: number): Promise<string> => {
  const response = await fetchData("/api/checkout/payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });

  const { client_secret } = await response.json();
  return client_secret;
};
