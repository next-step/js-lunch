export const Tabs = (props) => {
  const { tabs = [], activeTab, fullWidth, onClick } = props;

  const width = fullWidth ? 'width: 100%;' : '';

  return `
    <div style="display: flex; gap: 8px; ${width}">
      ${tabs
        .map(
          (tab) => `
          <button 
            style="
              flex: 1;
              height: 36px;
              padding: 4px;
              border: none;
              border-bottom: 2px solid ${
                activeTab === tab.value ? 'var(--primary)' : 'var(--grey-200)'
              };
              background: transparent;
              font-size: 16px;
              cursor: pointer;
              color: ${activeTab === tab.value ? 'var(--primary)' : 'var(--grey-500)'};
            "
            data-value="${tab.value}"
            onclick="${onClick ? `${onClick.name}('${tab.value}')` : ''}"
          >
            ${tab.label}
          </button>
        `,
        )
        .join('')}
    </div>
  `;
};
