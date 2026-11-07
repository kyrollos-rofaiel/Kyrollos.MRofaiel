/**
 * SCARFACE / KYROLLOS MELAD - DUAL-PERSONALITY PORTFOLIO
 * Main Interactive Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initPersonaSwitcher();
    renderSkills('all');
    renderCertificates();
    renderProjects('all');
    renderExperience();
    initFilterTabs();
    initCVModal();
    initProjectModal();
    initContactForm();
    initCopyButtons();
});

/* --------------------------------------------------------------------------
   1. NAVBAR & SCROLL CONTROLLER
   -------------------------------------------------------------------------- */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        highlightActiveSection();
    });

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
            });
        });
    }
}

function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        const navItem = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navItem) navItem.classList.add('active');
        } else {
            if (navItem) navItem.classList.remove('active');
        }
    });
}

/* --------------------------------------------------------------------------
   2. PERSONA MODE SWITCHER
   -------------------------------------------------------------------------- */
function initPersonaSwitcher() {
    const switchers = document.querySelectorAll('.switcher-btn');
    
    switchers.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.getAttribute('data-mode');
            setPersonaMode(mode);
        });
    });
}

function setPersonaMode(mode) {
    document.body.setAttribute('data-persona', mode);
    
    document.querySelectorAll('.switcher-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-mode') === mode);
    });

    showToast(`Switched view to: ${mode.toUpperCase()} MODE`);
}

/* --------------------------------------------------------------------------
   3. SKILLS & CERTIFICATES RENDERING
   -------------------------------------------------------------------------- */
function renderSkills(filter = 'all') {
    const container = document.getElementById('skills-container');
    if (!container) return;

    let items = portfolioData.skills;
    if (filter !== 'all') {
        items = items.filter(s => s.category === filter || s.persona === filter);
    }

    container.innerHTML = items.map(skill => {
        const isTech = skill.persona === 'tech';
        const chipClass = isTech ? 'tag-tech' : 'tag-green';
        const fillClass = isTech ? '' : 'fin-fill';

        return `
            <div class="skill-card" data-category="${skill.category}">
                <div>
                    <div class="skill-card-top">
                        <div class="skill-title-group">
                            <h4>${skill.title}</h4>
                            <span class="tag-chip ${chipClass}">${skill.badge}</span>
                        </div>
                    </div>
                    <p class="skill-desc">${skill.desc}</p>
                </div>
                <div class="skill-meter-wrap">
                    <div class="skill-meter-header">
                        <span>Proficiency & Practical Mastery</span>
                        <span>${skill.level}%</span>
                    </div>
                    <div class="skill-meter-bar">
                        <div class="skill-meter-fill ${fillClass}" style="width: ${skill.level}%;"></div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderCertificates() {
    const container = document.getElementById('certs-container');
    if (!container) return;

    container.innerHTML = portfolioData.certificates.map(cert => {
        const isEmerald = cert.badgeColor === 'emerald';
        const cardClass = isEmerald ? 'cert-card cert-emerald' : 'cert-card';
        const tagClass = isEmerald ? 'tag-green' : (cert.badgeColor === 'cyan' ? 'tag-tech' : 'tag-purple');

        return `
            <div class="${cardClass}">
                <div class="cert-header">
                    <div class="cert-badge-icon">
                        <span>📜</span>
                    </div>
                    <div>
                        <h4 class="cert-title">${cert.title}</h4>
                        <div class="cert-issuer">${cert.issuer}</div>
                    </div>
                </div>
                <p class="cert-desc">${cert.desc}</p>
                <div class="cert-footer">
                    <span class="tag-chip ${tagClass}">${cert.grade}</span>
                    <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">Verified Credential</span>
                </div>
            </div>
        `;
    }).join('');
}

function initFilterTabs() {
    const tabs = document.querySelectorAll('.filter-tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const category = tab.getAttribute('data-filter');
            renderSkills(category);
        });
    });
}

/* --------------------------------------------------------------------------
   4. PROJECTS RENDERING & DETAIL MODAL
   -------------------------------------------------------------------------- */
function renderProjects(filter = 'all') {
    const container = document.getElementById('projects-container');
    if (!container) return;

    let items = portfolioData.projects;
    if (filter !== 'all') {
        items = items.filter(p => p.persona === filter || p.category === filter);
    }

    container.innerHTML = items.map(proj => {
        const tagsHtml = proj.tags.map(t => `<span class="tag-chip tag-tech">${t}</span>`).join('');
        const statsHtml = proj.stats.map(s => `
            <div class="stat-item">
                <div class="stat-label">${s.label}</div>
                <div class="stat-val">${s.value}</div>
            </div>
        `).join('');

        const isLive = proj.demoUrl && proj.demoUrl !== '#';
        const liveBtn = isLive 
            ? `<a href="${proj.demoUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-primary-tech">Live Demo ↗</a>` 
            : '';

        return `
            <div class="project-card" data-id="${proj.id}">
                <div class="project-img-wrap">
                    <img src="${proj.image}" alt="${proj.title}" loading="lazy">
                    <div class="project-overlay-badge">
                        <span class="tag-chip tag-purple">${proj.category.toUpperCase()}</span>
                    </div>
                </div>
                <div class="project-body">
                    <div class="project-subtitle">${proj.subtitle}</div>
                    <h3 class="project-title">${proj.title}</h3>
                    <p class="project-desc">${proj.desc}</p>
                    <div class="project-tags">${tagsHtml}</div>
                    <div class="project-stats-grid">${statsHtml}</div>
                    <div class="project-actions">
                        <button class="btn btn-sm btn-outline btn-project-detail" data-id="${proj.id}">View Architecture</button>
                        ${liveBtn}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Attach click triggers
    document.querySelectorAll('.btn-project-detail').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            openProjectModal(id);
        });
    });
}

function initProjectModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('project-modal-close');

    if (!modal || !closeBtn) return;

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
}

function openProjectModal(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const title = document.getElementById('project-modal-title');
    const body = document.getElementById('project-modal-body');

    title.innerText = project.title;
    body.innerHTML = `
        <div style="margin-bottom:1.5rem; text-align:center;">
            <img src="${project.image}" alt="${project.title}" style="max-height:260px; margin:0 auto; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
        </div>
        <div style="font-family:var(--font-mono); color:var(--tech-cyan); font-size:0.9rem; margin-bottom:0.75rem;">
            ${project.subtitle}
        </div>
        <p style="color:#cbd5e1; line-height:1.7; margin-bottom:1.5rem;">
            ${project.desc}
        </p>
        <h4 style="font-size:1.05rem; margin-bottom:0.5rem; color:#fff;">Key Technical & Operational Highlights</h4>
        <ul style="padding-left:1.25rem; color:#94a3b8; line-height:1.8; margin-bottom:1.5rem;">
            ${project.tags.map(t => `<li>Specialized module integrating <strong>${t}</strong>.</li>`).join('')}
        </ul>
        <div style="display:flex; gap:1rem; flex-wrap:wrap;">
            ${project.demoUrl && project.demoUrl !== '#' ? `<a href="${project.demoUrl}" target="_blank" rel="noopener" class="btn btn-primary-tech">Open Live Project ↗</a>` : ''}
            ${project.githubUrl && project.githubUrl !== '#' ? `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-outline">GitHub Repository</a>` : ''}
        </div>
    `;

    modal.classList.add('active');
}

/* --------------------------------------------------------------------------
   5. WORK EXPERIENCE TIMELINE
   -------------------------------------------------------------------------- */
function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = portfolioData.experience.map(exp => {
        const pointsHtml = exp.points.map(p => `<li>${p}</li>`).join('');

        return `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <div class="timeline-header">
                        <h4 class="timeline-role">${exp.role}</h4>
                        <span class="timeline-period">${exp.period}</span>
                    </div>
                    <div class="timeline-company">${exp.company} • ${exp.location} (${exp.type})</div>
                    <ul class="timeline-points">${pointsHtml}</ul>
                </div>
            </div>
        `;
    }).join('');
}

/* --------------------------------------------------------------------------
   6. DUAL CV MODAL CONTROLLER
   -------------------------------------------------------------------------- */
function initCVModal() {
    const modal = document.getElementById('cv-modal');
    const openBtns = document.querySelectorAll('.btn-open-cv');
    const closeBtn = document.getElementById('cv-modal-close');
    const tabs = document.querySelectorAll('.cv-tab-btn');
    const cvBody = document.getElementById('cv-content-area');

    if (!modal) return;

    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
            renderCVContent('fusion');
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const mode = tab.getAttribute('data-cv-tab');
            renderCVContent(mode);
        });
    });
}

function renderCVContent(type) {
    const container = document.getElementById('cv-content-area');
    if (!container) return;

    if (type === 'pdf') {
        container.innerHTML = `
            <div style="margin-bottom:1rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
                    <div>
                        <h3 style="color:#fff; font-size:1.1rem;">Official Accredited Curriculum Vitae</h3>
                        <span style="font-size:0.78rem; color:#94a3b8; font-family:var(--font-mono);">Source: Kyrollos_Melad_CV.pdf</span>
                    </div>
                    <a href="assets/docs/Kyrollos_Melad_CV.pdf" download="Kyrollos_Melad_CV.pdf" class="btn btn-sm btn-primary-tech">⬇️ Download PDF File</a>
                </div>
                <div class="pdf-embed-wrap">
                    <iframe src="assets/docs/Kyrollos_Melad_CV.pdf" title="Kyrollos Melad CV PDF"></iframe>
                </div>
            </div>
        `;
    } else if (type === 'tech') {
        container.innerHTML = `
            <div class="cv-preview-paper">
                <h2 style="color:var(--tech-cyan); margin-bottom:0.25rem;">SCARFACE (Kyrollos Melad)</h2>
                <div style="font-family:var(--font-mono); font-size:0.85rem; color:#94a3b8; margin-bottom:0.75rem;">
                    Full Stack Developer & Network Engineer | CCNA | MCSA | .NET | Data Analysis
                </div>
                <div style="font-size:0.82rem; color:#38bdf8; margin-bottom:1rem; display:flex; flex-wrap:wrap; gap:0.75rem;">
                    <span>📞 +201553030325 (WE)</span>
                    <span>📞 +201202963714 (Orange)</span>
                    <span>📞 +201552394784 (Vodafone)</span>
                    <span>✉️ kyrollosmelad02@gmail.com</span>
                </div>
                <hr style="border-color:rgba(255,255,255,0.1); margin-bottom:1rem;">
                
                <h4 style="color:#fff; margin-bottom:0.4rem;">Core Technical Competencies</h4>
                <p style="font-size:0.9rem; color:#cbd5e1; margin-bottom:0.75rem;">
                    • <strong>Networking:</strong> CCNA (Routing, Switching, VLANs, OSPF, ACLs), MCSA (Windows Server, AD DS, DNS, DHCP, GPO).<br>
                    • <strong>Development:</strong> C#, ASP.NET Core MVC, Entity Framework, LINQ, SQL Server, OOP Architecture.<br>
                    • <strong>Data Analysis:</strong> ITIDA/TIEC 94% Honors, Excel Data Modeling, SQL Query Optimization, KPI Metrics.
                </p>

                <h4 style="color:#fff; margin-bottom:0.4rem;">Featured Technical Project</h4>
                <p style="font-size:0.9rem; color:#cbd5e1; margin-bottom:0.75rem;">
                    • <strong>K-filme Web Platform:</strong> Full-stack ASP.NET MVC & SQL Server application with cinema discovery and media management (k-filme.github.io/K-filme).
                </p>

                <h4 style="color:#fff; margin-bottom:0.4rem;">Education & Certifications</h4>
                <p style="font-size:0.9rem; color:#cbd5e1;">
                    • Bachelor of Science in Management Information Systems (MIS) (Graduation: Excellent 85.50% | Overall: Very Good 80.44%)<br>
                    • ITI Summer Training in .NET Full Stack (72 Hours, Eval: 94%) | ITIDA Mobile Dev | ITIDA Data Analysis | ICDL
                </p>
            </div>
        `;
    } else if (type === 'finance') {
        container.innerHTML = `
            <div class="cv-preview-paper">
                <h2 style="color:var(--fin-emerald); margin-bottom:0.25rem;">KYROLLOS MELAD ABD ELMALAK</h2>
                <div style="font-family:var(--font-mono); font-size:0.85rem; color:#94a3b8; margin-bottom:0.75rem;">
                    Bank Teller | Microfinance Operations Specialist | Management Information Systems
                </div>
                <div style="font-size:0.82rem; color:#34d399; margin-bottom:1rem; display:flex; flex-wrap:wrap; gap:0.75rem;">
                    <span>📍 Bani Mazar, El Minya, Egypt</span>
                    <span>📞 +201553030325 (WE / WhatsApp)</span>
                    <span>📞 +201202963714 (Orange)</span>
                    <span>⚡ InstaPay: +201553030325</span>
                    <span>🎖️ Military: Exempted</span>
                </div>
                <hr style="border-color:rgba(255,255,255,0.1); margin-bottom:1rem;">
                
                <h4 style="color:#fff; margin-bottom:0.4rem;">Banking & Operational Experience</h4>
                <p style="font-size:0.9rem; color:#cbd5e1; margin-bottom:0.75rem;">
                    • <strong>Bank Teller / Operations Specialist (1 Year Full-Time) - Tanmeyah Micro Enterprise Services (El Minya):</strong> Accurately processed daily cash transactions (deposits, withdrawals, fund transfers, installment receipts) with a zero-error record. Conducted end-of-day cash reconciliation, drawer balancing, and management summary audits.
                </p>

                <h4 style="color:#fff; margin-bottom:0.4rem;">Financial & Compliance Competencies</h4>
                <p style="font-size:0.9rem; color:#cbd5e1; margin-bottom:0.75rem;">
                    • <strong>Cash & Vault:</strong> High-precision cash counting, counterfeit screening, vault operations & drawer balancing.<br>
                    • <strong>Compliance:</strong> KYC customer identification, Anti-Money Laundering (AML) audit protocols.<br>
                    • <strong>Accounting:</strong> Double-entry ledger reconciliation, daily transaction logs, audit records.<br>
                    • <strong>E-Payments:</strong> InstaPay, Vodafone Cash, Orange Cash, We Pay transactions.
                </p>

                <h4 style="color:#fff; margin-bottom:0.4rem;">Education</h4>
                <p style="font-size:0.9rem; color:#cbd5e1;">
                    • Bachelor of Science in Management Information Systems (MIS) — Higher Institute of Management & Information Technology (EST Minya)<br>
                    • Overall Grade: Very Good (80.44%) | Graduation Year: Excellent (85.50% - 855/1000)
                </p>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="cv-preview-paper">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap;">
                    <div>
                        <h2 style="color:#fff; margin-bottom:0.25rem;">KYROLLOS MELAD ABD ELMALAK</h2>
                        <div style="font-family:var(--font-mono); font-size:0.85rem; color:var(--tech-cyan);">
                            Dual Profile: Financial Precision Specialist & Full-Stack Tech Innovator (Scarface)
                        </div>
                    </div>
                    <span class="tag-chip tag-purple">Comprehensive Dual CV</span>
                </div>
                <div style="font-size:0.82rem; color:#e2e8f0; margin-top:0.6rem; display:flex; flex-wrap:wrap; gap:0.75rem;">
                    <span>📞 WE: +201553030325</span>
                    <span>📞 Orange: +201202963714</span>
                    <span>📞 VF: +201552394784</span>
                    <span>✉️ kyrollosmelad02@gmail.com</span>
                    <span>⚡ InstaPay: +201553030325</span>
                </div>
                <hr style="border-color:rgba(255,255,255,0.1); margin:1rem 0;">
                
                <h4 style="color:#fff; margin-bottom:0.35rem;">Executive Summary</h4>
                <p style="font-size:0.88rem; color:#cbd5e1; line-height:1.6; margin-bottom:1rem;">
                    Detail-oriented and customer-focused Banking & Operations Specialist with a solid academic background in Management Information Systems (Very Good with Honors) and hands-on experience in microfinance operations at Tanmeyah. Combines strong operational discipline with technological proficiency in .NET development, SQL databases, and data analysis.
                </p>

                <h4 style="color:#fff; margin-bottom:0.35rem;">Professional Background</h4>
                <p style="font-size:0.88rem; color:#cbd5e1; margin-bottom:0.75rem;">
                    • <strong>Tanmeyah Micro Enterprise Services:</strong> Bank Teller / Operations Specialist (1 Year | El Minya).<br>
                    • <strong>Technical & Academic Tracks:</strong> MIS Degree (Graduation: Excellent 85.50%), ITI .NET Full Stack (94%), ITIDA Data Analysis & Mobile Workshops.
                </p>

                <h4 style="color:#fff; margin-bottom:0.35rem;">Dual Expertise Matrix</h4>
                <p style="font-size:0.88rem; color:#cbd5e1; margin-bottom:0.75rem;">
                    • <strong>Tech Stack:</strong> C#, ASP.NET MVC, SQL Server, Excel Advanced, CCNA, MCSA, Data Analytics.<br>
                    • <strong>Banking Skills:</strong> Cash Handling, Drawer Balancing, Vault Operations, KYC/AML Compliance, Microfinance Reconciliation.<br>
                    • <strong>Digital Payments:</strong> InstaPay, Vodafone Cash, Orange Cash, We Pay.
                </p>
            </div>
        `;
    }
}

/* --------------------------------------------------------------------------
   7. ACTIVE CONTACT FORM (WHATSAPP & EMAIL CHAT HANDLERS)
   -------------------------------------------------------------------------- */
function initContactForm() {
    const btnWa = document.getElementById('btn-submit-wa');
    const btnEmail = document.getElementById('btn-submit-email');

    if (btnWa) {
        btnWa.addEventListener('click', () => {
            const name = document.getElementById('contact-name')?.value.trim() || '';
            const email = document.getElementById('contact-email')?.value.trim() || '';
            const subject = document.getElementById('contact-subject')?.value.trim() || '';
            const message = document.getElementById('contact-message')?.value.trim() || '';
            const selectedNumber = document.getElementById('contact-wa-number')?.value || '201553030325';

            if (!name || !message) {
                showToast('⚠️ Please enter your Name and Message first.');
                return;
            }

            const waText = `Hello Kyrollos,\n\nName: ${name}\nEmail: ${email || 'Not provided'}\nTopic: ${subject || 'Direct Inquiry'}\n\nMessage:\n${message}`;
            const waUrl = `https://wa.me/${selectedNumber}?text=${encodeURIComponent(waText)}`;
            
            showToast('✓ Opening WhatsApp chat...');
            window.open(waUrl, '_blank');
        });
    }

    if (btnEmail) {
        btnEmail.addEventListener('click', () => {
            const name = document.getElementById('contact-name')?.value.trim() || '';
            const email = document.getElementById('contact-email')?.value.trim() || '';
            const subject = document.getElementById('contact-subject')?.value.trim() || '';
            const message = document.getElementById('contact-message')?.value.trim() || '';

            if (!name || !message) {
                showToast('⚠️ Please enter your Name and Message first.');
                return;
            }

            const emailSubject = subject ? `${subject} - Inquiry from ${name}` : `Inquiry from ${name} (Portfolio)`;
            const emailBody = `Full Name: ${name}\nContact Email: ${email || 'Not provided'}\n\nMessage:\n${message}\n\n---\nSent from Scarface / Kyrollos Melad Portfolio`;
            const mailtoUrl = `mailto:kyrollosmelad02@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

            showToast('✓ Opening email client...');
            window.location.href = mailtoUrl;
        });
    }
}

function initCopyButtons() {
    document.querySelectorAll('[data-copy]').forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-copy');
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`✓ Copied: ${textToCopy}`);
            }).catch(() => {
                showToast(`✓ Selected: ${textToCopy}`);
            });
        });
    });
}

/* --------------------------------------------------------------------------
   8. TOAST NOTIFICATION UTILITY
   -------------------------------------------------------------------------- */
let toastTimeout;
function showToast(message) {
    let toast = document.getElementById('toast-notice');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notice';
        toast.className = 'toast-notice';
        document.body.appendChild(toast);
    }

    toast.innerText = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3800);
}
