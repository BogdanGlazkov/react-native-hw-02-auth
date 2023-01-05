import React from "react";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

export default function App() {
  const isNew = true;

  return isNew ? <RegistrationScreen /> : <LoginScreen />;
}
