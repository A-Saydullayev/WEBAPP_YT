const App = () => {
  window.Telegram?.WebApp?.ready();

  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
  const theme = window.Telegram?.WebApp?.themeParams;

  return (
    <div>
      <h1 className="text-5xl">Hello {user?.first_name}</h1>
    </div>
  );
};

export default App;
