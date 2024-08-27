"use server";

interface SignupFuncProps {
  username: string;
  displayName: string;
  email: string;
  password: string;
}

async function SignupFunc({
  username,
  displayName,
  email,
  password,
}: SignupFuncProps) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVERURL}/auth/signup`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName: displayName,
          username: username,
          email: email,
          password: password,
        }),
        method: "POST",
      }
    );

    const data = await response.json();

    return data;
  } catch (error: any) {
    console.error(error);
    return `Unexpected error occurred: ${error}`;
  }
}

export default SignupFunc;
