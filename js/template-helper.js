var TemplateHelper = (function() {

  function getTemplate(templatePath) {

    var template;
    
    $.ajax({
      url: templatePath,
        async:false,
        success: function(data) {
          template = data;
        },
          error: function (xhr, ajaxOptions, thrownError) {
            template = null;
          }
     });

    return template;
  }

  function getTemplatePath(fileName) {

    var _templatesDir = 'js/templates/';
    var _templateExt = '.handlebars';

    return templatePath = _templatesDir + fileName + _templateExt;
  }

  return {
    loadTemplate : function(name) {
      var templatePath = getTemplatePath(name);
      var template = getTemplate(templatePath);

      if (!template) {
        throw new Error("Template " + name + " not found!");
        return null;
      }
        
      // use uncompiled template
      return Handlebars.compile(template);
    },
  };
}());