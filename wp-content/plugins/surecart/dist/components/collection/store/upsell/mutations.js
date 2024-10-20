import{addQueryArgs}from"@wordpress/url";import apiFetch from"../../functions/fetch";import{state}from"./store";import{state as productState}from"../product";import{createErrorNotice,removeNotice}from"@store/notices/mutations";import{__}from"@wordpress/i18n";export const trackOffer=()=>{var e;return apiFetch({path:`surecart/v1/checkouts/${state.checkout_id}/offer_upsell/${null===(e=state.upsell)||void 0===e?void 0:e.id}`,method:"POST",keepalive:!0})};export const preview=async()=>{try{if(!state.checkout_id||"busy"===state.loading)return;state.loading="busy",removeNotice();const{checkout:e,...t}=await upsellRequest({preview:!0});state.checkout=e,state.line_item=t}catch(e){if(console.error(e),((null==e?void 0:e.additional_errors)||[]).find((e=>{var t,o,i;return null===(i=null===(o=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.options)||void 0===o?void 0:o.purchasable_statuses)||void 0===i?void 0:i.includes("out_of_stock")})))return createErrorNotice({code:"out_of_stock",message:__("Apologies, this is currently out of stock.","surecart")});if(((null==e?void 0:e.additional_errors)||[]).find((e=>"line_item.upsell.expired"===(null==e?void 0:e.code))))return state.loading="idle",createErrorNotice({code:"expired",message:__("This offer has expired.","surecart")}),decline();createErrorNotice(e)}finally{state.loading="idle"}};export const accept=async()=>{try{if(!state.checkout_id||"busy"===state.loading)return;state.loading="busy",removeNotice();const{checkout:e}=await upsellRequest({preview:!1});handleCompletion(e)}catch(e){state.loading="idle",createErrorNotice(e)}};export const decline=async()=>{var e,t,o,i,r,l;try{if(!state.checkout_id||"busy"===state.loading)return;state.loading="busy",removeNotice();const d=await apiFetch({path:addQueryArgs(`surecart/v1/checkouts/${state.checkout_id}/decline_upsell/${null===(e=state.upsell)||void 0===e?void 0:e.id}`,{expand:["checkout","checkout.current_upsell","fees"]}),method:"POST",data:{...null===(o=productState[null===(t=state.product)||void 0===t?void 0:t.id])||void 0===o?void 0:o.line_item,price_id:null===(r=null===(i=state.upsell)||void 0===i?void 0:i.price)||void 0===r?void 0:r.id,upsell:null===(l=state.upsell)||void 0===l?void 0:l.id,checkout:state.checkout_id}});handleCompletion(d)}catch(e){state.loading="idle",createErrorNotice(e)}};export const upsellRequest=e=>{var t,o,i,r,l;return apiFetch({path:addQueryArgs("surecart/v1/line_items/upsell",{...e,expand:["checkout","checkout.current_upsell","checkout.manual_payment_method","fees","line_item","line_item.price"]}),method:"POST",data:{...null===(o=productState[null===(t=state.product)||void 0===t?void 0:t.id])||void 0===o?void 0:o.line_item,price_id:null===(r=null===(i=state.upsell)||void 0===i?void 0:i.price)||void 0===r?void 0:r.id,upsell:null===(l=state.upsell)||void 0===l?void 0:l.id,checkout:state.checkout_id}})};export const handleCompletion=e=>{var t,o,i,r,l;if(!(null===(t=e.current_upsell)||void 0===t?void 0:t.permalink)||(null===(o=null==e?void 0:e.current_upsell)||void 0===o?void 0:o.permalink)===(null===(i=state.upsell)||void 0===i?void 0:i.permalink))return state.loading="complete";state.loading="redirecting",window.location.assign(addQueryArgs(null===(r=e.current_upsell)||void 0===r?void 0:r.permalink,{sc_checkout_id:null===(l=state.checkout)||void 0===l?void 0:l.id,sc_form_id:state.form_id}))};