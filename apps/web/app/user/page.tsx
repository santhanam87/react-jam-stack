// app/posts/page.jsx
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { GetUserKeys, ApiClient } from "@repo/api-definitions";
import { Users } from "@app/user/users";

export default async function PostsPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: GetUserKeys.getUsers({}),
    queryFn: ({ queryKey: [requestBody] }) => {
      return ApiClient.getUsers(requestBody?.requestBody || {});
    },
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Users />
    </HydrationBoundary>
  );
}
