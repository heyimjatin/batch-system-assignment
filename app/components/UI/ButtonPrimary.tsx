type ButtonProps = {
  label: string;
};

export default function ButtonPrimary({ label }: ButtonProps) {
  return (
    <button className="bg-black text-white md:px-8 md:py-4 px-6 py-4 rounded text-sm md:text-base hover:opacity-80 transition-opacity">
      {label}
    </button>
  );
}
