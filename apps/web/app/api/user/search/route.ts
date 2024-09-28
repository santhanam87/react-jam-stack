export async function POST() {
  return Response.json([
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@mail.com",
    },
  ]);
}
