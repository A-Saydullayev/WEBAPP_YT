const App = () => {
  window.Telegram?.WebApp?.ready();

  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
  const theme = window.Telegram?.WebApp?.themeParams;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundColor: theme?.bg_color,
        color: theme?.text_color,
      }}
    >
      <div className="w-full max-w-sm rounded-2xl bg-white/90 backdrop-blur-md shadow-2xl p-6">
        <h1 className="text-xl font-semibold text-center mb-6">
          Telegram Profile
        </h1>

        {user ? (
          <div className="space-y-4 text-sm">
            <InfoRow label="ID" value={user.id} />
            <InfoRow label="First name" value={user.first_name} />
            {user.last_name && (
              <InfoRow label="Last name" value={user.last_name} />
            )}
            {user.username && (
              <InfoRow label="Username" value={`@${user.username}`} />
            )}
            <InfoRow label="Language" value={user.language_code} />
            <InfoRow
              label="Premium"
              value={user.is_premium ? "⭐ Yes" : "No"}
            />
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Open this app inside Telegram
          </p>
        )}
      </div>
    </div>
  );
};

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value?: string | number;
}) => (
  <div className="flex items-center justify-between border-b pb-2">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default App;
