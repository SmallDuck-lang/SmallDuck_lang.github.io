// ============================================
// 滚动渐入动画
// ============================================
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        }
    );

    // 为各个 section 添加动画观察
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-tag, .contact-intro'
    );
    animatedElements.forEach((el) => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 技能标签逐个出现
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.classList.add('fade-in');
        tag.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(tag);
    });
}

// ============================================
// 联系表单处理
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('请填写所有字段');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('请输入有效的邮箱地址');
            return;
        }

        // 🔧 替换为你的真实邮箱
        const yourEmail = '你的邮箱@example.com';
        const subject = encodeURIComponent(`来自 ${name} 的留言`);
        const body = encodeURIComponent(
            `姓名: ${name}\n邮箱: ${email}\n\n消息:\n${message}`
        );
        window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;

        form.reset();
    });
}

// ============================================
// 导航栏滚动效果
// ============================================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 100) {
            navbar.style.boxShadow = '0 1px 0 0 rgba(255,255,255,0.05)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

// ============================================
// 初始化
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initContactForm();
    initNavbarScroll();
});
