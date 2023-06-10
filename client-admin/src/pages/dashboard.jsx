import { useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  useEffect(() => {
    async function fetchHello() {
      // const { data } = await axios.get("http://localhost:3001/api/hello");
      const data = await fetch("http://localhost:3001/api/hello").then((r) =>
        r.json()
      );
      console.log(data);
    }
    fetchHello();
  }, []);

  return (
    <div>
      Dashboard
      <div></div>
    </div>
  );
}
