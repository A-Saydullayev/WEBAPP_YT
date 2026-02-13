const App = () => {
  window.Telegram?.WebApp?.ready();

  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
  const theme = window.Telegram?.WebApp?.themeParams;

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: theme?.bg_color,
        color: theme?.text_color,
      }}
    >
      <h1 className="text-5xl font-bold">Hello {user?.first_name}</h1>
    </div>
  );
};

export default App;
