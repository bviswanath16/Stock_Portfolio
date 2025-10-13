import React from "react";

export default function ChartCard({ title, subtitle, actions, children, height = 260 }) {
  return (
    <div className="card p-4 bg-neutral-900 rounded-lg shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-sm font-medium text-gray-200">{title}</h3>
          {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
      <div style={{ height }}>
        {children}
      </div>
    </div>
  );
}

