import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ToggleTheme } from "../../components/ToggleTheme";

test("trocar o tema para escuro quando o Switch estiver ativado", () => {
    // Renderiza o componente
    const { getByRole } = render(<ToggleTheme/>)
  
    // Verifica se o Switch está inicialmente desativado
    const switchElement = getByRole("switch") as HTMLInputElement
    expect(switchElement).not.toBeChecked();
  
    // Simula a interação do usuário, ativando o Switch
    fireEvent.click(switchElement);
  
    // Verifica se o Switch foi ativado
    expect(switchElement).toBeChecked();
  
    // Verifica se o tema foi definido para escuro no localStorage
    expect(localStorage.theme).toBe("dark");
  });

test("trocar o tema para claro quando o Switch estiver desativado", () => {
  // Configura o tema como escuro inicialmente
  localStorage.setItem("theme", "dark");

  // Renderiza o componente
  const { getByRole } = render(<ToggleTheme />);

  // Verifica se o Switch está inicialmente ativado
  const switchElement = getByRole("switch") as HTMLInputElement;
  expect(switchElement).toBeChecked();

  // Simula a interação do usuário, desativando o Switch
  fireEvent.click(switchElement);

  // Verifica se o Switch foi desativado
  expect(switchElement).not.toBeChecked();

  // Verifica se o tema foi definido para claro no localStorage
  expect(localStorage.theme).toBe("light");
});
