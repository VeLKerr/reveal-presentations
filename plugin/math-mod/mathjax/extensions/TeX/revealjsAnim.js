/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  Implements the \aname macros for reveal.js animation capabilities
 *
 *
  */

MathJax.Extension["TeX/HTML"] = {
  version: "2.5.0"
};

MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {

  var TEX = MathJax.InputJax.TeX;
  var TEXDEF = TEX.Definitions;

  TEXDEF.Add({
    macros: {
      aname:   'addRevealJSAnimationAttribute'
    }
  },null,true);

  TEX.Parse.Augment({
    //
    //  Implements \aname{name}{math}
    //
    addRevealJSAnimationAttribute: /*function (params) {
      var name  = this.GetArgument(params),
          arg = this.GetArgumentMML(params);
      this.Push(arg.With({'action':name}));
      alert(name)
    }*/
    function(name) {
      var arg = this.ParseArg(name), tip = this.ParseArg(name);
      this.Push(MML.maction(arg).With({actiontype: name}));
    },

    //
    //  returns an argument that is a single MathML element
    //  (in an mrow if necessary)
    //
    GetArgumentMML: function (name) {
      var arg = this.ParseArg(name);
      if (arg.inferred && arg.data.length == 1)
        {arg = arg.data[0]} else {delete arg.inferred}
      return arg;
    }

  });

  MathJax.Hub.Startup.signal.Post("TeX revealjsAnim Ready");

});

MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/revealjsAnim.js");
