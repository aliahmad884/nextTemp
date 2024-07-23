"use client"

import MongoForm from "@/components/mongoForm";
import SQLForm from "@/components/sqlForm";

export default function Home() {

  return (
    <>
      <div>
        <h1>Hello there!</h1>
        <p>Welcome to the magic world!</p>
      </div>
      <div style={{ display: "flex", flexFlow: "row wrap", alignItems: 'center', justifyContent: "center",gap:"20px" }}>
        <MongoForm />
        <SQLForm />
      </div>
    </>
  );
}
