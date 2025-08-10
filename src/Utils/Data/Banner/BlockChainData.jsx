// Reusable SVG component
const DotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="7"
    height="6"
    viewBox="0 0 7 6"
    fill="none"
  >
    <ellipse cx="3.56287" cy="3" rx="3.09265" ry="3" fill="#FF357D" />
  </svg>
);

// Data array
export const BlockChainData = [
  { title: 'Pre-Sale Starts', date: 'August 23, 2021', icon: <DotIcon /> },
  {
    title: 'Minimal amount to Investors',
    date: '0,2 BTC/ 1 BSC/ 1 ETH',
    icon: <DotIcon />,
  },
  { title: 'End Sale', date: 'Sept. 28, 2021', icon: <DotIcon /> },
  { title: 'Token Rate', date: '1 Token=0.0000001 USD', icon: <DotIcon /> },
];
