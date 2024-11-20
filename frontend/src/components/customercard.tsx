import { Button } from "./ui/button";

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
      <div className="container border-2 border-gray-500 w-fit rounded-lg overflow-hidden">
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
        <div className="flex justify-end p-5 pt-2">
          <Button variant="outline">Details</Button>
        </div>
      </div>
    </div>
  );
}
