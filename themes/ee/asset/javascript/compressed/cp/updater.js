/*!
 * This source file is part of the open source project
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */
var Updater={init:function(){this._lastStep=$(".box.updating .updater-step-work").text(),this._updaterInPlace=!1;var e=this;$(".toggle").on("click",function(e){e.preventDefault();var t=$(this).attr("rel");$("."+t).toggle()}),$("a[rel=rollback]").on("click",function(t){t.preventDefault(),e.runStep("rollback")}),$("body").on("click","a[data-post-url]",function(e){e.preventDefault();var t=$("<form/>",{action:$(this).data("postUrl"),method:"post"});t.append($("<input/>",{name:"csrf_token",value:EE.CSRF_TOKEN})),t.appendTo("body").submit()})},runStep:function(e){if(void 0!==e){$(".box.updating").removeClass("hidden"),$(".box.updater-stopped").addClass("hidden");var t=this,a=EE.BASE+"&C=updater&M=run&step="+e;$.ajax({type:"POST",url:a,dataType:"json",headers:{"X-CSRF-TOKEN":EE.CSRF_TOKEN},success:function(e){"success"==e.messageType?void 0!==e.nextStep&&e.nextStep!==!1?(t._updateStatus(e.message),t.runStep(e.nextStep),t._updaterInPlace||"updateFiles"!=e.nextStep||(t._updaterInPlace=!0)):window.location=EE.BASE:t._showError(e)},error:function(e){if(error=e.responseJSON,void 0===error)try{error=JSON.parse(e.responseText)}catch(a){error={messageType:"error",message:e.responseText,trace:[]}}t._showError(error)}})}},_updateStatus:function(e){var t=$(".updater-steps"),a="updater-step-work",s="updater-step-pass",r=$("."+a,t);if(r.text().indexOf(e)===-1&&""!=e){r.removeClass(a).addClass(s).find("span").remove();var n=$("<li/>",{"class":a}).html(e+"<span>...</span>");this._lastStep=e,t.append(n)}},_showError:function(e,t){$(".box.updating").addClass("hidden");var a=$(".box.updater-stopped"),t=this._updaterInPlace?"issue":"warn",s=$(".updater-fade",a),r=$(".updater-stack-trace",a),n=void 0!==e.trace&&e.trace.length>0,o=e.message.replace(/(?:\r\n|\r|\n)/g,"<br />");if(a.addClass(t).removeClass("hidden").find(".alert-notice p").html(o),$("p[class$=-choices]").addClass("hidden"),$("p."+t+"-choices").removeClass("hidden"),n){for(var d=$("<ul/>"),p=0;p<e.trace.length;p++)d.append($("<li/>").text(e.trace[p]));r.append(d)}s.toggleClass("hidden",!n),r.toggleClass("hidden",!n),$(".stopped",a).html(EE.lang.we_stopped_on.replace("%s",this._lastStep))},_showSuccess:function(){$(".box").addClass("hidden"),$(".box.success").removeClass("hidden")}};