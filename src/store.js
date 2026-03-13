import { create } from "zustand";

const useLoginStore = create((set, get) => ({
    email: "",
    password: "",
    error: "",
    loading: false,

    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),

    login: async () => {
      const { email, password } = get();

      if (!email || !password) {
        set({ error: "введите email и пароль" });
        return;
      }

    set({ error: "", loading: true });

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error("неверный email или пароль");
      }

      localStorage.setItem("token", data.token);
      set({ loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useLoginStore;
