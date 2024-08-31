"use server";

interface HivesListFuncProps {
  token: string;
}

async function HivesListFunc({ token }: HivesListFuncProps) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVERURL}/hive/getusershives`,
      {
        headers: {
          "Content-Type": "application/json",
          // prettier-ignore
          "Authorization": "Bearer " + token,
        },
        method: "GET",
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return `Unexpected error occurred: ${error}`;
  }
}

export default HivesListFunc;
