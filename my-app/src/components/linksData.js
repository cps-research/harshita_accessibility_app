// linksData.js
export const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About MeitY",
      path: "/about",
      children: [
        { name: "About MeitY", path: "/about"},
        { name: "Vision & Mission", path: "/vision-mission" },
        { name: "Organization Chart", path: "/org-chart" },
        { name: "Functions of MeitY", path: "/functions" },
        { name: "Who's who", path: "/whos-who" },
        { name: "Official Language Activities", path: "/official-language" },
        { name: "Citizens' Charter", path: "/citizens-charter" },
        { name: "Vigilance & Grievances", path: "/vigilance" },
        { name: "Acts & Rules", path: "/acts-rules" },
        { name: "Policies & Guidelines", path: "/policies-guidelines" },
        { name: "Schemes & Services", path: "/schemes-services" },
        { name: "Integrated Finances", path: "/integrated-finances" },
        { name: "Performance Management", path: "/performance-management" },
        { name: "Chief Controller of Accounts", path: "/chief-controller" },
        { name: "Web Information Manager", path: "/web-info-manager" }
      ]
    },
    { name: "Groups", path: "/groups" },
    { name: "Organizations", path: "/organizations" },
    { name: "RTI", path: "/rti" },
    {
      name: "Notifications",
      path: "/tender",
      children: [
        { name: "Tender", path: "/tender" },
        { name: "Vacancies", path: "/vacancies" },
        { name: "Press Releases", path: "/press-release" },
        { name: "Office Memorandum", path: "/office-memorandum" },
        { name: "Documents & Publications / Reports", path: "/content/documents-and-publications" },
        { name: "Gazettes Notifications", path: "/content/gazettes" }
      ]
    },
    { name: "Section 69A of IT Act", path: "/section69a" }
  ];
  