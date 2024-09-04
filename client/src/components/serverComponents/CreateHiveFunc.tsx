"use server";

interface CreateHiveFuncProps {
  displayName: string;
  name: string;
  description: string;
  tags: string[];
  token: string;
}

async function CreateHiveFunc({
  displayName,
  name,
  description,
  tags,
  token,
}: CreateHiveFuncProps) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVERURL}/hive/createhive`,
      {
        headers: {
          "Content-Type": "application/json",
          // prettier-ignore
          "Authorization": "Bearer " + token,
        },
        body: JSON.stringify({
          displayName: displayName,
          name: name,
          description: description,
          tags: tags,
        }),
        method: "POST",
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return `Unexpected error occurred: ${error}`;
  }
}

export default CreateHiveFunc;
