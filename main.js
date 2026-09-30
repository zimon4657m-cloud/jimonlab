// スマホ用メニューの開閉
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', false);
  });
});

// スクロールしたらヘッダーに下線
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 10);
});

// セクションをスクロールでふわっと表示
const targets = document.querySelectorAll('.section, .lab-card, .service-card');
targets.forEach((el) => el.classList.add('reveal'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
targets.forEach((el) => observer.observe(el));

// お問い合わせフォーム(送信先は未設定。見た目だけ)
const form = document.querySelector('.contact');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.querySelector('.contact__note').textContent = '送信機能は準備中です。公開時に受付先を設定します。';
});
