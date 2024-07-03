"use server";

export default async function Home() {
  const url = process.env.SERVERURL;

  return (
    <main>
      <p>{url}</p>
    </main>
  );
}
