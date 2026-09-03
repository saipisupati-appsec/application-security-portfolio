---

title: "Building an Application Security Program: From Secure Design to Production"
description: "Designed and strengthened a scalable Application Security and Secure SDLC program across 50+ applications, integrating threat modeling, secure design reviews, security testing, CI/CD controls, vulnerability management, and cloud security."
pid: 1
date: 2026-09-01
title_de: "Aufbau eines Application-Security-Programms: Vom sicheren Design bis zur Produktion"
description_de: "Ein skalierbares Application-Security- und Secure-SDLC-Programm für mehr als 50 Anwendungen entwickelt und gestärkt."
slug: "application-security-program"
ready: true
featured: true
tags: ["Application Security", "Secure SDLC", "DevSecOps", "Threat Modeling", "GHAS", "Wiz", "SAST", "SCA", "DAST", "Cloud Security"]
category: "application-security"
image: "/images/projects/application-security-program/logo.svg"
links:
  - label: "GitHub"
    url: "https://github.com/saipisupati-appsec/application-security-portfolio"
---

<div class="lang-en">

## Overview

I designed and strengthened an **Application Security and Secure SDLC program across 50+ applications**, integrating security into the software development lifecycle from secure design and threat modeling through development, CI/CD, vulnerability management, and cloud/runtime security.

The objective was to make security **scalable, risk-based, and integrated into engineering workflows**, rather than treating application security as a separate activity performed only before release.

---

## Business Context

As the application landscape grew, security practices needed to be consistently applied across applications with different architectures, technologies, data flows, and risk profiles.

Engineering teams needed security feedback that was:

* Available early in the development lifecycle
* Integrated into existing developer workflows
* Prioritized according to risk
* Actionable for engineering teams
* Automatically tracked through remediation

This required a Secure SDLC approach that combined **security assessments, threat modeling, secure design reviews, code review, automated security testing, vulnerability management, and cloud security controls**.

---

## Security Assessment

The security assessment process starts by understanding the application and its architecture rather than relying solely on automated scanning.

Depending on the application and its data flows, the assessment can cover:

* Authentication and authorization
* API security
* Session management
* Secrets management
* Sensitive data handling
* Cryptography
* Dependency usage
* SSRF
* File upload functionality
* Deserialization
* Business-logic risks
* OWASP Top 10 vulnerabilities
* Security logging and monitoring
* WAF and network security controls

The depth of each review is determined by the application's architecture, technologies, data sensitivity, and security requirements.

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

The output was a documented threat model that could be used during **secure design reviews and engineering discussions**, allowing security requirements to be considered before implementation.

---

## Security Controls Across the SDLC

Security controls were implemented at multiple stages of the development lifecycle.

### Pull Request / Development Stage

Security checks were integrated into development workflows, including:

* **Wiz CLI / Wiz CI**
* **SAST**
* **SCA**
* **GitHub Advanced Security**
* **Nullify** for AI-assisted security testing where applicable

A risk-based approach was used for enforcement.

For example, **findings with CVSS greater than 9 can block progression at the pull-request level**, preventing critical-risk issues from moving forward through the development workflow.

This approach helps distinguish high-risk findings from lower-priority security issues while keeping security feedback close to the developer.

---

## Security Testing

The security testing strategy combines multiple testing techniques rather than relying on a single security scanner.

### SAST

Static analysis is used to identify security issues in source code during development.

### SCA

Software Composition Analysis is used to identify vulnerable dependencies and support dependency risk management.

### DAST / Runtime Testing

Where applicable, dynamic and runtime-oriented security testing is performed using available security capabilities, including **Wiz Red Agent** and related Wiz security capabilities.

### GHAS

**GitHub Advanced Security** is integrated into the development workflow to provide additional visibility into code and repository security risks.

### Nullify

**Nullify** is used as part of the security testing strategy for AI-assisted/automated application security testing.

---

## Vulnerability Management & Remediation

Finding a vulnerability is only one part of application security. The program also focuses on **triage, ownership, remediation, and verification**.

The workflow includes:

**Detection → Triage → Risk Assessment → Ownership → Remediation → Verification**

Risk and severity are considered when determining the appropriate remediation path.

Where integrated with Wiz, newly identified vulnerabilities can trigger **Jira automation**, creating and assigning remediation work to the appropriate engineering team or Jira board.

This provides a connection between security findings and the engineering team's existing delivery workflow.

---

## Software Supply Chain Security

Application dependencies and package sources are also considered part of the security boundary.

The security approach includes:

* Software Composition Analysis
* Dependency vulnerability monitoring
* **JFrog Xray**
* **JFrog Artifactory**
* Package security and supply-chain controls
* Vulnerability remediation tracking

The objective is to improve visibility into third-party dependencies and reduce supply-chain risk throughout the software lifecycle.

---

## Cloud & Runtime Security

Application security extends beyond application code into the underlying cloud environment.

The program includes security considerations across **AWS and Azure**, including:

* IAM
* WAF
* CloudFront
* API Gateway
* EKS
* ECS
* EC2
* Cloud security monitoring
* Runtime security visibility

**Wiz Cloud Security and Wiz Sensor** capabilities provide additional visibility into cloud resources, workloads, vulnerabilities, and runtime security risks.

---

## Security Champions

A scalable AppSec program cannot depend entirely on a central security team.

I worked with engineering teams through the **Security Champion program** to improve security awareness and distribute security ownership across development teams.

The goal is to enable developers and engineering representatives to:

* Recognize common security risks
* Understand security requirements
* Use security tooling effectively
* Participate in security discussions
* Address vulnerabilities earlier
* Incorporate security into normal development practices

This creates a more sustainable security culture as the application landscape grows.

---

## Automation & DevSecOps

Automation is a key part of scaling application security across 50+ applications.

The program integrates security into engineering workflows using:

* GitHub Actions
* CI/CD security checks
* Automated security scanning
* Risk-based security gates
* Vulnerability triage workflows
* Jira remediation automation
* Security monitoring
* Automated visibility across cloud and application environments

The principle is simple:

> **Security should be integrated into the developer workflow instead of becoming a manual checkpoint at the end of delivery.**

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

**CI/CD Security Gates**

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

This provides multiple layers of security controls throughout the application lifecycle.

---

## Impact

The program established a more consistent and scalable application-security approach across **50+ applications**.

Key outcomes include:

* Security integrated across design, development, CI/CD, and runtime stages
* STRIDE-based threat modeling incorporated into application security assessments
* Automated security testing integrated into development workflows
* High-risk vulnerabilities subject to PR-level enforcement
* Security findings connected to engineering remediation workflows
* Cloud security visibility extended beyond application code
* Security ownership strengthened through the Security Champion model
* Reduced dependence on purely manual security review processes

---

## Key Lessons

### 1. Security needs to start at design

Threat modeling and secure design reviews can identify architectural risks before they become expensive implementation problems.

### 2. Risk-based enforcement is more practical than blocking everything

Not every finding requires the same response. High-risk issues require stronger enforcement, while lower-risk findings can follow appropriate remediation workflows.

### 3. Automation is essential at scale

Supporting 50+ applications requires automated security checks, workflows, ownership, and tracking.

### 4. Developers need actionable security feedback

Security tooling is most effective when findings are integrated into the workflow where developers already work.

### 5. AppSec is a shared responsibility

Security Champions and engineering partnerships help move security ownership beyond the central security team.

---

## Technology & Security Stack

**Application Security:**
Application Security, Product Security, Secure SDLC, Threat Modeling, Secure Design Reviews, Secure Code Reviews, OWASP Top 10, Risk Assessment, Vulnerability Management

**Security Testing:**
SAST, SCA, DAST, GitHub Advanced Security, Checkmarx, Fortify, Burp Suite, Nullify

**Supply Chain Security:**
JFrog Xray, JFrog Artifactory

**Cloud Security:**
AWS, Azure, Wiz Cloud Security, Wiz CI, Wiz Sensor, IAM, WAF, CloudFront, API Gateway, EKS, ECS, EC2

**DevSecOps & Automation:**
GitHub Actions, CI/CD Security, Security Gates, Security Automation, Vulnerability Triage, Jira Automation, Remediation Tracking

**Development:**
Python, C#, Java, JavaScript, ASP.NET

**Monitoring:**
Wiz, Coralogix, Security Monitoring, Log Analysis, Security Events, Vulnerability Monitoring, Risk Tracking

</div>

<div class="lang-de">

## Überblick

Ich habe ein skalierbares **Application-Security- und Secure-SDLC-Programm für mehr als 50 Anwendungen** entwickelt und gestärkt. Dabei wurden Sicherheitsmaßnahmen von Secure Design und Threat Modeling über Entwicklung und CI/CD bis hin zu Vulnerability Management und Cloud-/Runtime-Security integriert.

## Geschäftlicher Kontext

Mit dem Wachstum der Anwendungslandschaft mussten Sicherheitspraktiken konsistent, risikobasiert und skalierbar in die Entwicklungsprozesse integriert werden.

Der Schwerpunkt lag darauf, Sicherheit frühzeitig in den Entwicklungsprozess einzubinden und gleichzeitig Security Champions sowie Engineering-Teams stärker in die Verantwortung einzubeziehen.

## Threat Modeling & Secure Design

Ich führte **STRIDE-basiertes Threat Modeling für mehr als 50 Anwendungen** durch.

Dabei wurden unter anderem:

* Anwendungsarchitektur
* Datenflüsse
* Trust Boundaries
* STRIDE-Bedrohungen
* Sicherheitsrisiken
* Mitigationsmaßnahmen
* Security Requirements

bewertet und dokumentiert.

Die Ergebnisse wurden für Secure Design Reviews und technische Abstimmungen mit Engineering-Teams verwendet.

## Security Controls

Security Controls wurden über mehrere Phasen des SDLC integriert:

* Wiz CLI / Wiz CI
* SAST
* SCA
* GitHub Advanced Security
* Nullify
* DAST-/Runtime-orientierte Tests
* CI/CD Security Gates
* Vulnerability Management
* Jira Automation

Bei Pull Requests wurde ein risikobasierter Ansatz verwendet. **Findings mit einem CVSS-Wert über 9 können den weiteren PR-Fortschritt blockieren.**

## Vulnerability Management

Der Prozess umfasst:

**Detection → Triage → Risk Assessment → Ownership → Remediation → Verification**

Neue Schwachstellen können über Wiz automatisiert in Jira-Workflows überführt und den zuständigen Engineering-Teams zugewiesen werden.

## Cloud & Runtime Security

Die Sicherheitsbetrachtung umfasst AWS- und Azure-Umgebungen sowie Technologien wie IAM, WAF, CloudFront, API Gateway, EKS, ECS und EC2.

Wiz Cloud Security und Wiz Sensor erweitern die Sicherheitsüberwachung auf Cloud-Ressourcen, Workloads, Schwachstellen und Runtime-Risiken.

## Security Champions

Durch das Security-Champion-Programm wurde Security Ownership stärker in die Engineering-Teams integriert.

Der Schwerpunkt liegt auf Security Awareness, frühzeitiger Risikoerkennung, sicherer Entwicklung und effektiver Nutzung von Security-Tools.

## Ergebnis

Das Programm etablierte einen konsistenteren und skalierbaren Application-Security-Ansatz für **mehr als 50 Anwendungen** und integrierte Security über Design, Development, CI/CD, Cloud und Runtime.

</div>



