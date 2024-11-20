import CustomerCard from "./components/customercard";

function App() {
  return (
    <div className="p-10">
      <div>
        <p className="text-center text-4xl">Customers</p>
      </div>
      <div className="grid grid-cols-4 gap-10 py-10">
        <CustomerCard
          name="Alice"
          age={30}
          customerSince="2020-01-15"
        />
        <CustomerCard
          name="Bob"
          age={45}
          customerSince="2018-06-23"
        />
        <CustomerCard
          name="Charlie"
          age={28}
          customerSince="2021-03-10"
        />
        <CustomerCard
          name="Diana"
          age={35}
          customerSince="2017-09-05"
        />
        <CustomerCard
          name="Eve"
          age={40}
          customerSince="2019-11-12"
        />
      </div>
    </div>
  );
}

export default App;
