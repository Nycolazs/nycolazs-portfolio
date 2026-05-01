import Image from "next/image";

export default function Loading() {
  return (
    <div
      className="route-loading"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="route-loading__icon" aria-hidden="true">
        <Image src="/game-icons/triforce.svg" alt="" width={44} height={44} />
      </div>
      <div className="route-loading__bar" aria-hidden="true">
        <div className="route-loading__bar-fill" />
      </div>
      <p>Loading...</p>
    </div>
  );
}
