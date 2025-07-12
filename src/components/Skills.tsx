import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const technicalSkills = [
  { name: "Microsoft Office Suite", level: 95 },
  { name: "Google Workspace", level: 90 },
  { name: "Project Management Tools", level: 85 },
  { name: "CRM Systems", level: 80 },
  { name: "Social Media Platforms", level: 90 },
  { name: "Email Marketing Tools", level: 87 }
];

const softSkills = [
  { name: "Communication", level: 98 },
  { name: "Time Management", level: 95 },
  { name: "Problem Solving", level: 90 },
  { name: "Attention to Detail", level: 96 },
  { name: "Multitasking", level: 88 },
  { name: "Adaptability", level: 92 }
];

const tools = [
  "Slack", "Trello", "Asana", "Zoom", "Calendly", "Mailchimp",
  "Canva", "HubSpot", "Salesforce", "QuickBooks", "Shopify", "WordPress"
];

const certifications = [
    {
        title: "Virtual Assistant Masterclass",
        source: "Udemy"
    },
    {
        title: "Project Management Essentials",
        source: "Project Management Institute"
    },
    {
        title: "Google Workspace Productivity",
        source: "Coursera"
    }
];

const Skills = () => {
  const skillSections = [
    { title: "Technical Skills", skills: technicalSkills },
    { title: "Soft Skills", skills: softSkills }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-12 bg-white/55">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           A comprehensive skill set developed through years of experience helping businesses achieve their goals efficiently and effectively.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillSections.map((section, i) => (
            <Card
              key={i}
              className="rounded-2xl border border-gray-200 bg-white/10 shadow-sm hover:shadow-md transition-all"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {section.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-gray-700">
                      <span>{skill.name}</span>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 rounded-full bg-gray-200" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools */}
        <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm mb-16">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-center text-gray-800">
              Tools & Platforms I Work With
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-200 transition-all"
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Certifications & Training</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-all"
              >
                <h4 className="font-semibold text-gray-800 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm">{cert.source}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
