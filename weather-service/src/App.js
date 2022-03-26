import Layout from "./components/Layout";
import UserProvider from "./context/userContex";

function App() {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  );
}

export default App;
