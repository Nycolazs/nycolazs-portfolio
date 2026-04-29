export default function Loading() {
  return (
    <div className="route-loading" role="status" aria-live="polite" aria-busy="true">
      <div className="route-loading__icon" aria-hidden="true">
        <img src="/game-icons/triforce.svg" alt="" />
      </div>
      <div className="route-loading__spinner" aria-hidden="true" />
      <p>Carregando portfólio...</p>
    </div>
  );
}
