using StockManager.Web.Framework;
using StockManager.Web.UI.Mapping;
using System.Reflection;

namespace StockManager.Web.UI
{
    public static class Bootstrapper
    {
        public static void Run()
        {
            var assembly = Assembly.GetExecutingAssembly();
            DependencyRegistrar.Register(assembly);
            AutoMapperConfiguration.Configure();
        }
    }

    
}