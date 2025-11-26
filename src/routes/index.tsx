import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { client } from "../honoClient";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ["name"],
    queryFn: () => client.api.$get().then((d) => d.json()),
  });

  return (
    <div>
      <p>FirstName: {data.firstName}</p>
      <p>LastName: {data.lastName}</p>
    </div>
  );
}
