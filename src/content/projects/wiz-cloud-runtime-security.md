---

title: "Cloud & Runtime Security with Wiz"
description: "Implemented and strengthened cloud and runtime security coverage using Wiz across AWS environments, integrating cloud visibility, workload protection, CI security scanning, and Kubernetes-focused deployment approaches."
pid: 4
date: 2026-09-01
title_de: "Cloud- und Runtime-Sicherheit mit Wiz"
description_de: "Cloud- und Runtime-Sicherheitskontrollen mit Wiz in AWS-Umgebungen implementiert und erweitert."
slug: "wiz-cloud-runtime-security"
ready: true
featured: true
tags: ["Cloud Security", "Wiz", "AWS", "Kubernetes", "EKS", "EC2", "ECS", "CI/CD", "Runtime Security", "DevSecOps"]
category: "cloud-security"
image: "/images/projects/wiz-cloud-runtime-security/logo.svg"
links:
  - label: "GitHub"
    url: "https://github.com/saipisupati-appsec/application-security-portfolio"

---

## Overview

Cloud environments introduce security challenges that extend beyond application code. Security teams need visibility into cloud resources, workloads, configurations, vulnerabilities, and runtime environments while ensuring that security controls can be integrated into existing engineering workflows.

As part of the Application Security and Cloud Security program, I worked on expanding **Wiz-based security coverage across AWS environments**, including workload onboarding, Kubernetes-focused deployment approaches, CI/CD security scanning, and runtime security visibility.

The objective was to improve security visibility across cloud workloads and connect cloud security findings with the broader application-security lifecycle.

---

## Business Context

Modern applications are distributed across cloud infrastructure, containers, Kubernetes workloads, and CI/CD pipelines.

Traditional application security scanning alone does not provide visibility into:

* Cloud resource configuration
* Workload exposure
* Containerized applications
* Kubernetes environments
* Runtime context
* Cloud-to-workload relationships
* Vulnerabilities in deployed workloads

The security approach therefore needed to combine **application security and cloud/runtime security** rather than treating them as separate disciplines.

The goal was to establish practical Wiz coverage while working within the deployment models and operational constraints of the AWS environments.

---

## Security Assessment

The assessment approach focused on understanding the relationship between:

**Application → Workload → Cloud Resource → Network Exposure → Runtime**

Key areas considered included:

* Cloud resource visibility
* Workload discovery
* Vulnerability exposure
* Container and Kubernetes workloads
* IAM and access configuration
* Network exposure
* Internet-facing resources
* Security configuration
* Runtime context
* Application-to-cloud relationships

This helped provide additional context when prioritizing application and infrastructure security findings.

---

## Wiz Onboarding

A key part of the work involved onboarding cloud and workload environments into Wiz to establish security visibility.

The onboarding approach included:

* AWS environment integration
* EC2 workload coverage
* Kubernetes workload coverage
* EKS security visibility
* Containerized workload assessment
* Wiz Sensor deployment
* Runtime security capabilities
* Integration with existing security processes

The deployment strategy was adapted based on the underlying workload architecture rather than applying a single deployment model everywhere.

---

## EC2 Security Coverage

For EC2-based workloads, Wiz Sensor deployment was evaluated and implemented to provide workload-level security visibility.

The approach focused on:

1. Identifying relevant workloads.
2. Deploying the required Wiz components.
3. Validating workload visibility.
4. Verifying security findings.
5. Connecting findings with the broader vulnerability-management process.

This provided security teams with additional visibility into workloads beyond what traditional application scanning could identify.

---

## Kubernetes & EKS Security

Kubernetes environments require a different security approach because workloads are dynamic and containers can be created and destroyed frequently.

For EKS environments, I worked with different Wiz deployment approaches, including:

* Kubernetes Connector
* DaemonSet-based deployment
* Wiz Sensor deployment
* EKS workload coverage
* Container-focused security visibility

The deployment model was considered in the context of the Kubernetes environment and workload architecture.

---

## EKS Fargate Considerations

EKS Fargate introduces additional deployment constraints because traditional node-level deployment approaches are not always applicable.

For Fargate workloads, an **init-container-based approach** was evaluated and used to support Wiz security coverage.

The approach required understanding:

* Fargate workload architecture
* Pod lifecycle
* Container initialization
* Security-agent deployment requirements
* Runtime visibility
* Operational constraints of serverless Kubernetes workloads

This was an important distinction from traditional EKS worker-node deployments.

---

## Wiz CI & DevSecOps Integration

Cloud security was also connected to the development lifecycle through **Wiz CI/security scanning**.

The objective was to identify security issues earlier rather than relying exclusively on post-deployment cloud findings.

The broader security workflow included:

**Developer Change → Pull Request → Security Scanning → Risk Evaluation → CI/CD Decision → Deployment → Cloud/Runtime Visibility**

Wiz CI complemented other security controls used in the development lifecycle, including:

* SAST
* SCA
* GitHub Advanced Security
* Application security reviews
* Runtime/cloud security

This created a more continuous security model from development through deployment.

---

## Vulnerability Management

Wiz findings were considered as part of the broader vulnerability-management process.

The workflow can be represented as:

**Detection → Context → Risk Assessment → Ownership → Remediation → Verification**

Cloud context is particularly useful because the same vulnerability can have very different risk depending on:

* Whether the workload is exposed
* The affected asset
* Application context
* Network accessibility
* Runtime environment
* Associated cloud resources

This allows security findings to be evaluated in context rather than relying only on the presence of a CVE.

---

## Security Architecture

The overall approach connected application security with cloud and runtime security:

```text
                    Developer
                       │
                       ▼
                 Pull Request
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
        SAST          SCA          GHAS
          │            │            │
          └────────────┼────────────┘
                       ▼
                    Wiz CI
                       │
                       ▼
                  CI/CD Pipeline
                       │
                       ▼
                    Deploy
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
        AWS EC2                  AWS EKS
          │                         │
          ▼                         ▼
     Wiz Sensor             Wiz Kubernetes
                               Coverage
          │                         │
          └────────────┬────────────┘
                       ▼
                 Wiz Visibility
                       │
                       ▼
              Risk & Vulnerability
                 Management
                       │
                       ▼
              Remediation / Jira
```

---

## Security Controls

The Wiz implementation complemented the wider Application Security program.

### Cloud Security

* AWS security visibility
* Workload discovery
* Cloud configuration visibility
* Exposure analysis
* Vulnerability context

### Workload Security

* EC2 coverage
* Container security
* Kubernetes security
* EKS workload visibility
* Runtime security capabilities

### CI/CD Security

* Wiz CI
* Pull-request security checks
* Vulnerability detection before deployment
* Integration with existing security gates

### Security Operations

* Finding triage
* Risk assessment
* Ownership
* Remediation tracking
* Verification

---

## Engineering Challenges

One of the important lessons from cloud security implementation was that **security tooling must adapt to the underlying infrastructure architecture**.

For example, deployment considerations differ between:

* EC2
* Traditional Kubernetes nodes
* EKS
* EKS Fargate
* CI/CD environments

This required working through deployment constraints rather than assuming that the same security-agent installation model would work across every environment.

The work also highlighted the importance of validating security coverage after onboarding rather than treating successful deployment as the end of the process.

---

## Impact

The work strengthened the broader security program by extending visibility beyond source-code and dependency scanning into cloud and runtime environments.

Key outcomes included:

* Expanded Wiz security coverage across AWS workloads.
* Improved visibility into cloud and workload security posture.
* Supported EC2 and Kubernetes/EKS security coverage.
* Addressed deployment considerations for EKS Fargate.
* Integrated Wiz security scanning into the CI/CD security model.
* Connected cloud findings with vulnerability-management workflows.
* Added runtime/cloud context to application-security assessments.
* Strengthened the shift toward continuous security across the SDLC.

---

## Lessons Learned

### 1. Cloud security must be architecture-aware

Security controls need to account for how workloads are actually deployed. EC2, Kubernetes, and Fargate require different approaches.

### 2. Visibility is only the first step

A security platform becomes useful when findings can be prioritized, assigned, remediated, and verified.

### 3. Shift security left without losing runtime context

CI/CD security controls help identify issues earlier, while cloud/runtime visibility provides context about what is actually deployed.

### 4. Security tooling should complement the SDLC

Wiz was most valuable when integrated with the broader security program rather than operated as an isolated cloud-security platform.

### 5. Deployment validation matters

After onboarding a workload, security coverage needs to be validated to ensure that the expected resources and workloads are actually visible and producing useful security context.

---

## Technology & Security Stack

**Cloud:** AWS, EC2, EKS, ECS, Fargate

**Cloud Security:** Wiz, Wiz Sensor, Wiz Kubernetes Connector

**CI/CD:** GitHub Actions, Wiz CI

**Application Security:** SAST, SCA, GitHub Advanced Security, Secure Code Review, Threat Modeling

**Security Operations:** Vulnerability Management, Risk Assessment, Jira, Security Monitoring

## **Infrastructure:** Kubernetes, Containers, Cloud Workloads

## Role

**Application Security Engineer**

## Worked across application, cloud, CI/CD, and runtime security to expand security visibility and integrate cloud security into the broader Secure SDLC and vulnerability-management program.

## Key Takeaway

> **Cloud security is most effective when it is connected to the application lifecycle—from development and CI/CD through deployment and runtime.**

This work helped bridge that gap by combining **application security controls, CI/CD security, cloud visibility, Kubernetes security, and vulnerability management** into a more continuous security model.



