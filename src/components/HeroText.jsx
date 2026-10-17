export default function HeroText() {
  return (
    <div className="hero">
      <div style={{background:'#0a2a1a', padding:'6px 16px', borderRadius:'20px', display:'inline-block', marginBottom:'20px', border:'1px solid #00ff88'}}>
        <span style={{color:'#00ff88', fontSize:'14px'}}>● Scan · Assess · Dispute — SOC for African Telcos</span>
      </div>

      <h1 style={{fontSize:'38px', fontWeight:'900', lineHeight:'1.1'}}>
        ScamIntelli <br/>
        <span style={{color:'white'}}>— Scam Intelligence &</span><br/>
        <span style={{color:'#00ff88'}}>Forensic Documentation</span><br/>
        <span style={{color:'white'}}>Platform</span>
      </h1>

      <p style={{color:'#8899aa', marginTop:'20px', fontSize:'16px', lineHeight:'1.5'}}>
        <b style={{color:'#fff'}}>Africa's First Telco SOC Platform.</b> Built for MTN MoMo, Airtel Money, Africell fraud desks in Kampala. Track 070/076/077 fraud rings, SIM-swap gangs, fake agent scams. <br/><br/>
        Scan a number → Assess fraud DNA → Generate UCC/BOU audit-ready dossier in 12ms. 70kb bundle, works on Tecno Pop 8.
      </p>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px', marginTop:'25px'}}>
        <div style={{background:'#111', padding:'10px', borderRadius:'8px', borderLeft:'3px solid #00ff88'}}>
          <b style={{color:'#00ff88', fontSize:'12px'}}>TELCO INTEL FEED</b><br/>
          <span style={{fontSize:'11px', color:'#aaa'}}>MTN/Airtel live scams</span>
        </div>
        <div style={{background:'#111', padding:'10px', borderRadius:'8px', borderLeft:'3px solid #ffaa00'}}>
          <b style={{color:'#ffaa00', fontSize:'12px'}}>SOC WAR ROOM</b><br/>
          <span style={{fontSize:'11px', color:'#aaa'}}>Analyst queue & custody</span>
        </div>
        <div style={{background:'#111', padding:'10px', borderRadius:'8px', borderLeft:'3px solid #ff4444'}}>
          <b style={{color:'#ff4444', fontSize:'12px'}}>FRAUDSTER DNA</b><br/>
          <span style={{fontSize:'11px', color:'#aaa'}}>Gang, location, device</span>
        </div>
      </div>
    </div>
  )
}