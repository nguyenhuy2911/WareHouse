using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StockManager.Web.UI.Controllers
{
    [RoutePrefix("dash-board")]
    public class DashBoardController : Controller
    {
        [Route("~/dash-board")]
        public ActionResult Index()
        {
            return View("~/Views/Admin/DASHBOARD/dash-board.cshtml");
        }
    }
}