export function chargeableWeight(length:number,width:number,height:number,actual:number,divisor:number){
 const values=[length,width,height,actual,divisor];
 if(values.some(v=>!Number.isFinite(v)||v<=0))return null;
 const cubicCentimetres=length*width*height;
 const volumetric=cubicCentimetres/divisor;
 if(!Number.isFinite(volumetric)||!Number.isFinite(cubicCentimetres))return null;
 return {volume:cubicCentimetres/1_000_000,volumetric,chargeable:Math.max(actual,volumetric),basis:actual>volumetric?'Actual weight':actual<volumetric?'Volumetric weight':'Equal weights'};
}
