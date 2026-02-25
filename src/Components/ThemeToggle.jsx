const ThemeToggle = () => {
  const toggleTheme = () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");

    if (current === "light") {
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
    }
  };

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-primary">
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
