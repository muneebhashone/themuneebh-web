import { siteConfig } from "@/app/data/config";

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className="bg-black-elevated border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-white">
                {footer.columns.brand.logo.replace(".", "")}
              </span>
              <span className="text-3xl font-bold text-lime">.</span>
            </div>
            <p className="text-sm text-gray-600">
              {footer.columns.brand.description}
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wide text-white mb-4">
              {footer.columns.navigation.title}
            </h3>
            <ul className="space-y-3">
              {footer.columns.navigation.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-lime transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wide text-white mb-4">
              {footer.columns.connect.title}
            </h3>
            <ul className="space-y-3">
              {footer.columns.connect.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-gray-400 hover:text-lime transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Column */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wide text-white mb-4">
              {footer.columns.location.title}
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              {footer.columns.location.text}
            </p>
            <p className="text-xs text-gray-600 font-mono">
              {footer.columns.location.timezone}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">{footer.bottom.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
