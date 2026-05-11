const items = [
  'BMS Engineering', 'DDC Panel Fabrication', 'BACnet Integration',
  'Modbus Configuration', 'Energy Monitoring', 'HVAC Controls',
  'Smart Building Dashboards', 'BMS Programming', 'Commissioning', 'Technical Support',
]

const doubled = [...items, ...items]

export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.flatMap((item, i) => [
          <span key={`item-${i}`}>{item}</span>,
          <span key={`sep-${i}`} className="sep">&nbsp;—&nbsp;</span>,
        ])}
      </div>
    </div>
  )
}
