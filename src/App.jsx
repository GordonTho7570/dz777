import useLoginStore from "./store";

function Login() {
  const {
    email,
    password,
    error,
    loading,
    setEmail,
    setPassword,
    login,
  } = useLoginStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>вход</h2>

      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "вход..." : "войти"}
      </button>
    </form>
  );
}

export default Login;
