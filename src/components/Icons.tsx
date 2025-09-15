import React from "react";

// Individual icon primitives used in panels and menus.
export function ProductsIcon({ className = "h-5 w-5 text-black" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  );
}

export function SolutionsIcon({ className = "h-5 w-5 text-black" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10 3h4v4h-4zM4 10h4v4H4zM16 10h4v4h-4zM10 16h4v4h-4z"/>
    </svg>
  );
}

export function DevelopersIcon({ className = "h-5 w-5 text-black" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18l-6-6 6-6"/>
      <path d="M15 6l6 6-6 6"/>
    </svg>
  );
}

export function CompanyIcon({ className = "h-5 w-5 text-black" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="7" width="7" height="13" rx="1"/>
      <rect x="14" y="3" width="7" height="17" rx="1"/>
      <path d="M6.5 10h0M6.5 13h0M17.5 7h0M17.5 10h0M17.5 13h0M17.5 16h0"/>
    </svg>
  );
}

// Additional icons used within dropdown panels.
export function PaymentsIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h5"/></svg>);} // card
export function CheckoutIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 2h12l2 6H4L6 2z"/><path d="M4 8l2 12h12l2-12"/><circle cx="10" cy="20" r="1.5"/><circle cx="16" cy="20" r="1.5"/></svg>);} // bag/cart
export function ElementsIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="8" y="13" width="8" height="8" rx="1"/></svg>);} // grid
export function PosIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M9 6h6M8 11h8M10 16h4"/></svg>);} // terminal/phone
export function RadarIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><path d="M5 5l2.5 2.5M16.5 16.5L19 19M5 19l2.5-2.5M16.5 7.5L19 5"/></svg>);} // radar
export function ReceiptIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 3l1 1 1-1 1 1 1-1 1 1 1-1 1 1 1-1 1 1 1-1v18l-1-1-1 1-1-1-1 1-1-1-1 1-1-1-1 1-1-1-1 1V3z"/><path d="M8 8h8M8 12h8M8 16h6"/></svg>);} // receipt

export function CloudIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.5 18a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1A4 4 0 0 0 6 18h11.5z"/></svg>);} // cloud
export function NetworkIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="5" cy="12" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 12h8M17 7l-2 3M17 17l-2-3"/></svg>);} // nodes
export function CartIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 6h15l-1.5 8H7.5L6 6z"/><circle cx="9" cy="19" r="1.5"/><circle cx="18" cy="19" r="1.5"/></svg>);} // cart
export function LayersIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/></svg>);} // layers
export function CubesIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="8.5" y="14" width="7" height="7" rx="1"/></svg>);} // cubes
export function CryptoIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 21 7 21 17 12 22 3 17 3 7"/></svg>);} // token

export function BracketsIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7 4L3 8v8l4 4"/><path d="M17 4l4 4v8l-4 4"/></svg>);} // api
export function RocketIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 19c3-1 6-4 7-7 3-1 6-4 7-7-3 1-6 4-7 7-3 1-6 4-7 7z"/><path d="M4 13l7 7"/></svg>);} // quickstart
export function SignalIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12a10 10 0 0 1 20 0"/><path d="M5 12a7 7 0 0 1 14 0"/><path d="M8 12a4 4 0 0 1 8 0"/></svg>);} // webhooks
export function TerminalIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 7l5 5-5 5"/><path d="M13 17h7"/></svg>);} // cli
export function FileJsIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 2H6v20h12V8z"/><path d="M14 2v6h6"/><path d="M9 17c0 1 .5 2 2 2s2-.7 2-1.7V16"/></svg>);} // JS file
export function PhoneIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>);} // phone

export function HistoryIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 3v6h6"/><path d="M12 7v5l3 3"/></svg>);} // history
export function StatusIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 12h4v8H4zM10 8h4v12h-4zM16 4h4v16h-4z"/></svg>);} // status bars
export function WindowIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18"/></svg>);} // window/app
export function LifebuoyIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M4.9 4.9l3.2 3.2M19.1 4.9l-3.2 3.2M4.9 19.1l3.2-3.2M19.1 19.1l-3.2-3.2"/></svg>);} // support

export function InfoIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h2v4h-2z"/></svg>);} // info
export function BriefcaseIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>);} // briefcase
export function MegaphoneIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 11l14-5v12L3 13z"/><path d="M10 13v6a3 3 0 0 0 6 0"/></svg>);} // press
export function PenIcn(props:{className?:string}){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 19l7-7 3 3-7 7H8v-3z"/><path d="M18 5l3 3"/></svg>);} // blog

// Icon aggregator mapping names to icons for panels.
const iconMap: Record<string, React.FC<any>> = {
  payments: PaymentsIcn,
  checkout: CheckoutIcn,
  elements: ElementsIcn,
  terminal: PosIcn,
  radar: RadarIcn,
  billing: ReceiptIcn,
  saas: CloudIcn,
  marketplaces: NetworkIcn,
  ecommerce: CartIcn,
  embedded: LayersIcn,
  platforms: CubesIcn,
  crypto: CryptoIcn,
  api: BracketsIcn,
  quickstart: RocketIcn,
  webhooks: SignalIcn,
  cli: TerminalIcn,
  stripejs: FileJsIcn,
  mobile: PhoneIcn,
  changelog: HistoryIcn,
  status: StatusIcn,
  sampleapps: WindowIcn,
  support: LifebuoyIcn,
  about: InfoIcn,
  careers: BriefcaseIcn,
  press: MegaphoneIcn,
  blog: PenIcn,
};

export function Icon({ name, className = "h-6 w-6 text-black" }: { name: string; className?: string }) {
  const C = iconMap[name];
  return C ? <C className={className} /> : null;
}
