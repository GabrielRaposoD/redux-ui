interface ButtonProps {
  onClick: () => void;
  description: string;
}

export const Button: React.FC<ButtonProps> = ({ description, onClick }) => {
  return (
    <button
      className='rounded-xl px-4 py-2 text-xl text-white bg-purple-500'
      onClick={onClick}
    >
      {description}
    </button>
  );
};
