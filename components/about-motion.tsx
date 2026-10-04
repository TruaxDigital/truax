// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";

// About section motion graphic: one person moving from awareness to advocacy,
// with the data and the next message built around them.
// One canvas, no libraries, 4:3. Pauses off screen and honors prefers-reduced-motion.
export function AboutMotion({ className = "" }: { className?: string }) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    var root = rootRef.current, cv = canvasRef.current;
    if (!root || !cv) return;
    var ctx = cv.getContext('2d');
    var SKY='#27AAE1', F=getComputedStyle(root).fontFamily||'system-ui, sans-serif';
    var W=0,H=0,dpr=1,S=1,VW=800,VH=600,ox=0,oy=0;
    var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var raf=0,visible=true;
    var P0=[70,490],C1=[300,480],C2=[480,200],P3=[735,110],TN=[.04,.27,.5,.73,.96],NAMES=['Awareness','Interest','Decision','Customer','Advocacy'];
    function B(z){var o=1-z;return[o*o*o*P0[0]+3*o*o*z*C1[0]+3*o*z*z*C2[0]+z*z*z*P3[0],o*o*o*P0[1]+3*o*o*z*C1[1]+3*o*z*z*C2[1]+z*z*z*P3[1]]}
    var SM=[];for(var q0=0;q0<=100;q0++)SM.push(B(q0/100));
    function yAt(x){if(x<=SM[0][0])return SM[0][1];for(var i=1;i<SM.length;i++)if(SM[i][0]>=x){var a=SM[i-1],b=SM[i];return a[1]+(b[1]-a[1])*(x-a[0])/((b[0]-a[0])||1)}return SM[100][1]}

    function es(v){v=v<0?0:v>1?1:v;return v*v*(3-2*v)}
    function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
    function bar(x,y,w,h,c){rr(x,y,Math.max(w,h),h,h/2);ctx.fillStyle=c;ctx.fill()}
    function txt(s,x,y,size,wt,c,al,ls){ctx.font=wt+' '+size+'px '+F;ctx.fillStyle=c;ctx.textAlign=al||'left';ctx.textBaseline='middle';if('letterSpacing' in ctx)ctx.letterSpacing=(ls||0)+'px';ctx.fillText(s,x,y)}
    function glow(x,y,r,a){var g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,'rgba(170,230,255,'+a+')');g.addColorStop(.35,'rgba(39,170,225,'+a*.55+')');g.addColorStop(1,'rgba(39,170,225,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,6.2832);ctx.fill()}
    function check(x,y,s,p){if(p<=0)return;var a=Math.min(p*2,1),b=Math.max(p*2-1,0);ctx.beginPath();ctx.moveTo(x-s*.45,y);ctx.lineTo(x-s*.45+s*.35*a,y+s*.35*a);if(b>0)ctx.lineTo(x-s*.1+s*.6*b,y+s*.35-s*.7*b);ctx.strokeStyle='#fff';ctx.lineWidth=1.8;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke()}
    function blur(v){return v*S*dpr}
    // person glyph inside a disc of radius r
    function person(x,y,r,fill,stroke){
      ctx.save();ctx.beginPath();ctx.arc(x,y,r,0,6.2832);ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1.5;ctx.stroke()}
      ctx.clip();ctx.fillStyle='rgba(255,255,255,.95)';
      ctx.beginPath();ctx.arc(x,y-r*.2,r*.3,0,6.2832);ctx.fill();
      ctx.beginPath();ctx.arc(x,y+r*.95,r*.62,0,6.2832);ctx.fill();ctx.restore();
    }

    function resize(){
      var r=root.getBoundingClientRect(); W=r.width; H=r.height; if(!W||!H) return;
      dpr=Math.min(window.devicePixelRatio||1,2);
      cv.width=Math.round(W*dpr); cv.height=Math.round(H*dpr);
      S=Math.min(W/VW,H/VH); ox=(W-VW*S)/2; oy=(H-VH*S)/2;
      if(reduce||!raf) draw(reduce?6.4:performance.now()/1000);
    }

    function bg(t){
      var g=ctx.createLinearGradient(0,0,W,H);g.addColorStop(0,'#0C0B2A');g.addColorStop(.55,'#1A1950');g.addColorStop(1,'#262466');
      ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
      var rg=ctx.createRadialGradient(W*.55,H*.45,0,W*.55,H*.45,Math.max(W,H)*.55);
      rg.addColorStop(0,'rgba(43,57,144,.75)');rg.addColorStop(1,'rgba(43,57,144,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);
      ctx.globalCompositeOperation='lighter';
      var BM=[[.3,.2,.15,.2,0],[.72,.12,.2,.15,2],[1.05,.1,.18,.24,4]], sk=H*.6;
      for(var i=0;i<BM.length;i++){var b=BM[i],bx=(b[0]+.035*Math.sin(t*b[3]+b[4]))*W,bw=b[1]*W;
        var lg=ctx.createLinearGradient(bx,0,bx+bw,0);lg.addColorStop(0,'rgba(39,170,225,0)');lg.addColorStop(.85,'rgba(39,170,225,'+b[2]*(.7+.3*Math.sin(t*.4+i))+')');lg.addColorStop(1,'rgba(160,225,255,0)');
        ctx.fillStyle=lg;ctx.beginPath();ctx.moveTo(bx,0);ctx.lineTo(bx+bw,0);ctx.lineTo(bx+bw-sk,H);ctx.lineTo(bx-sk,H);ctx.closePath();ctx.fill()}
      ctx.globalCompositeOperation='source-over';
      var sp=28*S; if(sp>=10){ctx.fillStyle='rgba(255,255,255,.07)';for(var x=sp/2;x<W;x+=sp)for(var y=sp/2;y<H;y+=sp)ctx.fillRect(x,y,1,1)}
    }

    function panel(p,title,t){
      ctx.save();ctx.shadowColor='rgba(3,3,20,.6)';ctx.shadowBlur=blur(36);ctx.shadowOffsetY=blur(14);
      rr(p.x,p.y,p.w,p.h,14);ctx.fillStyle='rgba(15,14,50,.88)';ctx.fill();ctx.restore();
      var g=ctx.createLinearGradient(0,p.y,0,p.y+p.h);g.addColorStop(0,'rgba(255,255,255,.11)');g.addColorStop(.35,'rgba(255,255,255,0)');
      rr(p.x,p.y,p.w,p.h,14);ctx.fillStyle=g;ctx.fill();
      ctx.strokeStyle='rgba(255,255,255,.15)';ctx.lineWidth=1;ctx.stroke();
      txt(title,p.x+18,p.y+26,12,600,'rgba(255,255,255,.62)','left',1.4);
      var pu=.5+.5*Math.sin(t*3);glow(p.x+p.w-22,p.y+26,7+3*pu,.5);
      ctx.fillStyle=SKY;ctx.beginPath();ctx.arc(p.x+p.w-22,p.y+26,3,0,6.2832);ctx.fill();
    }

    // the data layer: columns rising under the path
    function data(t){
      for(var x=84;x<=730;x+=24){var top=yAt(x)+28,base=566,h=(base-top)*(.5+.5*(.5+.5*Math.sin(t*1.1+x*.035)));
        var g=ctx.createLinearGradient(0,base-h,0,base);g.addColorStop(0,'rgba(39,170,225,.22)');g.addColorStop(1,'rgba(39,170,225,.02)');
        ctx.fillStyle=g;ctx.fillRect(x-5,base-h,10,h);ctx.fillStyle='rgba(150,225,255,.5)';ctx.fillRect(x-5,base-h,10,1.5)}
    }

    function journey(t){
      ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(P0[0],P0[1]);ctx.bezierCurveTo(C1[0],C1[1],C2[0],C2[1],P3[0],P3[1]);
      ctx.strokeStyle='rgba(39,170,225,.14)';ctx.lineWidth=10;ctx.stroke();
      var lg=ctx.createLinearGradient(P0[0],0,P3[0],0);lg.addColorStop(0,'rgba(39,170,225,.35)');lg.addColorStop(1,'rgba(150,225,255,.95)');
      ctx.strokeStyle=lg;ctx.lineWidth=2;ctx.stroke();
      var Q=[],k,i;for(k=0;k<5;k++)Q.push((t*.06+k/5)%1);
      // advocacy ripples
      var e=B(TN[4]);for(k=0;k<3;k++){var rp=(t*.45+k/3)%1;ctx.beginPath();ctx.arc(e[0],e[1],12+rp*44,0,6.2832);ctx.strokeStyle='rgba(39,170,225,'+(.5*(1-rp))+')';ctx.lineWidth=1.5;ctx.stroke()}
      for(i=0;i<5;i++){var n=B(TN[i]),fl=0;for(k=0;k<5;k++)fl=Math.max(fl,1-Math.abs(Q[k]-TN[i])/.05);
        if(fl>0)glow(n[0],n[1],26,.8*fl);
        ctx.beginPath();ctx.arc(n[0],n[1],7,0,6.2832);ctx.fillStyle=fl>0||i==4?SKY:'#12113A';ctx.fill();ctx.strokeStyle=SKY;ctx.lineWidth=2;ctx.stroke();
        txt(NAMES[i],n[0]-12,n[1]-18,13,600,'rgba(255,255,255,'+(.72+.28*Math.max(fl,0))+')','right')}
      for(k=0;k<5;k++){var z=Q[k],al=es(z/.05)*es((1-z)/.04),j;
        for(j=6;j>0;j--){var zz=z-j*.012;if(zz<0)continue;var tp=B(zz);glow(tp[0],tp[1],9-j,(1-j/7)*.6*al)}
        var p=B(z);ctx.save();ctx.globalAlpha=al;glow(p[0],p[1],24,.55);person(p[0],p[1],11,'#2B3990','#9FE0FF');ctx.restore()}
    }

    function who(p,t){
      panel(p,'PERSON',t);
      var x=p.x+18,y=p.y+48;
      var g=ctx.createLinearGradient(x,y,x+48,y+48);g.addColorStop(0,'#2B3990');g.addColorStop(1,SKY);
      person(x+24,y+24,24,g,'rgba(255,255,255,.35)');
      bar(x+62,y+12,p.w-36-62-40,8,'rgba(255,255,255,.86)');bar(x+62,y+30,(p.w-36-62)*.5,5,'rgba(255,255,255,.3)');
      var N=['Read the pricing guide','Replied to your email','Booked a call'],u=(t%8)/1.6,fd=es((5-u)/.5),i;
      for(i=0;i<3;i++){var ry=y+70+i*30,d=es((u-.3-i)/.5)*fd;
        rr(x,ry,p.w-36,24,8);ctx.fillStyle='rgba(255,255,255,.05)';ctx.fill();
        if(d>0){ctx.fillStyle='rgba(39,170,225,'+(.16*d)+')';ctx.fill()}
        ctx.beginPath();ctx.arc(x+13,ry+12,7,0,6.2832);ctx.strokeStyle='rgba(255,255,255,.3)';ctx.lineWidth=1;ctx.stroke();
        if(d>0){ctx.fillStyle='rgba(39,170,225,'+d+')';ctx.fill();check(x+13,ry+12,7,d)}
        txt(N[i],x+28,ry+12.5,12.5,500,'rgba(255,255,255,'+(.5+.45*d)+')')}
    }

    function note(p,t){
      panel(p,'NEXT MESSAGE',t);
      var x=p.x+18,y=p.y+46,w=p.w-36,u=t%6.4,ty=es(u/3.2),fd=es((6.4-u)/.5),L=[.92,.78,.5],i;
      rr(x,y,w,58,10);ctx.fillStyle='rgba(255,255,255,.06)';ctx.fill();ctx.strokeStyle='rgba(255,255,255,.1)';ctx.lineWidth=1;ctx.stroke();
      ctx.save();ctx.globalAlpha=fd;
      for(i=0;i<3;i++){var pr=Math.max(0,Math.min(1,ty*3-i));if(pr>0)bar(x+12,y+12+i*14,(w-24)*L[i]*pr,6,i?'rgba(255,255,255,.4)':'rgba(255,255,255,.86)');
        if(pr>0&&pr<1){ctx.fillStyle=SKY;ctx.fillRect(x+12+(w-24)*L[i]*pr+3,y+9+i*14,2,12)}}
      var d=es((u-3.5)/.5);
      if(d>0){ctx.globalAlpha=fd*d;ctx.fillStyle=SKY;ctx.beginPath();ctx.arc(p.x+p.w-28,y+78,8,0,6.2832);ctx.fill();check(p.x+p.w-28,y+78,8,d);txt('Sent',p.x+p.w-42,y+78.5,12.5,600,'rgba(255,255,255,.9)','right')}
      ctx.restore();
      txt('Written for one person',x,y+78.5,12,500,'rgba(255,255,255,.5)');
    }

    function link(x1,y1,x2,y2,t,ph){
      var m=(y1+y2)/2,k,j;
      ctx.beginPath();ctx.moveTo(x1,y1);ctx.bezierCurveTo(x1,m,x2,m,x2,y2);ctx.strokeStyle='rgba(39,170,225,.45)';ctx.lineWidth=1.5;ctx.stroke();
      for(k=0;k<2;k++){var q=(t*.4+ph+k*.5)%1;
        for(j=6;j>=0;j--){var z=q-j*.035;if(z<0)continue;var o=1-z,
          px=o*o*o*x1+3*o*o*z*x1+3*o*z*z*x2+z*z*z*x2,py=o*o*o*y1+3*o*o*z*m+3*o*z*z*m+z*z*z*y2;
          glow(px,py,j?6-j*.5:10,(1-j/7)*.95)}}
      ctx.fillStyle='#12113A';ctx.strokeStyle=SKY;ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(x1,y1,4,0,6.2832);ctx.fill();ctx.stroke();
    }

    function draw(t){
      if(!W||!H) return;
      ctx.setTransform(dpr,0,0,dpr,0,0);bg(t);
      ctx.setTransform(dpr*S,0,0,dpr*S,ox*dpr,oy*dpr);
      data(t);
      var a={x:40,y:36+Math.sin(t*.55)*4,w:290,h:216},b={x:470,y:306+Math.sin(t*.55+2)*4,w:290,h:140};
      var n1=B(TN[1]),n3=B(TN[3]);
      link(a.x+170,a.y+a.h,n1[0],n1[1]-9,t,0);link(b.x+110,b.y,n3[0],n3[1]+9,t,.3);
      journey(t);who(a,t);note(b,t);
    }
    function loop(now){draw(now/1000);raf=requestAnimationFrame(loop)}
    function sync(){var on=visible&&!document.hidden&&!reduce;if(on&&!raf)raf=requestAnimationFrame(loop);else if(!on&&raf){cancelAnimationFrame(raf);raf=0}}

    var ro=null,io=null;
    if('ResizeObserver' in window){ro=new ResizeObserver(resize);ro.observe(root)} else window.addEventListener('resize',resize);
    if('IntersectionObserver' in window){io=new IntersectionObserver(function(e){visible=e[0].isIntersecting;sync()});io.observe(root)}
    document.addEventListener('visibilitychange',sync);
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){if(reduce)draw(6.4)});
    resize();sync();

    return () => {
      if(raf)cancelAnimationFrame(raf);raf=0;
      if(ro)ro.disconnect(); else window.removeEventListener('resize',resize);
      if(io)io.disconnect();
      document.removeEventListener('visibilitychange',sync);
    };
  }, []);

  return (
    <div ref={rootRef} className={`relative h-full w-full bg-[#12113A] ${className}`}>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Animated illustration: people moving from awareness to advocacy, with their data and the next message built around each person"
        className="absolute inset-0 block h-full w-full"
      />
    </div>
  );
}
