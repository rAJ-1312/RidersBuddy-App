import { useEffect, useState } from "react";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SecureStore from "expo-secure-store";

export default function RootLayout() {
  const [token, setToken] = useState<string | null | undefined>(undefined);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    SecureStore.getItemAsync("access_token").then(setToken);
  }, []);

  useEffect(() => {
    if (token === undefined) return;
    const inAuth = segments[0] === "(auth)";
    if (!token && !inAuth) {
      router.replace("/(auth)/sign-in");
    } else if (token && inAuth) {
      router.replace("/(app)");
    }
  }, [token, segments, router]);

  return <Slot />;
}
