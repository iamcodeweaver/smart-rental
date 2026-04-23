import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center">

      <div className="bg-white border p-8 rounded-lg w-96">

        <h1 className="text-xl font-semibold mb-6">Login</h1>

        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" className="mt-3" />

        <Button className="mt-5 w-full">
          Sign In
        </Button>

      </div>

    </div>
  );
}