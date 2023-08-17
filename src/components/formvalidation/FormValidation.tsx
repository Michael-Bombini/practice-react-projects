import { useEffect, useState } from "react";

export default function FormValidation() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailErrors, setEmailErrors] = useState<string[]>([]);

  const [isFirstSubmit, setIsFirstSubmit] = useState<boolean>(false);

  function hasUppercase(str: string): boolean {
    return /[A-Z]/.test(str);
  }

  function hasLowercase(str: string): boolean {
    return /[a-z]/.test(str);
  }

  function hasNumber(str: string): boolean {
    return /\d/.test(str);
  }

  function validateForm() {
    setEmailErrors([]);
    console.log(email, password);

    if (!email) {
      setEmailErrors((prev) => [...prev, "Please Enter Email"]);
    }
    if (!email.endsWith("@webdevsimplified.com")) {
      setEmailErrors((prev) => [...prev, "Must end in @webdevsimplified.com"]);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmailErrors([]);
    console.log(email, password);
    setIsFirstSubmit(true);

    if (!email) {
      setEmailErrors((prev) => [...prev, "Please Enter Email"]);
    }
    if (!email.endsWith("@webdevsimplified.com")) {
      setEmailErrors((prev) => [...prev, "Must end in @webdevsimplified.com"]);
    }

    if (
      !password ||
      password.length < 10 ||
      !hasUppercase(password) ||
      !hasLowercase(password) ||
      !hasNumber(password)
    ) {
      return;
    }

    alert("success");
  }

  useEffect(() => {
    if (isFirstSubmit) {
      validateForm();
    }
  }, [email, password]);

  return (
    <main className="container mx-auto text-center text-white">
      <h1 className="text-2xl">Form Validation</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group error my-6">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input text-black"
            type="text"
            id="email"
          />
        </div>
        <ul>
          {emailErrors.map((error) => {
            return (
              <li className="text-red-500" key={error}>
                {error}
              </li>
            );
          })}
        </ul>
        <div className="form-group my-6">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input text-black"
            type="password"
            id="password"
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
