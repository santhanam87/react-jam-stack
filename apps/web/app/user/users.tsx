"use client";
import { GetUserKeys, ApiClient } from "@repo/api-definitions";
import { useQuery } from "@tanstack/react-query";

export function Users() {
  const { data } = useQuery({
    queryKey: GetUserKeys.getUsers({}),
    queryFn: async ({ queryKey }) => {
      const queries = queryKey[0]?.requestBody;
      return ApiClient.getUsers(queries || {});
    },
  });

  return <>{JSON.stringify(data)}</>;
}
