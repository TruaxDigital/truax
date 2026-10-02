// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";

// Hero motion graphic: website, CRM pipeline, and automation as one connected system.
// One canvas, no libraries. Pauses off screen and honors prefers-reduced-motion.
// Layout: 1200x540 when the container is 720px or wider, 600x800 stacked when narrower.
export function HeroMotion({ className = "" }: { className?: string }) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    var root = rootRef.current, cv = canvasRef.current;
    if (!root || !cv) return;
    var ctx = cv.getContext('2d');
    var SKY='#27AAE1', F=getComputedStyle(root).fontFamily||'system-ui, sans-serif';
    var W=0,H=0,dpr=1,S=1,VW=1200,VH=540,ox=0,oy=0,narrow=false,L={};
    var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var raf=0,visible=true;

    function es(v){v=v<0?0:v>1?1:v;return v*v*(3-2*v)}
    function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
    function bar(x,y,w,h,c){rr(x,y,Math.max(w,h),h,h/2);ctx.fillStyle=c;ctx.fill()}
    function txt(s,x,y,size,wt,c,al,ls){ctx.font=wt+' '+size+'px '+F;ctx.fillStyle=c;ctx.textAlign=al||'left';ctx.textBaseline='middle';if('letterSpacing' in ctx)ctx.letterSpacing=(ls||0)+'px';ctx.fillText(s,x,y)}
    function glow(x,y,r,a){var g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,'rgba(170,230,255,'+a+')');g.addColorStop(.35,'rgba(39,170,225,'+a*.55+')');g.addColorStop(1,'rgba(39,170,225,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,6.2832);ctx.fill()}
    function check(x,y,s,p){if(p<=0)return;var a=Math.min(p*2,1),b=Math.max(p*2-1,0);ctx.beginPath();ctx.moveTo(x-s*.45,y);ctx.lineTo(x-s*.45+s*.35*a,y+s*.35*a);if(b>0)ctx.lineTo(x-s*.1+s*.6*b,y+s*.35-s*.7*b);ctx.strokeStyle='#fff';ctx.lineWidth=1.8;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke()}
    function blur(v){return v*S*dpr}

    function resize(){
      narrow=root.clientWidth<720; VW=narrow?600:1200; VH=narrow?800:540;
      root.style.aspectRatio=VW+' / '+VH;
      var r=root.getBoundingClientRect(); W=r.width; H=r.height; if(!W||!H) return;
      dpr=Math.min(window.devicePixelRatio||1,2);
      cv.width=Math.round(W*dpr); cv.height=Math.round(H*dpr);
      S=Math.min(W/VW,H/VH); ox=(W-VW*S)/2; oy=(H-VH*S)/2;
      L=narrow?{b:{x:30,y:30,w:540,h:372},a:{x:30,y:446,w:280,h:324},c:{x:330,y:446,w:240,h:324}}
              :{a:{x:40,y:120,w:290,h:300},b:{x:400,y:70,w:440,h:400},c:{x:910,y:120,w:250,h:300}};
      if(reduce||!raf) draw(reduce?5.2:performance.now()/1000);
    }

    function bg(t){
      var g=ctx.createLinearGradient(0,0,W,H);g.addColorStop(0,'#0C0B2A');g.addColorStop(.55,'#1A1950');g.addColorStop(1,'#262466');
      ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
      var rg=ctx.createRadialGradient(W*.5,H*.45,0,W*.5,H*.45,Math.max(W,H)*.5);
      rg.addColorStop(0,'rgba(43,57,144,.75)');rg.addColorStop(1,'rgba(43,57,144,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);
      ctx.globalCompositeOperation='lighter';
      var B=[[.18,.16,.16,.21,0],[.52,.1,.22,.16,2],[.78,.2,.13,.12,4],[1.02,.07,.2,.25,1]], sk=H*.5;
      for(var i=0;i<B.length;i++){var b=B[i],bx=(b[0]+.035*Math.sin(t*b[3]+b[4]))*W,bw=b[1]*W;
        var lg=ctx.createLinearGradient(bx,0,bx+bw,0);lg.addColorStop(0,'rgba(39,170,225,0)');lg.addColorStop(.85,'rgba(39,170,225,'+b[2]*(.7+.3*Math.sin(t*.4+i))+')');lg.addColorStop(1,'rgba(160,225,255,0)');
        ctx.fillStyle=lg;ctx.beginPath();ctx.moveTo(bx,0);ctx.lineTo(bx+bw,0);ctx.lineTo(bx+bw-sk,H);ctx.lineTo(bx-sk,H);ctx.closePath();ctx.fill()}
      ctx.globalCompositeOperation='source-over';
      var sp=28*S; if(sp>=10){ctx.fillStyle='rgba(255,255,255,.07)';for(var x=sp/2;x<W;x+=sp)for(var y=sp/2;y<H;y+=sp)ctx.fillRect(x,y,1,1)}
    }

    function panel(p,title,t){
      ctx.save();ctx.shadowColor='rgba(3,3,20,.6)';ctx.shadowBlur=blur(40);ctx.shadowOffsetY=blur(16);
      rr(p.x,p.y,p.w,p.h,14);ctx.fillStyle='rgba(15,14,50,.84)';ctx.fill();ctx.restore();
      var g=ctx.createLinearGradient(0,p.y,0,p.y+p.h);g.addColorStop(0,'rgba(255,255,255,.11)');g.addColorStop(.35,'rgba(255,255,255,0)');
      rr(p.x,p.y,p.w,p.h,14);ctx.fillStyle=g;ctx.fill();
      ctx.strokeStyle='rgba(255,255,255,.15)';ctx.lineWidth=1;ctx.stroke();
      txt(title,p.x+18,p.y+26,11,600,'rgba(255,255,255,.62)','left',1.4);
      var pu=.5+.5*Math.sin(t*3);glow(p.x+p.w-22,p.y+26,7+3*pu,.5);
      ctx.fillStyle=SKY;ctx.beginPath();ctx.arc(p.x+p.w-22,p.y+26,3,0,6.2832);ctx.fill();
    }

    function site(p,t){
      panel(p,'WEBSITE',t);
      var x=p.x+18,y=p.y+48,w=p.w-36,h=122,i;
      rr(x,y,w,h,8);ctx.fillStyle='rgba(255,255,255,.05)';ctx.fill();ctx.strokeStyle='rgba(255,255,255,.1)';ctx.stroke();
      ctx.fillStyle='rgba(255,255,255,.28)';for(i=0;i<3;i++){ctx.beginPath();ctx.arc(x+12+i*9,y+11,2.5,0,6.2832);ctx.fill()}
      rr(x+44,y+5,w-56,12,6);ctx.fillStyle='rgba(255,255,255,.07)';ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.08)';ctx.fillRect(x,y+22,w,1);
      var u=t%9,pr=es(u/3)*es((9-u)/.8),cx=x+14,cy=y+36;
      bar(cx,cy,w*.42,8,'rgba(255,255,255,.86)');bar(cx,cy+15,w*.33,8,'rgba(255,255,255,.86)');
      bar(cx,cy+34,w*.38,5,'rgba(255,255,255,.28)');bar(cx,cy+44,w*.27,5,'rgba(255,255,255,.28)');
      var pu=.5+.5*Math.sin(t*2.4);
      ctx.save();ctx.shadowColor='rgba(39,170,225,'+(.35+.45*pu)+')';ctx.shadowBlur=blur(8+8*pu);rr(cx,cy+58,62,18,9);ctx.fillStyle=SKY;ctx.fill();ctx.restore();
      bar(cx+14,cy+65,34,4,'rgba(255,255,255,.92)');
      var ix=x+w*.58,iw=w*.42-14,iy=y+34,ih=h-46,ig=ctx.createLinearGradient(ix,iy,ix+iw,iy+ih);
      ig.addColorStop(0,'rgba(43,57,144,.9)');ig.addColorStop(1,'rgba(39,170,225,.55)');rr(ix,iy,iw,ih,6);ctx.fillStyle=ig;ctx.fill();
      var bh=[.35,.5,.45,.7,.9],bw=(iw-20)/5;
      for(i=0;i<5;i++){var hh=(ih-18)*bh[i]*(.45+.55*pr);ctx.fillStyle='rgba(255,255,255,'+(i==4?.95:.5)+')';ctx.fillRect(ix+10+i*bw,iy+ih-8-hh,bw-4,hh)}
      ctx.save();rr(x,y+23,w,h-23,8);ctx.clip();
      var sy=y+23+((t%4)/4)*(h-23+30)-30,sg=ctx.createLinearGradient(0,sy,0,sy+30);
      sg.addColorStop(0,'rgba(39,170,225,0)');sg.addColorStop(1,'rgba(39,170,225,.24)');ctx.fillStyle=sg;ctx.fillRect(x,sy,w,30);
      ctx.fillStyle='rgba(150,225,255,.85)';ctx.fillRect(x,sy+30,w,1);ctx.restore();
      var gx=p.x+52,gy=y+h+58,r=30,sc=Math.round(58+40*pr),a0=-Math.PI/2,a1=a0+6.2832*sc/100;
      ctx.lineWidth=6;ctx.lineCap='round';ctx.strokeStyle='rgba(255,255,255,.1)';ctx.beginPath();ctx.arc(gx,gy,r,0,6.2832);ctx.stroke();
      ctx.strokeStyle=SKY;ctx.beginPath();ctx.arc(gx,gy,r,a0,a1);ctx.stroke();
      glow(gx+Math.cos(a1)*r,gy+Math.sin(a1)*r,10,.7);
      txt(''+sc,gx,gy+1,20,700,'#fff','center');
      var lx=gx+r+22,ex=p.x+p.w-18,V=['LCP','INP','CLS'],T=[.92,.8,.96];
      for(i=0;i<3;i++){var ry=gy-22+i*22;txt(V[i],lx,ry,10,600,'rgba(255,255,255,.55)','left',.6);
        bar(lx+34,ry-2,ex-lx-34,4,'rgba(255,255,255,.1)');bar(lx+34,ry-2,(ex-lx-34)*(.3+(T[i]-.3)*pr),4,SKY)}
    }

    var PH=[0,2.5,.8,3.3,1.7,4.2,1.25,3.75],NW=[.9,.6,.75,.85,.55,.8,.7,.95],AV=['#27AAE1','#8FA0FF','#FFFFFF','#27AAE1','#8FA0FF','#FFFFFF','#27AAE1','#8FA0FF'];
    var PTS=[.1,.17,.14,.25,.23,.35,.32,.46,.52,.49,.65,.73,.7,.87,.96];
    function pipe(p,t){
      panel(p,'PIPELINE',t);
      var x0=p.x+18,iw=p.w-36,g=10,cw=(iw-3*g)/4,top=p.y+50,ch=p.h-142,N=['Lead','Qualified','Proposal','Won'],i;
      for(i=0;i<4;i++){var cx=x0+i*(cw+g);rr(cx,top,cw,ch,8);ctx.fillStyle='rgba(255,255,255,'+(i==3?.07:.04)+')';ctx.fill();
        bar(cx+8,top+9,18,3,i==3?SKY:'rgba(255,255,255,.35)');txt(N[i],cx+8,top+25,11,600,'rgba(255,255,255,.74)')}
      var U=2.2,kh=44,kw=cw-12;
      for(i=0;i<8;i++){
        var s=(t/U+PH[i])%5,st=Math.floor(s),f=s-st,col=3,lift=0;
        if(s<3){var m=es((f-.68)/.32);col=st+m;lift=Math.sin(m*Math.PI)}
        var won=col>=2.999,wf=s>=3?Math.max(0,1-(s-3)/.7):0,al=es(s/.3)*es((5-s)/.5),hot=Math.max(lift,wf);
        var kx=x0+col*(cw+g)+6,ky=top+38+(i>>1)*(kh+8)-lift*5;
        ctx.save();ctx.globalAlpha=al;
        if(hot>.01){ctx.shadowColor='rgba(39,170,225,'+(.65*hot)+')';ctx.shadowBlur=blur(18)}
        rr(kx,ky,kw,kh,7);ctx.fillStyle=won?'rgba(39,170,225,.22)':'rgba(40,42,96,.95)';ctx.fill();
        ctx.shadowColor='transparent';ctx.shadowBlur=0;
        ctx.strokeStyle=won?'rgba(39,170,225,.9)':'rgba(255,255,255,'+(.16+.4*lift)+')';ctx.lineWidth=1;ctx.stroke();
        ctx.fillStyle=AV[i];ctx.globalAlpha=al*.9;ctx.beginPath();ctx.arc(kx+14,ky+15,6,0,6.2832);ctx.fill();ctx.globalAlpha=al;
        bar(kx+26,ky+12.5,(kw-38)*NW[i],5,'rgba(255,255,255,.82)');bar(kx+9,ky+29,(kw-34)*.75,4,'rgba(255,255,255,.26)');
        if(won){ctx.fillStyle=SKY;ctx.beginPath();ctx.arc(kx+kw-12,ky+kh-12,6.5,0,6.2832);ctx.fill();check(kx+kw-12,ky+kh-12,7,es((s-3)/.4))}
        ctx.restore();
      }
      var fy=top+ch+16,u=t%11,q=es(u/5),fd=es((11-u)/.9),cy0=fy+16,chh=46,n=PTS.length-1,up=q*n,k,px,py;
      txt('REVENUE',x0,fy+4,10,600,'rgba(255,255,255,.55)','left',1.2);
      ctx.fillStyle='rgba(255,255,255,.07)';for(k=0;k<3;k++)ctx.fillRect(x0,cy0+k*chh/2,iw,1);
      if(up>0.01){ctx.save();ctx.globalAlpha=fd;ctx.beginPath();
        for(k=0;k<=Math.floor(up);k++){px=x0+iw*k/n;py=cy0+chh*(1-PTS[k]);k?ctx.lineTo(px,py):ctx.moveTo(px,py)}
        var fl=Math.floor(up),fr=up-fl;if(fl<n&&fr>0){px=x0+iw*(fl+fr)/n;py=cy0+chh*(1-(PTS[fl]+(PTS[fl+1]-PTS[fl])*fr));ctx.lineTo(px,py)}
        ctx.strokeStyle=SKY;ctx.lineWidth=2;ctx.lineJoin='round';ctx.lineCap='round';ctx.stroke();
        ctx.lineTo(px,cy0+chh);ctx.lineTo(x0,cy0+chh);ctx.closePath();
        var ag=ctx.createLinearGradient(0,cy0,0,cy0+chh);ag.addColorStop(0,'rgba(39,170,225,.32)');ag.addColorStop(1,'rgba(39,170,225,0)');ctx.fillStyle=ag;ctx.fill();
        glow(px,py,12,.8);ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(px,py,3,0,6.2832);ctx.fill();ctx.restore()}
    }

    function auto(p,t){
      panel(p,'AUTOMATION',t);
      var N=['Form submitted','Lead scored','Owner assigned','Sequence sent'],u=(t%7.2)/1.5,fd=es((4.8-u)/.4),i;
      for(i=0;i<4;i++){
        var nx=p.x+18,ny=p.y+50+i*58,nw=p.w-36,nh=38,d=es((u-i)/.5)*fd;
        if(i<3){ctx.fillStyle='rgba(255,255,255,.16)';ctx.fillRect(nx+18.5,ny+nh,1,20);
          var f=(u-i-.5)/.5;if(f>0&&f<1){ctx.fillStyle=SKY;ctx.fillRect(nx+18.5,ny+nh,1,20*f);glow(nx+19,ny+nh+20*f,8,.9*fd)}
          else if(u>=i+1){ctx.fillStyle='rgba(39,170,225,'+fd+')';ctx.fillRect(nx+18.5,ny+nh,1,20)}}
        rr(nx,ny,nw,nh,10);ctx.fillStyle='rgba(255,255,255,.05)';ctx.fill();
        if(d>0){ctx.fillStyle='rgba(39,170,225,'+(.17*d)+')';ctx.fill()}
        ctx.strokeStyle='rgba(255,255,255,.12)';ctx.lineWidth=1;ctx.stroke();
        if(d>0){ctx.strokeStyle='rgba(39,170,225,'+(.85*d)+')';ctx.stroke()}
        ctx.beginPath();ctx.arc(nx+19,ny+19,9,0,6.2832);ctx.strokeStyle='rgba(255,255,255,.3)';ctx.stroke();
        if(d>0){ctx.fillStyle='rgba(39,170,225,'+d+')';ctx.fill();check(nx+19,ny+19,9,d)}
        txt(N[i],nx+38,ny+19.5,12,500,'rgba(255,255,255,'+(.55+.4*d)+')');
      }
    }

    function link(x1,y1,x2,y2,v,t,ph){
      var m=v?(y1+y2)/2:(x1+x2)/2,ax=v?x1:m,ay=v?m:y1,bx=v?x2:m,by=v?m:y2,k,j;
      ctx.beginPath();ctx.moveTo(x1,y1);ctx.bezierCurveTo(ax,ay,bx,by,x2,y2);ctx.strokeStyle='rgba(39,170,225,.45)';ctx.lineWidth=1.5;ctx.stroke();
      for(k=0;k<2;k++){var q=(t*.4+ph+k*.5)%1;
        for(j=7;j>=0;j--){var z=q-j*.03;if(z<0)continue;var o=1-z,
          px=o*o*o*x1+3*o*o*z*ax+3*o*z*z*bx+z*z*z*x2,py=o*o*o*y1+3*o*o*z*ay+3*o*z*z*by+z*z*z*y2;
          glow(px,py,j?6-j*.5:11,(1-j/8)*.95)}}
      ctx.fillStyle='#12113A';ctx.strokeStyle=SKY;ctx.lineWidth=1.5;
      [[x1,y1],[x2,y2]].forEach(function(e){ctx.beginPath();ctx.arc(e[0],e[1],4,0,6.2832);ctx.fill();ctx.stroke()});
    }

    function bob(p,t,ph){return{x:p.x,y:p.y+Math.sin(t*.55+ph)*4,w:p.w,h:p.h}}
    function draw(t){
      if(!W||!H) return;
      ctx.setTransform(dpr,0,0,dpr,0,0);bg(t);
      ctx.setTransform(dpr*S,0,0,dpr*S,ox*dpr,oy*dpr);
      var a=bob(L.a,t,0),b=bob(L.b,t,2),c=bob(L.c,t,4);
      site(a,t);pipe(b,t);auto(c,t);
      if(narrow){link(a.x+a.w/2,a.y,b.x+b.w*.26,b.y+b.h,true,t,0);link(b.x+b.w*.78,b.y+b.h,c.x+c.w/2,c.y,true,t,.3)}
      else{link(a.x+a.w,a.y+110,b.x,b.y+110,false,t,0);link(b.x+b.w,b.y+110,c.x,c.y+69,false,t,.3)}
    }
    function loop(now){draw(now/1000);raf=requestAnimationFrame(loop)}
    function sync(){var on=visible&&!document.hidden&&!reduce;if(on&&!raf)raf=requestAnimationFrame(loop);else if(!on&&raf){cancelAnimationFrame(raf);raf=0}}

    var ro=null,io=null;
    if('ResizeObserver' in window){ro=new ResizeObserver(resize);ro.observe(root)} else window.addEventListener('resize',resize);
    if('IntersectionObserver' in window){io=new IntersectionObserver(function(e){visible=e[0].isIntersecting;sync()});io.observe(root)}
    document.addEventListener('visibilitychange',sync);
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){if(reduce)draw(5.2)});
    resize();sync();

    return () => {
      if(raf)cancelAnimationFrame(raf);raf=0;
      if(ro)ro.disconnect(); else window.removeEventListener('resize',resize);
      if(io)io.disconnect();
      document.removeEventListener('visibilitychange',sync);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`relative w-full overflow-hidden rounded-2xl border border-[#262466] bg-[#12113A] shadow-2xl ${className}`}
      style={{ aspectRatio: "600 / 800" }}
    >
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Animated illustration: a website feeding leads into a CRM pipeline and an automation workflow"
        className="absolute inset-0 block h-full w-full"
      />
    </div>
  );
}
