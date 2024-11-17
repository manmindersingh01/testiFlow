import { signInAction } from "../../actions/authActions";

export default function SignIn() {
  return (
    <form action={signInAction}>
      <button
        type="submit"
        className="text-sm border border-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-colors bg-zinc-500/30 px-4 py-2 rounded-lg"
      >
        Sign in with GitHub
      </button>
    </form>
  );
}
