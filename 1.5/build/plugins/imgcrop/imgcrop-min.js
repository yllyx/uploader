/*!build time : 2013-10-17 4:57:58 PM*/
KISSY.add("gallery/uploader/1.5/plugins/imgcrop/imgcrop",function(a,b,c,d){function e(a){var b=this;e.superclass.constructor.call(b,a),b.set("config",a)}var f=b.all;return a.extend(e,c,{pluginInitializer:function(a){if(!a)return!1;var b=this,c=b.get("config"),e=new d(c);b.set("crop",e),a.on("success",b._successHandler,b),a.on("select",b._selectHandler,b),e.on("imgload",function(){b.set("isRender",!0)})},_successHandler:function(a){var b=this,c=b.get("crop"),d=a.file,e=d.id,g=a.result.url;c.set("url",g);var h=".J_CropArea_"+e,i=f(h);return i.length?(c.set("areaEl",h),c.container=i,c.set("areaWidth",i.width()),c.set("areaHeight",i.height()),c.render(),void 0):!1},_selectHandler:function(){var a=this,b=a.get("isRender"),c=a.get("crop");return b?(c.destroy(),void 0):!1}},{ATTRS:{pluginId:{value:"imgcrop"},isRender:{value:!1},config:{value:{}}}}),e},{requires:["node","base","gallery/imgcrop/2.1/index"]});