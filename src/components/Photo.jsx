import { useState } from "react";
import { profile } from "../data";

/** Foto profil dengan fallback inisial bila berkas belum tersedia. */
export default function Photo({ className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`grid place-items-center bg-gradient-to-br from-blush-200 via-blush-100 to-white text-blush-500 ${className}`}
      >
        <div className="text-center">
          <p className="font-display text-6xl font-semibold">{profile.initials}</p>
          <p className="mt-2 px-6 text-[11px] leading-relaxed tracking-wide text-blush-600/80">
            Simpan foto sebagai <code className="rounded bg-white/70 px-1">public/dian.jpg</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={profile.photo}
      alt={`Foto ${profile.name}`}
      loading="eager"
      onError={() => setFailed(true)}
      className={`object-cover object-center ${className}`}
    />
  );
}
