// SPDX-License-Identifier: MIT
// Personal profile and portfolio data

export const profile = {
  name: "Sai Kumar Pisupati",

  roleTop: "Application Security Engineer",
  roleMid: " Product Security | DevSecOps",

  tagline: {
    en: "8+ years of experience securing applications across the SDLC — from threat modeling and secure code reviews to DevSecOps, cloud security and vulnerability management.",
    de: "Mehr als 8 Jahre Erfahrung in der Absicherung von Anwendungen über den gesamten SDLC – von Threat Modeling und Secure Code Reviews bis hin zu DevSecOps, Cloud Security und Vulnerability Management.",
  },

  links: {
    github: "https://github.com/saipisupati-appsec",
    linkedin: "https://www.linkedin.com/in/saikumarpisupati/",
    email: "mailto:balu13302@gmail.com",
  },

  about: {
          en: "Application Security Engineer with 8+ years of experience across software development, application security, Secure SDLC, DevSecOps, cloud security and vulnerability management. I specialize in threat modeling, secure design reviews, secure code reviews, SAST, DAST, SCA, security automation and risk-based vulnerability management. I work closely with engineering teams to identify and address security risks early, integrate security into CI/CD pipelines and embed practical, scalable security controls throughout the software development lifecycle.",

          de: "Application Security Engineer mit mehr als 8 Jahren Erfahrung in Softwareentwicklung, Application Security, Secure SDLC, DevSecOps, Cloud Security und Vulnerability Management. Mein Schwerpunkt liegt auf Threat Modeling, Secure Design Reviews, Secure Code Reviews, SAST, DAST, SCA, Security Automation und risikobasiertem Vulnerability Management. Ich arbeite eng mit Engineering-Teams zusammen, um Sicherheitsrisiken frühzeitig zu erkennen und zu beheben, Security in CI/CD-Pipelines zu integrieren und praxisnahe, skalierbare Sicherheitskontrollen über den gesamten Softwareentwicklungszyklus hinweg umzusetzen.",

  },
};

export const locationLabel = "Hyderabad, India";

export const languages = {
  en: [
    {
      name: "English",
      level: "Professional",
    },
  ],

  de: [
    {
      name: "Englisch",
      level: "Professionell",
    },
  ],
};

export const timeline = {
  en: [
    {
      kind: "Work",
      title: "Application Security Engineer — DAZN",
      date: "06/2023 – Present",
      text: `
- Conduct STRIDE-based threat modeling across 50+ applications, identifying risks across authentication, authorization, data flows, trust boundaries, and external integrations.
- Perform secure design reviews and secure code reviews covering API security, secrets management, logging, sensitive data handling, and WAF controls.
- Integrate SAST, SCA, GitHub Advanced Security (GHAS), and Wiz CI into CI/CD pipelines.
- Implement pre-merge security gates using Wiz and GitHub Checks, blocking high-risk PRs (CVSS >9) until remediation.
- Perform AI-driven application security testing using Nullify, including SAST, PR security checks, vulnerability validation, and exploit-based testing.
- Strengthen AWS cloud security using Wiz, identifying vulnerabilities, misconfigurations, and attack paths, and improve Helix AI security visibility through Wiz monitoring and Wiz Sensor deployment.
- Manage vulnerabilities using a risk-based approach aligned with OWASP Top 10, severity, and business impact, driving remediation with engineering teams and security researchers.
- Support AI/LLM security for Helix AI, including controlled AI access, AI-assisted developer tooling, and secure AI usage.
- Strengthen software supply-chain security using JFrog Artifactory and Xray for SCA and vulnerability scanning.
- Administer Checkmarx Dev Assist and support Security Champion programs, secure development practices, HackerOne collaboration, and ISO 27001 audit evidence.
- Environment:Wiz, Wiz Sensor, GHAS, GitHub Actions, GitHub Checks, AWS (WAF, IAM), Azure AD, Helix AI, AI/LLM Tooling, Nullify, Java, ASP.NET, C#, Python, JavaScript, Burp Suite, Checkmarx, Checkmarx Dev Assist, JFrog Artifactory, JFrog Xray, Coralogix, Jira, VS Code.
      `,
      logo: "dazn.svg",
    },

    {
      kind: "Work",
      title: "Security Engineer — Pole To Win International",
      date: "02/2022 – 05/2023",
      text: `
- Managed vulnerability remediation across 30+ applications, prioritizing risks aligned with OWASP Top 10 and supporting timely closure.
- Conducted secure code reviews and SAST for .NET and Java applications using Checkmarx and Fortify.
- Performed application security operations including vulnerability triage, risk assessment, incident analysis, remediation tracking, and reporting.
- Conducted continuous monitoring of logs, security events, and vulnerability data across 40+ applications, supporting security detection and response.
- Supported penetration testing and security fix validation, working with application teams to address identified vulnerabilities.
- Contributed to Security Champion programs and promoted secure coding awareness across development teams.
- Automated security and operational tasks using Python, improving efficiency of recurring activities.
- Environment: Checkmarx, Fortify, .NET, Java, Python, GitHub, Jira, Oracle, Bug Bar, VS Code.
      `,
      logo: "ptw.svg",
    },

    {
      kind: "Work",
      title: "Tech Operations Sr Analyst — Wells Fargo",
      date: "04/2020 – 02/2022",
      text: `
- Performed SAST across .NET, Java, and Python applications, identifying and analyzing code-level vulnerabilities.
- Triaged, validated, and prioritized vulnerability findings, coordinating remediation with development teams.
- Used Checkmarx, Fortify, and Audit Workbench to verify, track, and report security findings to stakeholders.
- Managed vulnerabilities using ThreadFix, tracking risk, mitigation plans, and remediation status.
- Collaborated with development teams to drive timely remediation and align applications with secure coding standards.
- Environment: Checkmarx, Fortify, Audit Workbench, ThreadFix, .NET, Java, Python, SQL.
      `,
      logo: "wells.svg",
    },

    {
      kind: "Work",
      title: "Jr. Engineer Development — VSoft Technologies",
      date: "03/2018 – 04/2020",
      text: `
- Developed enterprise applications using C# and ASP.NET.
- Implemented business-layer components and collaborated with 3+ teams through story-based development.
- Designed and implemented 100+ C# classes and 20+ frontend modules in ASP.NET.
- Built business modules, test cases, and client-side validation using JavaScript.
- Developed ADO.NET components for database integration with SQL Server and Oracle and integrated third-party libraries for application modules.
- Built a strong foundation in software engineering, application architecture, and secure development practices.
- Environment: ASP.NET, C#, .NET Framework 4.7/4.5, ADO.NET, JavaScript, Visual Studio, SQL Server, Oracle, Agile.
      `,
      logo: "vsoft.svg",
    },

    {
      kind: "Education",
      title: "B.Tech in Electronics & Communication Engineering — KITS",
      date: "2013 – 2017",
      text: `
- Bachelor of Technology in Electronics and Communication Engineering from KITS, affiliated with JNTU Hyderabad.
      `,
      logo: "university.svg",
    },
  ],

  de: [
    {
      kind: "Arbeit",
      title: "Application Security Engineer — DAZN",
      date: "06/2023 – Heute",
      text: `
- Durchführung von STRIDE-basiertem Threat Modeling für mehr als 50 Anwendungen mit Fokus auf Authentifizierung, Autorisierung, Datenflüsse, Trust Boundaries und externe Integrationen.
- Durchführung von Secure Design Reviews und Secure Code Reviews mit Fokus auf API Security, Secrets Management, Logging, Umgang mit sensiblen Daten und WAF Controls.
- Integration von SAST, SCA, GitHub Advanced Security (GHAS) und Wiz CI in CI/CD-Pipelines.
- Implementierung von Pre-Merge Security Gates mit Wiz und GitHub Checks zur Blockierung von High-Risk Pull Requests (CVSS >9) bis zur Behebung.
- Durchführung KI-gestützter Application-Security-Tests mit Nullify, einschließlich SAST, PR Security Checks, Vulnerability Validation und Exploit-basiertem Testing.
- Stärkung der AWS Cloud Security mit Wiz durch Identifikation von Schwachstellen, Fehlkonfigurationen und Attack Paths sowie Verbesserung der Security Visibility von Helix AI durch Wiz Monitoring und Wiz Sensor.
- Risikobasiertes Vulnerability Management auf Grundlage von OWASP Top 10, Schweregrad und Business Impact sowie Steuerung der Remediation mit Engineering-Teams und Security Researchern.
- Unterstützung der AI/LLM Security für Helix AI, einschließlich kontrolliertem AI-Zugriff, AI-gestützten Developer-Tools und sicherer AI-Nutzung.
- Stärkung der Software-Supply-Chain-Security mit JFrog Artifactory und Xray für SCA und Vulnerability Scanning.
- Administration von Checkmarx Dev Assist sowie Unterstützung von Security-Champion-Programmen, Secure Development, HackerOne-Zusammenarbeit und ISO-27001-Auditnachweisen.
- Environment: Wiz, Wiz Sensor, GHAS, GitHub Actions, GitHub Checks, AWS (WAF, IAM), Azure AD, Helix AI, AI/LLM Tooling, Nullify, Java, ASP.NET, C#, Python, JavaScript, Burp Suite, Checkmarx, Checkmarx Dev Assist, JFrog Artifactory, JFrog Xray, Coralogix, Jira, VS Code.
      `,
      logo: "dazn.svg",
    },

    {
      kind: "Arbeit",
      title: "Security Engineer — Pole To Win International",
      date: "02/2022 – 05/2023",
      text: `
- Verwaltung der Vulnerability Remediation für mehr als 30 Anwendungen mit Priorisierung nach OWASP Top 10 und Sicherheitsrisiko.
- Durchführung von Secure Code Reviews und SAST für .NET- und Java-Anwendungen mit Checkmarx und Fortify.
- Durchführung von Application Security Operations einschließlich Vulnerability Triage, Risikobewertung, Incident Analysis, Remediation Tracking und Reporting.
- Kontinuierliche Überwachung von Logs, Security Events und Vulnerability-Daten für mehr als 40 Anwendungen.
- Unterstützung bei Penetrationstests und Security-Fix-Validierung.
- Unterstützung von Security-Champion-Programmen und Förderung des Secure-Coding-Bewusstseins.
- Automatisierung von Security- und operativen Aufgaben mit Python.
- Environment: Checkmarx, Fortify, .NET, Java, Python, GitHub, Jira, Oracle, Bug Bar, VS Code.
      `,
      logo: "ptw.svg",
    },

    {
      kind: "Arbeit",
      title: "Tech Operations Sr Analyst — Wells Fargo",
      date: "04/2020 – 02/2022",
      text: `
- Durchführung von SAST für .NET-, Java- und Python-Anwendungen zur Identifikation und Analyse von Code-Schwachstellen.
- Triage, Validierung und Priorisierung von Vulnerability Findings sowie Koordination der Remediation mit Entwicklungsteams.
- Nutzung von Checkmarx, Fortify und Audit Workbench zur Verifizierung, Nachverfolgung und Berichterstattung von Security Findings.
- Verwaltung von Schwachstellen mit ThreadFix einschließlich Risiko, Mitigationsplänen und Remediation-Status.
- Zusammenarbeit mit Entwicklungsteams zur zeitnahen Behebung von Schwachstellen und Einhaltung sicherer Coding-Standards.
- Environment: Checkmarx, Fortify, Audit Workbench, ThreadFix, .NET, Java, Python, SQL.
      `,
      logo: "wells.svg",
    },

    {
      kind: "Arbeit",
      title: "Jr. Engineer Development — VSoft Technologies",
      date: "03/2018 – 04/2020",
      text: `
- Entwicklung von Enterprise-Anwendungen mit C# und ASP.NET.
- Implementierung von Business-Layer-Komponenten und Zusammenarbeit mit mehr als 3 Teams im Rahmen einer story-basierten Entwicklung.
- Entwicklung von mehr als 100 C#-Klassen und 20 Frontend-Modulen mit ASP.NET.
- Entwicklung von Business-Modulen, Testfällen und clientseitiger Validierung mit JavaScript.
- Entwicklung von ADO.NET-Komponenten für SQL Server- und Oracle-Integrationen sowie Integration von Drittanbieter-Bibliotheken.
- Aufbau einer starken Grundlage in Software Engineering, Application Architecture und Secure Development.
- Environment: ASP.NET, C#, .NET Framework 4.7/4.5, ADO.NET, JavaScript, Visual Studio, SQL Server, Oracle, Agile.
      `,
      logo: "vsoft.svg",
    },

    {
      kind: "Studium",
      title: "B.Tech Electronics & Communication Engineering — KITS",
      date: "2013 – 2017",
      text: `
- Bachelor of Technology in Electronics and Communication Engineering bei KITS, affiliiert mit JNTU Hyderabad.
      `,
      logo: "university.svg",
    },
  ],
};

export const volunteering = {
  en: [
    {
      kind: "Security",
      title: "Security Champion Program",
      date: "DAZN",
      text: `
- Supported developer security enablement through Security Champion meetups.
- Supported Checkmarx Dev Assist onboarding and secure coding awareness.
- Collaborated with engineering teams to improve secure development practices.
      `,
      logo: "dazn.svg",
    },
  ],

  de: [
    {
      kind: "Security",
      title: "Security Champion Programm",
      date: "DAZN",
      text: `
- Unterstützung der Developer Security Enablement durch Security Champion Meetups.
- Unterstützung beim Checkmarx Dev Assist Onboarding und bei Secure Coding Awareness.
- Zusammenarbeit mit Engineering-Teams zur Verbesserung sicherer Entwicklungspraktiken.
      `,
      logo: "dazn.svg",
    },
  ],
};

export const exploring = {
  en: [
    {
      icon: "🛡️",
      title: "Application Security",
      text: "Exploring practical approaches to secure software development, threat modeling, secure design, secure code review, and application security automation.",
    },

    {
      icon: "☁️",
      title: "Cloud Security",
      text: "Deepening cloud security practices across AWS and Azure, including vulnerability management, misconfiguration detection, attack-path analysis, WAF, IAM, and CI/CD security.",
    },

    {
      icon: "🤖",
      title: "AI-Assisted Security",
      text: "Exploring AI-assisted security testing and developer workflows, including AI-driven application security assessment, security automation, and faster vulnerability analysis.",
    },
  ],

  de: [
    {
      icon: "🛡️",
      title: "Application Security",
      text: "Praxisnahe Ansätze für sichere Softwareentwicklung, Threat Modeling, Secure Design, Secure Code Reviews und Application-Security-Automatisierung.",
    },

    {
      icon: "☁️",
      title: "Cloud Security",
      text: "Vertiefung von Cloud-Security-Praktiken in AWS und Azure, einschließlich Vulnerability Management, Erkennung von Fehlkonfigurationen, Attack-Path-Analyse, WAF, IAM und CI/CD-Sicherheit.",
    },

    {
      icon: "🤖",
      title: "AI-Assisted Security",
      text: "Erkundung KI-gestützter Security-Tests und Developer-Workflows, einschließlich KI-basierter Application-Security-Bewertung, Security-Automatisierung und schnellerer Schwachstellenanalyse.",
    },
  ],
};

/*
 * Skills are grouped according to the visual workflow used
 * by the SkillsWorkflow component.
 *
 * Keep the group names exactly as expected by the template:
 * core
 * automation
 * infrastructure
 * monitoring
 * dev
 */

export const skills = {
  core: [
    "Secure SDLC",
    "Secure-by-Design",
    "Threat Modeling",
    "Secure Code Reviews",
    "OWASP Top 10",
    "Vulnerability Management",
  ],

  automation: [
    "SAST",
    "DAST",
    "SCA",
    "Secrets Scanning",
    "Burp Suite",
    "Checkmarx",
    "Fortify",
    "GitHub Advanced Security",
    "CI/CD Security",
    "Security Automation",
  ],

  infrastructure: [
    "AWS",
    "Azure",
    "Wiz",
    "IAM",
    "WAF",
    "EKS",
    "AI/LLM Security",
    "JFrog Xray",
    "JFrog Artifactory",
    "Nullify",
    "Python",
  ],

  dev: [
    "C#",
    "ASP.NET",
    "Java",
    "JavaScript",
    "Bash",
    "GitHub",
    "GitHub Actions",
  ],
};

