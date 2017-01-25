using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TypeScriptModules.Controllers
{
    public class ModulesController : Controller
    {
        // GET: Modules
        public ActionResult internalimplicit()
        {
            return PartialView();
        }

        public ActionResult InternalModule()
        {
            return PartialView();
        }

        public ActionResult InternalAcrossFiles()
        {
            return PartialView();
        }

    }
}