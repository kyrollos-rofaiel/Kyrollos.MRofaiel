/**
 * Portfolio Data Configuration
 * Scarface (Tech Innovator) & Kyrollos Melad (Financial Precision Specialist)
 */

const portfolioData = {
    profile: {
        techName: "SCARFACE",
        techRole: "The Tech Innovator & Digital Explorer",
        techSubtitle: "CCNA & MCSA Certified | .NET Full Stack Developer | Data Analyst",
        techBio: "Architecting resilient digital systems, network infrastructures, and full-stack software solutions with engineering rigor and relentless curiosity.",
        
        financeName: "KYROLLOS MELAD",
        financeRole: "The Financial Precision Specialist",
        financeSubtitle: "1 Year Experience | Bank Teller | Microfinance Operations",
        financeBio: "Ensuring zero-error cash reconciliation, rigorous KYC compliance, and microfinance operations with banking discipline and institutional integrity.",
        
        mergedBio: "A detail-oriented banking professional by day with an underlying passion for technology. Transitioning core analytical and precision skills from microfinance into cutting-edge networking and development. Experienced with compliance and data analysis, seeking to innovate at the convergence of banking discipline and digital technology.",
        
        pdfCvUrl: "assets/docs/Kyrollos_Melad_CV.pdf",
        
        contact: {
            email: "kyrollosmelad02@gmail.com",
            tapUrl: "https://link.gettap.co/englukastar112678",
            location: "Egypt (Available for On-site, Hybrid & Remote Roles)",
            github: "https://k-filme.github.io/K-filme/",
            
            // Mobile Carriers & WhatsApp
            carriers: [
                { name: "We (Telecom Egypt)", number: "+201553030325", raw: "01553030325", waUrl: "https://wa.me/201553030325", color: "purple" },
                { name: "Orange Egypt", number: "+201202963714", raw: "01202963714", waUrl: "https://wa.me/201202963714", color: "orange" },
                { name: "Vodafone Egypt", number: "+201552394784", raw: "01552394784", waUrl: "https://wa.me/201552394784", color: "red" }
            ],

            // Digital Wallets & Fintech Payments
            wallets: [
                { name: "InstaPay Egypt", number: "+201553030325", raw: "01553030325", type: "Instant Bank Transfer", badge: "InstaPay", color: "cyan" },
                { name: "Vodafone Cash", number: "+201552394784", raw: "01552394784", type: "Mobile Wallet", badge: "Vodafone", color: "red" },
                { name: "Orange Cash", number: "+201202963714", raw: "01202963714", type: "Mobile Wallet", badge: "Orange", color: "orange" },
                { name: "We Pay", number: "+201553030325", raw: "01553030325", type: "Mobile Wallet", badge: "We Pay", color: "purple" }
            ],

            // Social Media Network
            socials: {
                linkedin: "https://www.linkedin.com/in/kyrollos-melad?utm_source=share_via&utm_content=profile&utm_medium=membe",
                instagram: "https://www.instagram.com/kyrollosmelad?igsi=cGhpcnhha2toc2Rr",
                facebook: "https://www.facebook.com/share/1UUDhnjfzh/",
                twitter: "https://x.com/KyrollosMelad",
                threads: "https://www.threads.net/@kyrollosmelad",
                snapchat: "https://www.snapchat.com/add/kyrollosmelad?share_id=KowsSc5w8vc&locale=en-US",
                gettap: "https://link.gettap.co/englukastar112678"
            }
        }
    },

    skills: [
        // Tech - Networking & Infrastructure
        {
            id: "ccna",
            category: "networking",
            persona: "tech",
            title: "CCNA (Routing & Switching)",
            desc: "Enterprise IPv4/IPv6 subnetting, VLANs, Inter-VLAN routing, OSPF, STP, Access Control Lists (ACLs), NAT/PAT, and Cisco CLI configuration.",
            level: 95,
            badge: "Certified",
            icon: "network"
        },
        {
            id: "mcsa",
            category: "networking",
            persona: "tech",
            title: "MCSA Infrastructure",
            desc: "Windows Server Administration, Active Directory Domain Services (AD DS), Group Policy Objects (GPO), DNS, DHCP, and Hyper-V virtualization.",
            level: 90,
            badge: "Certified",
            icon: "server"
        },
        
        // Tech - Software & Development
        {
            id: "dotnet",
            category: "development",
            persona: "tech",
            title: ".NET Full Stack (C# & ASP.NET MVC)",
            desc: "Building scalable web architectures, Entity Framework ORM, LINQ, RESTful APIs, MVC architectural patterns, and asynchronous backend services.",
            level: 88,
            badge: "ITI Trained",
            icon: "code"
        },
        {
            id: "sql",
            category: "development",
            persona: "tech",
            title: "SQL Database & RDBMS",
            desc: "Relational database schema design, complex JOINs, indexing, stored procedures, ACID transaction integrity, and query optimization.",
            level: 90,
            badge: "Advanced",
            icon: "database"
        },
        {
            id: "oop",
            category: "development",
            persona: "tech",
            title: "Object-Oriented Programming (OOP)",
            desc: "SOLID design principles, design patterns (Factory, Repository, Singleton), clean architecture, and modular code reusability.",
            level: 92,
            badge: "Core",
            icon: "cpu"
        },
        {
            id: "data-analysis",
            category: "development",
            persona: "tech",
            title: "Data Analysis (ITIDA / TIEC)",
            desc: "Exploratory data analysis, statistical insights, KPI modeling, automated spreadsheet reporting, and predictive data trends.",
            level: 94,
            badge: "Eval: 94% Honors",
            icon: "bar-chart"
        },

        // Finance - Banking & Microfinance Operations
        {
            id: "cash-handling",
            category: "banking",
            persona: "finance",
            title: "Cash Handling & Vault Management",
            desc: "High-volume physical currency verification, counterfeit detection, vault security protocols, and end-of-day zero-discrepancy balancing.",
            level: 98,
            badge: "Bank Tested",
            icon: "dollar-sign"
        },
        {
            id: "kyc-compliance",
            category: "banking",
            persona: "finance",
            title: "KYC & Regulatory Compliance",
            desc: "Strict adherence to Anti-Money Laundering (AML) regulations, identity verification, customer due diligence, and regulatory reporting.",
            level: 95,
            badge: "Certified Ops",
            icon: "shield-check"
        },
        {
            id: "microfinance",
            category: "banking",
            persona: "finance",
            title: "Microfinance Portfolio Operations",
            desc: "Underwriting verification, loan disbursement workflows, installment collection reconciliation, and client financial health audits.",
            level: 96,
            badge: "Tanmeyah Ops",
            icon: "briefcase"
        },
        {
            id: "reconciliation",
            category: "banking",
            persona: "finance",
            title: "Financial Recording & Ledger Reconciliation",
            desc: "Daily ledger audits, double-entry bookkeeping precision, variance resolution, and comprehensive banking transaction logs.",
            level: 95,
            badge: "Precision",
            icon: "file-text"
        },
        {
            id: "client-relations",
            category: "banking",
            persona: "finance",
            title: "High-Volume Customer Operations",
            desc: "Managing high-pressure front-desk teller queues, dispute resolution, financial advisory, and professional client communication.",
            level: 92,
            badge: "Front-Line",
            icon: "users"
        }
    ],

    certificates: [
        {
            id: "cert-iti-dotnet",
            title: "Summer Training in .NET Full Stack (72 Hours)",
            issuer: "Information Technology Institute (ITI)",
            grade: "Evaluation: 94%",
            persona: "tech",
            desc: "Intensive 72-hour track covering C#, ASP.NET MVC, Entity Framework, LINQ, SQL Server, and full-stack software architectures.",
            badgeColor: "purple"
        },
        {
            id: "cert-itida-data",
            title: "Introduction to Data Analysis Workshop",
            issuer: "ITIDA | TIEC | Creativa Hub",
            grade: "Distinction (Feb 2024)",
            persona: "tech",
            desc: "Exploratory data analytics, statistical insights, KPI models, Excel advanced reporting, and data-driven decision making.",
            badgeColor: "cyan"
        },
        {
            id: "cert-itida-mobile",
            title: "Introduction to Mobile App Development",
            issuer: "ITIDA | TIEC | Creativa Hub",
            grade: "Workshop (Sep 2025)",
            persona: "tech",
            desc: "Modern mobile app design, cross-platform app workflows, and client-server API integration.",
            badgeColor: "purple"
        },
        {
            id: "cert-icdl",
            title: "International Computer Driving License (ICDL)",
            issuer: "EST Institute",
            grade: "Certified (May 2025)",
            persona: "fusion",
            desc: "Comprehensive computer operations, advanced spreadsheet handling, database management, and digital workflow security.",
            badgeColor: "cyan"
        },
        {
            id: "cert-digital-marketing",
            title: "Digital Marketing Professional Course",
            issuer: "EST Institute",
            grade: "Certified (Jan 2025)",
            persona: "fusion",
            desc: "Digital campaign strategies, search engine optimization, audience analytics, and multi-channel client engagement.",
            badgeColor: "blue"
        },
        {
            id: "cert-google-skills",
            title: "Google Digital Skills & English Language Training",
            issuer: "EST Institute & Google",
            grade: "Certified (May 2025)",
            persona: "fusion",
            desc: "Advanced professional English proficiency, business communication, and Google digital tools mastery.",
            badgeColor: "emerald"
        },
        {
            id: "cert-bis",
            title: "Bachelor of Science in Management Information Systems (MIS)",
            issuer: "Higher Institute of Management and Information Technology (EST)",
            grade: "Graduation: Excellent (85.50%) | Overall: Very Good (80.44%)",
            persona: "finance",
            desc: "Equivalent to Bachelor of Commerce accredited by Supreme Council of Universities. Coursework: Database Systems, Financial Accounting, Statistics, Network Admin, E-Commerce.",
            badgeColor: "emerald"
        }
    ],

    projects: [
        {
            id: "k-filme",
            title: "K-filme Web Platform",
            category: "development",
            persona: "tech",
            subtitle: "Full Stack Web Development (SQL, C#, ASP.NET MVC)",
            image: "assets/images/project-kfilme.png",
            demoUrl: "https://k-filme.github.io/K-filme/",
            githubUrl: "https://k-filme.github.io/K-filme/",
            tags: [".NET MVC", "C#", "SQL Server", "REST API", "Responsive UI"],
            desc: "A feature-rich cinema and media web application built using ASP.NET MVC architecture and SQL Server. Features dynamic movie browsing, search & filtering, detailed movie cards, secure session handling, and high-performance database querying.",
            stats: [
                { label: "Architecture", value: "ASP.NET MVC" },
                { label: "Database", value: "SQL Server" },
                { label: "Front-end", value: "HTML5/CSS3/JS" }
            ]
        },
        {
            id: "banking-analysis",
            title: "Banking Records Analysis System",
            category: "development",
            persona: "fusion",
            subtitle: "ITI Data Analysis Workshop (Excel, Reports & SQL)",
            image: "assets/images/project-banking-analysis.png",
            demoUrl: "#",
            githubUrl: "#",
            tags: ["Data Analysis", "Excel Modeling", "SQL Queries", "Financial KPIs", "ITI Workshop"],
            desc: "A comprehensive data analytics dashboard and ledger auditing model for evaluating microfinance and banking transaction datasets. Enables automated variance identification, client loan risk scoring, and monthly financial reporting.",
            stats: [
                { label: "Accuracy", value: "100% Audit Precision" },
                { label: "Workshop Score", value: "94% Honors" },
                { label: "Tooling", value: "Excel / SQL / BI" }
            ]
        },
        {
            id: "tanmeyah-ops",
            title: "Tanmeyah Micro Enterprise Services Operations",
            category: "banking",
            persona: "finance",
            subtitle: "1 Year Dedicated Bank Teller & Microfinance Operations",
            image: "assets/images/project-tanmeyah.png",
            demoUrl: "#",
            githubUrl: "#",
            tags: ["Tanmeyah", "Cash Reconciliation", "KYC Verification", "Risk Management", "Microfinance"],
            desc: "Managed front-line banking and microfinance services at Tanmeyah Micro Enterprise Services. Executed high-volume daily cash receipts, loan installment processing, client documentation audits, and zero-error end-of-day reconciliations.",
            stats: [
                { label: "Experience", value: "1 Full Year" },
                { label: "Discrepancies", value: "Zero Variance" },
                { label: "Daily Volume", value: "High-Capacity Ops" }
            ]
        },
        {
            id: "enterprise-ops",
            title: "Enterprise Operations & Record Management",
            category: "banking",
            persona: "fusion",
            subtitle: "Institutional Compliance & Data Record Keeping",
            image: "assets/images/project-operations.png",
            demoUrl: "#",
            githubUrl: "#",
            tags: ["Operations", "Database Records", "Compliance", "Workflow Automation"],
            desc: "Standardized institutional data recording and transaction auditing workflows, bridging traditional banking ledger systems with digital record-keeping tools to accelerate operational throughput.",
            stats: [
                { label: "Domain", value: "Financial & Tech Ops" },
                { label: "Focus", value: "Compliance & Automation" }
            ]
        }
    ],

    experience: [
        {
            period: "2024 – 2025",
            role: "Bank Teller & Microfinance Operations Specialist",
            company: "Tanmeyah Micro Enterprise Services",
            location: "Egypt",
            type: "Full-Time (1 Year)",
            persona: "finance",
            points: [
                "Managed daily high-volume teller counter transactions including cash deposits, loan repayments, and fund transfers with zero balance discrepancies.",
                "Enforced stringent KYC and AML regulatory standards, thoroughly auditing customer identification and legal loan documentation.",
                "Performed comprehensive daily vault balancing, cash counts, and ledger reconciliation.",
                "Collaborated with microfinance loan officers to verify credit eligibility and streamline borrower disbursement procedures."
            ]
        },
        {
            period: "2024",
            role: ".NET Full Stack & Data Analysis Trainee",
            company: "ITI & ITIDA / TIEC",
            location: "Egypt",
            type: "Intensive Technical Training",
            persona: "tech",
            points: [
                "Completed rigorous technical tracks in C#, ASP.NET MVC, Entity Framework, and SQL database management.",
                "Achieved 94% distinction in ITIDA / TIEC Data Analysis Workshop, developing actionable reporting models and automated spreadsheets.",
                "Constructed enterprise-grade web applications utilizing OOP principles and RESTful endpoints."
            ]
        },
        {
            period: "2021 – 2025",
            role: "Bachelor of Business & Information Systems (BIS)",
            company: "Faculty of Commerce & Business Information Systems",
            location: "Egypt",
            type: "Higher Education",
            persona: "fusion",
            points: [
                "Dual-disciplinary curriculum integrating Financial Accounting, Banking Operations, Business Intelligence, and Database Systems.",
                "Gained solid foundations in software engineering, networking architectures, and financial modeling."
            ]
        }
    ]
};
