import Home from "./home";
import Guest from "./guest";
import { useSession } from "next-auth/client";

export default function index() {
  const [session, loading] = useSession();
  return (
    <>
      <Guest />
    </>
  );
}
