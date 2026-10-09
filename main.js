// SVG命名空间，必须用svg的xmlns，否则dom创建svg元素无效
const SVG_NS = "http://www.w3.org/2000/svg";

// 动态生成 brain svg内部全部 defs / g / circle / path
function initBrainSvg(){
  const brainSvg = document.querySelector('.brain');
  if(!brainSvg) return;

  // 创建 defs
  const defs = document.createElementNS(SVG_NS, "defs");

  // radialGradient haloOuter
  const haloOuter = document.createElementNS(SVG_NS,"radialGradient");
  haloOuter.id = "haloOuter";
  haloOuter.setAttribute("cx","50%");
  haloOuter.setAttribute("cy","50%");
  haloOuter.setAttribute("r","50%");
  let stop1 = document.createElementNS(SVG_NS,"stop");
  stop1.setAttribute("offset","0%"); stop1.setAttribute("stop-color","#bfe9ff"); stop1.setAttribute("stop-opacity",".5");
  let stop2 = document.createElementNS(SVG_NS,"stop");
  stop2.setAttribute("offset","55%"); stop2.setAttribute("stop-color","#3f8ef0"); stop2.setAttribute("stop-opacity",".18");
  let stop3 = document.createElementNS(SVG_NS,"stop");
  stop3.setAttribute("offset","100%"); stop3.setAttribute("stop-color","#3f8ef0"); stop3.setAttribute("stop-opacity","0");
  haloOuter.appendChild(stop1);haloOuter.appendChild(stop2);haloOuter.appendChild(stop3);
  defs.appendChild(haloOuter);

  // radialGradient haloMid
  const haloMid = document.createElementNS(SVG_NS,"radialGradient");
  haloMid.id = "haloMid";
  haloMid.setAttribute("cx","50%");
  haloMid.setAttribute("cy","50%");
  haloMid.setAttribute("r","50%");
  let m1 = document.createElementNS(SVG_NS,"stop");
  m1.setAttribute("offset","0%"); m1.setAttribute("stop-color","#e6f7ff"); m1.setAttribute("stop-opacity",".85");
  let m2 = document.createElementNS(SVG_NS,"stop");
  m2.setAttribute("offset","50%"); m2.setAttribute("stop-color","#6fb6ff"); m2.setAttribute("stop-opacity",".35");
  let m3 = document.createElementNS(SVG_NS,"stop");
  m3.setAttribute("offset","100%"); m3.setAttribute("stop-color","#6fb6ff"); m3.setAttribute("stop-opacity","0");
  haloMid.appendChild(m1);haloMid.appendChild(m2);haloMid.appendChild(m3);
  defs.appendChild(haloMid);

  // radialGradient haloInner
  const haloInner = document.createElementNS(SVG_NS,"radialGradient");
  haloInner.id = "haloInner";
  haloInner.setAttribute("cx","50%");
  haloInner.setAttribute("cy","50%");
  haloInner.setAttribute("r","50%");
  let hi1 = document.createElementNS(SVG_NS,"stop");
  hi1.setAttribute("offset","0%"); hi1.setAttribute("stop-color","#ffffff"); hi1.setAttribute("stop-opacity","1");
  let hi2 = document.createElementNS(SVG_NS,"stop");
  hi2.setAttribute("offset","45%"); hi2.setAttribute("stop-color","#9fdcff"); hi2.setAttribute("stop-opacity",".6");
  let hi3 = document.createElementNS(SVG_NS,"stop");
  hi3.setAttribute("offset","100%"); hi3.setAttribute("stop-color","#9fdcff"); hi3.setAttribute("stop-opacity","0");
  haloInner.appendChild(hi1);haloInner.appendChild(hi2);haloInner.appendChild(hi3);
  defs.appendChild(haloInner);

  // linearGradient linkGrad
  const linkGrad = document.createElementNS(SVG_NS,"linearGradient");
  linkGrad.id = "linkGrad";
  linkGrad.setAttribute("x1","0%");linkGrad.setAttribute("y1","0%");
  linkGrad.setAttribute("x2","100%");linkGrad.setAttribute("y2","100%");
  let lg1 = document.createElementNS(SVG_NS,"stop");
  lg1.setAttribute("offset","0%"); lg1.setAttribute("stop-color","#ffffff");
  let lg2 = document.createElementNS(SVG_NS,"stop");
  lg2.setAttribute("offset","55%"); lg2.setAttribute("stop-color","#aee4ff");
  let lg3 = document.createElementNS(SVG_NS,"stop");
  lg3.setAttribute("offset","100%"); lg3.setAttribute("stop-color","#6fb6ff");
  linkGrad.appendChild(lg1);linkGrad.appendChild(lg2);linkGrad.appendChild(lg3);
  defs.appendChild(linkGrad);

  // filter linkGlow
  const filterLinkGlow = document.createElementNS(SVG_NS,"filter");
  filterLinkGlow.id = "linkGlow";
  filterLinkGlow.setAttribute("x","-60%");filterLinkGlow.setAttribute("y","-60%");
  filterLinkGlow.setAttribute("width","220%");filterLinkGlow.setAttribute("height","220%");
  let feG1 = document.createElementNS(SVG_NS,"feGaussianBlur");
  feG1.setAttribute("stdDeviation","2.2"); feG1.setAttribute("result","blur");
  let feC1 = document.createElementNS(SVG_NS,"feComposite");
  feC1.setAttribute("in","SourceGraphic"); feC1.setAttribute("in2","blur"); feC1.setAttribute("operator","over");
  filterLinkGlow.appendChild(feG1); filterLinkGlow.appendChild(feC1);
  defs.appendChild(filterLinkGlow);

  // filter haloBlur
  const filterHaloBlur = document.createElementNS(SVG_NS,"filter");
  filterHaloBlur.id = "haloBlur";
  filterHaloBlur.setAttribute("x","-80%");filterHaloBlur.setAttribute("y","-80%");
  filterHaloBlur.setAttribute("width","260%");filterHaloBlur.setAttribute("height","260%");
  let feG2 = document.createElementNS(SVG_NS,"feGaussianBlur");
  feG2.setAttribute("stdDeviation","5"); feG2.setAttribute("result","blur");
  let feC2 = document.createElementNS(SVG_NS,"feComposite");
  feC2.setAttribute("in","SourceGraphic"); feC2.setAttribute("in2","blur"); feC2.setAttribute("operator","over");
  filterHaloBlur.appendChild(feG2); filterHaloBlur.appendChild(feC2);
  defs.appendChild(filterHaloBlur);

  brainSvg.appendChild(defs);

  // g translate(100,105) halo‑outer
  const g1 = document.createElementNS(SVG_NS,"g");
  g1.setAttribute("transform","translate(100,105)");
  const cHaloOuter = document.createElementNS(SVG_NS,"circle");
  cHaloOuter.classList.add("halo-outer");
  cHaloOuter.setAttribute("cx","0");cHaloOuter.setAttribute("cy","0");cHaloOuter.setAttribute("r","74");
  cHaloOuter.setAttribute("fill","url(#haloOuter)");
  cHaloOuter.setAttribute("filter","url(#haloBlur)");
  g1.appendChild(cHaloOuter);
  brainSvg.appendChild(g1);

  // g halo‑mid
  const g2 = document.createElementNS(SVG_NS,"g");
  g2.setAttribute("transform","translate(100,105)");
  const cHaloMid = document.createElementNS(SVG_NS,"circle");
  cHaloMid.classList.add("halo-mid");
  cHaloMid.setAttribute("cx","0");cHaloMid.setAttribute("cy","0");cHaloMid.setAttribute("r","52");
  cHaloMid.setAttribute("fill","url(#haloMid)");
  cHaloMid.setAttribute("filter","url(#haloBlur)");
  g2.appendChild(cHaloMid);
  brainSvg.appendChild(g2);

  // g halo‑inner
  const g3 = document.createElementNS(SVG_NS,"g");
  g3.setAttribute("transform","translate(100,105)");
  const cHaloInner = document.createElementNS(SVG_NS,"circle");
  cHaloInner.classList.add("halo-inner");
  cHaloInner.setAttribute("cx","0");cHaloInner.setAttribute("cy","0");cHaloInner.setAttribute("r","32");
  cHaloInner.setAttribute("fill","url(#haloInner)");
  cHaloInner.setAttribute("filter","url(#haloBlur)");
  g3.appendChild(cHaloInner);
  brainSvg.appendChild(g3);

  // orbit circle group
  const gOrbit = document.createElementNS(SVG_NS,"g");
  gOrbit.setAttribute("transform","translate(100,105)");
  gOrbit.setAttribute("fill","none");
  const o1 = document.createElementNS(SVG_NS,"circle");
  o1.classList.add("orbit-1");
  o1.setAttribute("cx","0");o1.setAttribute("cy","0");o1.setAttribute("r","8");
  o1.setAttribute("stroke","rgba(190,240,255,.7)");o1.setAttribute("stroke-width","1.4");
  const o2 = document.createElementNS(SVG_NS,"circle");
  o2.classList.add("orbit-2");
  o2.setAttribute("cx","0");o2.setAttribute("cy","0");o2.setAttribute("r","8");
  o2.setAttribute("stroke","rgba(190,240,255,.55)");o2.setAttribute("stroke-width","1.2");
  const o3 = document.createElementNS(SVG_NS,"circle");
  o3.classList.add("orbit-3");
  o3.setAttribute("cx","0");o3.setAttribute("cy","0");o3.setAttribute("r","8");
  o3.setAttribute("stroke","rgba(190,240,255,.4)");o3.setAttribute("stroke-width","1");
  gOrbit.appendChild(o1);gOrbit.appendChild(o2);gOrbit.appendChild(o3);
  brainSvg.appendChild(gOrbit);

  // path数组 [d,class,stroke‑dasharray,stroke‑dashoffset,opacity,stroke‑width]
  const pathList = [
    {d:"M100 105 C64 91 49 41 12 26", cls:"path-1", da:132, off:132, op:0.85, sw:1.6},
    {d:"M100 105 C116 103 171 29 188 26", cls:"path-2", da:132, off:132, op:0.85, sw:1.6},
    {d:"M100 105 C77 93 36 112 12 100", cls:"path-3", da:99, off:99, op:0.85, sw:1.6},
    {d:"M100 105 C113 132 174 73 188 100", cls:"path-4", da:99, off:99, op:0.85, sw:1.6},
    {d:"M100 105 C72 127 41 156 12 178", cls:"path-5", da:128, off:128, op:0.85, sw:1.6},
    {d:"M100 105 C124 138 163 144 188 178", cls:"path-6", da:128, off:128, op:0.85, sw:1.6},
    {d:"M100 105 C83 170 117 146 100 212", cls:"path-7", da:120, off:120, op:0.85, sw:1.6},
    {d:"M100 105 C100 72 100 41 100 8", cls:"path-8", da:109, off:109, op:0.85, sw:1.6},
    {d:"M100 105 C69 112 69 63 38 70", cls:"path-9", da:80, off:80, op:0.9, sw:1},
    {d:"M100 105 C119 96 142 79 162 70", cls:"path-10", da:80, off:80, op:0.9, sw:1},
    {d:"M100 105 C70 134 69 111 38 140", cls:"path-11", da:80, off:80, op:0.9, sw:1},
    {d:"M100 105 C111 133 150 112 162 140", cls:"path-12", da:80, off:80, op:0.9, sw:1},
    {d:"M100 105 C98 126 102 138 100 160", cls:"path-13", da:62, off:62, op:0.9, sw:1},
    {d:"M100 105 C83 82 42 104 24 80", cls:"path-14", da:90, off:90, op:0.9, sw:1},
    {d:"M100 105 C116 114 160 71 176 80", cls:"path-15", da:90, off:90, op:0.9, sw:1},
    {d:"M100 105 C68 125 57 106 24 126", cls:"path-16", da:88, off:88, op:0.9, sw:1},
    {d:"M100 105 C128 106 147 125 176 126", cls:"path-17", da:88, off:88, op:0.9, sw:1},
    {d:"M100 105 C95 61 57 79 52 34", cls:"path-18", da:96, off:96, op:0.9, sw:1},
    {d:"M100 105 C118 78 130 62 148 34", cls:"path-19", da:96, off:96, op:0.9, sw:1},
    {d:"M100 105 C82 133 71 147 52 176", cls:"path-20", da:96, off:96, op:0.9, sw:1},
    {d:"M100 105 C128 107 120 174 148 176", cls:"path-21", da:96, off:96, op:0.9, sw:1},
    {d:"M100 105 L112 111 L104 118 L116 124 L108 131", cls:"path-22", da:0, off:0, op:0.9, sw:2},
    {d:"M100 105 L88 112 L98 120 L86 126 L96 132", cls:"path-23", da:0, off:0, op:0.7, sw:1.6},
    {d:"M100 105 L106 96 L96 90 L104 84 L98 78", cls:"path-24", da:0, off:0, op:0.6, sw:1.4},
  ];
  const gPath = document.createElementNS(SVG_NS,"g");
  gPath.setAttribute("fill","none");
  gPath.setAttribute("stroke-linecap","round");
  gPath.setAttribute("stroke-linejoin","round");
  gPath.setAttribute("filter","url(#linkGlow)");
  pathList.forEach(pItem=>{
    const p = document.createElementNS(SVG_NS,"path");
    p.classList.add(pItem.cls);
    p.setAttribute("d",pItem.d);
    p.setAttribute("stroke","url(#linkGrad)");
    p.setAttribute("stroke-width",pItem.sw);
    p.setAttribute("opacity",pItem.op);
    if(pItem.da>0){
      p.setAttribute("stroke-dasharray",pItem.da);
      p.setAttribute("stroke-dashoffset",pItem.off);
    }
    gPath.appendChild(p);
  });
  brainSvg.appendChild(gPath);

  // dot 点数组 [cx,cy,r,cls]
  const dotArr = [
    [100,105,5.0,"dot-main"],
    [12,26,2.4,"dot dot1"],
    [188,26,2.4,"dot dot2"],
    [12,100,2.2,"dot dot3"],
    [188,100,2.2,"dot dot4"],
    [12,178,2.4,"dot dot5"],
    [188,178,2.4,"dot dot6"],
    [100,212,2.8,"dot dot7"],
    [100,8,2.0,"dot dot8"],
    [38,70,1.7,"dot dot9"],
    [162,70,1.7,"dot dot10"],
    [38,140,1.7,"dot dot11"],
    [162,140,1.7,"dot dot12"],
    [100,160,1.7,"dot dot13"],
    [24,80,1.5,"dot dot14"],
    [176,80,1.5,"dot dot15"],
    [24,126,1.5,"dot dot16"],
    [176,126,1.5,"dot dot17"],
    [52,34,1.5,"dot dot18"],
    [148,34,1.5,"dot dot19"],
    [52,176,1.5,"dot dot20"],
    [148,176,1.5,"dot dot21"],
    [67,75,1.4,"dot dot22"],
    [133,75,1.4,"dot dot23"],
    [67,103,1.4,"dot dot24"],
    [133,103,1.4,"dot dot25"],
    [67,133,1.4,"dot dot26"],
    [133,133,1.4,"dot dot27"],
    [100,146,1.4,"dot dot28"],
    [100,68,1.4,"dot dot29"],
  ];
  const gDot = document.createElementNS(SVG_NS,"g");
  gDot.setAttribute("fill","#eaffff");
  gDot.setAttribute("filter","url(#linkGlow)");
  dotArr.forEach(d=>{
    const dc = document.createElementNS(SVG_NS,"circle");
    dc.classList.add(...d[2]==5.0 ? ["dot-main"] : d[3].split(" "));
    dc.setAttribute("cx",d[0]);
    dc.setAttribute("cy",d[1]);
    dc.setAttribute("r",d[2]);
    gDot.appendChild(dc);
  });
  brainSvg.appendChild(gDot);
}

// ========== 原有业务逻辑 ==========
const b=document.getElementById('lang');
let en=false;
b.onclick=()=>{
  en=!en;
  document.documentElement.lang=en?'en':'zh-CN';
  document.body.classList.toggle('en-mode',en);
  b.textContent=en?'中 / EN':'EN / 中';
  document.querySelectorAll('.zh').forEach(x=>x.style.display=en?'none':'inline');
  document.querySelectorAll('.en').forEach(x=>x.style.display=en?'inline':'none');
};

document.querySelectorAll('.case-link').forEach(link=>{
  link.addEventListener('click',function(e){
    const url = this.getAttribute('href');
    if(url === '#'){
      e.preventDefault();
      console.log('案例链接尚未配置，请将href="#"替换为真实网页地址');
    }
  })
})

const processWrap = document.querySelector('.process');
const steps = document.querySelectorAll('.step');
let processAnimated = false;

if(processWrap){
  const io = new IntersectionObserver((entries)=>{
    const entry = entries[0];
    if(entry.isIntersecting && !processAnimated){
      processAnimated = true;
      steps.forEach((step,idx)=>{
        setTimeout(()=>{
          step.classList.add('step-in');
        }, idx * 160);
      })
    }
  },{threshold:0.25});
  io.observe(processWrap);
}

// DOM加载完成后，动态渲染全部brain svg内部节点
document.addEventListener("DOMContentLoaded",()=>{
  initBrainSvg();
});
