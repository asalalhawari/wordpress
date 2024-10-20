import{r as t,h as i,F as e,a as s}from"./p-cc7ce8c7.js";import{a as n}from"./p-18e45a13.js";import{o}from"./p-c2833cb1.js";import{p as r}from"./p-50da3ba3.js";import{a as c}from"./p-1c2e2695.js";import"./p-7ef0f71c.js";const a=":host{display:block}.subscription{display:grid;gap:0.5em}.subscription a{text-decoration:none;font-weight:var(--sc-font-weight-semibold);display:inline-flex;align-items:center;gap:0.25em;color:var(--sc-color-primary-500)}.subscription a.cancel{color:var(--sc-color-danger-500)}@media screen and (max-width: 720px){.subscription__action-buttons{--sc-flex-column-gap:var(--sc-spacing-xxx-small)}.subscription__action-buttons::part(base){flex-direction:column}.subscription__action-buttons sc-button::part(base){width:auto;height:2em}}";const d=class{constructor(i){t(this,i);this.subscriptionId=undefined;this.showCancel=undefined;this.heading=undefined;this.query=undefined;this.protocol=undefined;this.subscription=undefined;this.updatePaymentMethodUrl=undefined;this.loading=undefined;this.cancelModal=undefined;this.resubscribeModal=undefined;this.busy=undefined;this.error=undefined}componentWillLoad(){o(this.el,(()=>{if(!this.subscription){this.getSubscription()}}))}async cancelPendingUpdate(){var t;const i=confirm(wp.i18n.__("Are you sure you want to cancel the pending update to your plan?","surecart"));if(!i)return;try{this.busy=true;this.subscription=await n({path:c(`surecart/v1/subscriptions/${(t=this.subscription)===null||t===void 0?void 0:t.id}/`,{expand:["price","price.product","current_period","period.checkout","purchase","purchase.license","license.activations","discount","discount.coupon"]}),method:"PATCH",data:{purge_pending_update:true}})}catch(t){if(t===null||t===void 0?void 0:t.message){this.error=t.message}else{this.error=wp.i18n.__("Something went wrong","surecart")}console.error(this.error)}finally{this.busy=false}}async renewSubscription(){var t;try{this.error="";this.busy=true;this.subscription=await n({path:c(`surecart/v1/subscriptions/${(t=this.subscription)===null||t===void 0?void 0:t.id}/renew`,{expand:["price","price.product","current_period","period.checkout","purchase","purchase.license","license.activations","discount","discount.coupon"]}),method:"PATCH"})}catch(t){this.error=(t===null||t===void 0?void 0:t.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.busy=false}}async getSubscription(){var t;try{this.loading=true;this.subscription=await await n({path:c(`surecart/v1/subscriptions/${this.subscriptionId||((t=this.subscription)===null||t===void 0?void 0:t.id)}`,{expand:["price","price.product","current_period"],...this.query||{}})})}catch(t){if(t===null||t===void 0?void 0:t.message){this.error=t.message}else{this.error=wp.i18n.__("Something went wrong","surecart")}console.error(this.error)}finally{this.loading=false}}renderName(t){var i;if(typeof((i=t===null||t===void 0?void 0:t.price)===null||i===void 0?void 0:i.product)!=="string"){return r(t===null||t===void 0?void 0:t.price)}return wp.i18n.__("Subscription","surecart")}renderRenewalText(t){const e=i("sc-subscription-status-badge",{subscription:t});if((t===null||t===void 0?void 0:t.cancel_at_period_end)&&t.current_period_end_at){return i("span",null,e," ",wp.i18n.sprintf(wp.i18n.__("Your plan will be canceled on","surecart"))," ",i("sc-format-date",{date:t.current_period_end_at*1e3,month:"long",day:"numeric",year:"numeric"}))}if(t.status==="trialing"&&t.trial_end_at){return i("span",null,e," ",wp.i18n.sprintf(wp.i18n.__("Your plan begins on","surecart"))," ",i("sc-format-date",{date:t.trial_end_at*1e3,month:"long",day:"numeric",year:"numeric"}))}if(t.status==="active"&&t.current_period_end_at){return i("span",null,e," ",wp.i18n.sprintf(wp.i18n.__("Your plan renews on","surecart"))," ",i("sc-format-date",{date:t.current_period_end_at*1e3,month:"long",day:"numeric",year:"numeric"}))}return e}renderEmpty(){return i("slot",{name:"empty"},wp.i18n.__("This subscription does not exist.","surecart"))}renderLoading(){return i("sc-stacked-list-row",{style:{"--columns":"2"},"mobile-size":0},i("div",{style:{padding:"0.5em"}},i("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),i("sc-skeleton",{style:{width:"20%",marginBottom:"0.75em"}}),i("sc-skeleton",{style:{width:"40%"}})))}renderContent(){if(this.loading){return this.renderLoading()}if(!this.subscription){return this.renderEmpty()}return i(e,null,i("sc-subscription-next-payment",{subscription:this.subscription,updatePaymentMethodUrl:this.updatePaymentMethodUrl},i("sc-subscription-details",{subscription:this.subscription})))}render(){var t,e,s,n,o,r,a;const d=(this===null||this===void 0?void 0:this.subscription.payment_method)||(this===null||this===void 0?void 0:this.subscription.manual_payment);return i("sc-dashboard-module",{heading:this.heading||wp.i18n.__("Current Plan","surecart"),class:"subscription",error:this.error},!!this.subscription&&i("sc-flex",{slot:"end",class:"subscription__action-buttons"},this.updatePaymentMethodUrl&&d&&i("sc-button",{type:"link",href:this.updatePaymentMethodUrl},i("sc-icon",{name:"credit-card",slot:"prefix"}),wp.i18n.__("Update Payment Method","surecart")),!d&&i("sc-button",{type:"link",href:c(window.location.href,{action:"create",model:"payment_method",id:this===null||this===void 0?void 0:this.subscription.id,...((t=this===null||this===void 0?void 0:this.subscription)===null||t===void 0?void 0:t.live_mode)===false?{live_mode:false}:{}})},i("sc-icon",{name:"credit-card",slot:"prefix"}),wp.i18n.__("Add Payment Method","surecart")),!!Object.keys((e=this.subscription)===null||e===void 0?void 0:e.pending_update).length&&i("sc-button",{type:"link",onClick:()=>this.cancelPendingUpdate()},i("sc-icon",{name:"x-octagon",slot:"prefix"}),wp.i18n.__("Cancel Scheduled Update","surecart")),((s=this===null||this===void 0?void 0:this.subscription)===null||s===void 0?void 0:s.cancel_at_period_end)?i("sc-button",{type:"link",onClick:()=>this.renewSubscription()},i("sc-icon",{name:"repeat",slot:"prefix"}),wp.i18n.__("Restore Plan","surecart")):((n=this.subscription)===null||n===void 0?void 0:n.status)!=="canceled"&&((o=this.subscription)===null||o===void 0?void 0:o.current_period_end_at)&&this.showCancel&&i("sc-button",{type:"link",onClick:()=>this.cancelModal=true},i("sc-icon",{name:"x",slot:"prefix"}),wp.i18n.__("Cancel Plan","surecart")),((r=this.subscription)===null||r===void 0?void 0:r.status)==="canceled"&&i("sc-button",{type:"link",...!!((a=this.subscription)===null||a===void 0?void 0:a.payment_method)?{onClick:()=>this.resubscribeModal=true}:{href:this===null||this===void 0?void 0:this.updatePaymentMethodUrl}},i("sc-icon",{name:"repeat",slot:"prefix"}),wp.i18n.__("Resubscribe","surecart"))),i("sc-card",{style:{"--overflow":"hidden"},noPadding:true},this.renderContent()),this.busy&&i("sc-block-ui",{spinner:true}),i("sc-cancel-dialog",{subscription:this.subscription,protocol:this.protocol,open:this.cancelModal,onScRequestClose:()=>this.cancelModal=false,onScRefresh:()=>this.getSubscription()}),i("sc-subscription-reactivate",{subscription:this.subscription,open:this.resubscribeModal,onScRequestClose:()=>this.resubscribeModal=false,onScRefresh:()=>this.getSubscription()}))}get el(){return s(this)}};d.style=a;export{d as sc_subscription};
//# sourceMappingURL=p-4ff0be67.entry.js.map