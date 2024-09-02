export const methodNames = [] as const;
export type ServiceKeys = (typeof methodNames)[number];

function getApiKeyByMethod<PayloadType>(request: ServiceKeys) {
  return (requestBody: PayloadType) => [request, requestBody];
}
