using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TypeScriptModules.Startup))]
namespace TypeScriptModules
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
