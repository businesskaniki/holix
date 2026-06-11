const socialLinks = [
  {
    href: "https://www.tiktok.com/",
    label: "TikTok",
    icon: "logo-tiktok",
    className: "tiktok",
  },
  {
    href: "https://www.facebook.com/",
    label: "Facebook",
    icon: "logo-facebook",
    className: "facebook",
  },
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: "logo-instagram",
    className: "instagram",
  },
];

const SocialIcons = () => {
  return (
    <>
      <div className="social-sidebar" aria-label="Social links">
        <ul className="social-list">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`social-link ${link.className}`}
                aria-label={link.label}
              >
                <ion-icon name={link.icon}></ion-icon>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="social-bottom-bar" aria-label="Social links">
        <ul className="social-list">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`social-link ${link.className}`}
                aria-label={link.label}
              >
                <ion-icon name={link.icon}></ion-icon>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialIcons;
