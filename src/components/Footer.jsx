import { navItems, profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-blush-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-blush-400 to-blush-600 text-sm font-bold text-white">
            {profile.initials}
          </span>
          <div>
            <p className="text-sm font-semibold text-ink-900">{profile.name}</p>
            <p className="text-[12px] text-ink-500">{profile.role}</p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="text-[13px] text-ink-500 transition-colors hover:text-blush-600">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-blush-50 py-5 text-center text-[12px] text-ink-500">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
