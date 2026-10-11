(function(){
var f=function(n){return new Intl.NumberFormat('pt-BR',{maximumFractionDigits:4}).format(n)},
p=function(n){return new Intl.NumberFormat('pt-BR',{maximumFractionDigits:2}).format(n)+'%'};
var C={
'pct-of':function(v){var a=v[0],b=v[1],r=a/100*b;return{m:f(r),s:[p(a)+' de '+f(b),'('+f(a)+' ÷ 100) × '+f(b),'= '+f(r)]}},
'what-pct':function(v){var a=v[0],b=v[1],r=a/b*100;return{m:p(r),s:[f(a)+' ÷ '+f(b)+' = '+f(a/b),f(a/b)+' × 100 = '+p(r)]}},
'increase':function(v){var a=v[0],b=v[1],i=a*b/100,r=a+i;return{m:f(r)+' (aumento de '+f(i)+')',s:[p(b)+' de '+f(a)+' = '+f(i),f(a)+' + '+f(i)+' = '+f(r)]}},
'discount':function(v){var a=v[0],b=v[1],d=a*b/100,r=a-d;return{m:f(r)+' (economia de '+f(d)+')',s:[p(b)+' de '+f(a)+' = '+f(d),f(a)+' − '+f(d)+' = '+f(r)]}},
'change':function(v){var a=v[0],b=v[1],r=(b-a)/a*100;return{m:(r>0?'+':'')+p(r),s:[f(b)+' − '+f(a)+' = '+f(b-a),f(b-a)+' ÷ '+f(a)+' = '+f((b-a)/a),f((b-a)/a)+' × 100 = '+p(r)]}},
'total':function(v){var a=v[0],b=v[1],r=a/b*100;return{m:f(r),s:[f(a)+' ÷ '+f(b)+' = '+f(a/b),f(a/b)+' × 100 = '+f(r)]}},
'pct-of-pct':function(v){var a=v[0],b=v[1],r=a*b/100;return{m:p(r),s:[f(a)+'% ÷ 100 = '+f(a/100)+' e '+f(b)+'% ÷ 100 = '+f(b/100),f(a/100)+' × '+f(b/100)+' = '+f(a*b/10000),f(a*b/10000)+' × 100 = '+p(r)]}},
'margin':function(v){var c=v[0],pr=v[1],l=pr-c,mg=l/pr*100,mk=l/c*100;return{m:'Margem de '+p(mg)+' e markup de '+p(mk),s:['Lucro = '+f(pr)+' − '+f(c)+' = '+f(l),'Margem = '+f(l)+' ÷ '+f(pr)+' × 100 = '+p(mg),'Markup = '+f(l)+' ÷ '+f(c)+' × 100 = '+p(mk)]}},
'rule3':function(v){var a=v[0],b=v[1],c=v[2],x=b*c/a;return{m:'X = '+f(x),s:[f(a)+' → '+f(b),f(c)+' → X','X = ('+f(b)+' × '+f(c)+') ÷ '+f(a)+' = '+f(x)]}}
};
function num(s){s=s.replace(/\s/g,'').replace(/^R\$/,'');if(!s)return NaN;
if(s.indexOf(',')>-1)s=s.replace(/\./g,'').replace(',','.');
else if(/^-?\d{1,3}(\.\d{3})+$/.test(s))s=s.replace(/\./g,'');
return Number(s)}
function copy(t,b){var done=function(){var o=b.dataset.l||(b.dataset.l=b.textContent);b.textContent='Copiado!';clearTimeout(b._t);b._t=setTimeout(function(){b.textContent=o},1600)};
function fb(){var a=document.createElement('textarea');a.value=t;a.setAttribute('readonly','');a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy');done()}catch(e){}document.body.removeChild(a)}
if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t).then(done,fb)}else fb()}
document.querySelectorAll('form[data-calc]').forEach(function(form){
var ins=form.querySelectorAll('input'),out=form.querySelector('.res'),ol=form.querySelector('.steps ol'),fn=C[form.dataset.calc],cp=form.querySelector('[data-act=copy]');
out.className='res idle';
function run(){var v=[].map.call(ins,function(i){return num(i.value)});
ol.textContent='';cp.disabled=true;
if(v.some(isNaN)){out.className='res idle';out.textContent='Preencha os campos para ver o resultado.';return}
var r=fn(v);
if(/∞|NaN/.test(r.m)){out.className='res err';out.textContent='Verifique os valores: não é possível dividir por zero.';return}
out.className='res';out.textContent=r.m;cp.disabled=false;
r.s.forEach(function(t){var li=document.createElement('li');li.textContent=t;ol.appendChild(li)})}
form.addEventListener('input',run);
form.addEventListener('click',function(e){var b=e.target.closest('[data-act]');if(!b)return;var a=b.dataset.act;
if(a==='ex'){var x=b.dataset.ex.split('|');ins.forEach(function(i,k){i.value=x[k]||''});run()}
else if(a==='reset'){ins.forEach(function(i){i.value=''});run();ins[0].focus()}
else if(a==='copy'&&!b.disabled){copy(out.textContent,b)}});
form.addEventListener('submit',function(e){e.preventDefault()})});
var chips=document.querySelectorAll('[data-show]');
function show(id){chips.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.show===id)});
document.querySelectorAll('form[data-calc]').forEach(function(fm){fm.hidden=fm.dataset.calc!==id})}
chips.forEach(function(b){b.addEventListener('click',function(){show(b.dataset.show)})});
var h=location.hash.match(/^#calc-(.+)$/);if(h&&chips.length)show(h[1]);
})();
