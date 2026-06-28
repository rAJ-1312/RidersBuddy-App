import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

const BASE_URL = "http://localhost:8000/api";

async function request(path: string, options: RequestInit = {}) {
  const token = await SecureStore.getItemAsync("access_token");
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers ?? {}),
    },
  });

  if (res.status === 401) {
    await SecureStore.deleteItemAsync("access_token");
    await SecureStore.deleteItemAsync("refresh_token");
    router.replace("/(auth)/sign-in");
    throw new Error("Unauthorized");
  }

  return res.json();
}

export const authApi = {
  signup: (data: { name: string; email: string; password: string }) =>
    request("/auth/signup", { method: "POST", body: JSON.stringify(data) }),

  login: (data: { email: string; password: string }) =>
    request("/auth/login", { method: "POST", body: JSON.stringify(data) }),

  me: () => request("/auth/me"),
};
