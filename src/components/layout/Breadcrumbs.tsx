
import Link from "next/link";

interface BreadcrumbsProps {
  crumbs: { label: string; href?: string }[];
}

const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center gap-2 mb-2 text-xs font-label uppercase tracking-widest text-on-secondary-container">
      {crumbs.map((crumb, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <span className="material-symbols-outlined text-[14px]">chevron_right</span>}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-primary transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-outline">{crumb.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
