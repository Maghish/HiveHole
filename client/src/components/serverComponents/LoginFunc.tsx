"use server";

interface LoginFuncProps {
  username: string;
  email: string;
  password: string;
}

async function LoginFunc({ username, email, password }: LoginFuncProps) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVERURL}/auth/login`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
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

export default LoginFunc;
