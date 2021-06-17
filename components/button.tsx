type ButtonProps = {
  name: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ name, onClick }) => (
  <button
    onClick={onClick}
    className="text-md bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded"
  >
    {name}
  </button>
);
