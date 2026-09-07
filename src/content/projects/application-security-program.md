---
title: "Building an Application Security Program: From Secure Design to Production"

description: "Designed and strengthened a scalable Application Security and Secure SDLC program across 50+ applications, integrating threat modeling, secure design reviews, security testing, CI/CD controls, vulnerability management, cloud security, and developer enablement."

pid: 1

date: 2026-09-01

title_de: "Aufbau eines Application-Security-Programms: Vom sicheren Design bis zur Produktion"

description_de: "Ein skalierbares Application-Security- und Secure-SDLC-Programm für mehr als 50 Anwendungen entwickelt und gestärkt."

slug: "application-security-program"

ready: true

featured: true

tags:
  [
    "Application Security",
    "Secure SDLC",
    "DevSecOps",
    "Threat Modeling",
    "GHAS",
    "Wiz",
    "SAST",
    "SCA",
    "DAST",
    "Cloud Security"
  ]

category: "application-security"

image: "/images/projects/application-security-program/logo.svg"

links:
  - label: "GitHub"
    url: "https://github.com/saipisupati-appsec/application-security-portfolio"
---

<div class="lang-en">

## Overview

I designed and strengthened an **Application Security and Secure SDLC program across 50+ applications**, integrating security into the software development lifecycle from secure design and threat modeling through development, CI/CD, vulnerability management, and cloud/runtime security.

The objective was to make application security **scalable, risk-based, measurable, and integrated into engineering workflows**, rather than treating security as a separate activity performed only before release.

The program brought together:

- Security architecture and threat modeling
- Secure design reviews
- Secure code review
- Automated security testing
- CI/CD security controls
- Risk-based security gates
- Vulnerability management
- Cloud and runtime security
- Software supply-chain security
- Security Champion enablement
- Security automation and remediation workflows

---

## Business Context

As the application landscape grew, security practices needed to be applied consistently across applications with different architectures, technologies, data flows, and risk profiles.

Engineering teams needed security feedback that was:

- Available early in the development lifecycle
- Integrated into existing developer workflows
- Prioritized according to risk
- Actionable for engineering teams
- Connected to remediation and ownership

A purely manual security-review model would not scale effectively across 50+ applications.

The approach therefore focused on moving security **closer to development**, automating repeatable controls, and applying stronger enforcement only where the security risk justified it.

This helped establish a more consistent security baseline while allowing engineering teams to continue delivering software without treating security as a late-stage release blocker.

---

## Security Assessment

The security assessment process starts by understanding the application and its architecture rather than relying solely on automated scanning.

Depending on the application, architecture, data flows, and risk profile, assessments can cover:

- Authentication and authorization
- API security
- Session management
- Secrets management
- Sensitive data handling
- Cryptography
- Dependency usage
- SSRF
- File upload functionality
- Deserialization
- Business-logic risks
- OWASP Top 10 vulnerabilities
- Security logging and monitoring
- WAF and network security controls

The depth of each assessment is adjusted according to the application's architecture, technologies, data sensitivity, exposure, and security requirements.

This risk-based approach avoids applying the same level of security assessment to every application while maintaining appropriate coverage for higher-risk systems.

---

## Threat Modeling & Secure Design

I performed **STRIDE-based threat modeling across 50+ applications** to identify security risks during the design stage.

The threat-modeling process included:

1. Understanding the application architecture
2. Documenting the application overview
3. Reviewing data flows and trust boundaries
4. Identifying relevant STRIDE threats
5. Assessing security risks
6. Defining mitigations and security requirements
7. Discussing findings with engineering teams
8. Tracking security actions and remediation where required

The output was a documented threat model that could be used during **secure design reviews and engineering discussions**.

This allowed security requirements and architectural risks to be considered before implementation, reducing the likelihood of discovering design-level security issues only after development or release.

---

## Security Controls Across the SDLC

Security controls were introduced at multiple stages of the development lifecycle.

### Pull Request / Development Stage

Security checks were integrated into developer workflows, including:

- **Wiz CLI / Wiz CI**
- **SAST**
- **SCA**
- **GitHub Advanced Security**
- **Nullify** for automated application security testing
- Security checks integrated with GitHub workflows

A risk-based approach was used for enforcement.

For example, **findings with CVSS greater than 9 can block progression at the pull-request level**, preventing critical-risk issues from moving forward until they are addressed.

This provides developers with security feedback during development rather than after deployment.

The objective was not to block every security finding, but to ensure that **high-impact risks receive stronger enforcement while lower-risk findings follow appropriate remediation workflows**.

---

## Security Testing

The security testing strategy combines multiple security capabilities rather than depending on a single scanner.

### SAST

Static Application Security Testing is used to identify security issues in source code during development.

I have worked with SAST tooling including **Checkmarx, Fortify, and GitHub Advanced Security** to identify, triage, validate, and track code-level security findings.

### SCA

Software Composition Analysis is used to identify vulnerable dependencies and support third-party component risk management.

This includes dependency security controls through **JFrog Xray** and related CI/CD security workflows.

### Dynamic & Runtime-Oriented Security Testing

Where applicable, application security testing is complemented by dynamic and runtime-oriented capabilities.

This includes using security tooling to validate application vulnerabilities beyond static source-code findings and assess whether identified issues represent meaningful security risk.

### Wiz Red Agent

I have used **Wiz Red Agent**, an AI-driven security capability that can investigate potential vulnerabilities using available application and cloud context.

The assessment can correlate information across resources such as:

- Application repositories
- Cloud resources
- AWS environments
- Identity and access relationships
- Network and application context

The agent can attempt to determine whether a vulnerability is **actually exploitable in the environment**, rather than relying only on the existence of a vulnerability finding.

Where exploitation can be demonstrated, the resulting evidence can include **attack-path/exploitation details and screenshots**, helping security teams and developers understand the practical impact of the vulnerability.

This capability is particularly useful for moving from:

**"A vulnerability exists"**

to:

**"The vulnerability is exploitable in this environment and this is the potential attack path."**

### GitHub Advanced Security

**GitHub Advanced Security** is integrated into development workflows to provide additional visibility into code, dependency, secret, and repository security risks.

### Nullify

**Nullify** is used as part of the application security testing strategy for automated security assessment, including security checks and vulnerability validation.

The goal is to increase the speed and coverage of security testing while keeping security feedback connected to developer workflows.

---

## Vulnerability Management & Remediation

Finding a vulnerability is only one part of application security.

The program focuses on the complete lifecycle:

**Detection → Triage → Risk Assessment → Ownership → Remediation → Verification**

Risk and severity are considered when determining the appropriate remediation path.

Factors can include:

- Technical severity
- Exploitability
- Business impact
- Application exposure
- Data sensitivity
- Existing security controls
- Availability of compensating controls

Where integrated with Wiz, newly identified vulnerabilities can trigger **Jira automation**, creating and assigning remediation work to the appropriate engineering team or Jira board.

This creates a connection between security findings and the engineering team's existing delivery workflow.

The result is improved visibility into:

- What needs to be fixed
- Who owns the issue
- How severe the risk is
- Whether remediation is progressing
- Whether the fix has been verified

---

## Software Supply Chain Security

Application dependencies and package sources are also considered part of the application security boundary.

The security approach includes:

- Software Composition Analysis
- Dependency vulnerability monitoring
- **JFrog Xray**
- **JFrog Artifactory**
- Package security and supply-chain controls
- Vulnerability remediation tracking

JFrog Xray provides vulnerability visibility across dependencies, while Artifactory provides controlled package management and registry capabilities.

The objective is to improve visibility into third-party dependencies and reduce supply-chain risk throughout the software lifecycle.

---

## Cloud & Runtime Security

Application security extends beyond application code into the underlying cloud environment.

The program includes security considerations across **AWS and Azure**, including:

- IAM
- WAF
- CloudFront
- API Gateway
- EKS
- ECS
- EC2
- Cloud security monitoring
- Runtime security visibility

**Wiz Cloud Security and Wiz Sensor** provide additional visibility into cloud resources, workloads, vulnerabilities, configurations, and runtime security risks.

This allows application-level security findings to be considered alongside the underlying cloud environment and infrastructure context.

For higher-risk issues, understanding the relationship between application vulnerabilities, cloud resources, identities, and network paths provides additional context for prioritization and remediation.

---

## Security Champions

A scalable AppSec program cannot depend entirely on a central security team.

I worked with engineering teams through the **Security Champion program** to improve security awareness and distribute security ownership across development teams.

The program supports developers and engineering representatives in:

- Recognizing common security risks
- Understanding security requirements
- Using security tooling effectively
- Participating in security discussions
- Addressing vulnerabilities earlier
- Incorporating security into normal development practices

This helps create a more sustainable security culture as the application landscape grows.

Security Champions also provide a practical feedback channel between engineering teams and Application Security.

---

## Automation & DevSecOps

Automation is a key part of scaling application security across 50+ applications.

The program integrates security into engineering workflows using:

- GitHub Actions
- CI/CD security checks
- Automated security scanning
- Risk-based security gates
- GitHub Checks
- Vulnerability triage workflows
- Jira remediation automation
- Security monitoring
- Cloud security visibility
- Automated security reporting and tracking

The principle is:

> **Security should be integrated into the developer workflow instead of becoming a manual checkpoint at the end of delivery.**

Automation reduces repetitive security activities and allows the security team to focus more on risk analysis, architecture, validation, and higher-value security engineering work.

---

## Security Architecture

The overall security workflow can be viewed as:

**Secure Design**

↓

**Threat Modeling / STRIDE**

↓

**Secure Code Review**

↓

**SAST + SCA + GHAS + Nullify**

↓

**CI/CD Security Controls**

↓

**Risk-Based PR Enforcement**

↓

**Cloud / Runtime Security**

↓

**Vulnerability Management**

↓

**Jira Remediation & Verification**

↓

**Continuous Security Improvement**

This creates multiple layers of security controls throughout the application lifecycle rather than relying on a single security checkpoint.

---

## Business & Security Impact

The program established a more consistent and scalable application-security approach across **50+ applications**.

Key outcomes include:

- Security practices standardized across applications with different architectures and technology stacks
- Threat modeling incorporated into application security and secure design activities
- Security risks identified earlier during the SDLC
- Automated security testing integrated into developer workflows
- High-risk vulnerabilities subject to PR-level enforcement
- Security findings connected to engineering ownership and remediation workflows
- Jira automation reduced manual effort in vulnerability assignment and tracking
- Cloud security visibility extended beyond application code
- Application vulnerabilities could be assessed together with cloud and runtime context
- Exploitability validation improved understanding of the practical impact of security findings
- Security ownership strengthened through Security Champion engagement
- Reduced dependence on purely manual security-review processes
- Security became a continuous engineering activity rather than a release-stage checkpoint

The overall result was a **more scalable, risk-based, and engineering-focused Application Security operating model**.

---

## Key Lessons

### 1. Security needs to start at design

Threat modeling and secure design reviews can identify architectural risks before they become expensive implementation or production problems.

### 2. Risk-based enforcement is more practical than blocking everything

Not every finding requires the same response.

High-risk issues require stronger enforcement, while lower-risk findings can follow appropriate remediation workflows.

### 3. Automation is essential at scale

Supporting 50+ applications requires automated security checks, workflows, ownership, and tracking.

### 4. Exploitability matters

A vulnerability finding alone does not always communicate the real-world risk.

Understanding whether an issue can actually be exploited in the environment provides better context for prioritization and remediation.

### 5. Developers need actionable security feedback

Security tooling is most effective when findings are integrated into the workflow where developers already work.

### 6. Cloud and application security are increasingly connected

Application vulnerabilities should be evaluated together with identities, cloud resources, network paths, and runtime context where relevant.

### 7. AppSec is a shared responsibility

Security Champions and engineering partnerships help move security ownership beyond the central security team.

---

## Technology & Security Stack

**Application Security:**

Application Security, Product Security, Secure SDLC, Threat Modeling, Secure Design Reviews, Secure Code Reviews, OWASP Top 10, Risk Assessment, Vulnerability Management

**Security Testing:**

SAST, SCA, DAST, GitHub Advanced Security, Checkmarx, Fortify, Burp Suite, Nullify, Wiz Red Agent

**Supply Chain Security:**

JFrog Xray, JFrog Artifactory, Dependency Security

**Cloud Security:**

AWS, Azure, Wiz Cloud Security, Wiz CI, Wiz Sensor, IAM, WAF, CloudFront, API Gateway, EKS, ECS, EC2

**DevSecOps & Automation:**

GitHub Actions, GitHub Checks, CI/CD Security, Security Gates, Security Automation, Vulnerability Triage, Jira Automation, Remediation Tracking

**Development:**

Python, C#, Java, JavaScript, ASP.NET

**Monitoring:**

Wiz, Coralogix, Security Monitoring, Log Analysis, Security Events, Vulnerability Monitoring, Risk Tracking

</div>

<div class="lang-de">

## Überblick

Ich habe ein skalierbares **Application-Security- und Secure-SDLC-Programm für mehr als 50 Anwendungen** entwickelt und gestärkt.

Dabei wurden Sicherheitsmaßnahmen von Secure Design und Threat Modeling über Entwicklung und CI/CD bis hin zu Vulnerability Management, Cloud Security und Runtime Security integriert.

Das Ziel war, Application Security **skalierbar, risikobasiert und eng in die Engineering-Workflows integriert** umzusetzen.

---

## Geschäftlicher Kontext

Mit dem Wachstum der Anwendungslandschaft mussten Sicherheitspraktiken konsistent über Anwendungen mit unterschiedlichen Architekturen, Technologien und Risikoprofilen hinweg umgesetzt werden.

Der Ansatz konzentrierte sich deshalb darauf, Security möglichst früh in den Entwicklungsprozess zu integrieren, wiederholbare Kontrollen zu automatisieren und stärkere Enforcement-Mechanismen gezielt für hohe Risiken einzusetzen.

---

## Security Assessment

Die Security-Bewertung beginnt mit dem Verständnis der Anwendung und ihrer Architektur.

Je nach Anwendung und Risikoprofil können unter anderem folgende Bereiche betrachtet werden:

- Authentication und Authorization
- API Security
- Session Management
- Secrets Management
- Sensitive Data Handling
- Cryptography
- Dependencies
- SSRF
- File Uploads
- Deserialization
- Business Logic
- OWASP Top 10
- Logging und Monitoring
- WAF und Network Security

Die Tiefe der Prüfung wird anhand von Architektur, Technologien, Daten, Exposure und Security Requirements bestimmt.

---

## Threat Modeling & Secure Design

Ich führte **STRIDE-basiertes Threat Modeling für mehr als 50 Anwendungen** durch.

Dabei wurden unter anderem:

- Anwendungsarchitektur
- Datenflüsse
- Trust Boundaries
- STRIDE-Bedrohungen
- Sicherheitsrisiken
- Mitigationsmaßnahmen
- Security Requirements

bewertet und dokumentiert.

Die Ergebnisse wurden für Secure Design Reviews und technische Abstimmungen mit Engineering-Teams verwendet.

---

## Security Controls

Security Controls wurden über mehrere Phasen des SDLC integriert:

- Wiz CLI / Wiz CI
- SAST
- SCA
- GitHub Advanced Security
- Nullify
- Security Checks in CI/CD
- Risk-based Security Gates
- Vulnerability Management

Bei Pull Requests wurde ein risikobasierter Ansatz verwendet.

**Findings mit einem CVSS-Wert über 9 können den weiteren PR-Fortschritt blockieren**, bis das Risiko entsprechend behandelt wurde.

---

## Security Testing

Die Security-Testing-Strategie kombiniert verschiedene Security-Technologien.

### SAST & SCA

SAST wird zur Erkennung von Code-Level-Schwachstellen eingesetzt.

SCA unterstützt die Identifikation und Bewertung von Risiken in Third-Party-Dependencies.

Dabei wurden unter anderem **Checkmarx, Fortify, GitHub Advanced Security und JFrog Xray** eingesetzt.

### Wiz Red Agent

Ich habe **Wiz Red Agent** zur KI-gestützten Untersuchung und Validierung potenziell ausnutzbarer Schwachstellen eingesetzt.

Dabei können unter anderem Repository-, AWS-, Identity-, Netzwerk- und Application-Kontexte berücksichtigt werden.

Der Ansatz unterstützt die Bewertung, ob eine Schwachstelle in der tatsächlichen Umgebung **ausnutzbar** ist.

Bei erfolgreicher Validierung können entsprechende Exploit- beziehungsweise Attack-Path-Nachweise einschließlich Screenshots bereitgestellt werden.

---

## Vulnerability Management

Der Prozess umfasst:

**Detection → Triage → Risk Assessment → Ownership → Remediation → Verification**

Neue Schwachstellen können über Wiz automatisiert in Jira-Workflows überführt und den zuständigen Engineering-Teams zugewiesen werden.

Dadurch werden Security Findings stärker mit bestehenden Engineering-Prozessen verbunden.

---

## Software Supply Chain Security

Der Application-Security-Ansatz berücksichtigt auch Third-Party-Dependencies und Package Sources.

Dabei kommen unter anderem zum Einsatz:

- SCA
- JFrog Xray
- JFrog Artifactory
- Dependency Vulnerability Monitoring
- Supply-Chain Security Controls

---

## Cloud & Runtime Security

Die Sicherheitsbetrachtung umfasst AWS- und Azure-Umgebungen sowie Technologien wie:

- IAM
- WAF
- CloudFront
- API Gateway
- EKS
- ECS
- EC2

**Wiz Cloud Security und Wiz Sensor** erweitern die Sichtbarkeit auf Cloud-Ressourcen, Workloads, Schwachstellen und Runtime-Risiken.

---

## Security Champions

Durch das **Security-Champion-Programm** wurde Security Ownership stärker in die Engineering-Teams integriert.

Der Schwerpunkt liegt auf:

- Security Awareness
- Frühzeitiger Risikoerkennung
- Secure Coding
- Effektiver Nutzung von Security Tools
- Früherer Vulnerability Remediation
- Zusammenarbeit zwischen Security und Engineering

---

## Automation & DevSecOps

Automation unterstützt die Skalierung von Application Security über mehr als 50 Anwendungen.

Zum Einsatz kommen unter anderem:

- GitHub Actions
- CI/CD Security Checks
- GitHub Checks
- Security Gates
- Automated Security Scanning
- Jira Automation
- Vulnerability Tracking
- Cloud Security Monitoring

Der Ansatz reduziert manuelle Security-Prozesse und integriert Security stärker in bestehende Engineering-Workflows.

---

## Ergebnis

Das Programm etablierte einen konsistenteren und skalierbaren Application-Security-Ansatz für **mehr als 50 Anwendungen**.

Wichtige Ergebnisse waren:

- Frühere Identifikation von Security Risks
- Integration von Security in Design, Development und CI/CD
- Risikobasierte PR-Enforcement-Mechanismen
- Automatisierte Vulnerability-Workflows
- Bessere Cloud- und Runtime-Sichtbarkeit
- Exploitability-Validierung für relevante Findings
- Stärkere Security Ownership durch Security Champions
- Weniger Abhängigkeit von rein manuellen Security Reviews

---

## Technologie & Security Stack

**Application Security:**

Application Security, Product Security, Secure SDLC, Threat Modeling, Secure Design Reviews, Secure Code Reviews, OWASP Top 10, Risk Assessment, Vulnerability Management

**Security Testing:**

SAST, SCA, DAST, GitHub Advanced Security, Checkmarx, Fortify, Burp Suite, Nullify, Wiz Red Agent

**Supply Chain Security:**

JFrog Xray, JFrog Artifactory, Dependency Security

**Cloud Security:**

AWS, Azure, Wiz Cloud Security, Wiz CI, Wiz Sensor, IAM, WAF, CloudFront, API Gateway, EKS, ECS, EC2

**DevSecOps & Automation:**

GitHub Actions, GitHub Checks, CI/CD Security, Security Gates, Security Automation, Jira Automation, Vulnerability Tracking

**Development:**

Python, C#, Java, JavaScript, ASP.NET

**Monitoring:**

Wiz, Coralogix, Security Monitoring, Log Analysis, Security Events, Vulnerability Monitoring, Risk Tracking

</div>