export function PageHeader({ title, description, actions }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-[24px]">
      <div>
        <h2 className="text-[24px] font-bold text-text-primary">{title}</h2>
        {description && (
          <p className="text-[14px] text-text-secondary mt-1">{description}</p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-[8px]">
          {actions}
        </div>
      )}
    </div>
  );
}
