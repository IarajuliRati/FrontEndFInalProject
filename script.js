// ===========================================
// 0. ბურგერ მენიუ
// ===========================================
const BurgerBtn = document.getElementById('BurgerBtn');
const Navigation = document.querySelector('.navigation');

BurgerBtn.addEventListener('click', function () {
  Navigation.classList.toggle('open');
  BurgerBtn.classList.toggle('open');
});
BurgerClose.addEventListener('click', function () {
  Navigation.classList.remove('open');
  BurgerBtn.classList.remove('open');
});


// ===========================================
// 1. Cookie შეტყობინება (უბრალო გამოჩენა/დამალვა)
// ===========================================
const Cookie = document.getElementById('Cookie');
const CookieAcceptBtn = document.getElementById('CookieAcceptBtn');

// გვერდის ჩატვირთვისთანავე ბანერი ჩაირთვება
Cookie.classList.add('show');

// ღილაკზე დაჭერისას ბანერი დაიმალება
CookieAcceptBtn.addEventListener('click', function () {
  Cookie.classList.remove('show');
});


// ===========================================
// 2. გიდების ჩატვირთვა სერვერიდან (RandomUser API)
//    fetch + async/await
// ===========================================
const guidesGrid = document.getElementById('GuidesGrid');
const loadGuidesBtn = document.getElementById('loadGuidesBtn');

async function loadGuides() {
  guidesGrid.innerHTML = '<p>იტვირთება...</p>';

  try {
    const response = await fetch('https://randomuser.me/api/?results=3');
    const data = await response.json();

    guidesGrid.innerHTML = '';

    data.results.forEach(function (person) {
      guidesGrid.innerHTML += `
        <div class="card">
          <img src="${person.picture.medium}" alt="გიდი" />
          <h3>${person.name.first} ${person.name.last}</h3>
          <span>გიდი &middot; ${person.location.country}</span>
        </div>
      `;
    });

  } catch (error) {
    guidesGrid.innerHTML = '<p>გიდების ჩატვირთვა ვერ მოხერხდა.</p>';
  }
}

loadGuidesBtn.addEventListener('click', loadGuides);

// გვერდის გახსნისთანავე ჩატვირთე გიდები
loadGuides();