interface CustomerCardProps {
  name: string;
  age: number;
  customerSince: string;
}
export default function CustomerCard({
  name,
  age,
  customerSince,
}: CustomerCardProps) {
  return (
    <div>
      <div className="container border-2 border-gray-400 w-fit rounded-lg">
        <div className="image w-[300px]">
          <img
            src="/placeholder.jpg"
            alt="placeholder"
            width={200}
            className="w-full"
          />
        </div>
        <div className="p-2">
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Customer Since: {customerSince}</p>
        </div>
      </div>
    </div>
  );
}
