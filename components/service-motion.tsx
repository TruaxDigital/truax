// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";

// Square motion graphics for the service and AI page heroes, one scene per page.
// scene: "demand" | "strategy" | "cmo" | "hosting" | "seo" | "web" | "enablement" | "agents"
// One canvas, no libraries. Pauses off screen and honors prefers-reduced-motion.
export function ServiceMotion({ scene, className = "" }: { scene: string; className?: string }) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    var root = rootRef.current, cv = canvasRef.current;
    if (!root || !cv) return;
    // @begin
    var ctx = cv.getContext('2d');
    var SKY='#27AAE1', LAV='#8FA0FF', F=getComputedStyle(root).fontFamily||'system-ui, sans-serif';
    var W=0,H=0,dpr=1,S=1,V=600,ox=0,oy=0,raf=0,visible=true;
    var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var DIM='rgba(255,255,255,.55)';

    function es(v){v=v<0?0:v>1?1:v;return v*v*(3-2*v)}
    function seq(t,per,n,i){var u=(t%per)/(per/(n+1.6));return es((u-i-.2)/.5)*es((n+1.6-u)/.4)}
    function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
    function bar(x,y,w,h,c){rr(x,y,Math.max(w,h),h,h/2);ctx.fillStyle=c;ctx.fill()}
    function dot(x,y,r,c){ctx.beginPath();ctx.arc(x,y,r,0,6.2832);ctx.fillStyle=c;ctx.fill()}
    function txt(s,x,y,size,wt,c,al,ls){ctx.font=wt+' '+size+'px '+F;ctx.fillStyle=c;ctx.textAlign=al||'left';ctx.textBaseline='middle';if('letterSpacing' in ctx)ctx.letterSpacing=(ls||0)+'px';ctx.fillText(s,x,y)}
    function cap(s,x,y){txt(s,x,y,11,600,DIM,'left',1.2)}
    function glow(x,y,r,a){var g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,'rgba(170,230,255,'+a+')');g.addColorStop(.35,'rgba(39,170,225,'+a*.55+')');g.addColorStop(1,'rgba(39,170,225,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,6.2832);ctx.fill()}
    function check(x,y,s,p){if(p<=0)return;var a=Math.min(p*2,1),b=Math.max(p*2-1,0);ctx.beginPath();ctx.moveTo(x-s*.45,y);ctx.lineTo(x-s*.45+s*.35*a,y+s*.35*a);if(b>0)ctx.lineTo(x-s*.1+s*.6*b,y+s*.35-s*.7*b);ctx.strokeStyle='#fff';ctx.lineWidth=1.8;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke()}
    function tick(x,y,r,d){ctx.beginPath();ctx.arc(x,y,r,0,6.2832);ctx.strokeStyle='rgba(255,255,255,.3)';ctx.lineWidth=1;ctx.stroke();if(d>0){ctx.fillStyle='rgba(39,170,225,'+d+')';ctx.fill();check(x,y,r,d)}}
    function blur(v){return v*S*dpr}
    function person(x,y,r,fill,stroke){
      ctx.save();ctx.beginPath();ctx.arc(x,y,r,0,6.2832);ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1.5;ctx.stroke()}
      ctx.clip();ctx.fillStyle='rgba(255,255,255,.95)';
      ctx.beginPath();ctx.arc(x,y-r*.2,r*.3,0,6.2832);ctx.fill();
      ctx.beginPath();ctx.arc(x,y+r*.95,r*.62,0,6.2832);ctx.fill();ctx.restore();
    }
    function brand(x,y,w,h){var g=ctx.createLinearGradient(x,y,x+w,y+h);g.addColorStop(0,'#2B3990');g.addColorStop(1,SKY);return g}
    // glass panel; returns its bobbed y
    function panel(x,y,w,h,title,t,ph){
      y+=Math.sin(t*.55+(ph||0))*3;
      ctx.save();ctx.shadowColor='rgba(3,3,20,.6)';ctx.shadowBlur=blur(36);ctx.shadowOffsetY=blur(14);
      rr(x,y,w,h,14);ctx.fillStyle='rgba(15,14,50,.88)';ctx.fill();ctx.restore();
      var g=ctx.createLinearGradient(0,y,0,y+h);g.addColorStop(0,'rgba(255,255,255,.11)');g.addColorStop(.35,'rgba(255,255,255,0)');
      rr(x,y,w,h,14);ctx.fillStyle=g;ctx.fill();
      ctx.strokeStyle='rgba(255,255,255,.15)';ctx.lineWidth=1;ctx.stroke();
      txt(title,x+18,y+26,12,600,'rgba(255,255,255,.62)','left',1.4);
      var pu=.5+.5*Math.sin(t*3);glow(x+w-22,y+26,7+3*pu,.5);dot(x+w-22,y+26,3,SKY);
      return y;
    }
    function row(x,y,w,label,d){
      rr(x,y,w,28,8);ctx.fillStyle='rgba(255,255,255,.05)';ctx.fill();
      if(d>0){ctx.fillStyle='rgba(39,170,225,'+(.16*d)+')';ctx.fill()}
      tick(x+14,y+14,7,d);txt(label,x+30,y+14.5,12.5,500,'rgba(255,255,255,'+(.5+.45*d)+')');
    }
    function chip(x,y,w,h,label,d){
      rr(x,y,w,h,h/2);ctx.fillStyle='rgba(15,14,50,.92)';ctx.fill();
      if(d>0){ctx.fillStyle='rgba(39,170,225,'+(.24*d)+')';ctx.fill()}
      ctx.strokeStyle='rgba(255,255,255,.18)';ctx.lineWidth=1;ctx.stroke();
      if(d>0){ctx.strokeStyle='rgba(39,170,225,'+(.9*d)+')';ctx.stroke()}
      txt(label,x+w/2,y+h/2+.5,12.5,600,'rgba(255,255,255,'+(.62+.38*d)+')','center');
    }
    function turn(ph,i){return es(1-Math.abs(ph-i-.5)*1.6)}
    function gauge(cx,cy,r,pr){
      var sc=Math.round(58+40*pr),a0=-Math.PI/2,a1=a0+6.2832*sc/100;
      ctx.lineWidth=r*.2;ctx.lineCap='round';ctx.strokeStyle='rgba(255,255,255,.1)';ctx.beginPath();ctx.arc(cx,cy,r,0,6.2832);ctx.stroke();
      ctx.strokeStyle=SKY;ctx.beginPath();ctx.arc(cx,cy,r,a0,a1);ctx.stroke();
      glow(cx+Math.cos(a1)*r,cy+Math.sin(a1)*r,r*.34,.7);txt(''+sc,cx,cy+1,r*.62,700,'#fff','center');
    }
    function spark(x,y,w,h,P,q,fd){
      var n=P.length-1,up=q*n,k,px=x,py=y+h;
      ctx.fillStyle='rgba(255,255,255,.07)';for(k=0;k<3;k++)ctx.fillRect(x,y+k*h/2,w,1);
      if(up<.01)return;
      ctx.save();ctx.globalAlpha=fd;ctx.beginPath();
      for(k=0;k<=Math.floor(up);k++){px=x+w*k/n;py=y+h*(1-P[k]);k?ctx.lineTo(px,py):ctx.moveTo(px,py)}
      var fl=Math.floor(up),fr=up-fl;if(fl<n&&fr>0){px=x+w*(fl+fr)/n;py=y+h*(1-(P[fl]+(P[fl+1]-P[fl])*fr));ctx.lineTo(px,py)}
      ctx.strokeStyle=SKY;ctx.lineWidth=2;ctx.lineJoin='round';ctx.lineCap='round';ctx.stroke();
      ctx.lineTo(px,y+h);ctx.lineTo(x,y+h);ctx.closePath();
      var ag=ctx.createLinearGradient(0,y,0,y+h);ag.addColorStop(0,'rgba(39,170,225,.32)');ag.addColorStop(1,'rgba(39,170,225,0)');ctx.fillStyle=ag;ctx.fill();
      glow(px,py,12,.8);dot(px,py,3,'#fff');ctx.restore();
    }
    function link(x1,y1,x2,y2,t,ph){
      var m=(y1+y2)/2,k,j;
      ctx.beginPath();ctx.moveTo(x1,y1);ctx.bezierCurveTo(x1,m,x2,m,x2,y2);ctx.strokeStyle='rgba(39,170,225,.42)';ctx.lineWidth=1.5;ctx.stroke();
      for(k=0;k<2;k++){var q=(t*.4+ph+k*.5)%1;
        for(j=6;j>=0;j--){var z=q-j*.035;if(z<0)continue;var o=1-z,
          px=o*o*o*x1+3*o*o*z*x1+3*o*z*z*x2+z*z*z*x2,py=o*o*o*y1+3*o*o*z*m+3*o*z*z*m+z*z*z*y2;
          glow(px,py,j?6-j*.5:10,(1-j/7)*.95)}}
    }
    function typing(x,y,w,L,ty,fd){
      ctx.save();ctx.globalAlpha=fd;
      for(var i=0;i<L.length;i++){var pr=Math.max(0,Math.min(1,ty*L.length-i));if(pr>0)bar(x,y+i*17,w*L[i]*pr,6,'rgba(255,255,255,'+(i?.4:.85)+')');
        if(pr>0&&pr<1){ctx.fillStyle=SKY;ctx.fillRect(x+w*L[i]*pr+3,y-3+i*17,2,12)}}
      ctx.restore();
    }

    var SC={
      demand:function(t){
        var N=['Paid','ABM','Content','Lifecycle'],CL=[SKY,LAV,'#FFFFFF','#6FD3FF'],PT=[[1,0,1,1],[1,1,0,1],[0,1,1,1]],i,k,ph=(t/1.2)%4;
        var py=panel(50,196,500,222,'PIPELINE',t,1);
        for(i=0;i<4;i++){link(96+i*136,96,140+i*107,py,t,i*.22);chip(36+i*136,60,120,36,N[i],turn(ph,i))}
        for(i=0;i<3;i++){var ry=py+50+i*52,d=seq(t,10,3,i);
          rr(68,ry,464,40,9);ctx.fillStyle='rgba(255,255,255,.05)';ctx.fill();
          person(90,ry+20,11,'#2B3990','rgba(255,255,255,.3)');
          bar(110,ry+13,120*[.9,.7,.8][i],6,'rgba(255,255,255,.82)');bar(110,ry+25,70,4,'rgba(255,255,255,.26)');
          bar(260,ry+18,150,4,'rgba(255,255,255,.1)');bar(260,ry+18,150*(.25+.75*d),4,SKY);
          for(k=0;k<4;k++){ctx.globalAlpha=PT[i][k]?(.25+.75*d):1;dot(440+k*22,ry+20,6,PT[i][k]?CL[k]:'rgba(255,255,255,.08)');ctx.globalAlpha=1}}
        cap('ATTRIBUTED REVENUE',50,456);
        var FR=[.34,.22,.26,.18],u=t%10,q=es(u/5)*es((10-u)/.6),x=50;
        bar(50,474,500,14,'rgba(255,255,255,.08)');
        for(k=0;k<4;k++){var w=500*FR[k]*q;if(w>2){ctx.fillStyle=CL[k];ctx.globalAlpha=.9;ctx.fillRect(x,474,w-2,14);ctx.globalAlpha=1}x+=w;
          dot(56+k*128,514,5,CL[k]);txt(N[k],68+k*128,514.5,12,500,'rgba(255,255,255,.7)')}
      },
      strategy:function(t){
        var N=['CRM','MarTech','Attribution','AI workflows','Content'],A=[-90,-18,54,126,198],cx=300,cy=240,i;
        for(i=0;i<5;i++){var a=A[i]*Math.PI/180,x=cx+Math.cos(a)*172,y=cy+Math.sin(a)*150,d=seq(t,10,5,i);
          ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(x,y);ctx.strokeStyle='rgba(255,255,255,.08)';ctx.lineWidth=1.5;ctx.stroke();
          ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+(x-cx)*d,cy+(y-cy)*d);ctx.strokeStyle='rgba(39,170,225,.6)';ctx.stroke();
          if(d>.98){var q=(t*.5+i*.2)%1;glow(cx+(x-cx)*q,cy+(y-cy)*q,9,.9)}
          chip(x-64,y-18,128,36,N[i],d)}
        glow(cx,cy,84,.3+.12*Math.sin(t*2));
        ctx.beginPath();ctx.arc(cx,cy,48,0,6.2832);ctx.fillStyle=brand(cx-48,cy-48,96,96);ctx.fill();ctx.strokeStyle='rgba(255,255,255,.4)';ctx.lineWidth=1.5;ctx.stroke();
        txt('Revenue',cx,cy-8,13,700,'#fff','center');txt('system',cx,cy+9,13,700,'#fff','center');
        var ST=['Generate','Route','Close'],ph=(t/1.3)%3;
        cap('ONE SYSTEM',45,462);
        for(i=0;i<3;i++){chip(45+i*180,482,150,40,ST[i],turn(ph,i));
          if(i<2){var ax=45+i*180+156;ctx.beginPath();ctx.moveTo(ax,502);ctx.lineTo(ax+18,502);ctx.moveTo(ax+12,497);ctx.lineTo(ax+18,502);ctx.lineTo(ax+12,507);ctx.strokeStyle='rgba(39,170,225,.7)';ctx.lineWidth=1.5;ctx.stroke()}}
      },
      cmo:function(t){
        var y=panel(40,36,520,244,'ONE OPERATOR',t,0),N=['Strategy','Hiring','Vendors','Board reporting','Execution'],i;
        person(88,y+80,28,brand(60,y+52,56,56),'rgba(255,255,255,.35)');
        bar(132,y+66,170,8,'rgba(255,255,255,.86)');bar(132,y+86,110,5,'rgba(255,255,255,.3)');
        txt('10 to 25 hrs a week',542,y+78,12.5,600,SKY,'right');
        for(i=0;i<5;i++){var d=seq(t,10,5,i);if(i<3)chip(58+i*164,y+130,156,36,N[i],d);else chip(58+(i-3)*246,y+178,238,36,N[i],d)}
        var y2=panel(40,304,520,256,'90-DAY EMBED',t,2),D=['Days 1 to 30','Days 31 to 60','Days 61 to 90'],u=(t%10)/2.2,fd=es((4.4-u)/.4);
        for(i=0;i<3;i++){var ry=y2+78+i*60,p=es(u-i)*fd;
          txt(D[i],58,ry,12.5,500,'rgba(255,255,255,'+(.55+.4*p)+')');
          bar(190,ry-4,310,8,'rgba(255,255,255,.1)');if(p>.01)bar(190,ry-4,310*p,8,SKY);
          tick(526,ry,9,es((p-.9)/.1))}
      },
      hosting:function(t){
        var y=panel(40,36,520,220,'UPTIME',t,0),x,i;
        ctx.save();rr(58,y+46,484,122,8);ctx.fillStyle='rgba(255,255,255,.04)';ctx.fill();ctx.clip();
        ctx.beginPath();
        for(x=58;x<=542;x+=3){var p=((x+t*70)%130)/130,v=4*Math.sin(x*.07-t*2);
          if(p<.08)v-=42*Math.sin(p/.08*Math.PI);else if(p<.16)v+=20*Math.sin((p-.08)/.08*Math.PI);
          if(x==58)ctx.moveTo(x,y+114+v);else ctx.lineTo(x,y+114+v)}
        ctx.strokeStyle=SKY;ctx.lineWidth=2;ctx.lineJoin='round';ctx.stroke();ctx.restore();
        glow(66,y+194,9,.6);dot(66,y+194,4,SKY);txt('All systems normal',80,y+194.5,12.5,500,'rgba(255,255,255,.8)');txt('Monitored 24/7',542,y+194.5,12.5,600,SKY,'right');
        var y2=panel(40,280,236,280,'SPEED',t,2),u=t%9,pr=es(u/3)*es((9-u)/.8);
        gauge(158,y2+136,56,pr);txt('Performance score',158,y2+232,12.5,500,'rgba(255,255,255,.6)','center');
        var y3=panel(300,280,260,280,'PROTECTED',t,4),N=['Backup complete','Plugins updated','Security scan clear','Uptime check passed'];
        for(i=0;i<4;i++)row(318,y3+62+i*44,224,N[i],seq(t,9,4,i));
      },
      seo:function(t){
        var y=panel(40,36,520,270,'SEARCH',t,0),u=t%10,out=es((10-u)/.6),pos=3-3*es((u-1.5)/4)*out,k,i;
        rr(58,y+44,484,32,16);ctx.fillStyle='rgba(255,255,255,.07)';ctx.fill();
        ctx.beginPath();ctx.arc(78,y+59,6,0,6.2832);ctx.moveTo(82.5,y+63.5);ctx.lineTo(87,y+68);ctx.strokeStyle='rgba(255,255,255,.5)';ctx.lineWidth=1.5;ctx.stroke();
        bar(98,y+57,200,6,'rgba(255,255,255,.5)');
        for(k=0;k<3;k++){var ry=y+88+(k+es(k-pos+1))*44;rr(58,ry,484,36,8);ctx.fillStyle='rgba(255,255,255,.04)';ctx.fill();
          bar(96,ry+11,[220,180,250][k],5,'rgba(255,255,255,.3)');bar(96,ry+22,[300,260,200][k],4,'rgba(255,255,255,.14)')}
        var hy=y+88+pos*44;
        ctx.save();ctx.shadowColor='rgba(39,170,225,.6)';ctx.shadowBlur=blur(18);rr(58,hy,484,36,8);ctx.fillStyle='rgb(22,48,100)';ctx.fill();ctx.restore();
        ctx.strokeStyle=SKY;ctx.lineWidth=1;ctx.stroke();
        txt('#'+(Math.round(pos)+1),77,hy+18.5,13,700,SKY,'center');txt('Your page',98,hy+18.5,13,600,'#fff');
        if(pos<.08){dot(522,hy+18,8,SKY);check(522,hy+18,8,es((u-5.6)/.4))}
        var y2=panel(40,330,300,230,'AI ANSWER',t,2);
        typing(58,y2+56,264,[.95,.85,.9,.6],es((u-1)/4),out);
        cap('SOURCE',58,y2+148);row(58,y2+164,264,'Cites your page',es((u-5.5)/.6)*out);
        var y3=panel(364,330,196,230,'PIPELINE',t,4);
        spark(382,y3+58,160,112,[.05,.08,.1,.14,.2,.27,.37,.5,.68,.95],es(u/5.5),out);
        txt('From search',382,y3+200,12.5,500,'rgba(255,255,255,.6)');
      },
      web:function(t){
        var y=panel(40,36,520,330,'BUILD',t,0),bx=58,by=y+46,bw=484,bh=266,i,k;
        rr(bx,by,bw,bh,8);ctx.fillStyle='rgba(255,255,255,.05)';ctx.fill();ctx.strokeStyle='rgba(255,255,255,.1)';ctx.lineWidth=1;ctx.stroke();
        for(i=0;i<3;i++)dot(bx+12+i*9,by+11,2.5,'rgba(255,255,255,.28)');
        rr(bx+44,by+5,bw-56,12,6);ctx.fillStyle='rgba(255,255,255,.07)';ctx.fill();ctx.fillStyle='rgba(255,255,255,.08)';ctx.fillRect(bx,by+22,bw,1);
        function blk(x,yy,w,h,n,fill){var d=seq(t,11,5,n);
          if(d<1){ctx.setLineDash([4,4]);rr(x,yy,w,h,5);ctx.strokeStyle='rgba(255,255,255,.22)';ctx.lineWidth=1;ctx.stroke();ctx.setLineDash([])}
          if(d>0){ctx.globalAlpha=d;rr(x,yy,w,h,5);ctx.fillStyle=fill;ctx.fill();ctx.globalAlpha=1}}
        blk(bx+14,by+34,bw-28,16,0,'rgba(255,255,255,.14)');
        blk(bx+14,by+64,230,14,1,'rgba(255,255,255,.86)');blk(bx+14,by+86,180,14,1,'rgba(255,255,255,.86)');blk(bx+14,by+112,200,8,1,'rgba(255,255,255,.3)');
        blk(bx+14,by+136,90,26,2,SKY);
        blk(bx+270,by+64,200,98,3,brand(bx+270,by+64,200,98));
        for(k=0;k<3;k++)blk(bx+14+k*154,by+182,148,66,4,'rgba(255,255,255,.1)');
        var y2=panel(40,390,250,170,'SPEED',t,2),u=t%11,out=es((11-u)/.6),pr=es((u-5)/3)*out;
        gauge(104,y2+100,40,pr);
        for(i=0;i<3;i++){txt(['LCP','INP','CLS'][i],164,y2+78+i*22,10.5,600,DIM);bar(196,y2+76+i*22,76,4,'rgba(255,255,255,.1)');bar(196,y2+76+i*22,76*(.3+[.62,.5,.66][i]*pr),4,SKY)}
        var y3=panel(310,390,250,170,'CRM',t,4),d=es((u-7.5)/.6)*out;
        rr(328,y3+50,214,46,9);ctx.fillStyle='rgba(255,255,255,.05)';ctx.fill();if(d>0){ctx.fillStyle='rgba(39,170,225,'+(.18*d)+')';ctx.fill()}
        ctx.globalAlpha=.35+.65*d;person(352,y3+73,12,'#2B3990','rgba(255,255,255,.3)');ctx.globalAlpha=1;
        txt('New lead',374,y3+66,12.5,600,'rgba(255,255,255,'+(.45+.55*d)+')');bar(374,y3+80,90,4,'rgba(255,255,255,.26)');tick(522,y3+73,8,d);
        txt('Synced from the site form',328,y3+126,12,500,'rgba(255,255,255,.5)');
      },
      enablement:function(t){
        var TX=[70,140,215,300,385,460,530],TY=[84,62,90,66,88,60,82],GC=[SKY,LAV,'#FFFFFF'],N=['Policy set','Access approved','Human review'],i;
        cap('YOUR TOOLS',40,28);
        var gy=panel(150,182,300,160,'GOVERNANCE',t,1);
        for(i=0;i<7;i++){var x=TX[i],y=TY[i]+Math.sin(t*.9+i)*4;link(x,y+18,190+i*37,gy,t,i*.14);
          rr(x-18,y-18,36,36,9);ctx.fillStyle='rgba(15,14,50,.92)';ctx.fill();ctx.strokeStyle='rgba(255,255,255,.22)';ctx.lineWidth=1;ctx.stroke();
          ctx.fillStyle=GC[i%3];ctx.globalAlpha=.85;
          if(i%3==0){ctx.beginPath();ctx.arc(x,y,7,0,6.2832);ctx.fill()}else if(i%3==1){ctx.fillRect(x-6,y-6,12,12)}else{ctx.fillRect(x-8,y-6,16,4);ctx.fillRect(x-8,y+2,10,4)}
          ctx.globalAlpha=1}
        for(i=0;i<3;i++)row(168,gy+46+i*36,264,N[i],seq(t,9,3,i));
        var wy=panel(40,378,520,182,'AUTOMATED WORKFLOW',t,3);
        link(300,gy+160,300,wy,t,.5);
        var ST=['Brief','Draft','Review','Ship'],ph=(t/1.1)%4;
        for(i=0;i<4;i++)chip(58+i*124,wy+48,112,36,ST[i],turn(ph,i));
        cap('SHIPPED',58,wy+110);
        var n=Math.floor((t%12)/12*18);
        for(i=0;i<16;i++){rr(58+i*30.5,wy+126,24,30,5);ctx.fillStyle=i<n?SKY:'rgba(255,255,255,.07)';ctx.globalAlpha=i<n?.85:1;ctx.fill();ctx.globalAlpha=1}
      },
      agents:function(t){
        var y=panel(40,36,330,330,'SALES AGENT',t,0),STS=['Researching','Writing','Sent','Replied'],i,k;
        for(i=0;i<5;i++){var ry=y+48+i*54,s=Math.floor(t/1.5+i*1.3)%4,hot=s==3;
          rr(58,ry,294,44,9);ctx.fillStyle=hot?'rgba(39,170,225,.2)':'rgba(255,255,255,.05)';ctx.fill();
          if(hot){ctx.strokeStyle='rgba(39,170,225,.85)';ctx.lineWidth=1;ctx.stroke()}
          person(80,ry+22,12,'#2B3990','rgba(255,255,255,.3)');
          bar(102,ry+15,90*[.9,.7,1,.8,.6][i],6,'rgba(255,255,255,.82)');bar(102,ry+28,60,4,'rgba(255,255,255,.26)');
          txt(STS[s],340,ry+22.5,12,600,hot?'#fff':s==2?SKY:DIM,'right')}
        var y2=panel(394,36,166,152,'ALWAYS ON',t,2),a=t*.8;
        ctx.lineWidth=5;ctx.lineCap='round';ctx.strokeStyle='rgba(255,255,255,.1)';ctx.beginPath();ctx.arc(477,y2+94,36,0,6.2832);ctx.stroke();
        ctx.strokeStyle=SKY;ctx.beginPath();ctx.arc(477,y2+94,36,a,a+1.7);ctx.stroke();glow(477+Math.cos(a+1.7)*36,y2+94+Math.sin(a+1.7)*36,11,.8);
        txt('24/7',477,y2+95,15,700,'#fff','center');
        var y3=panel(394,212,166,154,'OUTREACH',t,4),u=t%6,fd=es((6-u)/.5),d=es((u-3.4)/.5)*fd;
        typing(412,y3+56,130,[.95,.8,.55],es(u/3),fd);
        if(d>0){ctx.globalAlpha=d;dot(532,y3+126,8,SKY);check(532,y3+126,8,d);txt('Sent',518,y3+126.5,12.5,600,'#fff','right');ctx.globalAlpha=1}
        var y4=panel(40,390,520,170,'MEETINGS BOOKED',t,3),DN=['Mon','Tue','Wed','Thu','Fri'],OR=[2,7,0,5,8,3];
        for(i=0;i<5;i++){txt(DN[i],104+i*98,y4+56,11.5,600,DIM,'center');
          for(k=0;k<2;k++){var ix=OR.indexOf(i*2+k),bd=ix<0?0:seq(t,12,6,ix);
            rr(58+i*98,y4+70+k*40,92,32,7);ctx.fillStyle='rgba(255,255,255,.05)';ctx.fill();
            if(bd>0){ctx.fillStyle='rgba(39,170,225,'+(.7*bd)+')';ctx.fill();check(104+i*98,y4+86+k*40,9,bd)}}}
      }
    };
    var run=SC[scene]||SC.strategy;

    function bg(t){
      var g=ctx.createLinearGradient(0,0,W,H);g.addColorStop(0,'#0C0B2A');g.addColorStop(.55,'#1A1950');g.addColorStop(1,'#262466');
      ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
      var rg=ctx.createRadialGradient(W*.5,H*.45,0,W*.5,H*.45,Math.max(W,H)*.55);
      rg.addColorStop(0,'rgba(43,57,144,.75)');rg.addColorStop(1,'rgba(43,57,144,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);
      ctx.globalCompositeOperation='lighter';
      var BM=[[.35,.22,.15,.2,0],[.8,.14,.2,.15,2],[1.15,.12,.18,.24,4]], sk=H*.6;
      for(var i=0;i<BM.length;i++){var b=BM[i],bx=(b[0]+.035*Math.sin(t*b[3]+b[4]))*W,bw=b[1]*W;
        var lg=ctx.createLinearGradient(bx,0,bx+bw,0);lg.addColorStop(0,'rgba(39,170,225,0)');lg.addColorStop(.85,'rgba(39,170,225,'+b[2]*(.7+.3*Math.sin(t*.4+i))+')');lg.addColorStop(1,'rgba(160,225,255,0)');
        ctx.fillStyle=lg;ctx.beginPath();ctx.moveTo(bx,0);ctx.lineTo(bx+bw,0);ctx.lineTo(bx+bw-sk,H);ctx.lineTo(bx-sk,H);ctx.closePath();ctx.fill()}
      ctx.globalCompositeOperation='source-over';
      var sp=28*S; if(sp>=10){ctx.fillStyle='rgba(255,255,255,.07)';for(var x=sp/2;x<W;x+=sp)for(var y=sp/2;y<H;y+=sp)ctx.fillRect(x,y,1,1)}
    }
    function draw(t){
      if(!W||!H) return;
      ctx.setTransform(dpr,0,0,dpr,0,0);bg(t);
      ctx.setTransform(dpr*S,0,0,dpr*S,ox*dpr,oy*dpr);
      run(t);
    }
    function resize(){
      var r=root.getBoundingClientRect(); W=r.width; H=r.height; if(!W||!H) return;
      dpr=Math.min(window.devicePixelRatio||1,2);
      cv.width=Math.round(W*dpr); cv.height=Math.round(H*dpr);
      S=Math.min(W/V,H/V); ox=(W-V*S)/2; oy=(H-V*S)/2;
      if(reduce||!raf) draw(reduce?6.6:performance.now()/1000);
    }
    function loop(now){draw(now/1000);raf=requestAnimationFrame(loop)}
    function sync(){var on=visible&&!document.hidden&&!reduce;if(on&&!raf)raf=requestAnimationFrame(loop);else if(!on&&raf){cancelAnimationFrame(raf);raf=0}}

    var ro=null,io=null;
    if('ResizeObserver' in window){ro=new ResizeObserver(resize);ro.observe(root)} else window.addEventListener('resize',resize);
    if('IntersectionObserver' in window){io=new IntersectionObserver(function(e){visible=e[0].isIntersecting;sync()});io.observe(root)}
    document.addEventListener('visibilitychange',sync);
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){if(reduce)draw(6.6)});
    resize();sync();
    // @end

    return () => {
      if(raf)cancelAnimationFrame(raf);raf=0;
      if(ro)ro.disconnect(); else window.removeEventListener('resize',resize);
      if(io)io.disconnect();
      document.removeEventListener('visibilitychange',sync);
    };
  }, [scene]);

  return (
    <div ref={rootRef} className={`relative h-full w-full bg-[#12113A] ${className}`}>
      <canvas ref={canvasRef} role="img" aria-label="Animated illustration of the service" className="absolute inset-0 block h-full w-full" />
    </div>
  );
}
