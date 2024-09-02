interface FormErrorBoxProps {
  error: string;
}

function FormErrorBox({ error }: FormErrorBoxProps) {
  return (
    <span className="mt-3 w-full h-max py-2.5 px-5 border-red-500 border-2 text-white font-jetbrains-mono-regular text-xs rounded-lg">
      {error}
    </span>
  );
}

export default FormErrorBox;
